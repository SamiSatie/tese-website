# TeSE Astro Website

Bilingual modern website for the TeSE research group.

## Stack

- Astro
- Tailwind CSS
- Static deployment
- GitHub Pages
- FR / EN structure

## Local installation

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Pages

French:

- `/fr/`
- `/fr/recherche/`
- `/fr/equipe/`
- `/fr/plateformes/`
- `/fr/projets/`
- `/fr/contact/`

English:

- `/en/`
- `/en/research/`
- `/en/people/`
- `/en/facilities/`
- `/en/projects/`
- `/en/contact/`

## Customization checklist

1. Replace placeholder contact email in `src/data/siteConfig.ts`.
2. Add official logos in `public/logos/`.
3. Add photos in `public/images/`.
4. Replace generic people cards with real members.
5. Replace example projects with funded projects.
6. Add selected publications or connect to HAL/BibTeX.
7. Configure GitHub Pages with GitHub Actions.
8. Optionally add a custom domain.
