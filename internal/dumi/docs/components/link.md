---
title: Link 链接
group:
  title: 通用
  order: 0
---

# 链接

## 链接类型

```tsx
import '@akrc/seaweed/link'

export default () => {
    return <div style={{display:'flex', gap: '1em'}}>
        <sw-link href="//bing.com" type="success">success</sw-link>
        <sw-link href="//bing.com" type="info">info</sw-link>
        <sw-link href="//bing.com" type="warning">warning</sw-link>
        <sw-link href="//bing.com" type="error">error</sw-link>
    </div>
}
```

## 禁用状态

```tsx
import '@akrc/seaweed/link'

export default () => {
    return <div style={{display:'flex', gap: '1em'}}>
        <sw-link href="//bing.com" type="success" disabled="true">success</sw-link>
        <sw-link href="//bing.com" type="info" disabled="true">info</sw-link>
        <sw-link href="//bing.com" type="warning" disabled="true">warning</sw-link>
        <sw-link href="//bing.com" type="error" disabled="true">error</sw-link>
    </div>
}
```

## hover下划线


```tsx
import '@akrc/seaweed/button'

export default () => {
    return <div style={{display:'flex', gap: '1em', flexDirection: 'column'}}>
        <sw-link href="//bing.com" type="success">Minimalism, u know.</sw-link>
        <sw-link href="//bing.com" type="success" underline="true">Excuse me sir, do you have a moment to talk about our lord and saviour Underilne?</sw-link>
    </div>
}
```

## 打开方式

```tsx
import '@akrc/seaweed/link'

export default () => {
    return <div style={{display:'flex', gap: '1em'}}>
        <sw-link href="//bing.com" target="_blank">blank</sw-link>
        <sw-link href="//bing.com" target="_parent">parent</sw-link>
        <sw-link href="//bing.com" target="_self">self</sw-link>
        <sw-link href="//bing.com" target="_top">top</sw-link>
    </div>
}
```
