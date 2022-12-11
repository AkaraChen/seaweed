# 贡献

## 组件

### 结构

首先在 `packages` 文件夹下创建新 package：

```shell
cd packages
mkdir your-package
pnpm init
```

文件夹的名字应该跟包名、组件入口、组件样式文件、story 同名，假如你要创建一个 user 组件，那么你应该在 `packages/user` 下创建包，里头至少应该有以下文件：

1. user.less
2. user.stories.mdx
3. user.ts
4. package.json

### 规范
