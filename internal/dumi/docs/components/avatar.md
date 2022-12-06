---
title: Avatar 头像
group:
  title: 数据展示
  order: 1
---

# 头像

## 方形头像

```tsx
import '@akrc/seaweed/avatar'

export default () => {
    return <sw-avatar src="https://avatars.githubusercontent.com/akarachen"></sw-avatar>
}
```

## 圆形头像

```tsx
import '@akrc/seaweed/avatar'

export default () => {
    return <sw-avatar src="https://avatars.githubusercontent.com/akarachen" rounded>
    </sw-avatar>
}
```

## 头像大小

```tsx
import '@akrc/seaweed/avatar'

export default () => {
    const url = "https://avatars.githubusercontent.com/akarachen";
    return <div style={{display: 'flex', gap: '0.25em'}}>
        <sw-avatar src={url} size="small"></sw-avatar>
        <sw-avatar src={url} size="normal"></sw-avatar>
        <sw-avatar src={url} size="large"></sw-avatar>
    </div>
}
```
