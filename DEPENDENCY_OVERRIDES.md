# Dependency overrides

The npm `overrides` block in `package.json` is temporary security glue for upstream dependency chains that still resolve vulnerable transitive packages.

- `eslint -> @humanfs/node@0.16.8`
  - Advisory: recursive copy can follow symlinked files outside the source tree.
  - Remove when ESLint ships a patched `@humanfs/node`.
- `@eslint/eslintrc -> js-yaml@4.3.2`
  - Advisories: YAML merge-key CPU exhaustion issues in older `js-yaml`.
  - Remove when `@eslint/eslintrc` updates its `js-yaml` dependency.
- `@pixi/particles -> url -> qs@6.16.0`
  - Advisories: legacy `qs` denial-of-service issues in the Pixi utility chain.
  - Remove when the `@pixi/particles` / `@pixi/utils` / `url` chain no longer resolves vulnerable `qs`.
- `pixi.js -> @xmldom/xmldom@0.8.15`
  - Advisories: XML parsing and serialization issues in older `@xmldom/xmldom`.
  - Remove when `pixi.js` resolves a patched `@xmldom/xmldom` without an override.
- `eslint -> minimatch -> brace-expansion@1.1.18`
  - Advisories: range-expansion denial-of-service issues in older `brace-expansion`.
  - Remove when ESLint's `minimatch` path resolves a patched `brace-expansion`.
- `tailwindcss -> sucrase -> brace-expansion@2.1.4`
  - Advisories: range-expansion denial-of-service issues in older `brace-expansion`.
  - Remove when Tailwind's `sucrase` path resolves a patched `brace-expansion`.
- `eslint-config-next -> @typescript-eslint/typescript-estree -> brace-expansion@5.0.9`
  - Advisories: range-expansion denial-of-service issues in older `brace-expansion`.
  - Remove when the `eslint-config-next` TypeScript tooling path resolves a patched `brace-expansion`.
