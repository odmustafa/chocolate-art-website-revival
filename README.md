Chocolate & Art Show — Wayback Recreation

Overview
This project recreates the former Chocolate & Art Show website using modern, maintainable static assets (HTML/CSS/JS), guided by the Wayback Machine archives linked in wayback-machine/instructions.md.

Goals
- Recreate the site’s look and layout as faithfully as possible
- Keep it responsive, accessible (WCAG 2.1 AA-minded), and performant
- Provide a clean structure for future content updates

Project structure
- public/
  - index.html (homepage)
  - pages/
    - artwork-submission.html
    - press.html
    - gallery.html
    - videos.html
    - terms.html
    - privacy.html
    - contact.html
  - assets/
    - css/
      - styles.css
    - js/
      - main.js
    - img/
      - (optional, saved images from Wayback as needed)
- wayback-machine/
  - instructions.md (task brief and archive links)

Run locally
Because this is a static site, you can use any static file server. A few options:
- Python 3 (serve the public directory)
  - cd public
  - python3 -m http.server 8080
  - Open http://localhost:8080
- Node (any static server, e.g., serve or http-server)
  - npx serve public
  - or npx http-server public -p 8080
- VS Code Live Server
  - Open the project folder, right-click public/index.html, “Open with Live Server”.

Notes and approach
- Visual fidelity: We’re mirroring typography, colors, spacing, and structure from the archives. Exact WordPress plugin behavior (sliders, shortcodes) is approximated with lightweight static markup/CSS for now.
- Assets: For now, background and hero images reference Wayback URLs. We can later download and store them in public/assets/img to improve reliability.
- Accessibility: Semantic HTML, alt text, sufficient contrast, keyboard-friendly navigation, and reduced-motion considerations are applied. Further improvements welcome.
- Performance: No heavy frameworks; minimal CSS/JS; images can be optimized later (compression, responsive srcset).

Resources used
- Wayback Machine snapshots:
  - Home: https://web.archive.org/web/20240918193050/https://chocolateandartshow.com/
  - Artwork Submission: https://web.archive.org/web/20181019231538/http://chocolateandartshow.com/artwork-submission/
  - Press: https://web.archive.org/web/20181016083724/http://chocolateandartshow.com/press/
  - Gallery: https://web.archive.org/web/20181220121724/http://chocolateandartshow.com/gallery/
  - Videos: https://web.archive.org/web/20181220121750/http://chocolateandartshow.com/videos/
  - Terms: https://web.archive.org/web/20181207232324/http://chocolateandartshow.com/terms/
  - Privacy: https://web.archive.org/web/20181207232319/http://chocolateandartshow.com/privacy
  - Contact: https://web.archive.org/web/20181207191947/http://chocolateandartshow.com/contact/

Recommendations (future phase)
- Implement an accessible, lightweight slider for the homepage hero/gallery.
- Replace external Wayback links with local optimized assets.
- Add a CMS or headless data source for events and media updates.
- Enhance SEO (metadata, structured data) and analytics.

