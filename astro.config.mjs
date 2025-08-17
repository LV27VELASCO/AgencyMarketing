// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // @ts-ignore
  adapter: node(),
  server: {
      allowedHosts: [
        '.weeklysocial.es'
      ]
    },
  vite: {
    plugins: [tailwindcss()],
  },
});
