// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Proza Libre",
        cssVariable: "--font-proza-libre",
      },
      {
        provider: fontProviders.google(),
        name: "Spectral",
        cssVariable: "--font-spectral",
        weights: ["300", "400"],
      },
    ],
  },
});
