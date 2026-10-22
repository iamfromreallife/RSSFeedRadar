const stateKey = (tabId) => `tab:${tabId}`;
const latestRevision = new Map();

chrome.action.setBadgeBackgroundColor({ color: '#34364F' });
const idleIconPaths = { 16: 'icons/icon16-idle.png', 32: 'icons/icon32-idle.png', 48: 'icons/icon48-idle.png', 128: 'icons/icon128-idle.png' };
const activeIconPaths = { 16: 'icons/icon16-active.png', 32: 'icons/icon32-active.png', 48: 'icons/icon48-active.png', 128: 'icons/icon128-active.png' };

async function setToolbarState(tabId, count) {
  const hasFeeds = count > 0;
  await Promise.all([
    chrome.action.setIcon({ tabId, path: hasFeeds ? activeIconPaths : idleIconPaths }),
    chrome.action.setBadgeText({ tabId, text: hasFeeds ? (count > 99 ? '99+' : String(count)) : '' }),
    chrome.action.setTitle({ tabId, title: hasFeeds ? `RSS Feed Radar — ${count} feed${count === 1 ? '' : 's'} found` : 'RSS Feed Radar — No feeds found yet' })
  ]);
}
chrome.action.setBadgeTextColor({ color: '#FFFFFF' }).catch(() => {});

function safeUrl(raw) {
  try {
    const url = new URL(raw);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    url.hash = '';
    return url.href;
  } catch (_) { return null; }
}

function cleanFeeds(items, fallbackTitle = 'Website feed') {
  const seen = new Set();
  const cleaned = [];
  for (const item of Array.isArray(items) ? items : []) {
    if (cleaned.length >= 100) break;
    const url = safeUrl(item?.url);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    cleaned.push({
      url,
      title: String(item?.title || fallbackTitle).replace(/\s+/g, ' ').trim().slice(0, 160) || fallbackTitle,
      source: item?.source === 'known' ? 'known' : 'page'
    });
  }
  return cleaned;
}

function decodeEntities(value) {
  return String(value || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

async function readResponseSample(response, maxChars = 180000) {
  if (!response.body?.getReader) return (await response.text()).slice(0, maxChars);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let result = '';
  try {
    while (result.length < maxChars) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
      if (result.length >= maxChars) break;
    }
  } finally {
    try { await reader.cancel(); } catch (_) {}
  }
  return result.slice(0, maxChars);
}

function extractFeedDetails(body) {
  const text = String(body || '').replace(/^\uFEFF/, '').slice(0, 220000).trim();
  if (!text) return null;

  // JSON Feed is validated structurally, not by response Content-Type, because
  // several legitimate publishers serve feeds with generic or incorrect headers.
  if (text.startsWith('{')) {
    try {
      const parsed = JSON.parse(text);
      const version = String(parsed?.version || '');
      if (/^https?:\/\/jsonfeed\.org\/version\//i.test(version) && Array.isArray(parsed.items)) {
        return { valid: true, title: String(parsed.title || '').trim() };
      }
    } catch (_) {
      // A long JSON Feed may be larger than the bounded sample. Its root marker,
      // version and items array are enough to identify it without buffering all items.
      const versionMatch = text.match(/"version"\s*:\s*"https?:\/\/jsonfeed\.org\/version\/[^"]+"/i);
      const hasItemsArray = /"items"\s*:\s*\[/i.test(text);
      if (versionMatch && hasItemsArray) {
        const titleMatch = text.match(/"title"\s*:\s*"((?:[^"\\]|\\.)*)"/i);
        let title = '';
        if (titleMatch) {
          try { title = JSON.parse(`"${titleMatch[1]}"`); } catch (_) { title = titleMatch[1]; }
        }
        return { valid: true, title: String(title || '').trim() };
      }
    }
  }

  // Accept RSS 2.0, Atom and RDF/RSS only when they contain their feed-level
  // structure. This permits feeds served as text/html while rejecting ordinary
  // HTML pages and bot/challenge responses.
  const isRss = /<rss\b[^>]*>/i.test(text) && /<channel\b[^>]*>/i.test(text);
  const isAtom = /<feed\b[^>]*>/i.test(text) && (/<entry\b[^>]*>/i.test(text) || /xmlns\s*=\s*['"]http:\/\/www\.w3\.org\/2005\/Atom['"]/i.test(text));
  const isRdf = /<(?:[\w.-]+:)?RDF\b[^>]*>/i.test(text) && /<item\b[^>]*>/i.test(text);
  if (!isRss && !isAtom && !isRdf) return null;

  let title = '';
  if (isRss) {
    const channel = text.match(/<channel\b[^>]*>([\s\S]*?)<\/channel>/i)?.[1] || text;
    const match = channel.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i);
    title = match ? decodeEntities(match[1]) : '';
  } else {
    const match = text.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i);
    title = match ? decodeEntities(match[1]) : '';
  }
  return { valid: true, title };
}

