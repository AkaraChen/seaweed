---
title: 徽章
---

# 徽章

## 徽章类型

```tsx
import '@akrc/seaweed/badge'

export default () => {
    return <div style={{display:'flex', gap: '0.25em'}}>
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
    return <div style={{display:'flex', gap: '0.25em'}}>
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
    return <div style={{display:'flex', flexDirection: 'column', gap: '1em'}}>
        <div style={{display:'flex', gap: '0.25em'}}>
            <sw-badge rounded>Normal</sw-badge>
            <sw-badge rounded type="info">Info</sw-badge>
            <sw-badge rounded type="success">Success</sw-badge>
            <sw-badge rounded type="warning">Warning</sw-badge>
            <sw-badge rounded type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em'}}>
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
    return <div style={{display:'flex', flexDirection: 'column', gap: '1em'}}>
        <div style={{display:'flex', gap: '0.25em'}}>
            <sw-badge disabled>Normal</sw-badge>
            <sw-badge disabled type="info">Info</sw-badge>
            <sw-badge disabled type="success">Success</sw-badge>
            <sw-badge disabled type="warning">Warning</sw-badge>
            <sw-badge disabled type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em'}}>
            <sw-badge disabled>Normal</sw-badge>
            <sw-badge disabled noborder type="info">Info</sw-badge>
            <sw-badge disabled noborder type="success">Success</sw-badge>
            <sw-badge disabled noborder type="warning">Warning</sw-badge>
            <sw-badge disabled noborder type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em'}}>
            <sw-badge disabled rounded>Normal</sw-badge>
            <sw-badge disabled rounded type="info">Info</sw-badge>
            <sw-badge disabled rounded type="success">Success</sw-badge>
            <sw-badge disabled rounded type="warning">Warning</sw-badge>
            <sw-badge disabled rounded type="error">Error</sw-badge>
        </div>
        <div style={{display:'flex', gap: '0.25em'}}>
            <sw-badge disabled rounded>Normal</sw-badge>
            <sw-badge disabled rounded noborder type="info">Info</sw-badge>
            <sw-badge disabled rounded noborder type="success">Success</sw-badge>
            <sw-badge disabled rounded noborder type="warning">Warning</sw-badge>
            <sw-badge disabled rounded noborder type="error">Error</sw-badge>
        </div>
    </div>
}
```
