---
title: Alert 警告
group:
  title: 反馈
  order: 1
---

# 警告

## 警告类型

```tsx
import '@akrc/seaweed/alert'

export default () => {
    return <>
        <sw-alert>芝士 info。</sw-alert>
        <sw-alert type="success">芝士 success。</sw-alert>
        <sw-alert type="warning">芝士 warning。</sw-alert>
        <sw-alert type="error">芝士 error。</sw-alert>
    </>
}
```

## 标题

```tsx
import '@akrc/seaweed/alert'

export default () => {
    return <sw-alert title="这是标题">这是一大段文字。</sw-alert>
}
```

## 填充

```tsx
import '@akrc/seaweed/alert'

export default () => {
    return <sw-alert fill>加上 fill 之后就非常扎眼了。</sw-alert>
}
```

## 轮廓

因为轮廓的颜色跟填充的颜色一样，所以你无法同时开启轮廓和填充。

```tsx
import '@akrc/seaweed/alert'

export default () => {
    return <sw-alert outline>带轮廓的警告。</sw-alert>
}
```

## 边框

你可以在警告的左侧或者顶部添加一个边框。

```tsx
import '@akrc/seaweed/alert'

export default () => {
    return <>
        <sw-alert border="top">上边有个边框。</sw-alert>
        <sw-alert border="left">左边有个边框。</sw-alert>
    </>
}
```