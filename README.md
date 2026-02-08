# Tristan Fuentes Portfolio

A polished, fast, no-build static personal portfolio site for GitHub Pages.

## Stack

- Vanilla HTML, CSS, and JavaScript
- Dark mode by default with persistent light-mode toggle (`localStorage`)
- Responsive, accessible layout with minimal JS

## Run locally

Option 1:

- Open `index.html` directly in a browser.

Option 2 (recommended):

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit content

- Main page sections: `index.html`
- Styling/theme system: `styles.css`
- Behavior (theme toggle, nav highlight, smooth scroll): `script.js`
- Writing index and post placeholders: `writing.html`
- Social preview and favicon assets: `assets/`
- SEO files: `robots.txt`, `sitemap.xml`

## Deploy to GitHub Pages

1. Create a GitHub repo (example: `personal-site`).
2. Push this folder to the `main` branch.
3. In GitHub repo settings, open `Pages`.
4. Set Source to `Deploy from a branch`.
5. Select Branch `main` and folder `/ (root)`.
6. Save, then wait for the Pages URL to go live.

Expected URL format:

- Repo: `https://github.com/<your-username>/<repo-name>`
- Pages: `https://<your-username>.github.io/<repo-name>/`

## Medium syndication later

For each post in `writing.html`:

1. Publish on Medium.
2. Add the Medium URL next to the post metadata.
3. Optionally add a note in `index.html` Writing section linking both local and Medium versions.
