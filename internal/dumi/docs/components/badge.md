---
title: Badge 徽章
group:
  title: 数据展示
  order: 1
---

# 徽章

## 徽章类型

```tsx
import '@akrc/seaweed/badge'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
        <sw-badge>Normal</sw-badge>
        <sw-badge type="info">Info</sw-badge>
        <sw-badge type="success">Success</sw-badge>
        <sw-badge type="warning">Warning</sw-badge>
        <sw-badge type="error">Error</sw-badge>
    </div>
}
```

## 无边徽章

```tsx
import '@akrc/seaweed/badge'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
        <sw-badge>Normal</sw-badge>
        <sw-badge noborder type="info">Info</sw-badge>
        <sw-badge noborder type="success">Success</sw-badge>
        <sw-badge noborder type="warning">Warning</sw-badge>
        <sw-badge noborder type="error">Error</sw-badge>
    </div>
}
```

## 圆角徽章

```tsx
import '@akrc/seaweed/badge'

export default () => {
    return <div style={{display:'flex', flexDirection: 'column', gap: '1em', flexWrap: 'wrap'}}>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge rounded>Normal</sw-badge>
            <sw-badge rounded type="info">Info</sw-badge>
            <sw-badge rounded type="success">Success</sw-badge>
            <sw-badge rounded type="warning">Warning</sw-badge>
            <sw-badge rounded type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge rounded>Normal</sw-badge>
            <sw-badge rounded noborder type="info">Info</sw-badge>
            <sw-badge rounded noborder type="success">Success</sw-badge>
            <sw-badge rounded noborder type="warning">Warning</sw-badge>
            <sw-badge rounded noborder type="error">Error</sw-badge>
        </div>
    </div>
}
```

## 禁用状态

```tsx
import '@akrc/seaweed/badge'

export default () => {
    return <div style={{display:'flex', flexDirection: 'column', gap: '1em', flexWrap: 'wrap'}}>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge disabled>Normal</sw-badge>
            <sw-badge disabled type="info">Info</sw-badge>
            <sw-badge disabled type="success">Success</sw-badge>
            <sw-badge disabled type="warning">Warning</sw-badge>
            <sw-badge disabled type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge disabled>Normal</sw-badge>
            <sw-badge disabled noborder type="info">Info</sw-badge>
            <sw-badge disabled noborder type="success">Success</sw-badge>
            <sw-badge disabled noborder type="warning">Warning</sw-badge>
            <sw-badge disabled noborder type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge disabled rounded>Normal</sw-badge>
            <sw-badge disabled rounded type="info">Info</sw-badge>
            <sw-badge disabled rounded type="success">Success</sw-badge>
            <sw-badge disabled rounded type="warning">Warning</sw-badge>
            <sw-badge disabled rounded type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge disabled rounded>Normal</sw-badge>
            <sw-badge disabled rounded noborder type="info">Info</sw-badge>
            <sw-badge disabled rounded noborder type="success">Success</sw-badge>
            <sw-badge disabled rounded noborder type="warning">Warning</sw-badge>
            <sw-badge disabled rounded noborder type="error">Error</sw-badge>
        </div>
    </div>
}
```

## 可关闭的

当关闭按钮被点击的时候，元素会触发一个 close 事件。

你可以使用 eventListener 监听 close 事件，就像这样：

```ts
document.querySelector('sw-badge').addEventListener('close', event => event.target.remove())
```

```tsx
import '@akrc/seaweed/badge'

const handler = event => event.target.remove()

export default () => {
    return <div style={{display:'flex', flexDirection: 'column', gap: '1em', flexWrap: 'wrap'}}>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge closable>Normal</sw-badge>
            <sw-badge type="info" closable>Info</sw-badge>
            <sw-badge type="warning" closable>Info</sw-badge>
            <sw-badge type="error" closable>Info</sw-badge>
            <sw-badge type="success" closable>Info</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
            <sw-badge noborder closable>Info</sw-badge>
            <sw-badge type="info" noborder closable>Info</sw-badge>
            <sw-badge type="warning" noborder closable>Info</sw-badge>
            <sw-badge type="error" noborder closable>Info</sw-badge>
            <sw-badge type="success" noborder closable>Info</sw-badge>
        </div>
    </div> 
}
```
