---
title: Switch 开关
group:
  title: 表单
  order: 2
---

# 开关

## 开关尺寸

```tsx
import '@akrc/seaweed/switch'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
        <sw-switch size="small" />
        <sw-switch size="normal" />
        <sw-switch size="large" />
    </div>
}
```

## 选中状态

```tsx
import '@akrc/seaweed/switch'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
        <sw-switch />
        <sw-switch checked />
    </div>
}
```

## 禁用状态

```tsx
import '@akrc/seaweed/switch'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', flexWrap: 'wrap'}}>
        <sw-switch />
        <sw-switch disabled />
    </div>
}
```