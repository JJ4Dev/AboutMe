# Jan Reist — reist.dev

An English/German portfolio built with HTML, CSS and JavaScript. The interactive architecture hero, expertise diagram, scroll entrances and hover interactions share a persistent motion preference and respect reduced motion by default. The hero connects Blazor, .NET services and SQL/Azure through an animated request path.

## Development

Requires Node.js 20 or newer. No third-party JavaScript dependencies.

```sh
npm run dev
```

Open the local address printed by the server. Edits refresh the preview automatically.

```sh
npm run build
```

This checks JavaScript syntax, copies the current site to `dist/`, and verifies referenced assets. Deploy the contents of `dist/` to a static host. Sites configuration is in `.openai/hosting.json`.

## Content and assets

- English content: `index.html`; German translations and interactions: `script/portfolio.js`.
- Styling: `style/portfolio.css`.
- Portrait: reused from Jan's original AboutMe repository.
- Space Grotesk and Manrope: self-hosted Google Fonts, distributed under the accompanying SIL Open Font Licenses in `assets/`.
- Professional background: Jan's supplied public profile and general capabilities from his supplied reference. Company projects and private operational details are not included.

The two microtom role dates overlap on the supplied profile. Employment is therefore grouped as 2023–present without an inferred promotion date. Contact uses only the confirmed LinkedIn and GitHub profiles.

Historical files from the original portfolio remain in the checkout for reference. The build includes only the current page, its styling, script and assets.
