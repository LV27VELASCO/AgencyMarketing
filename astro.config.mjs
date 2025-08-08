// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // @ts-ignore
  adapter: node({
    // @ts-ignore
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  }),
  output:'server',
  vite: {
    plugins: [tailwindcss()],
  },
});
