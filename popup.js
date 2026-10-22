const TRANSLATIONS = {
  en: {
    tagline: 'Your feed radar', donate: 'Donate', updateAvailable: 'Update available', scanStatus: 'PAGE SCAN', heroTitle: 'A little feed<br>magic.', heroSubtitle: 'Every feed on this page, gathered in one place.', foundLabel: 'FOUND', availableFeeds: 'Available feeds', searching: 'Looking for feeds on this page…', scanAgain: 'Scan again',
    emptyTitle: 'No feeds found just yet', emptyBody: 'This page may not publish a feed, or it may be using a format we don’t recognize yet.', privacyNote: 'Local discovery · No tracking', subscribe: 'Preview and subscribe', inoreader: 'Inoreader', feedly: 'Feedly', copyFeedUrl: 'Copy feed URL', copied: 'Feed URL copied', copyFailed: 'Could not copy this URL', scanFailed: 'This page cannot be scanned by Chrome extensions.', scanAgainLabel: 'Scanning this page…', oneFeed: '1 feed discovered on this page', manyFeeds: '{count} feeds discovered on this page', noFeeds: 'No feeds discovered on this page', feedFallback: 'Website feed'
  },
  pt: {
    tagline: 'O teu radar de feeds', donate: 'Doar', updateAvailable: 'Atualização disponível', scanStatus: 'ANÁLISE DA PÁGINA', heroTitle: 'Um pouco de<br>magia RSS.', heroSubtitle: 'Todos os feeds desta página, reunidos num só lugar.', foundLabel: 'ENCONTRADOS', availableFeeds: 'Feeds disponíveis', searching: 'À procura de feeds nesta página…', scanAgain: 'Voltar a analisar',
    emptyTitle: 'Ainda não foram encontrados feeds', emptyBody: 'Esta página pode não publicar um feed ou usar um formato que ainda não reconhecemos.', privacyNote: 'Deteção local · Sem rastreio', subscribe: 'Pré-visualizar e subscrever', inoreader: 'Inoreader', feedly: 'Feedly', copyFeedUrl: 'Copiar URL do feed', copied: 'URL do feed copiado', copyFailed: 'Não foi possível copiar este URL', scanFailed: 'Esta página não pode ser analisada por extensões do Chrome.', scanAgainLabel: 'A analisar esta página…', oneFeed: '1 feed encontrado nesta página', manyFeeds: '{count} feeds encontrados nesta página', noFeeds: 'Não foram encontrados feeds nesta página', feedFallback: 'Feed do site'
  },
  es: {
    tagline: 'Tu radar de feeds', donate: 'Donar', updateAvailable: 'Actualización disponible', scanStatus: 'ANÁLISIS DE PÁGINA', heroTitle: 'Un poco de<br>magia RSS.', heroSubtitle: 'Todos los feeds de esta página, reunidos en un solo lugar.', foundLabel: 'ENCONTRADOS', availableFeeds: 'Feeds disponibles', searching: 'Buscando feeds en esta página…', scanAgain: 'Volver a analizar',
    emptyTitle: 'Aún no se encontraron feeds', emptyBody: 'Puede que esta página no publique un feed o que utilice un formato que aún no reconocemos.', privacyNote: 'Detección local · Sin seguimiento', subscribe: 'Vista previa y suscripción', inoreader: 'Inoreader', feedly: 'Feedly', copyFeedUrl: 'Copiar URL del feed', copied: 'URL del feed copiada', copyFailed: 'No se pudo copiar esta URL', scanFailed: 'Las extensiones de Chrome no pueden analizar esta página.', scanAgainLabel: 'Analizando esta página…', oneFeed: 'Se encontró 1 feed en esta página', manyFeeds: 'Se encontraron {count} feeds en esta página', noFeeds: 'No se encontraron feeds en esta página', feedFallback: 'Feed del sitio'
  },
  it: {
    tagline: 'Il tuo radar dei feed', donate: 'Dona', updateAvailable: 'Aggiornamento disponibile', scanStatus: 'SCANSIONE PAGINA', heroTitle: 'Un pizzico di<br>magia RSS.', heroSubtitle: 'Tutti i feed di questa pagina, raccolti in un unico posto.', foundLabel: 'TROVATI', availableFeeds: 'Feed disponibili', searching: 'Ricerca dei feed in questa pagina…', scanAgain: 'Scansiona di nuovo',
    emptyTitle: 'Nessun feed trovato per ora', emptyBody: 'Questa pagina potrebbe non pubblicare un feed o utilizzare un formato che non riconosciamo ancora.', privacyNote: 'Rilevamento locale · Nessun tracciamento', subscribe: 'Anteprima e iscrizione', inoreader: 'Inoreader', feedly: 'Feedly', copyFeedUrl: 'Copia URL del feed', copied: 'URL del feed copiato', copyFailed: 'Impossibile copiare questo URL', scanFailed: 'Le estensioni di Chrome non possono analizzare questa pagina.', scanAgainLabel: 'Scansione della pagina…', oneFeed: '1 feed trovato in questa pagina', manyFeeds: '{count} feed trovati in questa pagina', noFeeds: 'Nessun feed trovato in questa pagina', feedFallback: 'Feed del sito'
  },
  fr: {
    tagline: 'Votre radar de flux', donate: 'Faire un don', updateAvailable: 'Mise à jour disponible', scanStatus: 'ANALYSE DE LA PAGE', heroTitle: 'Un peu de<br>magie RSS.', heroSubtitle: 'Tous les flux de cette page, réunis au même endroit.', foundLabel: 'TROUVÉS', availableFeeds: 'Flux disponibles', searching: 'Recherche de flux sur cette page…', scanAgain: 'Analyser à nouveau',
    emptyTitle: 'Aucun flux trouvé pour le moment', emptyBody: 'Cette page ne publie peut-être pas de flux ou utilise un format que nous ne reconnaissons pas encore.', privacyNote: 'Détection locale · Aucun suivi', subscribe: 'Aperçu et abonnement', inoreader: 'Inoreader', feedly: 'Feedly', copyFeedUrl: 'Copier l’URL du flux', copied: 'URL du flux copiée', copyFailed: 'Impossible de copier cette URL', scanFailed: 'Les extensions Chrome ne peuvent pas analyser cette page.', scanAgainLabel: 'Analyse de cette page…', oneFeed: '1 flux détecté sur cette page', manyFeeds: '{count} flux détectés sur cette page', noFeeds: 'Aucun flux détecté sur cette page', feedFallback: 'Flux du site'
  },
  de: {
    tagline: 'Dein Feed-Radar', donate: 'Spenden', updateAvailable: 'Update verfügbar', scanStatus: 'SEITENSCAN', heroTitle: 'Ein bisschen<br>Feed-Magie.', heroSubtitle: 'Alle Feeds dieser Seite an einem Ort gesammelt.', foundLabel: 'GEFUNDEN', availableFeeds: 'Verfügbare Feeds', searching: 'Suche nach Feeds auf dieser Seite…', scanAgain: 'Erneut scannen',
    emptyTitle: 'Noch keine Feeds gefunden', emptyBody: 'Diese Seite veröffentlicht möglicherweise keinen Feed oder verwendet ein Format, das wir noch nicht erkennen.', privacyNote: 'Lokale Erkennung · Kein Tracking', subscribe: 'Vorschau & abonnieren', inoreader: 'Inoreader', feedly: 'Feedly', copyFeedUrl: 'Feed-URL kopieren', copied: 'Feed-URL kopiert', copyFailed: 'Diese URL konnte nicht kopiert werden', scanFailed: 'Diese Seite kann nicht von Chrome-Erweiterungen gescannt werden.', scanAgainLabel: 'Diese Seite wird gescannt…', oneFeed: '1 Feed auf dieser Seite gefunden', manyFeeds: '{count} Feeds auf dieser Seite gefunden', noFeeds: 'Keine Feeds auf dieser Seite gefunden', feedFallback: 'Website-Feed'
  }
};

