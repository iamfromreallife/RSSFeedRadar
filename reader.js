const DICTIONARY = {
  en: {
    previewLabel:'FEED PREVIEW',donate:'Donate',defaultPreviewer:"Make the default RSS previewer?",defaultPreviewerEnabled:"RSS Feed Radar will open supported feeds by default.",defaultPreviewerDisabled:"Default RSS previewing is turned off.",defaultPreviewerSaveFailed:"Could not save this setting.",readingFrom:'YOU’RE READING FROM',loadingFeed:'Fetching the latest stories from this feed.',curatedForYou:'STRAIGHT FROM THE SOURCE',latestStories:'Latest stories',storiesSubtitle:'Recent articles, ready for a quick browse.',articlesLabel:'ARTICLES',loadingArticles:'Gathering stories and images…',feedUnavailableTitle:'This feed couldn’t be opened',oembedNotFeedTitle:'This is an embed endpoint, not a feed',oembedNotFeedBody:'This URL returns oEmbed metadata for an article, not an RSS feed. RSS Feed Radar now filters out these endpoints; open the website’s actual feed instead.',youtubeSubscriptionsTitle:'This is not a public RSS feed',youtubeSubscriptionsBody:'YouTube does not provide a public RSS feed for its navigation pages or one combined feed for all your subscriptions. Public feeds are available for individual channels and playlists; open a channel or playlist page to discover its feed.',feedUnavailableBody:'The source may be temporarily unavailable, or it may block direct access. You can still copy its URL or open it in your reader.',rateLimitedTitle:'Reddit is temporarily limiting requests',rateLimitedBody:'Reddit returned HTTP 429, which means it is temporarily rate-limiting this feed. Wait for the countdown before retrying; repeated requests may prolong the restriction.',retryWait:'Try again in {seconds}s',tryAgain:'Try again',noStoriesTitle:'The feed is connected, but quiet',noStoriesBody:'We could read the feed details, but it didn’t contain any story entries to preview.',sourceNote:'Stories are shown from the feed source. Open an article to read it on its original website.',footerNote:'Follow what matters. Skip the noise.',readyToFollow:'READY TO FOLLOW?',subscribePrompt:'Subscribe using the buttons below.',copyFeedUrl:'Copy feed URL',inoreader:'Inoreader',feedly:'Feedly',copied:'Feed URL copied',copyFailed:'Could not copy this feed URL',openArticle:'Read article',untitled:'Untitled story',feedFallback:'Website feed',unknownDate:'Date unavailable',authorBy:'By {author}',countOne:'1 article ready to read',countMany:'{count} articles ready to read',fontFamily:'Font family',fontSize:'Font size',lineSpacing:'Line spacing',darkMode:'Dark mode',language:'Language',fontSystem:'System sans-serif',fontSerif:'Serif · Georgia',fontArial:'Arial',fontVerdana:'Verdana',fontMono:'Monospace · Courier New',readingControls:'Reading controls',feedActions:'Feed actions',fontInter:'Inter',fontRoboto:'Roboto',fontOpenSans:'Open Sans',fontLato:'Lato',fontMontserrat:'Montserrat',fontNunito:'Nunito',fontTimes:'Times New Roman',fontPalatino:'Palatino',fontGaramond:'Garamond',fontHelvetica:'Helvetica',fontTahoma:'Tahoma',fontTrebuchet:'Trebuchet MS',fontConsolas:'Consolas',fontLucida:'Lucida Console',cardColumns:'Card columns',subscribeIn:"Subscribe",articlesTab:'Cards',feedInfoTab:'List',feedAddress:'Feed address',websiteAddress:'Website',articlePreview:'ARTICLE PREVIEW',close:'Close',articleLinkHint:'Select the title to open the original article in a new tab.',openOriginal:'Open original article ↗',feedDetailsUnavailable:'No additional feed details are available.',badUrl:'This feed URL is not valid.',newsblur:'NewsBlur',oldReader:'The Old Reader',readwise:'Readwise Reader',
  },
  pt: {
    previewLabel:'PRÉ-VISUALIZAÇÃO',donate:'Doar',defaultPreviewer:"Tornar o pré-visualizador RSS predefinido?",defaultPreviewerEnabled:"O RSS Feed Radar abrirá os feeds compatíveis por predefinição.",defaultPreviewerDisabled:"A abertura predefinida de feeds RSS está desativada.",defaultPreviewerSaveFailed:"Não foi possível guardar esta opção.",readingFrom:'ESTÁS A LER A PARTIR DE',loadingFeed:'A obter as histórias mais recentes deste feed.',curatedForYou:'DIRETAMENTE DA FONTE',latestStories:'Artigos mais recentes',storiesSubtitle:'Artigos recentes, prontos para uma leitura rápida.',articlesLabel:'ARTIGOS',loadingArticles:'A reunir artigos e imagens…',feedUnavailableTitle:'Não foi possível abrir este feed',oembedNotFeedTitle:'Este endereço é de incorporação, não um feed',oembedNotFeedBody:'Este URL devolve metadados oEmbed de um artigo, não um feed RSS. O RSS Feed Radar já exclui estes endereços; abre o verdadeiro feed do site.',youtubeSubscriptionsTitle:'Isto não é um feed RSS público',youtubeSubscriptionsBody:'O YouTube não disponibiliza feeds RSS públicos para estas páginas de navegação nem um único feed para todas as tuas subscrições. Existem feeds públicos por canal ou lista de reprodução; abre a página de um canal ou de uma lista para descobrir o respetivo feed.',feedUnavailableBody:'A fonte pode estar temporariamente indisponível ou bloquear o acesso direto. Podes continuar a copiar o URL ou abri-lo no teu leitor.',rateLimitedTitle:'O Reddit está a limitar temporariamente os pedidos',rateLimitedBody:'O Reddit devolveu HTTP 429, o que significa que está a limitar temporariamente este feed. Aguarda a contagem decrescente antes de tentar novamente; pedidos repetidos podem prolongar a restrição.',retryWait:'Tentar novamente em {seconds}s',tryAgain:'Tentar novamente',noStoriesTitle:'O feed está ligado, mas está silencioso',noStoriesBody:'Foi possível ler os detalhes do feed, mas não contém artigos para pré-visualizar.',sourceNote:'Os artigos são apresentados a partir do feed original. Abre um artigo para o ler no respetivo site.',footerNote:'Segue o que importa. Ignora o ruído.',readyToFollow:'PRONTO PARA SEGUIR?',subscribePrompt:'Subscreve usando os botões abaixo.',copyFeedUrl:'Copiar URL do feed',inoreader:'Inoreader',feedly:'Feedly',copied:'URL do feed copiado',copyFailed:'Não foi possível copiar o URL deste feed',openArticle:'Ler artigo',untitled:'Artigo sem título',feedFallback:'Feed do site',unknownDate:'Data indisponível',authorBy:'Por {author}',countOne:'1 artigo pronto a ler',countMany:'{count} artigos prontos a ler',fontFamily:'Tipo de letra',fontSize:'Tamanho da letra',lineSpacing:'Espaçamento entre linhas',darkMode:'Modo escuro',language:'Idioma',fontSystem:'Sans-serif do sistema',fontSerif:'Serifada · Georgia',fontArial:'Arial',fontVerdana:'Verdana',fontMono:'Monoespaçada · Courier New',readingControls:'Controlos de leitura',feedActions:'Ações do feed',fontInter:'Inter',fontRoboto:'Roboto',fontOpenSans:'Open Sans',fontLato:'Lato',fontMontserrat:'Montserrat',fontNunito:'Nunito',fontTimes:'Times New Roman',fontPalatino:'Palatino',fontGaramond:'Garamond',fontHelvetica:'Helvetica',fontTahoma:'Tahoma',fontTrebuchet:'Trebuchet MS',fontConsolas:'Consolas',fontLucida:'Lucida Console',cardColumns:'Colunas de cartões',subscribeIn:"Subscrever",articlesTab:'Cartões',feedInfoTab:'Lista',feedAddress:'Endereço do feed',websiteAddress:'Site',articlePreview:'PRÉ-VISUALIZAÇÃO DO ARTIGO',close:'Fechar',articleLinkHint:'Seleciona o título para abrir o artigo original num novo separador.',openOriginal:'Abrir artigo original ↗',feedDetailsUnavailable:'Não existem mais detalhes disponíveis sobre este feed.',badUrl:'O URL deste feed não é válido.',newsblur:'NewsBlur',oldReader:'The Old Reader',readwise:'Readwise Reader',
  },
  es: {
    previewLabel:'VISTA PREVIA DEL FEED',donate:'Donar',defaultPreviewer:"¿Usar como visor RSS predeterminado?",defaultPreviewerEnabled:"RSS Feed Radar abrirá los feeds compatibles de forma predeterminada.",defaultPreviewerDisabled:"La apertura predeterminada de feeds RSS está desactivada.",defaultPreviewerSaveFailed:"No se pudo guardar esta opción.",readingFrom:'ESTÁS LEYENDO DESDE',loadingFeed:'Obteniendo las historias más recientes de este feed.',curatedForYou:'DIRECTAMENTE DE LA FUENTE',latestStories:'Últimos artículos',storiesSubtitle:'Artículos recientes, listos para echar un vistazo.',articlesLabel:'ARTÍCULOS',loadingArticles:'Recopilando artículos e imágenes…',feedUnavailableTitle:'No se pudo abrir este feed',oembedNotFeedTitle:'Este enlace es de inserción, no un feed',oembedNotFeedBody:'Esta URL devuelve metadatos oEmbed de un artículo, no un feed RSS. RSS Feed Radar ya excluye estos enlaces; abre el feed real del sitio.',youtubeSubscriptionsTitle:'Esto no es un feed RSS público',youtubeSubscriptionsBody:'YouTube no ofrece feeds RSS públicos para estas páginas de navegación ni un único feed para todas tus suscripciones. Hay feeds públicos para canales y listas de reproducción; abre la página de un canal o una lista para encontrar su feed.',feedUnavailableBody:'La fuente puede no estar disponible temporalmente o bloquear el acceso directo. Aún puedes copiar su URL o abrirlo en tu lector.',rateLimitedTitle:'Reddit está limitando temporalmente las solicitudes',rateLimitedBody:'Reddit devolvió HTTP 429, lo que significa que está limitando temporalmente este feed. Espera a que termine la cuenta atrás antes de volver a intentarlo; las solicitudes repetidas pueden prolongar la restricción.',retryWait:'Reintentar en {seconds}s',tryAgain:'Intentar de nuevo',noStoriesTitle:'El feed está conectado, pero está tranquilo',noStoriesBody:'Pudimos leer los detalles del feed, pero no contiene entradas para mostrar.',sourceNote:'Los artículos se muestran desde la fuente original. Abre uno para leerlo en su sitio web.',footerNote:'Sigue lo que importa. Evita el ruido.',readyToFollow:'¿LISTO PARA SEGUIR?',subscribePrompt:'Suscríbete usando los botones de abajo.',copyFeedUrl:'Copiar URL del feed',inoreader:'Inoreader',feedly:'Feedly',copied:'URL del feed copiada',copyFailed:'No se pudo copiar la URL del feed',openArticle:'Leer artículo',untitled:'Artículo sin título',feedFallback:'Feed del sitio',unknownDate:'Fecha no disponible',authorBy:'Por {author}',countOne:'1 artículo listo para leer',countMany:'{count} artículos listos para leer',fontFamily:'Familia tipográfica',fontSize:'Tamaño de letra',lineSpacing:'Interlineado',darkMode:'Modo oscuro',language:'Idioma',fontSystem:'Sans serif del sistema',fontSerif:'Serif · Georgia',fontArial:'Arial',fontVerdana:'Verdana',fontMono:'Monoespaciada · Courier New',readingControls:'Controles de lectura',feedActions:'Acciones del feed',fontInter:'Inter',fontRoboto:'Roboto',fontOpenSans:'Open Sans',fontLato:'Lato',fontMontserrat:'Montserrat',fontNunito:'Nunito',fontTimes:'Times New Roman',fontPalatino:'Palatino',fontGaramond:'Garamond',fontHelvetica:'Helvetica',fontTahoma:'Tahoma',fontTrebuchet:'Trebuchet MS',fontConsolas:'Consolas',fontLucida:'Lucida Console',cardColumns:'Columnas de tarjetas',subscribeIn:"Suscribirse",articlesTab:'Tarjetas',feedInfoTab:'Lista',feedAddress:'Dirección del feed',websiteAddress:'Sitio web',articlePreview:'VISTA PREVIA DEL ARTÍCULO',close:'Cerrar',articleLinkHint:'Selecciona el título para abrir el artículo original en una pestaña nueva.',openOriginal:'Abrir artículo original ↗',feedDetailsUnavailable:'No hay más detalles disponibles sobre este feed.',badUrl:'La URL de este feed no es válida.',newsblur:'NewsBlur',oldReader:'The Old Reader',readwise:'Readwise Reader',
  },
  it: {
    previewLabel:'ANTEPRIMA DEL FEED',donate:'Dona',defaultPreviewer:"Impostare come visualizzatore RSS predefinito?",defaultPreviewerEnabled:"RSS Feed Radar aprirà i feed supportati per impostazione predefinita.",defaultPreviewerDisabled:"L’apertura predefinita dei feed RSS è disattivata.",defaultPreviewerSaveFailed:"Impossibile salvare questa impostazione.",readingFrom:'STAI LEGGENDO DA',loadingFeed:'Recupero delle storie più recenti da questo feed.',curatedForYou:'DIRETTAMENTE DALLA FONTE',latestStories:'Ultimi articoli',storiesSubtitle:'Articoli recenti, pronti per una rapida lettura.',articlesLabel:'ARTICOLI',loadingArticles:'Raccolta di articoli e immagini…',feedUnavailableTitle:'Impossibile aprire questo feed',oembedNotFeedTitle:'Questo è un endpoint embed, non un feed',oembedNotFeedBody:'Questo URL restituisce metadati oEmbed di un articolo, non un feed RSS. RSS Feed Radar ora esclude questi endpoint; apri il vero feed del sito.',youtubeSubscriptionsTitle:'Questo non è un feed RSS pubblico',youtubeSubscriptionsBody:'YouTube non offre feed RSS pubblici per queste pagine di navigazione né un unico feed per tutte le iscrizioni. Esistono feed pubblici per singoli canali e playlist; apri la pagina di un canale o di una playlist per trovare il feed.',feedUnavailableBody:'La fonte potrebbe essere temporaneamente non disponibile o bloccare l’accesso diretto. Puoi comunque copiare l’URL o aprirlo nel tuo lettore.',rateLimitedTitle:'Reddit sta limitando temporaneamente le richieste',rateLimitedBody:'Reddit ha restituito HTTP 429, quindi sta limitando temporaneamente questo feed. Attendi il conto alla rovescia prima di riprovare; richieste ripetute possono prolungare la limitazione.',retryWait:'Riprova tra {seconds}s',tryAgain:'Riprova',noStoriesTitle:'Il feed è collegato, ma è tranquillo',noStoriesBody:'Abbiamo letto i dettagli del feed, ma non contiene articoli da visualizzare.',sourceNote:'Gli articoli provengono dal feed originale. Aprine uno per leggerlo sul sito web di origine.',footerNote:'Segui ciò che conta. Lascia perdere il rumore.',readyToFollow:'PRONTO A SEGUIRE?',subscribePrompt:'Iscriviti usando i pulsanti qui sotto.',copyFeedUrl:'Copia URL del feed',inoreader:'Inoreader',feedly:'Feedly',copied:'URL del feed copiato',copyFailed:'Impossibile copiare l’URL del feed',openArticle:'Leggi articolo',untitled:'Articolo senza titolo',feedFallback:'Feed del sito',unknownDate:'Data non disponibile',authorBy:'Di {author}',countOne:'1 articolo pronto da leggere',countMany:'{count} articoli pronti da leggere',fontFamily:'Famiglia di caratteri',fontSize:'Dimensione carattere',lineSpacing:'Interlinea',darkMode:'Modalità scura',language:'Lingua',fontSystem:'Sans serif di sistema',fontSerif:'Serif · Georgia',fontArial:'Arial',fontVerdana:'Verdana',fontMono:'Monospazio · Courier New',readingControls:'Controlli di lettura',feedActions:'Azioni del feed',fontInter:'Inter',fontRoboto:'Roboto',fontOpenSans:'Open Sans',fontLato:'Lato',fontMontserrat:'Montserrat',fontNunito:'Nunito',fontTimes:'Times New Roman',fontPalatino:'Palatino',fontGaramond:'Garamond',fontHelvetica:'Helvetica',fontTahoma:'Tahoma',fontTrebuchet:'Trebuchet MS',fontConsolas:'Consolas',fontLucida:'Lucida Console',cardColumns:'Colonne schede',subscribeIn:"Abbonati",articlesTab:'Schede',feedInfoTab:'Elenco',feedAddress:'Indirizzo del feed',websiteAddress:'Sito web',articlePreview:'ANTEPRIMA DELL’ARTICOLO',close:'Chiudi',articleLinkHint:'Seleziona il titolo per aprire l’articolo originale in una nuova scheda.',openOriginal:'Apri articolo originale ↗',feedDetailsUnavailable:'Non sono disponibili ulteriori dettagli sul feed.',badUrl:'L’URL del feed non è valido.',newsblur:'NewsBlur',oldReader:'The Old Reader',readwise:'Readwise Reader',
  },
  fr: {
    previewLabel:'APERÇU DU FLUX',donate:'Faire un don',defaultPreviewer:"Utiliser comme lecteur RSS par défaut ?",defaultPreviewerEnabled:"RSS Feed Radar ouvrira les flux compatibles par défaut.",defaultPreviewerDisabled:"L’ouverture par défaut des flux RSS est désactivée.",defaultPreviewerSaveFailed:"Impossible d’enregistrer ce réglage.",readingFrom:'VOUS LISEZ DEPUIS',loadingFeed:'Récupération des dernières publications de ce flux.',curatedForYou:'DIRECTEMENT DE LA SOURCE',latestStories:'Derniers articles',storiesSubtitle:'Des articles récents, prêts à être parcourus.',articlesLabel:'ARTICLES',loadingArticles:'Récupération des articles et des images…',feedUnavailableTitle:'Impossible d’ouvrir ce flux',oembedNotFeedTitle:'Ceci est un point de terminaison d’intégration, pas un flux',oembedNotFeedBody:'Cette URL renvoie des métadonnées oEmbed d’un article, pas un flux RSS. RSS Feed Radar exclut désormais ces URL ; ouvrez le véritable flux du site.',youtubeSubscriptionsTitle:'Ceci n’est pas un flux RSS public',youtubeSubscriptionsBody:'YouTube ne propose pas de flux RSS public pour ces pages de navigation ni de flux unique pour tous vos abonnements. Des flux publics existent pour les chaînes et les playlists ; ouvrez la page d’une chaîne ou d’une playlist pour trouver son flux.',feedUnavailableBody:'La source est peut-être temporairement indisponible ou bloque l’accès direct. Vous pouvez toujours copier son URL ou l’ouvrir dans votre lecteur.',rateLimitedTitle:'Reddit limite temporairement les requêtes',rateLimitedBody:'Reddit a renvoyé HTTP 429, ce qui signifie que ce flux est temporairement limité. Attendez la fin du compte à rebours avant de réessayer ; des requêtes répétées peuvent prolonger la restriction.',retryWait:'Réessayer dans {seconds}s',tryAgain:'Réessayer',noStoriesTitle:'Le flux est connecté, mais calme',noStoriesBody:'Nous avons pu lire les informations du flux, mais il ne contient aucun article à prévisualiser.',sourceNote:'Les articles proviennent du flux d’origine. Ouvrez un article pour le lire sur son site.',footerNote:'Suivez l’essentiel. Évitez le bruit.',readyToFollow:'PRÊT À SUIVRE ?',subscribePrompt:'Abonnez-vous à l’aide des boutons ci-dessous.',copyFeedUrl:'Copier l’URL du flux',inoreader:'Inoreader',feedly:'Feedly',copied:'URL du flux copiée',copyFailed:'Impossible de copier l’URL du flux',openArticle:'Lire l’article',untitled:'Article sans titre',feedFallback:'Flux du site',unknownDate:'Date indisponible',authorBy:'Par {author}',countOne:'1 article prêt à lire',countMany:'{count} articles prêts à lire',fontFamily:'Police de caractères',fontSize:'Taille du texte',lineSpacing:'Interligne',darkMode:'Mode sombre',language:'Langue',fontSystem:'Sans serif système',fontSerif:'Serif · Georgia',fontArial:'Arial',fontVerdana:'Verdana',fontMono:'Monospace · Courier New',readingControls:'Commandes de lecture',feedActions:'Actions du flux',fontInter:'Inter',fontRoboto:'Roboto',fontOpenSans:'Open Sans',fontLato:'Lato',fontMontserrat:'Montserrat',fontNunito:'Nunito',fontTimes:'Times New Roman',fontPalatino:'Palatino',fontGaramond:'Garamond',fontHelvetica:'Helvetica',fontTahoma:'Tahoma',fontTrebuchet:'Trebuchet MS',fontConsolas:'Consolas',fontLucida:'Lucida Console',cardColumns:'Colonnes de cartes',subscribeIn:"S’abonner",articlesTab:'Cartes',feedInfoTab:'Liste',feedAddress:'Adresse du flux',websiteAddress:'Site web',articlePreview:'APERÇU DE L’ARTICLE',close:'Fermer',articleLinkHint:'Sélectionnez le titre pour ouvrir l’article original dans un nouvel onglet.',openOriginal:'Ouvrir l’article original ↗',feedDetailsUnavailable:'Aucun autre détail sur ce flux n’est disponible.',badUrl:'L’URL de ce flux n’est pas valide.',newsblur:'NewsBlur',oldReader:'The Old Reader',readwise:'Readwise Reader',
  },
  de: {
    previewLabel:'FEED-VORSCHAU',donate:'Spenden',defaultPreviewer:"Als standardmäßige RSS-Vorschau verwenden?",defaultPreviewerEnabled:"RSS Feed Radar öffnet unterstützte Feeds standardmäßig.",defaultPreviewerDisabled:"Das standardmäßige Öffnen von RSS-Feeds ist deaktiviert.",defaultPreviewerSaveFailed:"Diese Einstellung konnte nicht gespeichert werden.",readingFrom:'DU LIEST AUS',loadingFeed:'Die neuesten Beiträge dieses Feeds werden abgerufen.',curatedForYou:'DIREKT AUS DER QUELLE',latestStories:'Neueste Artikel',storiesSubtitle:'Aktuelle Beiträge zum schnellen Durchstöbern.',articlesLabel:'ARTIKEL',loadingArticles:'Beiträge und Bilder werden geladen…',feedUnavailableTitle:'Dieser Feed konnte nicht geöffnet werden',oembedNotFeedTitle:'Dies ist ein Embed-Endpunkt, kein Feed',oembedNotFeedBody:'Diese URL liefert oEmbed-Metadaten zu einem Artikel, keinen RSS-Feed. RSS Feed Radar filtert solche Endpunkte jetzt heraus; öffne stattdessen den tatsächlichen Website-Feed.',youtubeSubscriptionsTitle:'Dies ist kein öffentlicher RSS-Feed',youtubeSubscriptionsBody:'YouTube bietet für diese Navigationsseiten keinen öffentlichen RSS-Feed und keinen gemeinsamen Feed für alle Abonnements. Öffentliche Feeds gibt es für einzelne Kanäle und Playlists; öffne eine Kanal- oder Playlistseite, um den Feed zu finden.',feedUnavailableBody:'Die Quelle ist möglicherweise vorübergehend nicht verfügbar oder blockiert den direkten Zugriff. Du kannst die URL trotzdem kopieren oder im Reader öffnen.',rateLimitedTitle:'Reddit begrenzt Anfragen vorübergehend',rateLimitedBody:'Reddit hat HTTP 429 zurückgegeben. Dieser Feed wird daher vorübergehend gedrosselt. Warte den Countdown ab, bevor du es erneut versuchst; wiederholte Anfragen können die Sperre verlängern.',retryWait:'Erneut versuchen in {seconds}s',tryAgain:'Erneut versuchen',noStoriesTitle:'Der Feed ist verbunden, aber ruhig',noStoriesBody:'Die Feed-Details konnten gelesen werden, aber es gibt keine Beiträge zur Vorschau.',sourceNote:'Die Beiträge stammen aus dem ursprünglichen Feed. Öffne einen Artikel, um ihn auf der Originalwebsite zu lesen.',footerNote:'Folge dem Wesentlichen. Lass den Lärm weg.',readyToFollow:'BEREIT ZUM FOLGEN?',subscribePrompt:'Abonniere über die Schaltflächen unten.',copyFeedUrl:'Feed-URL kopieren',inoreader:'Inoreader',feedly:'Feedly',copied:'Feed-URL kopiert',copyFailed:'Feed-URL konnte nicht kopiert werden',openArticle:'Artikel lesen',untitled:'Artikel ohne Titel',feedFallback:'Website-Feed',unknownDate:'Datum nicht verfügbar',authorBy:'Von {author}',countOne:'1 Artikel zum Lesen bereit',countMany:'{count} Artikel zum Lesen bereit',fontFamily:'Schriftfamilie',fontSize:'Schriftgröße',lineSpacing:'Zeilenabstand',darkMode:'Dunkelmodus',language:'Sprache',fontSystem:'System-Sans-Serif',fontSerif:'Serif · Georgia',fontArial:'Arial',fontVerdana:'Verdana',fontMono:'Monospace · Courier New',readingControls:'Lesesteuerung',feedActions:'Feed-Aktionen',fontInter:'Inter',fontRoboto:'Roboto',fontOpenSans:'Open Sans',fontLato:'Lato',fontMontserrat:'Montserrat',fontNunito:'Nunito',fontTimes:'Times New Roman',fontPalatino:'Palatino',fontGaramond:'Garamond',fontHelvetica:'Helvetica',fontTahoma:'Tahoma',fontTrebuchet:'Trebuchet MS',fontConsolas:'Consolas',fontLucida:'Lucida Console',cardColumns:'Kartenspalten',subscribeIn:"Abonnieren",articlesTab:'Karten',feedInfoTab:'Liste',feedAddress:'Feed-Adresse',websiteAddress:'Website',articlePreview:'ARTIKELVORSCHAU',close:'Schließen',articleLinkHint:'Wähle den Titel, um den Originalartikel in einem neuen Tab zu öffnen.',openOriginal:'Originalartikel öffnen ↗',feedDetailsUnavailable:'Für diesen Feed sind keine weiteren Details verfügbar.',badUrl:'Diese Feed-URL ist ungültig.',newsblur:'NewsBlur',oldReader:'The Old Reader',readwise:'Readwise Reader',
  }
};

