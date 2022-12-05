---
title: 介绍
---

# 介绍

Seaweed 是一个基于 Web component 的下一代组件库。

这是它的一些优势：

1. 可以跟任何框架配合，React、Vue、jQuery 都不在话下。
2. 样式隔离，这些组件在任何页面都一样，不会受到项目的影响。
3. 外观还不错，感觉都还能拿得出手。

## 安装

首先肯定是安装。

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