const $ = (selector) => document.querySelector(selector);
const feedList = $('#feedList');
const emptyState = $('#emptyState');
const feedCount = $('#feedCount');
const pageLabel = $('#pageLabel');
const languageSelect = $('#languageSelect');
const languageWrap = $('#languageWrap');
const languageButton = $('#languageButton');
const languageCurrent = $('#languageCurrent');
const languageMenu = $('#languageMenu');
const rescanButton = $('#rescanButton');
const updateAvailableButton = $('#updateAvailableButton');
const toast = $('#toast');
let currentTabId = null;
let activeFeeds = [];
let currentLanguage = 'en';
let toastTimer = 0;

function translate(key, vars = {}) {
  let value = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.en[key] || key;
  for (const [name, content] of Object.entries(vars)) value = value.replaceAll(`{${name}}`, String(content));
  return value;
}

function syncLanguageDropdown() {
  const selected = languageMenu?.querySelector(`[data-language-option="${currentLanguage}"]`);
  if (selected && languageCurrent) languageCurrent.textContent = selected.textContent.trim();
  languageMenu?.querySelectorAll('[data-language-option]').forEach((option) => {
    const active = option.dataset.languageOption === currentLanguage;
    option.classList.toggle('is-selected', active);
    option.setAttribute('aria-checked', String(active));
  });
}