const params = new URLSearchParams(location.search);
const localeMap = {en:'en-US',pt:'pt-PT',es:'es-ES',it:'it-IT',fr:'fr-FR',de:'de-DE'};
const storedLanguage = (() => { try { return localStorage.getItem('rssFeedRadarReaderLanguage'); } catch (_) { return null; } })();
let language = DICTIONARY[storedLanguage] ? storedLanguage : (DICTIONARY[params.get('language')] ? params.get('language') : 'en');
let t = DICTIONARY[language];
let locale = localeMap[language] || 'en-US';
const initialTitle = (params.get('title') || '').trim();
let feedUrl = safeUrl(params.get('url') || '');
let toastTimer = 0;
let lastFeedData = null;
let isRateLimitedError = false;
let readerSettings;

const $ = (selector) => document.querySelector(selector);
const feedTitleEl = $('#feedTitle');
const feedDescriptionEl = $('#feedDescription');
const feedUrlEl = $('#feedUrl');
const storiesGrid = $('#storiesGrid');
const loadingState = $('#loadingState');
const errorState = $('#errorState');
const emptyState = $('#emptyState');
const storyCountEl = $('#storyCount');
const storiesSubtitle = $('#storiesSubtitle');
const sourceNote = $('#sourceNote');
const toast = $('#toast');

