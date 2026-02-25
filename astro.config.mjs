import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', 
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()]
});