const DOMAIN_PROBE_TTL_MS = 15 * 60 * 1000;
const DOMAIN_PROBE_LIMIT = 24;
const domainProbeInFlight = new Map();

function decodeHtmlAttribute(value) {
  return String(value || '')
    .replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
}

function parseHtmlAttributes(tag) {
  const attrs = {};
  const pattern = /([^\s=<>/]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let match;
  while ((match = pattern.exec(tag))) attrs[match[1].toLowerCase()] = decodeHtmlAttribute(match[2] ?? match[3] ?? match[4] ?? '');
  return attrs;
}

function isFeedishUrl(raw) {
  return /(?:\.rss(?:$|[?#])|\.atom(?:$|[?#])|\.rdf(?:$|[?#])|\.xml(?:$|[?#])|\/feeds?(?:\.xml)?(?:\/|$|[?#])|\/rss(?:\.xml)?(?:\/|$|[?#])|\/atom(?:\.xml)?(?:\/|$|[?#])|\.json(?:$|[?#])|[?&](?:format|output|feed)=(?:rss2?|atom|xml|json))/i.test(String(raw || ''));
}

function isFeedMimeType(raw) {
  return /(?:application\/(?:rss\+xml|x-rss\+xml|atom\+xml|feed\+json|jsonfeed|rdf\+xml)|text\/(?:rss|xml))/i.test(String(raw || ''));
}

function extractHomepageFeedCandidates(html, baseUrl) {
  const result = [];
  const seen = new Set();
  const add = (rawUrl, title) => {
    try {
      const url = new URL(rawUrl, baseUrl);
      if (!['http:', 'https:'].includes(url.protocol)) return;
      url.hash = '';
      if (seen.has(url.href) || result.length >= 12) return;
      seen.add(url.href);
      result.push({ url: url.href, title: String(title || 'Website feed').replace(/\s+/g, ' ').trim().slice(0, 160) });
    } catch (_) { /* Ignore malformed or non-web links. */ }
  };

  for (const match of String(html || '').matchAll(/<link\b[^>]*>/gi)) {
    const attrs = parseHtmlAttributes(match[0]);
    const rel = String(attrs.rel || '').toLowerCase().split(/\s+/);
    const href = attrs.href || '';
    if (!href) continue;
    if (rel.includes('feed') || (rel.includes('alternate') && (isFeedMimeType(attrs.type) || isFeedishUrl(href)))) {
      add(href, attrs.title || 'Website feed');
    }
  }

  for (const match of String(html || '').matchAll(/<a\b[^>]*>[\s\S]{0,600}?<\/a\s*>/gi)) {
    const tag = match[0];
    const attrs = parseHtmlAttributes(tag.slice(0, tag.indexOf('>') + 1));
    const href = attrs.href || '';
    const text = tag.slice(tag.indexOf('>') + 1).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const context = `${text} ${attrs.title || ''} ${attrs['aria-label'] || ''}`;
    if (href && (isFeedishUrl(href) || /\b(?:rss|atom|json feed|subscribe to feed|web feed|all feeds)\b/i.test(context))) {
      add(href, attrs.title || text || 'Website feed');
    }
    if (result.length >= 12) break;
  }
  return result;
}

function domainOriginsFor(pageUrl, includeAlias = false) {
  let page;
  try { page = new URL(pageUrl); } catch (_) { return []; }
  const origins = [];
  const add = (protocol, hostname) => {
    const origin = `${protocol}//${hostname}`;
    if (!origins.includes(origin)) origins.push(origin);
  };
  const hostname = page.hostname.toLowerCase();
  // Probe HTTPS first, even if the visited URL used HTTP. Then retain the exact
  // origin as a fallback for unusual deployments that do not support TLS.
  add('https:', hostname);
  add(page.protocol, hostname);
  if (includeAlias && hostname.startsWith('www.')) {
    const bare = hostname.slice(4);
    add('https:', bare);
    add(page.protocol, bare);
  }
  return origins.slice(0, includeAlias ? 4 : 2);
}

async function fetchHomepageCandidates(origin) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3200);
  try {
    const response = await fetch(`${origin}/`, {
      method: 'GET', redirect: 'follow', credentials: 'omit', cache: 'no-store', signal: controller.signal,
      headers: { Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.4' }
    });
    if (!response.ok) return [];
    const body = await readResponseSample(response, 300000);
    return extractHomepageFeedCandidates(body, response.url || `${origin}/`);
  } catch (_) {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

function defaultDomainFeedCandidates(origins) {
  const paths = [
    ['/feed/', 'Website feed'],
    ['/feed', 'Website feed'],
    ['/rss.xml', 'Website RSS feed'],
    ['/rss/', 'Website RSS feed'],
    ['/atom.xml', 'Website Atom feed'],
    ['/feed.xml', 'Website feed'],
    ['/?feed=rss2', 'WordPress RSS feed'],
    ['/feed.json', 'JSON Feed']
  ];
  const result = [];
  const seen = new Set();
  for (const origin of origins) {
    for (const [path, title] of paths) {
      try {
        const url = new URL(path, `${origin}/`).href;
        if (!seen.has(url)) { seen.add(url); result.push({ url, title }); }
      } catch (_) { /* Ignore malformed candidates. */ }
      if (result.length >= DOMAIN_PROBE_LIMIT) return result;
    }
  }
  return result;
}

async function validateCandidates(candidates, concurrency = 6) {
  const verified = [];
  for (let offset = 0; offset < candidates.length; offset += concurrency) {
    const batch = await Promise.all(candidates.slice(offset, offset + concurrency).map(validateCandidate));
    verified.push(...batch.filter(Boolean));
  }
  const seen = new Set();
  return verified.filter((item) => {
    const url = safeUrl(item.url);
    if (!url || seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

async function probeDomainOrigins(origins) {
  if (!origins.length) return [];
  const defaultCandidates = defaultDomainFeedCandidates(origins);
  const homepageCandidatesPromise = Promise.all(origins.map(fetchHomepageCandidates)).then((lists) => lists.flat());
  const defaultFeedsPromise = validateCandidates(defaultCandidates, 8);
  const homepageCandidates = await homepageCandidatesPromise;
  const seen = new Set(defaultCandidates.map((item) => safeUrl(item.url)).filter(Boolean));
  const extras = homepageCandidates.filter((item) => {
    const url = safeUrl(item.url);
    if (!url || seen.has(url)) return false;
    seen.add(url);
    return true;
  }).slice(0, 12);
  const [defaultFeeds, extraFeeds] = await Promise.all([
    defaultFeedsPromise,
    validateCandidates(extras, 8)
  ]);
  const merged = [];
  const unique = new Set();
  for (const feed of [...defaultFeeds, ...extraFeeds]) {
    const url = safeUrl(feed.url);
    if (!url || unique.has(url)) continue;
    unique.add(url);
    merged.push({ ...feed, url, source: 'known' });
  }
  return merged;
}

async function getDomainFeeds(pageUrl) {
  const origins = domainOriginsFor(pageUrl);
  if (!origins.length) return [];
  const cacheKey = `domain-feed-cache:${origins[0]}`;
  const cachedResult = await chrome.storage.session.get(cacheKey).catch(() => ({}));
  const cached = cachedResult[cacheKey];
  if (cached && Date.now() - cached.checkedAt < DOMAIN_PROBE_TTL_MS && Array.isArray(cached.feeds)) return cached.feeds;
  if (domainProbeInFlight.has(cacheKey)) return domainProbeInFlight.get(cacheKey);

  const task = (async () => {
    // Discover feeds beyond the current article URL: probe common feed endpoints
    // and inspect the site homepage for declared feed links. This is host-agnostic
    // rather than tied to WordPress or any pre-identified platform.
    let feeds = await probeDomainOrigins(origins);

    // Some publishers use a separate www/non-www canonical host. Only probe that
    // alias if the visited origin and its homepage expose no working feed at all.
    if (!feeds.length) {
      const aliasOrigins = domainOriginsFor(pageUrl, true).filter((origin) => !origins.includes(origin));
      if (aliasOrigins.length) feeds = await probeDomainOrigins(aliasOrigins);
    }

    await chrome.storage.session.set({ [cacheKey]: { checkedAt: Date.now(), feeds } }).catch(() => {});
    return feeds;
  })().finally(() => domainProbeInFlight.delete(cacheKey));
  domainProbeInFlight.set(cacheKey, task);
  return task;
}

async function validateCandidate(candidate) {
  const url = safeUrl(candidate?.url);
  if (!url) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4200);
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      credentials: 'omit',
      cache: 'no-store',
      signal: controller.signal,
      headers: { Accept: 'application/atom+xml, application/rss+xml, application/feed+json, application/xml, text/xml, application/json, */*;q=0.5' }
    });
    if (!response.ok) return null;
    // Validate the response body itself rather than trusting Content-Type: some
    // publishers serve valid RSS as text/html or application/octet-stream.
    const body = await readResponseSample(response);
    const details = extractFeedDetails(body);
    if (!details) return null;
    let title = details.title || candidate.title;
    try {
      if (!title) title = new URL(url).hostname;
    } catch (_) { title = 'Website feed'; }
    return { url: safeUrl(response.url || url) || url, title: String(title).replace(/\s+/g, ' ').trim().slice(0, 160), source: 'known' };
  } catch (_) {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function storeFeeds(tabId, feeds, pageUrl = '') {
  const validFeeds = cleanFeeds(feeds);
  const value = { feeds: validFeeds, pageUrl, updatedAt: Date.now() };
  await chrome.storage.session.set({ [stateKey(tabId)]: value });
  const count = validFeeds.length;
  await setToolbarState(tabId, count);
  try {
    chrome.runtime.sendMessage({ type: 'FEEDS_UPDATED', tabId, feeds: validFeeds }).catch(() => {});
  } catch (_) {}
  return value;
}

async function getTabFeeds(tabId) {
  const result = await chrome.storage.session.get(stateKey(tabId));
  return result[stateKey(tabId)] || { feeds: [], pageUrl: '', updatedAt: 0 };
}

function isRedditUrl(raw) {
  try { return /(^|\.)reddit\.com$/i.test(new URL(raw).hostname); } catch (_) { return false; }
}

function isRedditFeedUrl(raw) {
  try {
    const url = new URL(raw);
    return isRedditUrl(url.href) && /(?:\.rss|\.atom)$/i.test(url.pathname);
  } catch (_) { return false; }
}

async function processDiscovery(tabId, message) {
  const revision = (latestRevision.get(tabId) || 0) + 1;
  latestRevision.set(tabId, revision);
  const pageUrl = safeUrl(message.pageUrl) || '';
  const direct = cleanFeeds(message.feeds, message.pageTitle || 'Website feed');
  await storeFeeds(tabId, direct, pageUrl);

  const already = new Set(direct.map((feed) => feed.url));
  const pageCandidates = (Array.isArray(message.candidates) ? message.candidates : [])
    .slice(0, 12)
    .map((item) => ({ url: safeUrl(item?.url), title: String(item?.title || 'Website feed').slice(0, 160) }))
    .filter((item) => item.url && !already.has(item.url));

  // Domain-wide discovery runs on every site except Reddit. Reddit's anonymous
  // RSS endpoint is aggressively rate-limited, so broad endpoint probing can
  // consume the request budget before the user opens the preview.
  const redditPage = isRedditUrl(pageUrl);
  const redditCandidates = pageCandidates.filter((item) => isRedditFeedUrl(item.url));
  const candidatesToValidate = pageCandidates.filter((item) => !isRedditFeedUrl(item.url));
  const domainFeedsPromise = redditPage ? Promise.resolve([]) : getDomainFeeds(pageUrl).catch(() => []);
  const pageFeedsPromise = validateCandidates(candidatesToValidate, 6);
  const [domainFeeds, verifiedPageFeeds] = await Promise.all([domainFeedsPromise, pageFeedsPromise]);
  if (latestRevision.get(tabId) !== revision) return { ok: true, stale: true };

  const unverifiedRedditFeeds = redditCandidates.map((item) => ({
    ...item,
    title: String(item.title || 'Reddit RSS feed').replace(/\s+/g, ' ').trim().slice(0, 160),
    source: 'known'
  }));
  const combined = [...direct, ...unverifiedRedditFeeds, ...domainFeeds, ...verifiedPageFeeds];
  const merged = [];
  const used = new Set();
  for (const item of combined) {
    const url = safeUrl(item.url);
    if (!url || used.has(url)) continue;
    used.add(url);
    merged.push({ ...item, url });
  }
  await storeFeeds(tabId, merged, pageUrl);
  return { ok: true, count: merged.length };
}

async function rescanTab(tabId) {
  if (!Number.isInteger(tabId)) return { ok: false, reason: 'no-tab' };
  try {
    await chrome.tabs.sendMessage(tabId, { type: 'RESCAN' });
    return { ok: true, alreadyLoaded: true };
  } catch (_) {
    try {
      await chrome.scripting.executeScript({ target: { tabId }, files: ['content.js'] });
      return { ok: true, injected: true };
    } catch (_) {
      return { ok: false, reason: 'unsupported-page' };
    }
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'FEEDS_DISCOVERED') {
    const tabId = sender.tab?.id;
    if (!Number.isInteger(tabId)) {
      sendResponse({ ok: false, reason: 'missing-tab' });
      return false;
    }
    processDiscovery(tabId, message).then(sendResponse).catch(() => sendResponse({ ok: false }));
    return true;
  }

  if (message?.type === 'GET_FEEDS') {
    getTabFeeds(Number(message.tabId)).then(sendResponse).catch(() => sendResponse({ feeds: [], pageUrl: '', updatedAt: 0 }));
    return true;
  }

  if (message?.type === 'RESCAN_TAB') {
    rescanTab(Number(message.tabId)).then(sendResponse).catch(() => sendResponse({ ok: false }));
    return true;
  }

  return false;
});

const rescanTimers = new Map();
const rescanInFlight = new Set();

function clearTabFeedState(tabId, title = 'RSS Feed Radar — Scanning this page') {
  latestRevision.set(tabId, (latestRevision.get(tabId) || 0) + 1);
  chrome.storage.session.remove(stateKey(tabId)).catch(() => {});
  setToolbarState(tabId, 0).catch(() => {});
  chrome.action.setTitle({ tabId, title }).catch(() => {});
}

function scheduleTabRescan(tabId, delay = 350, checkFreshState = true) {
  if (!Number.isInteger(tabId)) return;
  clearTimeout(rescanTimers.get(tabId));
  const timer = setTimeout(async () => {
    rescanTimers.delete(tabId);
    if (rescanInFlight.has(tabId)) return;
    try {
      if (checkFreshState) {
        const tab = await chrome.tabs.get(tabId).catch(() => null);
        const state = await getTabFeeds(tabId);
        const expectedUrl = safeUrl(tab?.url || '');
        const storedUrl = safeUrl(state.pageUrl || '');
        // content.js normally reports at document_idle. Avoid a duplicate network scan
        // if that report has already updated this tab very recently.
        if (state.updatedAt && Date.now() - state.updatedAt < 4500 && expectedUrl && expectedUrl === storedUrl) return;
      }
      rescanInFlight.add(tabId);
      await rescanTab(tabId);
    } catch (_) {
      // Tabs can close or become restricted while a scheduled scan is pending.
    } finally {
      rescanInFlight.delete(tabId);
    }
  }, delay);
  rescanTimers.set(tabId, timer);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'loading') {
    clearTabFeedState(tabId);
  } else if (changeInfo.status === 'complete') {
    // The background worker is a fallback if the content script's initial message
    // was missed; it also fixes tabs that were already open during an extension update.
    scheduleTabRescan(tabId, 450, true);
  }
});

// SPA navigation often changes the URL without a full page load, so explicitly
// invalidate the previous page's count and ask the content script to scan again.
if (chrome.webNavigation?.onHistoryStateUpdated) {
  chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    if (details.frameId !== 0) return;
    clearTabFeedState(details.tabId, 'RSS Feed Radar — Scanning this page');
    scheduleTabRescan(details.tabId, 220, false);
  });
  chrome.webNavigation.onReferenceFragmentUpdated.addListener((details) => {
    if (details.frameId !== 0) return;
    scheduleTabRescan(details.tabId, 220, false);
  });
}

async function scanOpenWebTabs() {
  const tabs = await chrome.tabs.query({ url: ['http://*/*', 'https://*/*'] }).catch(() => []);
  for (const tab of tabs) {
    if (Number.isInteger(tab.id)) scheduleTabRescan(tab.id, 700, true);
  }
}
chrome.runtime.onInstalled.addListener(() => { scanOpenWebTabs().catch(() => {}); });
chrome.runtime.onStartup.addListener(() => { scanOpenWebTabs().catch(() => {}); });

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  try {
    const state = await getTabFeeds(tabId);
    await setToolbarState(tabId, state.feeds.length);
    // A brand-new or restored tab may not yet have reported a discovery.
    if (!state.updatedAt) scheduleTabRescan(tabId, 300, false);
  } catch (_) {}
});

