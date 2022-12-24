---
title: Balancer 平衡
group: 数据展示
---

# 平衡

从 [react-wrap-balancer](https://github.com/shuding/react-wrap-balancer) 抄袭来的，可以让标题的可读性更强。

```tsx
import '@akrc/seaweed/balancer'
import '@akrc/seaweed/title'

export default () => {
    return <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
        <sw-title level="2">With balancer</sw-title>
        <sw-title level="3">
            <sw-balancer style={{maxWidth: "400px"}}>
                Lit is a simple library for building fast, lightweight web components.
            </sw-balancer>
        </sw-title>
        <sw-title level="2">Without balancer</sw-title>
        <sw-title level="3" style={{maxWidth: "400px", display: "inline-block"}}>
            Lit is a simple library for building fast, lightweight web components.
        </sw-title>
    </div> 
}
```