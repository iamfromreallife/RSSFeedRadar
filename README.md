


# RSS Feed Radar — RSS & Feed Finder

A Manifest V3 Chrome extension that discovers RSS, Atom, and JSON Feed links on the active page, displays the number of discovered feeds on the toolbar icon, and opens a rich preview for each feed.

## Features

- Per-tab toolbar badge showing the number of discovered feeds.
- Darker green toolbar icon when no feeds are detected and dark orange when feeds are found.
- Popup with feed title, URL, and a “Preview and subscribe” action.
- Reader page with article cards, a list view, article modal previews, images, and typography controls.
- Light/Dark switch.
- Subscribe actions for copying the feed URL, Inoreader, Feedly, NewsBlur, The Old Reader, and Readwise Reader.
- English, Portuguese, Spanish, Italian, French, and German interface translations.
- Discovery from standard RSS/Atom/JSON Feed declarations, visible feed links, and common feed URL patterns.
- Local page state; no analytics or external tracking service.

## Install in Chrome

1. Extract the ZIP to a permanent folder.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the `rss_feed_radar_extension` folder.
5. Pin **RSS Feed Radar** from Chrome’s Extensions menu.

Chrome requests access to HTTP and HTTPS pages because the extension inspects pages to discover feeds and validate common feed endpoints. It does not modify website content.

## Reader

Selecting **Preview and subscribe** opens a new reader tab. The reader parses RSS, Atom, and JSON Feed content, displays article metadata and images when available, and keeps the subscription actions in a persistent bottom bar. The **Cards** and **List** tabs offer two views of the feed’s articles. Selecting a story opens an in-reader modal; its title links to the original article in a new tab. Reader settings include font family, font size, line spacing, and dark mode.

<img width="1280" height="800" alt="Captura de ecrã 2026-10-21 221921" src="https://github.com/user-attachments/assets/e61623a1-39f2-4aeb-97f5-c6b9ea7d78dd" />
<img width="1280" height="800" alt="Captura de ecrã 2026-10-21 221838" src="https://github.com/user-attachments/assets/30c62fe6-1187-4d80-814a-6d8a5614e89b" />
<img width="1280" height="800" alt="Captura de ecrã 2026-10-21 221818" src="https://github.com/user-attachments/assets/2e6cd4c8-e199-45dc-9bf4-979b0e259cb9" />
