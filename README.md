## hello hello

if you're reading this you're probably checking out some coding I've done

This project now requires Node.js `>=20.9.0` to install its current toolchain. The current lockfile still includes an optional Sharp package that only advertises `^20.9.0` support on 32-bit Windows, so that specific platform may need a future lockfile refresh before using Node 21+.

Security overrides in `package.json` currently pin:
- `@humanfs/node` for the ESLint symlink-copy advisory
- `js-yaml` for the YAML merge-key CPU exhaustion advisories
- `qs` for the legacy `url` dependency DoS advisories
- `@xmldom/xmldom` for Pixi XML parsing advisories
- `brace-expansion` under `minimatch` 3, 9, and 10 for the range-expansion DoS advisories

This Website serves as a little portfolio for work gone by and work to come. Most of my work unfortunately has to live behind NDAs and in private repos but feel free to contact me with any questions :]

## ingrain in yourself a large gratitude for tiny moments of joy
