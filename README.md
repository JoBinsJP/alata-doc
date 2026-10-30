# Alata Documentation

Guides and API documentation for [Alata](https://pypi.org/project/alata/) and
[TaskIQ Horizon](https://pypi.org/project/taskiq-horizon/), built with Fumadocs and Next.js.

Read the [published documentation](https://jobinsjp.github.io/alata-doc/docs/).

## Local development

Install dependencies with Bun and start the development server:

```bash
bun install --frozen-lockfile
bun dev
```

Content lives in `content/docs/` as MDX. Open the URL printed by the development server.

## Validation and deployment

```bash
bun run types:check
bun run build
```

The build generates the static site in `out/`, including search and downloadable
documentation. Pushes to `main` deploy it to GitHub Pages. Set
`NEXT_PUBLIC_BASE_PATH=/alata-doc` when building locally to preview the deployment path.
