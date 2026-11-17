# Portfolio

Static portfolio site (HTML, CSS, JS — no build step).

## Deploy on GitHub Pages

1. Create a **public** repo named `<your-username>.github.io` (for you: `Meenakshi-Bind.github.io`).
2. Put `index.html`, `style.css` and `script.js` in the repo root and push:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Meenakshi-Bind/Meenakshi-Bind.github.io.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. After a minute the site is live at `https://meenakshi-bind.github.io`.

## Optional tweaks

- Add live links to your project cards (e.g. a GitHub repo link next to each project title)
- Add a photo or a downloadable CV link to the hero section
