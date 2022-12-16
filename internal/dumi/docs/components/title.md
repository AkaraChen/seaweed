---
title: Title 标题
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

## 装饰

给标题左边加条线，颜色可以从那四种里选。

```tsx
import '@akrc/seaweed/title'

export default () => {
    return <div style={{display: 'flex', gap: '1em', flexDirection: 'column'}}>
        <sw-title level="1" decorator>H1</sw-title>
        <sw-title level="2" decorator type="warning">H2</sw-title>
        <sw-title level="3" decorator type="error">H3</sw-title>
        <sw-title level="4" decorator type="success">H4</sw-title>
        <sw-title level="5" decorator>H5</sw-title>
        <sw-title level="6" decorator>H6</sw-title>
    </div>
}
```

## 颜色

颜色当然也可调。

```tsx
import '@akrc/seaweed/title'

export default () => {
    return <div style={{display: 'flex', gap: '1em', flexDirection: 'column'}}>
        <sw-title color="#f00">喜欢我红色风暴吗</sw-title>
        <sw-title color="#00f">喜欢我蓝色妖姬吗</sw-title>
        <sw-title color="#ff0">喜欢我黄色预警吗</sw-title>
        <sw-title color="#0f0">喜欢我绿色毒刺吗</sw-title>
    </div>
}
```