function setLanguageMenuOpen(open) {
  if (!languageMenu || !languageButton) return;
  languageMenu.hidden = !open;
  languageButton.setAttribute('aria-expanded', String(open));
  if (open) languageMenu.querySelector(`[data-language-option="${currentLanguage}"]`)?.focus();
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  syncLanguageDropdown();
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    // Only the handcrafted hero line uses intentional <br> markup.
    if (key === 'heroTitle') element.innerHTML = translate(key);
    else element.textContent = translate(key);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => element.title = translate(element.getAttribute('data-i18n-title')));
  renderFeeds(activeFeeds);
}

function detectLanguage(browserLanguage) {
  const language = String(browserLanguage || 'en').toLowerCase().split(/[-_]/)[0];
  return TRANSLATIONS[language] ? language : 'en';
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 1850);
}

function iconMarkup(name) {
  const paths = {
    feed: '<circle cx="5" cy="19" r="1.6" fill="currentColor" stroke="none"/><path d="M4 11a9 9 0 0 1 9 9M4 5a15 15 0 0 1 15 15"/>',
    inoreader: '<path d="M5 5.5h10.5A2.5 2.5 0 0 1 18 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8A2.5 2.5 0 0 1 5 5.5Z"/><path d="M7 9h6M7 12h8M7 15h5"/>',
    feedly: '<path d="M5 4 2.5 7.5 5 10M10 2.5 7.5 6 10 8.5M15 7l-2.5 3.5L15 13M18 12l-2.5 3.5L18 18"/>',
    copy: '<rect x="7" y="7" width="10" height="11" rx="2"/><path d="M13 4H5a2 2 0 0 0-2 2v9"/>'
  };
  return `<svg viewBox="0 0 22 22" aria-hidden="true">${paths[name] || paths.feed}</svg>`;
}

async function openFeedPreview(feed) {
  const params = new URLSearchParams({
    url: feed.url,
    title: feed.title || translate('feedFallback'),
    language: currentLanguage
  });
  const readerUrl = chrome.runtime.getURL(`reader.html?${params.toString()}`);
  try {
    await chrome.tabs.create({ url: readerUrl, active: true });
  } catch (_) {
    showToast(translate('scanFailed'));
  }
}

function renderFeeds(feeds) {
  activeFeeds = Array.isArray(feeds) ? feeds : [];
  feedCount.textContent = String(activeFeeds.length);
  feedList.replaceChildren();
  emptyState.hidden = activeFeeds.length > 0;
  feedList.hidden = activeFeeds.length === 0;

  if (activeFeeds.length === 1) pageLabel.textContent = translate('oneFeed');
  else if (activeFeeds.length > 1) pageLabel.textContent = translate('manyFeeds', { count: activeFeeds.length });
  else if (pageLabel.dataset.unsupported === 'true') pageLabel.textContent = translate('scanFailed');
  else pageLabel.textContent = translate('noFeeds');

  for (const feed of activeFeeds) {
    const card = document.createElement('article');
    card.className = 'feed-card';

    const topline = document.createElement('div');
    topline.className = 'feed-topline';
    const feedIcon = document.createElement('div');
    feedIcon.className = 'feed-type-icon';
    feedIcon.innerHTML = iconMarkup('feed');
    const meta = document.createElement('div');
    meta.className = 'feed-meta';
    const title = document.createElement('div');
    title.className = 'feed-title';
    title.textContent = feed.title || translate('feedFallback');
    const url = document.createElement('div');
    url.className = 'feed-url';
    url.textContent = feed.url;
    url.title = feed.url;
    meta.append(title, url);
    // The old PAGE LINK / KNOWN badge was noisy and squeezed long feed titles.
    topline.append(feedIcon, meta);

    const actions = document.createElement('div');
    actions.className = 'feed-actions';
    const subscribe = document.createElement('button');
    subscribe.type = 'button';
    subscribe.className = 'subscribe-button';
    const subscribeText = document.createElement('span');
    subscribeText.textContent = translate('subscribe');
    const chevron = document.createElement('span');
    chevron.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8 4l4 4-4 4"/></svg>';
    subscribe.append(subscribeText, chevron);
    subscribe.setAttribute('aria-label', `${translate('subscribe')}: ${feed.title || translate('feedFallback')}`);
    subscribe.addEventListener('click', async (event) => {
      event.stopPropagation();
      await openFeedPreview(feed);
    });
    actions.append(subscribe);
    card.append(topline, actions);
    feedList.appendChild(card);
  }
}

