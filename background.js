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
  const text = String(body || '').slice(0, 180000);
  const isXml = /<(?:rss|feed|rdf:rdf)\b/i.test(text);
  const isJson = /"version"\s*:\s*"https?:\/\/jsonfeed\.org\/version\//i.test(text) && /"items"\s*:/i.test(text);
  if (!isXml && !isJson) return null;
  let title = '';
  if (isJson) {
    const titleMatch = text.match(/"title"\s*:\s*"((?:[^"\\]|\\.)*)"/i);
    if (titleMatch) {
      try { title = JSON.parse(`"${titleMatch[1]}"`); } catch (_) { title = titleMatch[1]; }
    }
  } else {
    const channel = text.match(/<channel\b[^>]*>([\s\S]*?)<\/channel>/i)?.[1];
    const source = channel || text;
    const titleMatch = source.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i);
    title = titleMatch ? decodeEntities(titleMatch[1]) : '';
  }
  return { valid: true, title };
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
    const contentType = (response.headers.get('content-type') || '').toLowerCase();
    if (/text\/html/.test(contentType)) return null;
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

async function processDiscovery(tabId, message) {
  const revision = (latestRevision.get(tabId) || 0) + 1;
  latestRevision.set(tabId, revision);
  const pageUrl = safeUrl(message.pageUrl) || '';
  const direct = cleanFeeds(message.feeds, message.pageTitle || 'Website feed');
  await storeFeeds(tabId, direct, pageUrl);

  const already = new Set(direct.map((feed) => feed.url));
  const candidates = (Array.isArray(message.candidates) ? message.candidates : [])
    .slice(0, 12)
    .map((item) => ({ url: safeUrl(item?.url), title: String(item?.title || 'Website feed').slice(0, 160) }))
    .filter((item) => item.url && !already.has(item.url));

  // Bound concurrent network requests to keep the extension lightweight.
  const verified = [];
  for (let offset = 0; offset < candidates.length; offset += 4) {
    const batch = await Promise.all(candidates.slice(offset, offset + 4).map(validateCandidate));
    verified.push(...batch.filter(Boolean));
    if (latestRevision.get(tabId) !== revision) return { ok: true, stale: true };
  }
  if (latestRevision.get(tabId) !== revision) return { ok: true, stale: true };

  const combined = [...direct, ...verified];
  // If a direct discovery and a known pattern resolve to the same URL, preserve the direct link's title.
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
