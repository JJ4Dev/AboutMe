# Jan Reist — reist.dev

An English/German portfolio built with HTML, CSS and JavaScript. The interactive architecture hero, expertise diagram, scroll entrances and hover interactions share a persistent motion preference and respect reduced motion by default. The hero connects Blazor, .NET services and SQL/Azure through an animated request path.

## Development

Requires Node.js 20 or newer. Run `npm ci` before development or building. Three.js 0.186.0 powers the optional connection view; esbuild bundles it locally.

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
- Portrait: supplied by Jan for this portfolio.
- Space Grotesk and Manrope: self-hosted Google Fonts, distributed under the accompanying SIL Open Font Licenses in `assets/`.
- Professional background: Jan's supplied public profile and general capabilities from his supplied reference. Company projects and private operational details are not included.

The two microtom role dates overlap on the supplied profile. Employment is therefore grouped as 2023–present without an inferred promotion date. Contact uses only the confirmed LinkedIn and GitHub profiles.

Historical files from the original portfolio remain in the checkout for reference. The build includes only the current page, its styling, script and assets.

## Optional 3D and performance

The regular page does not download Three.js or allocate a WebGL context. Visitors can enable the 3D connections when they want them; all content and layer controls remain ordinary HTML. A failed load, unavailable WebGL2 context, context loss or sustained slow rendering restores the simple view.

The renderer uses one transparent canvas, no external textures or models, no shadows or postprocessing, and short 1.2-second animations after enabling 3D or selecting a layer. Request transitions match the trace's 620 ms steps, including the return path. It schedules no frames while idle, hidden or offscreen. Drawing-buffer area is limited to 450,000 pixels and device pixel ratio to 1.25; coarse-pointer or reported low-memory devices use 240,000 pixels, DPR 1 and a 24-fps ceiling. Other devices use a 30-fps ceiling. Disabling 3D releases the graphics resources. The scene renders 740 triangles in seven draw calls. These are complexity limits, not a guarantee of performance on every device.

Three.js is MIT-licensed. Its notice is included in the local bundle and `assets/three-LICENSE.txt` in the build. Production is self-contained and does not use a script CDN.

## Request lab

`script/request-demo.js` is the shared, deterministic request logic for both the hero and the request lab. It filters an in-memory list of Jan's public skills, validates a 1–40 character query, and supports a simulated unavailable data source. The UI presents success (200), validation failure (400), and dependency failure (503), with a trace and the actual response object. No API request or private company data is involved. The page labels this as a browser simulation; the .NET architecture visual represents Jan's skills, not the technology running this JavaScript demo.

Animation is a presentation layer over the completed result. Pausing motion, leaving the demo or hiding the tab completes the trace immediately. Source inspection loads the same module used by the page. Both English and German controls are supported. Automatic layer separation stops with the motion preference; manual layer selection and separation remain usable.
