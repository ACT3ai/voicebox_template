# voicebox_template
VoiceBox Template for We the Citizens. It is a nearly empty Docusaurus site that each citizen copies and turns into their own public "We the Citizen's VoiceBox".

## Layout
* `site/` is the Docusaurus site. Content goes in `site/docs/`, and the home page is `site/src/pages/index.tsx`.
* `pm/` holds product management (specs and decisions). There is no code in it.
* `prompts/` holds AI prompt files.
* `.github/workflows/pages.yml` builds the site and deploys it to GitHub Pages on every push to main.

## Run locally
```
cd site
npm install
npm start          # dev server at http://localhost:3000
npm run build      # static output in site/build
npm run serve      # serve the build
```

## Make it yours
Edit the CUSTOMIZE block at the top of `site/docusaurus.config.ts` (name, URL, GitHub user and repo) and the colors in `site/src/css/custom.css`. Then replace the placeholder pages in `site/docs/`.
