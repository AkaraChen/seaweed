---
title: Form 表单
group: 表单
---

# 表单

```tsx
import '@akrc/seaweed/form'
import '@akrc/seaweed/checkbox'
import '@akrc/seaweed/switch'

export default () => {
    return <sw-form>
        <sw-form-item label="姓名">
            <sw-input></sw-input>
        </sw-form-item>
        <sw-form-item label="职位">
            <sw-checkbox checked>工程师</sw-checkbox>
            <sw-checkbox>设计师</sw-checkbox>
            <sw-checkbox>产品经理</sw-checkbox>
        </sw-form-item>
        <sw-form-item>
            <sw-switch>我已阅读用户协议</sw-switch>
        </sw-form-item>
    </sw-form>
}
```