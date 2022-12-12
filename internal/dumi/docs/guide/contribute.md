---
title: 贡献
order: 3
---

# 贡献

## 项目结构

Seaweed 是一个使用 pnpm 和 lerna 构建的 monorepo 项目。

子模块主要分布在 `internal` 和 `packages` 两个文件夹中，前者存放跟组件本身无关的项目，比如当前这个文档项目和另一个交互式文档（Storybook）项目，后者就是各种组件。

## 开发

你可以将 dumi 作为 dev server 来使用：

```shell
pnpm run -r --filter dumi dev
```

## 打包

使用 Rollup 打包，相关配置在 `<root>/rollup.config.mjs`。

```shell
pnpm run -w build:package
```