chrome.tabs.onRemoved.addListener((tabId) => {
  latestRevision.delete(tabId);
  clearTimeout(rescanTimers.get(tabId));
  rescanTimers.delete(tabId);
  rescanInFlight.delete(tabId);
  chrome.storage.session.remove(stateKey(tabId)).catch(() => {});
});


// Repository update checker: compare the installed version with manifest.json on GitHub.
// Commits that do not bump the manifest version are not user-facing extension updates.
const UPDATE_CHECK_ALARM = 'rss-feed-radar-repository-update-check';
const UPDATE_REPO_MANIFEST_URL = 'https://raw.githubusercontent.com/iamfromreallife/RSSFeedRadar/main/manifest.json';
const UPDATE_STORAGE_KEY = 'rssFeedRadarUpdateState';
const UPDATE_CHECK_INTERVAL_MINUTES = 4 * 60;

function compareExtensionVersions(remoteVersion, installedVersion) {
  const valid = /^\\d+(?:\\.\\d+){0,3}$/;
  if (!valid.test(String(remoteVersion)) || !valid.test(String(installedVersion))) {
    throw new Error('Invalid extension version in manifest');
  }
  const remote = String(remoteVersion).split('.').map(Number);
  const installed = String(installedVersion).split('.').map(Number);
  const length = Math.max(remote.length, installed.length);
  for (let index = 0; index < length; index += 1) {
    const a = remote[index] || 0;
    const b = installed[index] || 0;
    if (a > b) return 1;
    if (a < b) return -1;
  }
  return 0;
}

