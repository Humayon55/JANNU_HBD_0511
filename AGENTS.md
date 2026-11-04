# AGENTS.md

## What this is
A static, multi-page romantic birthday website ("Jannu's birthday surprise"). Plain HTML/CSS/vanilla JS, **no build step and no framework**. The user asked for this stack explicitly, so don't introduce bundlers, frameworks or npm dependencies. Netlify publishes the repo root (`netlify.toml`).

## Layout
- `index.html`: page 1 (welcome + SVG heart cake + candle).
- `pages/*.html`: the remaining 13 steps. Each one sets `<body data-page="name">` and loads `../style.css` and `../script.js`.
- `script.js`: everything dynamic, in numbered sections:
  1. EmailJS constants (placeholders = "not configured")
  2. `birthdayConfig`: all names, photo paths and long texts (single source of truth)
  3. `FLOW` (page order → progress bar and back button), path helpers (`asset`, `pageUrl`), `store` (localStorage)
  4. `Sound` and `Music` (Web Audio synth; never autoplays)
  5. `go()` navigation with a fade; `[data-go="page"]` links are auto-wired
  6. `buildChrome()` injects the top bar, floating hearts, footer and fx layer on every page
  7. Content binding: `[data-text="path.in.config"]`, `{herName}` in the HTML via `bindNames()`, `img[data-photo="configKey"]`
  8. Effects: `heartBurst`, `petalRain`, `Confetti`, `typeWriter`, `showModal`, `shake`
  9. `Pages[name]`: one module per page
- `style.css`: tokens → base → shared components → effects → per-page sections → responsive.
- `assets/`: photos. `flower.jpg`, `album-art.jpg` and `funny-cat.jpg` were AI-generated; the personal photos (`her-photo.jpg`, `my-photo.jpg`, `couple-photo.jpg`) are supplied by the owner and show a placeholder until they're added.

## Conventions and non-obvious decisions
- Add new copy to `birthdayConfig.text` and bind it with `data-text`, not hardcoded in JS.
- Photos load through the Netlify Image CDN on deployed hosts, then fall back to the raw file, then the next candidate (a config value can be an array), then a placeholder. GIFs skip the CDN so they keep their animation.
- `.hidden` hides elements; `show()` removes it and adds `.reveal`. Card entry animations use `backwards` fill so hover and selection transforms still work.
- Date email: `sendDateEmail()` loads the EmailJS SDK from a CDN only when configured. Never report success unless `emailjs.send` resolves.
- The final page's NO button moves to `document.body` with `position: fixed` while it runs away, then becomes a second YES after `MAX_ESCAPES`.
- Keep interactions playful and never distressing (brief requirement).