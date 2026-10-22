(() => {
  if (window.__rssFeedRadarStarted) {
    // The popup may request a rescan after the tab has already loaded.
    try { window.__rssFeedRadarRescan?.(); } catch (_) {}
    return;
  }
  window.__rssFeedRadarStarted = true;

  const MAX_DIRECT_FEEDS = 100;
  const MAX_CANDIDATES = 12;
  let lastFingerprint = '';
  let scanTimer = 0;

  const tidy = (value, max = 180) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
  const normalizeUrl = (raw, base = location.href) => {
    try {
      const url = new URL(raw, base);
      if (!['http:', 'https:'].includes(url.protocol)) return null;
      url.hash = '';
      return url.href;
    } catch (_) { return null; }
  };
  const looksLikeFeedUrl = (raw) => /(?:\.rss(?:$|[?#])|\.atom(?:$|[?#])|\/(?:feed|rss|atom)(?:\.xml)?(?:\/|$|[?#])|\/(?:feed|rss|atom)[-_][^/?#]+\.xml(?:$|[?#])|\.rss\.xml(?:$|[?#])|[?&](?:format|output)=(?:rss|atom|xml|json))/i.test(raw || '');
  // YouTube's Subscriptions page is a signed-in HTML view, not an RSS endpoint.
  // Public YouTube RSS feeds are channel-specific: /feeds/videos.xml?channel_id=UC...
  const isYouTubeSubscriptionsPageUrl = (raw) => {
    try {
      const url = new URL(raw, location.href);
      const host = url.hostname.toLowerCase().replace(/^www\./, '');
      return ['youtube.com', 'm.youtube.com', 'music.youtube.com'].includes(host) && (
        /^\/feed(?:\/|$)/i.test(url.pathname) ||
        /^\/subscription_manager\/?$/i.test(url.pathname)
      );
    } catch (_) { return false; }
  };
  const hasFeedType = (type) => /(?:application\/(?:rss\+xml|x-rss\+xml|atom\+xml|feed\+json|jsonfeed|rdf\+xml|xml)|text\/(?:rss|xml))/i.test(type || '');

  function inferredTitle(url, context = '') {
    const cleanContext = tidy(context, 140);
    if (cleanContext && !/^(?:rss|atom|xml|feed|subscribe|rss feed|feed url)$/i.test(cleanContext)) return cleanContext;
    try {
      const u = new URL(url);
      const pathPart = decodeURIComponent(u.pathname.split('/').filter(Boolean).pop() || '');
      const readable = pathPart.replace(/\.(?:rss|atom|xml)$/i, '').replace(/[-_]+/g, ' ').trim();
      return readable && readable.toLowerCase() !== 'feed' ? `${readable} feed` : `${u.hostname} feed`;
    } catch (_) { return 'Website feed'; }
  }

  function getKnownFeedCandidates() {
    const candidates = [];
    const seen = new Set();
    const add = (raw, label) => {
      const url = normalizeUrl(raw);
      if (!url || isYouTubeSubscriptionsPageUrl(url) || url === normalizeUrl(location.href) || seen.has(url) || candidates.length >= MAX_CANDIDATES) return;
      seen.add(url);
      candidates.push({ url, title: tidy(label, 140) || inferredTitle(url), source: 'known' });
    };

    let current;
    try { current = new URL(location.href); } catch (_) { return candidates; }
    const host = current.hostname.toLowerCase().replace(/^www\./, '');
    const path = current.pathname.replace(/\/$/, '') || '/';
    const origin = current.origin;
    const generator = tidy(document.querySelector('meta[name="generator" i]')?.content || '', 180).toLowerCase();
    const wordpressSignal = /wordpress|wp-content|wp-includes/.test(generator) || Boolean(document.querySelector('link[href*="wp-content" i], script[src*="wp-content" i], script[src*="wp-includes" i], body[class*="wp-" i]'));

    // WordPress and WordPress.com: common feeds are predictable, but are checked by the worker before display.
    if (wordpressSignal || host.endsWith('.wordpress.com')) {
      add(`${origin}/feed/`, 'WordPress site feed');
      add(`${origin}/?feed=rss2`, 'WordPress RSS feed');
    }

    // Blogger / Blogspot.
    if (/blogger\.com|blogspot\./i.test(host) || /blogger/i.test(generator)) {
      add(`${origin}/feeds/posts/default?alt=rss`, 'Blogger posts feed');
      add(`${origin}/feeds/posts/default`, 'Blogger Atom feed');
    }

    // Substack supports a conventional /feed endpoint, including many custom domains via its generator tag.
    if (host.endsWith('.substack.com') || /substack/i.test(generator)) {
      add(`${origin}/feed`, 'Substack publication feed');
    }

    // Medium feeds mirror a user's/publication path beneath /feed/.
    if (host === 'medium.com' || host.endsWith('.medium.com')) {
      if (host.endsWith('.medium.com') && host !== 'medium.com') {
        add(`${origin}/feed`, 'Medium publication feed');
      } else if (path.startsWith('/@')) {
        const author = path.split('/').filter(Boolean)[0];
        add(`${origin}/feed/${author}`, 'Medium author feed');
      } else if (path.startsWith('/tag/')) {
        add(`${origin}/feed${path}`, 'Medium topic feed');
      } else if (path !== '/') {
        const publication = path.split('/').filter(Boolean)[0];
        add(`${origin}/feed/${publication}`, 'Medium publication feed');
      } else {
        add(`${origin}/feed`, 'Medium feed');
      }
    }

    // Reddit supports subreddit, user and post RSS endpoints.
    if (host === 'reddit.com' || host === 'old.reddit.com' || host === 'new.reddit.com' || host === 'sh.reddit.com') {
      const parts = path.split('/').filter(Boolean);
      if (parts[0] === 'r' && parts[1]) {
        add(`${origin}/r/${encodeURIComponent(parts[1])}/.rss`, `r/${parts[1]} Reddit feed`);
        if (parts[2] === 'comments' && parts[3]) add(`${origin}${path}.rss`, 'Reddit discussion feed');
      } else if (parts[0] === 'user' && parts[1]) {
        add(`${origin}/user/${encodeURIComponent(parts[1])}/.rss`, `${parts[1]} Reddit feed`);
      }
    }

    // Tumblr blog feeds.
    if (host.endsWith('.tumblr.com') && host !== 'tumblr.com') {
      add(`${origin}/rss`, 'Tumblr blog feed');
    }

    // Ghost publications commonly expose /rss/.
    if (/ghost/i.test(generator)) add(`${origin}/rss/`, 'Ghost publication feed');

    // YouTube's public channel feed uses its channel ID; try structured metadata and the channel URL.
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      let channelId = document.querySelector('meta[itemprop="channelId"]')?.content ||
        document.querySelector('meta[property="og:url"]')?.content?.match(/\/channel\/(UC[\w-]+)/)?.[1] ||
        current.pathname.match(/^\/channel\/(UC[\w-]+)/)?.[1];
      if (!channelId) {
        const match = document.documentElement?.innerHTML?.slice(0, 700000).match(/"channelId"\s*:\s*"(UC[\w-]{20,})"/);
        if (match) channelId = match[1];
      }
      // On the aggregate subscriptions page, HTML contains many channel IDs. Picking the first
      // one would silently represent just one channel as the entire subscriptions feed.
      if (channelId && !isYouTubeSubscriptionsPageUrl(location.href)) add(`https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`, 'YouTube channel feed');
    }

    // GitHub repository release and commit pages expose Atom feeds.
    if (host === 'github.com') {
      const parts = path.split('/').filter(Boolean);
      if (parts.length >= 2 && !['features', 'topics', 'collections', 'orgs', 'settings', 'marketplace', 'sponsors'].includes(parts[0])) {
        const repoBase = `${origin}/${encodeURIComponent(parts[0])}/${encodeURIComponent(parts[1])}`;
        if (parts[2] === 'releases' || parts[2] === 'release') add(`${repoBase}/releases.atom`, 'GitHub releases feed');
        if (parts[2] === 'commits') {
          const branch = parts[3] || 'HEAD';
          add(`${repoBase}/commits/${encodeURIComponent(branch)}.atom`, 'GitHub commits feed');
        }
      }
    }

    // dev.to author feeds.
    if (host === 'dev.to' && path.startsWith('/@')) {
      add(`${origin}/feed/${path.slice(2)}`, 'DEV Community author feed');
    }

    // Hashnode blogs use a conventional RSS XML endpoint.
    if (host.endsWith('.hashnode.dev')) add(`${origin}/rss.xml`, 'Hashnode blog feed');

    return candidates;
  }

  function detectFeeds() {
    const feeds = [];
    const seen = new Set();
    const pageTitle = tidy(document.title || location.hostname, 140) || location.hostname;
    const add = (raw, title, kind) => {
      const url = normalizeUrl(raw);
      if (!url || isYouTubeSubscriptionsPageUrl(url) || (kind !== 'document' && url === normalizeUrl(location.href)) || seen.has(url) || feeds.length >= MAX_DIRECT_FEEDS) return;
      seen.add(url);
      feeds.push({
        url,
        title: tidy(title, 140) || inferredTitle(url, pageTitle),
        source: 'page',
        kind: kind || 'feed'
      });
    };

    const currentType = (document.contentType || '').toLowerCase();
    const currentText = document.documentElement?.outerHTML?.slice(0, 5000) || '';
    const documentFeedTitle = tidy(document.querySelector('channel > title, feed > title')?.textContent || document.title || location.hostname, 140);
    if (/application\/(?:rss\+xml|x-rss\+xml|atom\+xml|feed\+json|rdf\+xml|xml)|text\/(?:xml|rss)/.test(currentType) && /<(?:rss|feed|rdf:rdf)\b/i.test(currentText)) {
      add(location.href, documentFeedTitle, 'document');
    }

    document.querySelectorAll('link[href]').forEach((link) => {
      const rel = (link.getAttribute('rel') || '').toLowerCase().split(/\s+/);
      const type = (link.getAttribute('type') || '').toLowerCase();
      const href = link.getAttribute('href') || '';
      if (rel.includes('alternate') && (hasFeedType(type) || looksLikeFeedUrl(href)) || rel.includes('feed')) {
        add(href, link.getAttribute('title') || link.getAttribute('aria-label') || pageTitle, 'discovery');
      }
    });

    // Many older sites expose a visible RSS/Atom link without a <link rel="alternate"> declaration.
    document.querySelectorAll('a[href]').forEach((anchor) => {
      if (feeds.length >= MAX_DIRECT_FEEDS) return;
      const href = anchor.getAttribute('href') || '';
      const context = `${anchor.textContent || ''} ${anchor.getAttribute('aria-label') || ''} ${anchor.getAttribute('title') || ''}`;
      if (looksLikeFeedUrl(href) || /\b(?:rss|atom|json feed|subscribe to feed|web feed)\b/i.test(context) && /^https?:/i.test(href)) {
        add(href, inferredTitle(normalizeUrl(href) || href, context) || pageTitle, 'link');
      }
    });

    return { feeds, candidates: getKnownFeedCandidates() };
  }

  function scanAndReport(force = false) {
    try {
      const result = detectFeeds();
      const fingerprint = JSON.stringify({
        url: location.href,
        feeds: result.feeds.map(({ url, title }) => [url, title]),
        candidates: result.candidates.map(({ url }) => url)
      });
      if (!force && fingerprint === lastFingerprint) return;
      lastFingerprint = fingerprint;
      chrome.runtime.sendMessage({
        type: 'FEEDS_DISCOVERED',
        pageUrl: location.href,
        pageTitle: tidy(document.title || location.hostname, 140),
        feeds: result.feeds,
        candidates: result.candidates
      }).catch(() => {});
    } catch (error) {
      // Keep the content script resilient on unusual or partially rendered documents.
      console.debug('[RSS Feed Radar] Scan skipped:', error);
    }
  }

  function scheduleScan(force = false) {
    clearTimeout(scanTimer);
    scanTimer = setTimeout(() => scanAndReport(force), 220);
  }

  window.__rssFeedRadarRescan = () => scanAndReport(true);
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type === 'RESCAN') {
      scanAndReport(true);
      sendResponse({ ok: true });
    }
    return false;
  });

  scanAndReport(true);
  const relevantNode = (node) => {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
    const tag = node.tagName?.toLowerCase();
    if (tag === 'a' || tag === 'link') return true;
    if (tag === 'meta' && (node.getAttribute('name') || '').toLowerCase() === 'generator') return true;
    return Boolean(node.querySelector?.('a[href], link[href], meta[name="generator" i]'));
  };
  const observer = new MutationObserver((records) => {
    const relevant = records.some((record) => {
      const tag = record.target?.nodeType === Node.ELEMENT_NODE ? record.target.tagName?.toLowerCase() : '';
      if (record.type === 'attributes') return tag === 'a' || tag === 'link' || tag === 'meta' && (record.attributeName === 'content' || record.attributeName === 'name');
      if (tag === 'a' || tag === 'link') return true;
      return [...record.addedNodes, ...record.removedNodes].some(relevantNode);
    });
    if (relevant) scheduleScan();
  });
  if (document.documentElement) observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['href', 'rel', 'type', 'title', 'content', 'name']
  });
  window.addEventListener('popstate', () => scheduleScan(true), { passive: true });
  window.addEventListener('hashchange', () => scheduleScan(true), { passive: true });
})();