async function checkRepositoryForUpdates() {
  try {
    const response = await fetch(UPDATE_REPO_MANIFEST_URL, {
      method: 'GET',
      cache: 'no-store',
      headers: { Accept: 'application/json, text/plain;q=0.9' }
    });
    if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
    const remoteManifest = await response.json();
    const latestVersion = String(remoteManifest?.version || '').trim();
    if (!latestVersion) throw new Error('GitHub manifest has no version');
    const installedVersion = chrome.runtime.getManifest().version;
    const comparison = compareExtensionVersions(latestVersion, installedVersion);
    const stored = await chrome.storage.local.get(UPDATE_STORAGE_KEY);
    const prior = stored[UPDATE_STORAGE_KEY] || {};
    const state = {
      installedVersion,
      latestVersion,
      checkedAt: Date.now(),
      updateAvailable: comparison > 0,
      current: comparison === 0,
      repository: 'https://github.com/iamfromreallife/RSSFeedRadar'
    };
    await chrome.storage.local.set({ [UPDATE_STORAGE_KEY]: state });
    try {
      chrome.runtime.sendMessage({ type: 'REPOSITORY_UPDATE_STATE', state }).catch(() => {});
    } catch (_) {}
    return state;
  } catch (error) {
    const stored = await chrome.storage.local.get(UPDATE_STORAGE_KEY).catch(() => ({}));
    const prior = stored[UPDATE_STORAGE_KEY] || {};
    const state = {
      ...prior,
      checkedAt: Date.now(),
      lastCheckError: String(error?.message || error).slice(0, 180)
    };
    await chrome.storage.local.set({ [UPDATE_STORAGE_KEY]: state }).catch(() => {});
    return state;
  }
}

