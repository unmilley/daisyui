# 🌼 DaisyUI Theme generator

Generating a theme for [🌼 daisyUI](https://daisyui.com/) in the usual way via config.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

## Install

Install package:

```bash
# yarn
yarn add -D @unmilley/daisyui
# npm
npm install -D @unmilley/daisyui
# pnpm
pnpm install -D @unmilley/daisyui
```

## Usage

```ts
/* tailwind.config.ts */
import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import { defineTheme, type Variables } from "@unmilley/daisyui";

const VARIABLES: Variables = {
  roundedBox: "1.2rem",
  roundedBadge: "0.4rem",
};

const light = defineTheme({
  extends: "cupcake",
  colors: {
    accent: "#ffb86c",
    accentContent: "#160c04",
  },
  variables: VARIABLES,
});

const dark = defineTheme({
  extends: "dark",
  colors: {
    base100: "#401c52",
    baseContent: "#e3af40",
  },
  variables: VARIABLES,
});

export default <Partial<Config>>{
  plugins: [daisyui],
  daisyui: {
    themes: [{ dark, light }],
  },
};
```

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

[MIT][license-href]. Made with 💛

[npm-version-src]: https://img.shields.io/npm/v/@unmilley/daisyui?style=flat&colorA=18181B&colorB=fbd38d
[npm-version-href]: https://npmjs.com/package/@unmilley/daisyui
[npm-downloads-src]: https://img.shields.io/npm/dm/@unmilley/daisyui?style=flat&colorA=18181B&colorB=fbd38d
[npm-downloads-href]: https://npmjs.com/package/@unmilley/daisyui
[license-src]: https://img.shields.io/github/license/unmilley/daisyui-theme-generator.svg?style=flat&colorA=18181B&colorB=fbd38d
[license-href]: https://github.com/unmilley/daisyui-theme-generator/blob/main/LICENSE
