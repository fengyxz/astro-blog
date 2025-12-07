/**
 * 主题管理工具函数
 * 用于统一管理 dark 模式的初始化和切换
 */

/**
 * 获取当前主题
 */
export function getTheme(): "dark" | "light" {
  try {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if (["dark", "light"].includes(localStorageTheme)) {
      return localStorageTheme as "dark" | "light";
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  } catch (e) {
    return "light";
  }
}

/**
 * 应用主题到 DOM
 */
export function applyTheme(theme: "dark" | "light") {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/**
 * 初始化主题（在页面加载前调用）
 */
export function initTheme() {
  const theme = getTheme();
  applyTheme(theme);
  localStorage.setItem("theme", theme);
}

/**
 * 切换主题
 */
export function toggleTheme() {
  const element = document.documentElement;
  element.classList.toggle("dark");

  const isDark = element.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
