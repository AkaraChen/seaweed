---
title: Spoiler 剧透
group: 数据展示
---

# 剧透

萌娘百科喜欢用这个。

## 触发方式

可以点击触发，可以 hover 触发。

```tsx
import '@akrc/seaweed/spoiler'

export default () => {
    return <div>
        <sw-spoiler>萌豚</sw-spoiler>
        <sw-spoiler event="hover">可爱捏</sw-spoiler>
    </div>
}
```