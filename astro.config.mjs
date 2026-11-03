// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Publié sur GitHub Pages : https://junmodeste.github.io/Portfolio/
export default defineConfig({
  site: 'https://junmodeste.github.io',
  base: '/Portfolio',
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
