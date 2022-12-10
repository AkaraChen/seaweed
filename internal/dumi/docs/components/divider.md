---
title: Divider 分割线
group: 数据展示
---

# 分割线

## 方向

```tsx
import '@akrc/seaweed/divider'

export default () => {
    return <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
        <sw-divider></sw-divider>
        <div>这是竖向的 <sw-divider vertical></sw-divider> Divider</div>
    </div>
}
```

## 文字

竖向的不支持添加文字，因为总共就没多少地方。

```tsx
import '@akrc/seaweed/divider'

export default () => {
    return <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
        <sw-divider text="left" position="left"></sw-divider>
        <sw-divider text="medium"></sw-divider>
        <sw-divider text="right" position="right"></sw-divider>
    </div>
}
```

## 样式

```tsx
import '@akrc/seaweed/divider'

export default () => {
    return <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
        <sw-divider text="dashed" dashed></sw-divider>
        <sw-divider text="dotted" dotted></sw-divider>
    </div>
}
```