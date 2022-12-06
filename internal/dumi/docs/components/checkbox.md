---
title: CheckBox 复选框
group:
  title: 表单
  order: 2
---

# 复选框

## 复选框尺寸

```tsx
import '@akrc/seaweed/checkbox'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', 'flex-wrap': 'wrap'}}>
        <sw-checkbox size="small">Small</sw-checkbox>
        <sw-checkbox size="normal">Normal</sw-checkbox>
        <sw-checkbox size="large">Large</sw-checkbox>
    </div>
}
```

## 禁用状态

```tsx
import '@akrc/seaweed/checkbox'

export default () => {
    return <div style={{display:'flex', gap: '0.25em', 'flex-wrap': 'wrap'}}>
        <sw-checkbox disabled size="small">Small</sw-checkbox>
        <sw-checkbox disabled size="normal">Normal</sw-checkbox>
        <sw-checkbox disabled size="large">Large</sw-checkbox>
    </div>
}
```