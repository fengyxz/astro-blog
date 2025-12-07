# cn 工具函数使用说明

## 什么是 cn？

`cn` 是一个用于智能合并 Tailwind CSS 类名的工具函数，它结合了：
- **clsx**: 条件性地组合类名
- **tailwind-merge**: 自动解决 Tailwind 类冲突

## 为什么需要它？

### 问题示例

```html
<!-- ❌ 类冲突：hover:bg-black/5 和 dark:hover:bg-white/10 可能冲突 -->
<button class="hover:bg-black/5 dark:hover:bg-white/10">
  按钮
</button>
```

### 使用 cn 解决

```astro
---
import { cn } from "../lib/utils";
---

<button
  class={cn(
    "hover:bg-black/5",
    "dark:hover:bg-white/10"
  )}
>
  按钮
</button>
```

## 优势

1. ✅ **自动解决冲突**: `tailwind-merge` 会智能合并冲突的类
2. ✅ **更好的可读性**: 将类名分组，代码更清晰
3. ✅ **条件类名**: 可以轻松添加条件逻辑

## 使用示例

### 基础用法

```typescript
cn("px-4 py-2", "bg-blue-500", "hover:bg-blue-600")
// 输出: "px-4 py-2 bg-blue-500 hover:bg-blue-600"
```

### 条件类名

```typescript
cn(
  "px-4 py-2",
  isActive && "bg-blue-500",
  isDisabled && "opacity-50 cursor-not-allowed"
)
```

### 解决冲突

```typescript
cn("px-2 py-1", "px-4") 
// 输出: "py-1 px-4" (px-4 覆盖 px-2)

cn("hover:bg-black/5", "dark:hover:bg-white/10")
// 输出: "hover:bg-black/5 dark:hover:bg-white/10" (正确合并)
```

## 在项目中的应用

所有导航栏组件都已使用 `cn` 函数：
- `NavItem.astro`
- `ThemeIcon.astro`
- `Menu.astro`

这确保了 dark 模式下的样式能够正确覆盖浅色模式的样式。