function safeUrl(raw, base = undefined) {
  try {
    const parsed = base ? new URL(raw, base) : new URL(raw);
    if (!['http:', 'https:'].includes(parsed.protocol)) return '';
    parsed.username = '';
    parsed.password = '';
    return parsed.href;
  } catch (_) { return ''; }
}
function translate(key, vars = {}) {
  let value = t[key] || DICTIONARY.en[key] || key;
  for (const [name, content] of Object.entries(vars)) value = value.replaceAll(`{${name}}`, String(content));
  return value;
}
const FONT_FAMILIES = {
  // Use installed, broadly available families so choices visibly apply offline in an extension page.
  system: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  inter: 'Arial, Helvetica, sans-serif',
  roboto: '"Segoe UI", Tahoma, sans-serif',
  opensans: 'Verdana, Geneva, sans-serif',
  lato: '"Trebuchet MS", Arial, sans-serif',
  montserrat: 'Tahoma, Geneva, sans-serif',
  nunito: '"Arial Rounded MT Bold", "Trebuchet MS", sans-serif',
  serif: 'Georgia, "Times New Roman", serif', times: '"Times New Roman", Times, serif', palatino: 'Palatino, "Palatino Linotype", serif', garamond: 'Garamond, "Times New Roman", serif',
  arial: 'Arial, Helvetica, sans-serif', helvetica: 'Helvetica, Arial, sans-serif', tahoma: 'Tahoma, Geneva, sans-serif', verdana: 'Verdana, Geneva, sans-serif', trebuchet: '"Trebuchet MS", sans-serif',
  mono: '"Courier New", Courier, monospace', consolas: 'Consolas, "Courier New", monospace', lucida: '"Lucida Console", Monaco, monospace',
};
const DEFAULT_READER_SETTINGS = { fontFamily: 'system', fontSize: 16, lineSpacing: 1.6, darkMode: false, layout: 'articles', cardColumns: 2 };
function loadReaderSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem('rssFeedRadarReaderSettings') || '{}');
    return {
      fontFamily: FONT_FAMILIES[stored.fontFamily] ? stored.fontFamily : DEFAULT_READER_SETTINGS.fontFamily,
      fontSize: Number.isFinite(Number(stored.fontSize)) ? Math.min(22, Math.max(13, Number(stored.fontSize))) : DEFAULT_READER_SETTINGS.fontSize,
      lineSpacing: Number.isFinite(Number(stored.lineSpacing)) ? Math.min(2.1, Math.max(1.2, Number(stored.lineSpacing))) : DEFAULT_READER_SETTINGS.lineSpacing,
      darkMode: Boolean(stored.darkMode),
      layout: stored.layout === 'info' ? 'info' : 'articles',
      cardColumns: Number.isFinite(Number(stored.cardColumns)) ? Math.min(5, Math.max(1, Math.round(Number(stored.cardColumns)))) : DEFAULT_READER_SETTINGS.cardColumns,
    };
  } catch (_) { return { ...DEFAULT_READER_SETTINGS }; }
}
function saveReaderSettings() {
  try { localStorage.setItem('rssFeedRadarReaderSettings', JSON.stringify(readerSettings)); } catch (_) { /* Private browsing may disable local storage. */ }
}
function applyReaderSettings() {
  const fontFamilySelect = $('#fontFamilySelect');
  const fontSizeSlider = $('#fontSizeSlider');
  const lineSpacingSlider = $('#lineSpacingSlider');
  const fontSizeValue = $('#fontSizeValue');
  const lineSpacingValue = $('#lineSpacingValue');
  const darkModeButton = $('#darkModeButton');
  if (fontFamilySelect) fontFamilySelect.value = readerSettings.fontFamily;
  syncFontFamilyDropdown();
  if (fontSizeSlider) fontSizeSlider.value = String(readerSettings.fontSize);
  if (lineSpacingSlider) lineSpacingSlider.value = String(readerSettings.lineSpacing);
  if (fontSizeValue) fontSizeValue.value = `${readerSettings.fontSize}px`;
  if (lineSpacingValue) lineSpacingValue.value = `${Number(readerSettings.lineSpacing).toFixed(1)}×`;
  document.documentElement.style.setProperty('--reading-font', FONT_FAMILIES[readerSettings.fontFamily] || FONT_FAMILIES.system);
  document.documentElement.style.setProperty('--reading-size', `${readerSettings.fontSize}px`);
  document.documentElement.style.setProperty('--reading-line-height', String(readerSettings.lineSpacing));
  document.body.classList.toggle('dark-mode', readerSettings.darkMode);
  document.documentElement.style.setProperty('--card-columns', String(readerSettings.cardColumns));
  const columnsSelect = $('#cardColumnsSelect');
  if (columnsSelect) columnsSelect.value = String(readerSettings.cardColumns);
  syncCardColumnsDropdown();
  if (darkModeButton) {
    darkModeButton.setAttribute('aria-pressed', String(readerSettings.darkMode));
    darkModeButton.classList.toggle('is-active', readerSettings.darkMode);
  }
}
function syncFontFamilyDropdown() {
  const menu = $('#fontFamilyMenu');
  const current = $('#fontFamilyCurrent');
  const selected = menu?.querySelector(`[data-font-option="${readerSettings.fontFamily}"]`);
  if (selected && current) current.textContent = selected.textContent.trim();
  menu?.querySelectorAll('[data-font-option]').forEach((option) => {
    const active = option.dataset.fontOption === readerSettings.fontFamily;
    option.classList.toggle('is-selected', active);
    option.setAttribute('aria-checked', String(active));
  });
}
function setFontFamilyMenuOpen(open) {
  const menu = $('#fontFamilyMenu');
  const button = $('#fontFamilyButton');
  if (!menu || !button) return;
  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
  if (open) menu.querySelector(`[data-font-option="${readerSettings.fontFamily}"]`)?.focus();
}
function syncCardColumnsDropdown() {
  const value = String(readerSettings.cardColumns);
  const current = $('#cardColumnsCurrent');
  const menu = $('#cardColumnsMenu');
  if (current) current.textContent = value;
  menu?.querySelectorAll('[data-columns-option]').forEach(option => {
    const active = option.dataset.columnsOption === value;
    option.classList.toggle('is-selected', active);
    option.setAttribute('aria-checked', String(active));
  });
}
function setCardColumnsMenuOpen(open) {
  const menu = $('#cardColumnsMenu');
  const button = $('#cardColumnsButton');
  if (!menu || !button) return;
  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
  if (open) menu.querySelector(`[data-columns-option="${readerSettings.cardColumns}"]`)?.focus();
}
function syncReaderLanguageDropdown() {
  const menu = $('#readerLanguageMenu');
  const current = $('#readerLanguageCurrent');
  const selected = menu?.querySelector(`[data-language-option="${language}"]`);
  if (selected && current) current.textContent = selected.textContent.trim();
  menu?.querySelectorAll('[data-language-option]').forEach((option) => {
    const active = option.dataset.languageOption === language;
    option.classList.toggle('is-selected', active);
    option.setAttribute('aria-checked', String(active));
  });
}
function setReaderLanguageMenuOpen(open) {
  const menu = $('#readerLanguageMenu');
  const button = $('#readerLanguageButton');
  if (!menu || !button) return;
  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
  if (open) menu.querySelector(`[data-language-option="${language}"]`)?.focus();
}
function setLanguage(nextLanguage) {
  if (!DICTIONARY[nextLanguage]) return;
  language = nextLanguage;
  t = DICTIONARY[language];
  locale = localeMap[language] || 'en-US';
  try { localStorage.setItem('rssFeedRadarReaderLanguage', language); } catch (_) { /* Ignore unavailable local storage. */ }
  try { chrome.storage?.local?.set({ rssFeedRadarLanguage: language }); } catch (_) { /* Sync with the extension popup when available. */ }
  const nextParams = new URLSearchParams(location.search);
  nextParams.set('language', language);
  try { history.replaceState(null, '', `${location.pathname}?${nextParams.toString()}${location.hash}`); } catch (_) { /* Ignore restricted history changes. */ }
  applyTranslations();
}
function applyTranslations() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', translate(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.setAttribute('title', translate(element.dataset.i18nTitle));
  });
  const languageSelect = $('#readerLanguageSelect');
  if (languageSelect) languageSelect.value = language;
  syncReaderLanguageDropdown();
  syncFontFamilyDropdown();
  if (isRateLimitedError) {
    const errorTitle = $('#errorTitle');
    const errorMessage = $('#errorMessage');
    if (errorTitle) errorTitle.textContent = translate('rateLimitedTitle');
    if (errorMessage) errorMessage.textContent = translate('rateLimitedBody');
  }
  document.title = `${lastFeedData?.title || initialTitle || translate('feedFallback')} — RSS Feed Radar`;
  if (lastFeedData) {
    feedTitleEl.textContent = lastFeedData.title || initialTitle || hostname(feedUrl) || translate('feedFallback');
    feedDescriptionEl.textContent = lastFeedData.description || `${hostname(lastFeedData.homeUrl || feedUrl)} · ${lastFeedData.items.length === 1 ? translate('countOne') : translate('countMany', { count: lastFeedData.items.length })}`;
    storyCountEl.textContent = String(lastFeedData.items.length);
    if (storiesSubtitle) storiesSubtitle.textContent = lastFeedData.items.length === 1 ? translate('countOne') : translate('countMany', { count: lastFeedData.items.length });
    if (lastFeedData.items.length) {
      renderStories(lastFeedData.items, feedUrl);
      sourceNote.hidden = false;
      emptyState.hidden = true;
    } else {
      storiesGrid.replaceChildren();
      loadingState.hidden = true;
      errorState.hidden = true;
      emptyState.hidden = false;
      sourceNote.hidden = true;
    }
  }
}
function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle('error', isError);
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2300);
}
let retryCountdownInterval = 0;

