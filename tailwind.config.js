/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // 使用 class 策略（通过 .dark 类切换）
  theme: {
    extend: {
      fontFamily: {
        italic: ["Crimson Text", "serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out 0.3s both",
        "spin-slow": "spin 20s linear infinite",
        "spin-medium": "spin 15s linear infinite",
        "spin-reverse": "spin 25s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
