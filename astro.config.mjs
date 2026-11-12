// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Publié sur Vercel : https://modestekoffi.com/
export default defineConfig({
  site: 'https://modestekoffi.com',
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