function resetRetryButton() {
  if (retryCountdownInterval) clearInterval(retryCountdownInterval);
  retryCountdownInterval = 0;
  const button = $('#retryButton');
  if (!button) return;
  button.disabled = false;
  button.textContent = translate('tryAgain');
}

function startRetryCountdown(seconds) {
  resetRetryButton();
  const button = $('#retryButton');
  if (!button) return;
  const retryAt = Date.now() + Math.max(5, Math.min(3600, Number(seconds) || 60)) * 1000;
  const update = () => {
    const remaining = Math.max(0, Math.ceil((retryAt - Date.now()) / 1000));
    if (remaining <= 0) {
      resetRetryButton();
      return;
    }
    button.disabled = true;
    button.textContent = translate('retryWait', { seconds: remaining });
  };
  update();
  retryCountdownInterval = setInterval(update, 1000);
}

function getRetryAfterSeconds(response) {
  const raw = response?.headers?.get('Retry-After');
  if (raw) {
    const numeric = Number(raw);
    if (Number.isFinite(numeric) && numeric > 0) return Math.max(5, Math.min(3600, Math.ceil(numeric)));
    const timestamp = Date.parse(raw);
    if (Number.isFinite(timestamp)) return Math.max(5, Math.min(3600, Math.ceil((timestamp - Date.now()) / 1000)));
  }
  // Reddit sometimes omits Retry-After on RSS throttling responses. Use a
  // cautious cooldown rather than immediately issuing another blocked request.
  return 60;
}