async function getCurrentTab() {
  const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  return tabs[0] || null;
}

async function loadCurrentTab() {
  try {
    const tab = await getCurrentTab();
    if (!tab || typeof tab.id !== 'number') {
      pageLabel.dataset.unsupported = 'true';
      pageLabel.textContent = translate('scanFailed');
      renderFeeds([]);
      return;
    }
    currentTabId = tab.id;
    pageLabel.dataset.unsupported = 'false';
    pageLabel.textContent = translate('searching');
    // This also scans tabs that were already open when the extension was installed.
    const scan = await chrome.runtime.sendMessage({ type: 'RESCAN_TAB', tabId: currentTabId });
    if (!scan?.ok) {
      pageLabel.dataset.unsupported = 'true';
      pageLabel.textContent = translate('scanFailed');
      renderFeeds([]);
      return;
    }
    const state = await chrome.runtime.sendMessage({ type: 'GET_FEEDS', tabId: currentTabId });
    renderFeeds(state?.feeds || []);
    // Verified pattern-based feeds can finish after the initial direct scan.
    if (!state?.feeds?.length) pageLabel.textContent = translate('searching');
  } catch (_) {
    pageLabel.dataset.unsupported = 'true';
    pageLabel.textContent = translate('scanFailed');
    renderFeeds([]);
  }
}

languageSelect.addEventListener('change', async () => {
  currentLanguage = languageSelect.value in TRANSLATIONS ? languageSelect.value : 'en';
  await chrome.storage.local.set({ rssFeedRadarLanguage: currentLanguage });
  applyTranslations();
});

languageButton?.addEventListener('click', () => setLanguageMenuOpen(languageMenu.hidden));
languageWrap?.addEventListener('click', (event) => {
  if (event.target.closest('.language-trigger, .language-menu')) return;
  setLanguageMenuOpen(true);
});
languageMenu?.addEventListener('click', async (event) => {
  const option = event.target.closest('[data-language-option]');
  if (!option) return;
  languageSelect.value = option.dataset.languageOption;
  languageSelect.dispatchEvent(new Event('change', { bubbles: true }));
  setLanguageMenuOpen(false);
  languageButton?.focus();
});
document.addEventListener('click', (event) => {
  if (languageWrap && !languageWrap.contains(event.target)) setLanguageMenuOpen(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && languageMenu && !languageMenu.hidden) {
    setLanguageMenuOpen(false);
    languageButton?.focus();
  }
});

rescanButton.addEventListener('click', async () => {
  if (currentTabId === null) return;
  pageLabel.textContent = translate('scanAgainLabel');
  try {
    await chrome.runtime.sendMessage({ type: 'RESCAN_TAB', tabId: currentTabId });
  } catch (_) {}
});

chrome.runtime.onMessage.addListener((message) => {
  if (message?.type === 'FEEDS_UPDATED' && message.tabId === currentTabId) {
    renderFeeds(message.feeds || []);
    if (!message.feeds?.length) pageLabel.textContent = translate('noFeeds');
  }
});

(async () => {
  try {
    const stored = await chrome.storage.local.get('rssFeedRadarLanguage');
    currentLanguage = stored.rssFeedRadarLanguage || detectLanguage(navigator.language);
    languageSelect.value = currentLanguage;
    syncLanguageDropdown();
  } catch (_) {
    currentLanguage = detectLanguage(navigator.language);
    languageSelect.value = currentLanguage;
    syncLanguageDropdown();
  }
  applyTranslations();
  await syncUpdateAvailability();
  await loadCurrentTab();
})();


async function syncUpdateAvailability() {
  try {
    const state = await chrome.runtime.sendMessage({ type: 'GET_UPDATE_STATE' });
    if (updateAvailableButton) {
      updateAvailableButton.hidden = !state?.updateAvailable;
      if (state?.latestMessage) updateAvailableButton.title = state.latestMessage;
    }
  } catch (_) {
    if (updateAvailableButton) updateAvailableButton.hidden = true;
  }
}
chrome.runtime.onMessage.addListener((message) => {
  if (message?.type === 'REPOSITORY_UPDATE_STATE') syncUpdateAvailability();
});
