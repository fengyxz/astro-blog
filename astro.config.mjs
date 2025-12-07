// https://astro.build/config
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
  build: {
    ssr: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