function isYouTubeSubscriptionsPageUrl(raw) {
  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    return ['youtube.com', 'm.youtube.com', 'music.youtube.com'].includes(host) && (
      /^\/feed(?:\/|$)/i.test(url.pathname) ||
      /^\/subscription_manager\/?$/i.test(url.pathname)
    );
  } catch (_) { return false; }
}

function isOEmbedUrl(raw) {
  try {
    const url = new URL(raw);
    const route = decodeURIComponent(url.pathname).toLowerCase();
    const restRoute = (url.searchParams.get('rest_route') || '').toLowerCase();
    return /(?:^|\/)oembed(?:\/|\.|$)/i.test(route)
      || /(?:^|\/)oembed(?:\/|$)/i.test(restRoute)
      || (/\/(?:embed|oembed)\/?$/i.test(route)
        && url.searchParams.has('url')
        && (url.searchParams.has('format') || /\.(?:xml|json)$/i.test(url.pathname)));
  } catch (_) { return /(?:wp-json\/oembed|oembed\/1\.0\/embed)/i.test(String(raw || '')); }
}

function hostname(raw) {
  try { return new URL(raw).hostname.replace(/^www\./i, ''); } catch (_) { return ''; }
}
function normalizeText(value) {
  return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}
function htmlToText(value) {
  if (!value) return '';
  const doc = new DOMParser().parseFromString(String(value), 'text/html');
  doc.querySelectorAll('script,style,noscript,svg,iframe,form').forEach(node => node.remove());
  return normalizeText(doc.body.textContent || '');
}

