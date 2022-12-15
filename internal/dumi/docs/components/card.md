---
title: Card 卡片
group: 通用
---

# 卡片

## 卡片大小

```tsx
import '@akrc/seaweed/card'

export default () => {
    return <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
        <sw-card size="small" title="小卡片">卡片内容</sw-card>
        <sw-card title="中卡片">卡片内容</sw-card>
        <sw-card size="large" title="大卡片">卡片内容</sw-card>
    </div>
}
```

## 没有标题

没标题肯定也行。

```tsx
import '@akrc/seaweed/card'

export default () => {
    return <sw-card>没有标题的卡片</sw-card>
}
```

## 没有边框

也可以用深色来分割卡片。

```tsx
import '@akrc/seaweed/card'

export default () => {
    return <sw-card noborder title="没有边框">好像看着更舒服了点</sw-card>
}
```