import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zachhandley.github.io',
  base: '/RepoSources',
  vite: {
    plugins: [tailwindcss()],
  },
});
