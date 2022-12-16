---
title: 标题 Title
group: 通用
---

# 标题

## 大小

跟 h1-h6 互相对应

```tsx
import '@akrc/seaweed/title'

export default () => {
    return <div style={{display: 'flex', gap: '1em', flexDirection: 'column'}}>
        <sw-title level="1">H1</sw-title>
        <sw-title level="2">H2</sw-title>
        <sw-title level="3">H3</sw-title>
        <sw-title level="4">H4</sw-title>
        <sw-title level="5">H5</sw-title>
        <sw-title level="6">H6</sw-title>
    </div>
}
```