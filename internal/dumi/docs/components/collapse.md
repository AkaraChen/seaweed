---
title: Collapse 折叠框
group: 数据展示
---

# 折叠框

## 基础

```tsx
import '@akrc/seaweed/collapse'

export default () => {
    return <>
        <sw-collapse summary="Test">
            NEKOPARA Vol. 4: Despite the popularity of, "La Soleil", Kashou's father continues to disapprove of it. Determined to get his father to approve of him, Kashou journeys to France to seek advice from the teacher who taught him his craft. A new chapter awaits in the next volume of the NEKOPARA series!
        </sw-collapse>
    </>
}
```

## 透明

```tsx
import '@akrc/seaweed/collapse'

export default () => {
    return <>
        <sw-collapse summary="Test" transparent>
            NEKOPARA Vol. 4: Despite the popularity of, "La Soleil", Kashou's father continues to disapprove of it. Determined to get his father to approve of him, Kashou journeys to France to seek advice from the teacher who taught him his craft. A new chapter awaits in the next volume of the NEKOPARA series!
        </sw-collapse>
    </>
}
```