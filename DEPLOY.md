# Continuum Consults — deploy guide

All images, the logo and the catalogue PDF are now real files in this project
(nothing depends on Lovable's private `/__l5e/` asset links any more).

- Logo (dark, for light backgrounds):  src/assets/continuum-mark.png
- Logo (light, for the green footer):  src/assets/continuum-mark-light.png
- Work carousel images:                src/assets/work-*.jpg
- Catalogue PDF:                       public/catalogue/continuum-catalogue.pdf  (served at /catalogue/continuum-catalogue.pdf)
- Favicon:                             public/favicon.png

## Option A — Lovable (easiest)
1. Unzip, then in this folder:  git add -A && git commit -m "Use real assets" && git push origin main
2. Open the project in Lovable (it syncs from GitHub), check Preview, click Publish.

## Option B — Cloudflare (your own hosting)
The build targets Cloudflare Workers.
1. npm install
2. npm run build
3. npx wrangler login
4. npx wrangler deploy          (run from this folder; uses .output/server/wrangler.json)
Then add your domain in Cloudflare -> Workers & Pages -> your worker -> Settings -> Domains.

## Run locally
npm install && npm run dev
