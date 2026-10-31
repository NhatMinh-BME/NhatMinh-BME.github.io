# Nguyen Le Y — Portfolio

Personal portfolio and engineering notes, built with [VitePress](https://vitepress.dev/).

## Run locally

```sh
npm install
npm run docs:dev
```

VitePress prints the local URL when the development server starts.

## Build and preview

```sh
npm run docs:build
npm run docs:preview
```

The production site is generated in `docs/.vitepress/dist`. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles deployment.

## Content

Portfolio pages and articles are in `docs/`. Static images and downloadable resources are in `docs/public/`.