async function ensureUpdateCheckAlarm() {
  const existing = await chrome.alarms.get(UPDATE_CHECK_ALARM).catch(() => null);
  if (!existing) {
    chrome.alarms.create(UPDATE_CHECK_ALARM, {
      delayInMinutes: 0.1,
      periodInMinutes: UPDATE_CHECK_INTERVAL_MINUTES
    });
  }
}
chrome.runtime.onInstalled.addListener(() => {
  ensureUpdateCheckAlarm().catch(() => {});
  checkRepositoryForUpdates().catch(() => {});
});
chrome.runtime.onStartup.addListener(() => {
  ensureUpdateCheckAlarm().catch(() => {});
  checkRepositoryForUpdates().catch(() => {});
});
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === UPDATE_CHECK_ALARM) checkRepositoryForUpdates().catch(() => {});
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'GET_UPDATE_STATE') {
    chrome.storage.local.get(UPDATE_STORAGE_KEY)
      .then((stored) => sendResponse(stored[UPDATE_STORAGE_KEY] || { updateAvailable: false, checkedAt: 0 }))
      .catch(() => sendResponse({ updateAvailable: false, checkedAt: 0 }));
    return true;
  }
  if (message?.type === 'CHECK_UPDATES_NOW') {
    checkRepositoryForUpdates()
      .then((state) => sendResponse(state || { updateAvailable: false, checkedAt: Date.now() }))
      .catch(() => sendResponse({ updateAvailable: false, checkedAt: Date.now(), lastCheckError: 'Update check failed' }));
    return true;
  }
  return false;
});
ensureUpdateCheckAlarm().catch(() => {});
