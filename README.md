# Seaweed

The next generation component library based on web components.

[![E2E](https://github.com/AkaraChen/seaweed/actions/workflows/playwright.yml/badge.svg)](https://github.com/AkaraChen/seaweed/actions/workflows/playwright.yml) [![Test](https://github.com/AkaraChen/seaweed/actions/workflows/test.yml/badge.svg)](https://github.com/AkaraChen/seaweed/actions/workflows/test.yml) [![Lint](https://github.com/AkaraChen/seaweed/actions/workflows/lint.yml/badge.svg)](https://github.com/AkaraChen/seaweed/actions/workflows/lint.yml)

## Features

1. Support Vue, React, Angular, jQuery and vanilla JS project.
2. High quality components.
3. Support tree shaking.
4. Written in TypeScript

## Install

```bash
npm install @akrc/seaweed
yarn add @akrc/seaweed
pnpm add @akrc/seaweed
```

## Quick start

```ts
// import manually
import "@akrc/seaweed/button";

// or you can full import
import "@akrc/seaweed";
```

```html
<sw-button type="success">Button</sw-button>
```

## Development

```bash
pnpm i
pnpm start
```

## Build

```bash
pnpm build
```
