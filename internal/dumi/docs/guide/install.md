---
title: 安装
order: 2
---

# 安装

## 引入

首先肯定是 npm。

```shell
# 使用 yarn 也行
pnpm add @akrc/seaweed lit
```

再引入你用到的组件：

```ts
/* 一般来说放在项目入口比较好 */
import '@akrc/seaweed/button'
```

然后就可以在模板的任意位置使用了：

```html
<sw-button>Hello</sw-button>
```

经过测试，React、Preact、Svelte、原生、jQuery 项目都可以直接使用，有一些框架可能需要一些配置。

## Vue 项目

大部分项目都无需配置，但是 Vue 的编译器默认无法识别自定义元素，虽然可以正常使用，但是控制台会有 warning，请参照 [Vue.js 官方中文文档](https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue) 进行配置。