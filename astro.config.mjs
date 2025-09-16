// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // @ts-ignore
  adapter: node({
    mode: "standalone", // o "middleware"
  }),
  server: {
      allowedHosts: [
        '.wklysocial.com'
      ]
    },
  vite: {
    plugins: [tailwindcss()],
  },
});
