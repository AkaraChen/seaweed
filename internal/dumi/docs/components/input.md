---
title: Input 输入框
group:
  title: 表单
  order: 2
---

# 输入框

## 输入框类型

```tsx
import '@akrc/seaweed/input'

export default () => {
    return <div style={{display:'flex', flexDirection: 'column', gap: '0.25em'}}>
        <sw-input>Normal</sw-input>
        <sw-input type="success">Success</sw-input>
        <sw-input type="warning">Warning</sw-input>
        <sw-input type="error">Error</sw-input>
    </div>
}
```


## 输入框尺寸

```tsx
import '@akrc/seaweed/input'

export default () => {
    return <div style={{display: 'flex', gap: '0.5em'}}>
        <sw-input size="small"></sw-input>
        <sw-input></sw-input>
        <sw-input size="large"></sw-input>
    </div>
}
```

## 输入框placeholder占位符

```tsx
import '@akrc/seaweed/input'

export default () => {
    return <sw-input placeholder="地方-抓住-者"></sw-input>
}
```