// Convert feed article markup to plain-text paragraphs without rendering feed HTML.
// Preserve block boundaries while keeping scripts and embedded markup out.
function articleTextWithParagraphs(value) {
  if (!value) return '';
  const raw = String(value);
  const doc = new DOMParser().parseFromString(raw, 'text/html');
  doc.querySelectorAll('script,style,noscript,svg,iframe,form,nav,footer,header').forEach(node => node.remove());
  const blockSelector = 'p,li,blockquote,pre,h1,h2,h3,h4,h5,h6,dt,dd,figcaption,tr,div,section,article';
  const blocks = Array.from(doc.body.querySelectorAll(blockSelector)).filter(node => !node.querySelector(blockSelector));
  let paragraphs = blocks.map(node => normalizeText(node.textContent)).filter(Boolean);
  if (!paragraphs.length) {
    const text = (doc.body.textContent || '').replace(/\u00a0/g, ' ').trim();
    paragraphs = text.split(/\n[ \t]*\n+/).map(normalizeText).filter(Boolean);
  }
  if (!paragraphs.length) {
    paragraphs = raw.replace(/<br\s*\/?\s*>/gi, '\n').replace(/<\/p\s*>/gi, '\n\n').replace(/<[^>]*>/g, ' ').split(/\n+/).map(normalizeText).filter(Boolean);
  }
  return paragraphs.join('\n\n') || normalizeText(raw);
}
function firstImageFromHtml(value, base) {
  if (!value) return '';
  const doc = new DOMParser().parseFromString(String(value), 'text/html');
  const node = doc.querySelector('img[src], img[data-src], source[srcset]');
  if (!node) return '';
  let raw = node.getAttribute('src') || node.getAttribute('data-src') || '';
  if (!raw && node.getAttribute('srcset')) raw = node.getAttribute('srcset').split(',')[0].trim().split(/\s+/)[0];
  return safeUrl(raw, base);
}
function getDirectChildren(node) {
  return Array.from(node?.children || []);
}
function directChild(node, names) {
  const wanted = new Set(names.map(name => name.toLowerCase()));
  return getDirectChildren(node).find(child => wanted.has((child.localName || child.nodeName || '').toLowerCase())) || null;
}
function directText(node, names) {
  const child = directChild(node, names);
  return child ? normalizeText(child.textContent) : '';
}
function descendants(node, names) {
  const wanted = new Set(names.map(name => name.toLowerCase()));
  return Array.from(node?.getElementsByTagName('*') || []).filter(child => wanted.has((child.localName || child.nodeName || '').toLowerCase()));
}
function descendantText(node, names) {
  const found = descendants(node, names)[0];
  return found ? normalizeText(found.textContent) : '';
}
function elementValue(node) {
  if (!node) return '';
  return normalizeText(node.textContent);
}
function xmlItemImage(item, base, contentHtml) {
  const inBody = firstImageFromHtml(contentHtml, base);
  if (inBody) return inBody;
  const candidates = descendants(item, ['thumbnail', 'content', 'enclosure']);
  for (const candidate of candidates) {
    const raw = candidate.getAttribute('url') || candidate.getAttribute('href');
    const type = (candidate.getAttribute('type') || '').toLowerCase();
    const medium = (candidate.getAttribute('medium') || '').toLowerCase();
    if (!raw) continue;
    if (candidate.localName.toLowerCase() === 'thumbnail' || type.startsWith('image/') || medium === 'image' || /\.(?:png|jpe?g|gif|webp|avif|svg)(?:$|[?#])/i.test(raw)) {
      const safe = safeUrl(raw, base);
      if (safe) return safe;
    }
  }
  return '';
}
function parseDate(raw) {
  if (!raw) return null;
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}
function formatDate(raw) {
  const date = parseDate(raw);
  if (!date) return '';
  try { return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(date); }
  catch (_) { return date.toLocaleDateString(); }
}
function trimSummary(value, max = 300) {
  const text = normalizeText(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
}
function parseJsonFeed(data, base) {
  const items = Array.isArray(data.items) ? data.items.filter(item => item && typeof item === 'object') : [];
  return {
    title: normalizeText(data.title),
    description: htmlToText(data.description || data.summary || ''),
    homeUrl: safeUrl(data.home_page_url || '', base),
    image: safeUrl(data.banner_image || data.icon || data.favicon || '', base),
    items: items.slice(0, 24).map(item => {
      const body = item.content_html || item.content_text || item.summary || '';
      const attachments = Array.isArray(item.attachments) ? item.attachments : [];
      let image = safeUrl(item.image || item.banner_image || '', base) || firstImageFromHtml(item.content_html || item.summary || '', base);
      if (!image) {
        const attachment = attachments.find(att => att && String(att.mime_type || '').toLowerCase().startsWith('image/'));
        if (attachment) image = safeUrl(attachment.url, base);
      }
      const authors = Array.isArray(item.authors) ? item.authors.map(author => author && author.name).filter(Boolean).join(', ') : '';
      return { title: normalizeText(item.title) || translate('untitled'), url: safeUrl(item.url || item.external_url || '', base), summary: trimSummary(item.summary || item.content_text || htmlToText(item.content_html || ''), 340), content: articleTextWithParagraphs(item.content_html || item.content_text || item.summary || ''), image, date: item.date_published || item.date_modified || '', author: normalizeText(authors) };
    }),
  };
}
function parseXmlFeed(text, base) {
  const xml = new DOMParser().parseFromString(text, 'application/xml');
  if (xml.querySelector('parsererror')) throw new Error('The feed response is not valid XML.');
  const root = xml.documentElement;
  const rootName = (root.localName || '').toLowerCase();
  const channel = directChild(root, ['channel']) || root;
  const title = directText(channel, ['title']) || directText(root, ['title']);
  const description = htmlToText(directText(channel, ['description', 'subtitle']) || directText(root, ['subtitle']));
  const homeLinkEl = directChild(channel, ['link']) || directChild(root, ['link']);
  const homeRaw = homeLinkEl?.getAttribute('href') || elementValue(homeLinkEl);
  const logoElement = directChild(channel, ['image']) || directChild(root, ['logo', 'icon']);
  const logoRaw = logoElement ? (directText(logoElement, ['url']) || elementValue(logoElement)) : '';
  let entryNodes = [];
  if (rootName === 'feed' || rootName === 'rdf') entryNodes = getDirectChildren(root).filter(node => ['entry', 'item'].includes((node.localName || '').toLowerCase()));
  if (!entryNodes.length) entryNodes = getDirectChildren(channel).filter(node => ['item', 'entry'].includes((node.localName || '').toLowerCase()));
  if (!entryNodes.length) entryNodes = descendants(root, ['item', 'entry']).slice(0, 24);

  const items = entryNodes.slice(0, 24).map(item => {
    const titleText = directText(item, ['title']) || translate('untitled');
    const linkNode = getDirectChildren(item).find(node => (node.localName || '').toLowerCase() === 'link' && (!node.getAttribute('rel') || node.getAttribute('rel') === 'alternate')) || directChild(item, ['link']);
    const linkRaw = linkNode?.getAttribute('href') || elementValue(linkNode);
    const bodyNodes = getDirectChildren(item).filter(node => ['encoded', 'content', 'description', 'summary'].includes((node.localName || '').toLowerCase()));
    const bodyMarkup = bodyNodes.map(node => ((node.getAttribute('type') || '').toLowerCase() === 'xhtml') ? node.innerHTML : node.textContent).join(' ');
    const summaryNode = directChild(item, ['summary', 'description']) || directChild(item, ['content', 'encoded']);
    const desc = summaryNode ? summaryNode.textContent : bodyMarkup;
    const date = directText(item, ['published', 'pubdate', 'updated', 'date', 'issued', 'modified']);
    const author = directText(item, ['creator', 'author', 'name']) || descendantText(directChild(item, ['author']), ['name']);
    return { title: titleText, url: safeUrl(linkRaw, base), summary: trimSummary(htmlToText(desc), 340), content: articleTextWithParagraphs(bodyMarkup || desc), image: xmlItemImage(item, base, bodyMarkup || desc), date, author };
  });
  return { title, description, homeUrl: safeUrl(homeRaw, base), image: safeUrl(logoRaw, base), items };
}
function extractFeed(text, base) {
  const trimmed = String(text || '').trim();
  if (!trimmed) throw new Error('Empty feed response.');
  if (/^\s*[\[{]/.test(trimmed)) {
    try {
      const json = JSON.parse(trimmed);
      if (json && Array.isArray(json.items) && (json.version || json.title || json.items.length >= 0)) return parseJsonFeed(json, base);
    } catch (_) { /* XML parse below will provide a useful error. */ }
  }
  if (/<(?:rss|rdf:rdf|feed)\b/i.test(trimmed.slice(0, 12000))) return parseXmlFeed(trimmed, base);
  // Some feeds are served with a BOM or whitespace before XML declarations.
  const xmlResult = parseXmlFeed(trimmed.replace(/^\uFEFF/, ''), base);
  if (xmlResult.items.length || xmlResult.title) return xmlResult;
  throw new Error('The URL did not return a recognizable RSS, Atom, or JSON Feed document.');
}
async function fetchFeed() {
  resetRetryButton();
  isRateLimitedError = false;
  lastFeedData = null;
  storiesGrid.replaceChildren();
  loadingState.hidden = false;
  errorState.hidden = true;
  emptyState.hidden = true;
  sourceNote.hidden = true;
  storyCountEl.textContent = '—';
  if (!feedUrl) {
    loadingState.hidden = true;
    errorState.hidden = false;
    feedTitleEl.textContent = initialTitle || translate('feedFallback');
    $('#errorMessage').textContent = translate('badUrl');
    return;
  }
  feedUrlEl.href = feedUrl;
  feedUrlEl.textContent = feedUrl;
  $('#footerHost').textContent = hostname(feedUrl);
  $('#footerHost').title = hostname(feedUrl);
  feedTitleEl.textContent = initialTitle || hostname(feedUrl) || translate('feedFallback');
  feedDescriptionEl.textContent = translate('loadingFeed');

  // YouTube's subscriptions route is an authenticated HTML page, not an RSS feed.
  // Guard against stale or manually supplied preview URLs instead of surfacing a misleading HTTP 401.
  if (isOEmbedUrl(feedUrl)) {
    loadingState.hidden = true;
    errorState.hidden = false;
    $('#errorTitle').textContent = translate('oembedNotFeedTitle');
    $('#errorMessage').textContent = translate('oembedNotFeedBody');
    storyCountEl.textContent = '—';
    if (storiesSubtitle) storiesSubtitle.textContent = translate('storiesSubtitle');
    return;
  }

  if (isYouTubeSubscriptionsPageUrl(feedUrl)) {
    loadingState.hidden = true;
    errorState.hidden = false;
    $('#errorTitle').textContent = translate('youtubeSubscriptionsTitle');
    $('#errorMessage').textContent = translate('youtubeSubscriptionsBody');
    storyCountEl.textContent = '—';
    if (storiesSubtitle) storiesSubtitle.textContent = translate('storiesSubtitle');
    return;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 18000);
    let response;
    try {
      response = await fetch(feedUrl, {
        method: 'GET', redirect: 'follow', credentials: 'omit', cache: 'no-store', signal: controller.signal,
        headers: { Accept: 'application/feed+json, application/json, application/atom+xml, application/rss+xml, application/xml, text/xml, */*;q=0.6' }
      });
    } finally { clearTimeout(timeoutId); }
    if (response.status === 429) {
      const error = new Error('The feed server returned HTTP 429.');
      error.code = 'RATE_LIMITED';
      error.retryAfterSeconds = getRetryAfterSeconds(response);
      throw error;
    }
    if (!response.ok) {
      const error = new Error(`The feed server returned HTTP ${response.status}.`);
      error.status = response.status;
      throw error;
    }
    const text = (await response.text()).slice(0, 4_000_000);
    const data = extractFeed(text, response.url || feedUrl);
    lastFeedData = data;
    if (data.title) feedTitleEl.textContent = data.title;
    document.title = `${data.title || initialTitle || translate('feedFallback')} — RSS Feed Radar Reader`;
    if (data.description) feedDescriptionEl.textContent = data.description;
    else feedDescriptionEl.textContent = `${hostname(data.homeUrl || feedUrl)} · ${translate('countMany', {count: data.items.length})}`;
    $('#feedInfoTitle').textContent = data.title || hostname(feedUrl);
    $('#feedInfoDescription').textContent = data.description || translate('feedDetailsUnavailable');
    // These optional detail fields are not present in every reader layout.
    // Never let absent optional UI elements turn a successful feed fetch into an error.
    const feedInfoUrlEl = $('#feedInfoUrl');
    const feedInfoHomeEl = $('#feedInfoHome');
    if (feedInfoUrlEl) feedInfoUrlEl.textContent = feedUrl;
    if (feedInfoHomeEl) feedInfoHomeEl.textContent = data.homeUrl || '—';
    feedUrlEl.href = feedUrl;
    feedUrlEl.textContent = feedUrl;
    if (data.items.length) {
      storyCountEl.textContent = String(data.items.length);
      if (storiesSubtitle) storiesSubtitle.textContent = data.items.length === 1 ? translate('countOne') : translate('countMany', { count: data.items.length });
      renderStories(data.items, feedUrl);
      sourceNote.hidden = false;
    } else {
      storyCountEl.textContent = '0';
      loadingState.hidden = true;
      emptyState.hidden = false;
      if (storiesSubtitle) storiesSubtitle.textContent = translate('storiesSubtitle');
    }
  } catch (error) {
    loadingState.hidden = true;
    errorState.hidden = false;
    if (error?.code === 'RATE_LIMITED' || error?.status === 429 || /HTTP 429/.test(error?.message || '')) {
      isRateLimitedError = true;
      $('#errorTitle').textContent = translate('rateLimitedTitle');
      $('#errorMessage').textContent = translate('rateLimitedBody');
      startRetryCountdown(error?.retryAfterSeconds || 60);
    } else {
      isRateLimitedError = false;
      $('#errorTitle').textContent = translate('feedUnavailableTitle');
      $('#errorMessage').textContent = `${translate('feedUnavailableBody')} (${error?.message || 'Network error'})`;
    }
    storyCountEl.textContent = '—';
    if (storiesSubtitle) storiesSubtitle.textContent = translate('storiesSubtitle');
  } finally {
    loadingState.hidden = true;
  }
}
function placeholderMarkup() {
  return '<div class="story-placeholder" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none"><rect x="10" y="12" width="44" height="40" rx="8" stroke="currentColor" stroke-width="2.5"/><circle cx="24" cy="25" r="4" fill="currentColor" opacity=".7"/><path d="m14 46 13-13 8 8 6-6 9 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
}
function renderStories(items, base) {
  storiesGrid.replaceChildren();
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const card = document.createElement('article'); card.className = 'story-card';
    card.tabIndex = 0; card.setAttribute('role', 'button');
    const imageWrap = document.createElement('div'); imageWrap.className = 'story-image-wrap'; imageWrap.innerHTML = placeholderMarkup();
    if (item.image) { const img = document.createElement('img'); img.className = 'story-image'; img.alt = ''; img.loading = index < 3 ? 'eager' : 'lazy'; img.decoding = 'async'; img.referrerPolicy = 'no-referrer'; img.addEventListener('load', () => imageWrap.classList.add('has-image'), { once: true }); img.addEventListener('error', () => { img.remove(); imageWrap.classList.remove('has-image'); }, { once: true }); img.src = item.image; imageWrap.prepend(img); }
    const content = document.createElement('div'); content.className = 'story-content';
    const meta = document.createElement('div'); meta.className = 'story-meta';
    const date = document.createElement('span'); date.className = 'story-date'; date.textContent = formatDate(item.date) || translate('unknownDate'); meta.appendChild(date);
    if (item.author) { const dot = document.createElement('span'); dot.className = 'meta-dot'; const author = document.createElement('span'); author.className = 'story-author'; author.textContent = item.author; author.title = item.author; meta.append(dot, author); }
    const title = document.createElement('h3'); title.className = 'story-title'; title.textContent = item.title || translate('untitled');
    content.append(meta, title);
    if (item.summary) { const summary = document.createElement('p'); summary.className = 'story-summary'; summary.textContent = item.summary; content.appendChild(summary); }
    const read = document.createElement('span'); read.className = 'story-read'; read.append(document.createTextNode(translate('openArticle'))); read.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8"/></svg>'); content.appendChild(read);
    const articleUrl = () => safeUrl(item.url, base);
    const open = () => openArticleModal(item, articleUrl());
    card.addEventListener('click', event => {
      if (event.button !== 0) return;
      open();
    });
    // Use mousedown so opening the original stays within the user's direct mouse gesture.
    // Handle the middle button on mousedown for consistent browser activation.
    card.addEventListener('mousedown', event => {
      if (event.button !== 1) return;
      const url = articleUrl();
      if (!url) return;
      event.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    });
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
    card.append(imageWrap, content); fragment.appendChild(card);
  });
  storiesGrid.appendChild(fragment);
  const detailsList = $('#feedInfoArticles');
  if (detailsList) {
    detailsList.replaceChildren();
    items.forEach((item, index) => {
      const row = document.createElement('article'); row.className = 'feed-info-article'; row.tabIndex = 0; row.setAttribute('role', 'button');
      const copy = document.createElement('div'); copy.className = 'feed-info-article-copy';
      const heading = document.createElement('h4'); heading.textContent = item.title || translate('untitled');
      const excerpt = document.createElement('p');
      const raw = String(item.summary || item.content || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
      excerpt.textContent = raw.split(/(?<=[.!?])\s+/).slice(0, 3).join(' ').slice(0, 420) || translate('feedDetailsUnavailable');
      const meta = document.createElement('span'); meta.className = 'feed-info-article-meta'; meta.textContent = formatDate(item.date) || translate('unknownDate');
      copy.append(heading, excerpt, meta); row.appendChild(copy);
      if (item.image) { const img = document.createElement('img'); img.className = 'feed-info-article-image'; img.src = item.image; img.alt = ''; img.loading = index < 3 ? 'eager' : 'lazy'; img.referrerPolicy = 'no-referrer'; img.addEventListener('error', () => img.remove(), {once:true}); row.appendChild(img); }
      const articleUrl = () => safeUrl(item.url, base);
      const open = () => openArticleModal(item, articleUrl());
      row.addEventListener('click', event => {
        if (event.button !== 0) return;
        open();
      });
      row.addEventListener('mousedown', event => {
        if (event.button !== 1) return;
        const url = articleUrl();
        if (!url) return;
        event.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
      });
      row.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
      detailsList.appendChild(row);
    });
  }
  loadingState.hidden = true; errorState.hidden = true; emptyState.hidden = true;
}
function openArticleModal(item, url) {
  const modal = $('#articleModal'); const titleLink = $('#modalArticleLink');
  titleLink.textContent = item.title || translate('untitled');
  titleLink.href = url || '#'; titleLink.style.pointerEvents = url ? '' : 'none'; titleLink.setAttribute('aria-disabled', String(!url));
  $('#modalOpenArticle').href = url || '#'; $('#modalOpenArticle').hidden = !url;
  $('#modalArticleMeta').textContent = [formatDate(item.date) || translate('unknownDate'), item.author].filter(Boolean).join(' · ');
  const body = $('#modalArticleBody'); body.replaceChildren();
  if (item.image) { const image = document.createElement('img'); image.className = 'modal-article-image'; image.src = item.image; image.alt = ''; image.referrerPolicy = 'no-referrer'; image.addEventListener('error', () => image.remove(), {once:true}); body.appendChild(image); }
  const text = item.content || item.summary || translate('feedDetailsUnavailable');
  const blocks = String(text).replace(/\\r\\n?/g, '\\n').split(/\\n[ \\t]*\\n+/).map(part => part.replace(/\\s*\\n\\s*/g, ' ').trim()).filter(Boolean);
  for (const block of blocks) {
    const paragraph = document.createElement('p');
    paragraph.textContent = block;
    body.appendChild(paragraph);
  }
  modal.hidden = false; document.body.classList.add('modal-open'); $('#closeArticleModal').focus();
}
function closeArticleModal() { $('#articleModal').hidden = true; document.body.classList.remove('modal-open'); }
function switchStoryTab(which) {
  const articles = which === 'articles';
  $('#articlesPanel').hidden = !articles; $('#feedInfoPanel').hidden = articles;
  $('#articlesTab').classList.toggle('is-active', articles); $('#feedInfoTab').classList.toggle('is-active', !articles);
  const columnsControl = $('#cardColumnsControl');
  if (columnsControl) columnsControl.hidden = !articles;
  $('#articlesTab').setAttribute('aria-selected', String(articles)); $('#feedInfoTab').setAttribute('aria-selected', String(!articles));
  if (readerSettings) { readerSettings.layout = articles ? 'articles' : 'info'; saveReaderSettings(); }
}

async function copyFeedUrl() {
  if (!feedUrl) { showToast(translate('badUrl'), true); return; }
  try {
    await navigator.clipboard.writeText(feedUrl);
    showToast(translate('copied'));
  } catch (_) {
    try {
      const field = document.createElement('textarea');
      field.value = feedUrl; field.setAttribute('readonly', '');
      field.style.position = 'fixed'; field.style.opacity = '0'; field.style.pointerEvents = 'none';
      document.body.appendChild(field); field.select();
      const copied = document.execCommand('copy'); field.remove();
      if (!copied) throw new Error('Copy command failed');
      showToast(translate('copied'));
    } catch (__) { showToast(translate('copyFailed'), true); }
  }
}
async function openInReader(service) {
  if (!feedUrl) { showToast(translate('badUrl'), true); return; }
  const encoded = encodeURIComponent(feedUrl);
  const destinations = {
    inoreader: `https://www.inoreader.com/?add_feed=${encoded}`,
    feedly: `https://feedly.com/i/subscription/feed/${encoded}`,
    newsblur: `https://www.newsblur.com/?url=${encoded}`,
    oldreader: `https://theoldreader.com/feeds/subscribe?url=${encoded}`,
    readwise: `https://read.readwise.io/new?url=${encoded}`
  };
  const destination = destinations[service];
  if (!destination) return;
  try { await chrome.tabs.create({ url: destination, active: true }); }
  catch (_) { showToast(translate('copyFailed'), true); }
}

const DEFAULT_PREVIEWER_STORAGE_KEY = 'rssFeedRadarDefaultPreviewer';
const defaultPreviewerToggle = $('#defaultPreviewerToggle');

async function loadDefaultPreviewerPreference() {
  if (!defaultPreviewerToggle || !chrome?.storage?.local) return;
  try {
    const stored = await chrome.storage.local.get(DEFAULT_PREVIEWER_STORAGE_KEY);
    defaultPreviewerToggle.checked = stored[DEFAULT_PREVIEWER_STORAGE_KEY] === true;
  } catch (_) {
    defaultPreviewerToggle.checked = false;
  }
}

defaultPreviewerToggle?.addEventListener('change', async () => {
  try {
    await chrome.storage.local.set({
      [DEFAULT_PREVIEWER_STORAGE_KEY]: defaultPreviewerToggle.checked
    });
    showToast(defaultPreviewerToggle.checked
      ? translate('defaultPreviewerEnabled')
      : translate('defaultPreviewerDisabled'));
  } catch (_) {
    showToast(translate('defaultPreviewerSaveFailed'), true);
  }
});

chrome.storage?.onChanged?.addListener((changes, areaName) => {
  if (areaName !== 'local' || !changes.rssFeedRadarLanguage) return;
  const nextLanguage = changes.rssFeedRadarLanguage.newValue;
  if (DICTIONARY[nextLanguage] && nextLanguage !== language) setLanguage(nextLanguage);
});
chrome.storage?.local?.get('rssFeedRadarLanguage').then(stored => {
  const nextLanguage = stored?.rssFeedRadarLanguage;
  if (DICTIONARY[nextLanguage] && nextLanguage !== language) setLanguage(nextLanguage);
}).catch(() => {});
chrome.storage?.onChanged?.addListener((changes, areaName) => {
  if (areaName !== 'local' || !changes[DEFAULT_PREVIEWER_STORAGE_KEY] || !defaultPreviewerToggle) return;
  defaultPreviewerToggle.checked = changes[DEFAULT_PREVIEWER_STORAGE_KEY].newValue === true;
});

loadDefaultPreviewerPreference();

readerSettings = loadReaderSettings();
applyTranslations();
applyReaderSettings();
switchStoryTab(readerSettings.layout || 'articles');
$('#readerLanguageSelect').addEventListener('change', event => setLanguage(event.target.value));
$('#readerLanguageButton').addEventListener('click', () => setReaderLanguageMenuOpen($('#readerLanguageMenu').hidden));
$('#readerLanguageWrap').addEventListener('click', (event) => {
  if (event.target.closest('.language-trigger, .language-menu')) return;
  setReaderLanguageMenuOpen(true);
});
$('#readerLanguageMenu').addEventListener('click', (event) => {
  const option = event.target.closest('[data-language-option]');
  if (!option) return;
  const select = $('#readerLanguageSelect');
  select.value = option.dataset.languageOption;
  select.dispatchEvent(new Event('change', { bubbles: true }));
  setReaderLanguageMenuOpen(false);
  $('#readerLanguageButton').focus();
});
document.addEventListener('click', (event) => {
  const languageWrap = $('#readerLanguageWrap');
  const languageMenu = $('#readerLanguageMenu');
  if (languageWrap && languageMenu && !languageWrap.contains(event.target)) setReaderLanguageMenuOpen(false);
  const columnsWrap = $('#cardColumnsWrap');
  if (columnsWrap && !columnsWrap.contains(event.target)) setCardColumnsMenuOpen(false);
  const fontWrap = $('#fontFamilyWrap');
  const fontMenu = $('#fontFamilyMenu');
  if (fontWrap && fontMenu && !fontWrap.contains(event.target)) setFontFamilyMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if ($('#readerLanguageMenu') && !$('#readerLanguageMenu').hidden) {
    setReaderLanguageMenuOpen(false);
    $('#readerLanguageButton').focus();
  }
  if ($('#cardColumnsMenu') && !$('#cardColumnsMenu').hidden) {
    setCardColumnsMenuOpen(false);
    $('#cardColumnsButton').focus();
  }
  if ($('#fontFamilyMenu') && !$('#fontFamilyMenu').hidden) {
    setFontFamilyMenuOpen(false);
    $('#fontFamilyButton').focus();
  }
});
$('#fontFamilyButton').addEventListener('click', () => setFontFamilyMenuOpen($('#fontFamilyMenu').hidden));
$('#fontFamilyMenu').addEventListener('click', (event) => {
  const option = event.target.closest('[data-font-option]');
  if (!option) return;
  const select = $('#fontFamilySelect');
  select.value = option.dataset.fontOption;
  select.dispatchEvent(new Event('change', { bubbles: true }));
  setFontFamilyMenuOpen(false);
  $('#fontFamilyButton').focus();
});
$('#fontFamilySelect').addEventListener('change', event => { readerSettings.fontFamily = event.target.value; applyReaderSettings(); saveReaderSettings(); });
$('#fontSizeSlider').addEventListener('input', event => { readerSettings.fontSize = Number(event.target.value); applyReaderSettings(); saveReaderSettings(); });
$('#lineSpacingSlider').addEventListener('input', event => { readerSettings.lineSpacing = Number(event.target.value); applyReaderSettings(); saveReaderSettings(); });
$('#darkModeButton').addEventListener('click', () => { readerSettings.darkMode = !readerSettings.darkMode; applyReaderSettings(); saveReaderSettings(); });
$('#copyButton').addEventListener('click', copyFeedUrl);
$('#copyInlineButton').addEventListener('click', copyFeedUrl);
$('#inoreaderButton').addEventListener('click', () => openInReader('inoreader'));
$('#feedlyButton').addEventListener('click', () => openInReader('feedly'));
$('#newsblurButton').addEventListener('click', () => openInReader('newsblur'));
$('#oldReaderButton').addEventListener('click', () => openInReader('oldreader'));
$('#readwiseButton').addEventListener('click', () => openInReader('readwise'));
$('#retryButton').addEventListener('click', fetchFeed);
$('#cardColumnsButton').addEventListener('click', () => setCardColumnsMenuOpen($('#cardColumnsMenu').hidden));
$('#cardColumnsMenu').addEventListener('click', event => {
  const option = event.target.closest('[data-columns-option]');
  if (!option) return;
  const select = $('#cardColumnsSelect');
  select.value = option.dataset.columnsOption;
  select.dispatchEvent(new Event('change', { bubbles: true }));
  setCardColumnsMenuOpen(false);
  $('#cardColumnsButton').focus();
});
$('#cardColumnsSelect').addEventListener('change', event => { readerSettings.cardColumns = Math.min(5, Math.max(1, Number(event.target.value) || 2)); applyReaderSettings(); saveReaderSettings(); });
$('#articlesTab').addEventListener('click', () => switchStoryTab('articles'));
$('#feedInfoTab').addEventListener('click', () => switchStoryTab('info'));
$('#closeArticleModal').addEventListener('click', closeArticleModal);
$('#articleModal').addEventListener('click', event => { if (event.target.dataset.closeModal === 'true') closeArticleModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#articleModal').hidden) closeArticleModal(); });
fetchFeed();
