import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // WAJIB DITAMBAHKAN: Domain utama untuk Sitemap dan OG URL
  site: 'https://gestunbyaisyah.my.id',

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    host: true,
  },
});
