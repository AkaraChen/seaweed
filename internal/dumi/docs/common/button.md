---
title: 按钮
---

# 按钮

## 按钮类型

```tsx
import '@akrc/seaweed/button'

export default () => {
    return <div style={{display:'flex', gap: '0.25em'}}>
        <sw-button>Normal</sw-button>
        <sw-button type="info" primary>Info</sw-button>
        <sw-button type="success" primary>Success</sw-button>
        <sw-button type="warning" primary>Warning</sw-button>
        <sw-button type="error" primary>Error</sw-button>
    </div>
}
```

## 按钮尺寸

```tsx
import '@akrc/seaweed/button'

export default () => {
    return <div style={{display:'flex', gap: '0.25em'}}>
        <sw-button size="small">Small</sw-button>
        <sw-button size="normal">Normal</sw-button>
        <sw-button size="large">Large</sw-button>
    </div>
}
```

## 加载中状态


```tsx
import '@akrc/seaweed/button'

export default () => {
    return <div style={{display:'flex', gap: '0.25em'}}>
        <sw-button primary loading>Loading</sw-button>
        <sw-button loading>Loading</sw-button>
    </div>
}
```

## 禁用状态

```tsx
import '@akrc/seaweed/button'

export default () => {
    return <div style={{display:'flex', gap: '0.25em'}}>
        <sw-button primary disabled>Loading</sw-button>
        <sw-button disabled>Loading</sw-button>
    </div>
}
```

## 圆角按钮

```tsx
import '@akrc/seaweed/button'

export default () => {
    return <sw-button rounded>Rounded</sw-button>
}
```
