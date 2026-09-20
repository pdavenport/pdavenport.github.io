## hello hello

if you're reading this you're probably checking out some coding I've done

This project now requires Node.js 20.9+ overall because the upgraded `next` and `sharp` dependencies no longer support older Node releases. On 32-bit Windows only, use Node 20.9+ for now because Sharp’s optional image-optimization package currently advertises `^20.9.0` support on that platform.

Security overrides in `package.json` currently pin:
- `eslint -> @humanfs/node` for the ESLint symlink-copy advisory; remove once ESLint ships a patched transitive version
- `@eslint/eslintrc -> js-yaml` for the YAML merge-key CPU exhaustion advisories; remove once `@eslint/eslintrc` updates its dependency
- `@pixi/particles -> url -> qs` for the legacy `url` dependency DoS advisories; remove once the Pixi utility chain no longer resolves the vulnerable `qs`
- `pixi.js -> @xmldom/xmldom` for Pixi XML parsing advisories; remove once Pixi resolves a patched `@xmldom/xmldom` itself
- `eslint -> minimatch`, `tailwindcss -> sucrase`, and `eslint-config-next -> @typescript-eslint/typescript-estree` for the range-expansion `brace-expansion` DoS advisories; remove once those parents ship patched dependency paths

This Website serves as a little portfolio for work gone by and work to come. Most of my work unfortunately has to live behind NDAs and in private repos but feel free to contact me with any questions :]

## ingrain in yourself a large gratitude for tiny moments of joy
