---
title: Process 进度
group: 
  title: 数据展示
  order: 1
---

# 进度

## 进度类型

```tsx
import '@akrc/seaweed/progress'

export default () => {
    return <div style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
        <sw-progress></sw-progress>
        <sw-progress type="success"></sw-progress>
        <sw-progress type="warning"></sw-progress>
        <sw-progress type="error"></sw-progress>
    </div>
}
```

## 进度大小

```tsx
import '@akrc/seaweed/progress'

export default () => {
    return <div style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
        <sw-progress size="small"></sw-progress>
        <sw-progress></sw-progress>
        <sw-progress size="large"></sw-progress>
    </div>
}
```