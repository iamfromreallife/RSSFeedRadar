# RSS Feed Radar — RSS & Feed Finder

A Manifest V3 Chrome extension that discovers RSS, Atom, and JSON Feed links on the active page, displays the number of discovered feeds on the toolbar icon, and opens a rich preview for each feed with various subscribing options.

## Features

- Per-tab toolbar badge showing the number of discovered feeds.
- Able to be set as handler of raw xml rss links
- Green toolbar icon when no feeds are detected and dark orange when feeds are found.
- Popup with feed title, URL, and a translated “Preview and subscribe” action.
- Reader page with article cards, a list view, article modal previews, images, and typography controls.
- Subscribe actions for copying the feed URL, Inoreader, Feedly, NewsBlur, The Old Reader, and Readwise Reader.
- English, Portuguese, Spanish, Italian, French, and German interface translations.
- Rounded language dropdowns and translated donation buttons linking to the configured donation page.
- Domain-wide discovery: checks the current page, parses the site homepage for declared RSS links, and validates common root endpoints such as `/feed/`, `/feed`, `/rss.xml`, `/rss/`, `/atom.xml`, `/feed.xml`, WordPress `/?feed=rss2`, and `/feed.json`. This works on arbitrary domains, even if the individual article page does not advertise a feed; discovery results are cached per origin for 15 minutes.
- Discovery from standard RSS/Atom/JSON Feed declarations, visible feed links, and common platform-specific feed URL patterns.
- Local page state; no analytics or external tracking service.

NOTE: v2 of RSS Feeds Radar includes a major layout redesign with better readability.


## Install in Chrome

1. Extract the ZIP to a permanent folder.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the previously created folder folder where files were extracted.
5. Pin **RSS Feed Radar** from Chrome’s Extensions menu.

Chrome requests access to HTTP and HTTPS pages because the extension inspects pages to discover feeds and validate common feed endpoints. It does not modify website content.

## Reader

Selecting **Preview and subscribe** opens a new reader tab. The reader parses RSS, Atom, and JSON Feed content, displays article metadata and images when available, and keeps the subscription actions in a persistent bottom bar. The **Cards** and **List** tabs offer two views of the feed’s articles. Selecting a story opens an in-reader modal; its title links to the original article in a new tab. Reader settings include font family, font size, line spacing, and dark mode.

### Screenshots

<img width="996" height="842" alt="Captura de ecrã 2026-10-26 113909" src="https://github.com/user-attachments/assets/e02a9ea9-7b34-4ecf-b975-442b10d0e369" />
<img width="1428" height="747" alt="Captura de ecrã 2026-10-26 114116" src="https://github.com/user-attachments/assets/8e4b87c5-69fb-4962-97d7-1d35675ba7e1" />
<img width="1438" height="751" alt="Captura de ecrã 2026-10-26 114054" src="https://github.com/user-attachments/assets/c43d5044-1ce9-412c-977d-afd1ca3c45ac" />
<img width="1432" height="753" alt="Captura de ecrã 2026-10-26 114032" src="https://github.com/user-attachments/assets/04c11adc-62d1-48a6-a426-7244727fe39a" />

<img width="1400" height="753" alt="Captura de ecrã 2026-10-26 114011" src="https://github.com/user-attachments/assets/5d99ae9c-d1a2-4a65-8a9d-ab4956f10867" />



## Notes

- Pages such as `chrome://` and the Chrome Web Store do not allow extension scripts and cannot be scanned.
- The toolbar badge is capped visually at `99+`; the popup displays the actual count.
- Some feed servers block direct cross-origin requests. In that case, the reader displays an error and keeps the feed URL available for external reader services.



### Update checker

RSS Feed Radar checks the latest commit in the public GitHub repository at browser startup and every four hours. If the commit changes after the initial baseline check, the popup shows an **Update available** button that opens the repository so the user can download the latest package. The extension does not silently replace its own installed files.
