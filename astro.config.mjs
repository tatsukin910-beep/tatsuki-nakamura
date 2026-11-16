// @ts-check
import { defineConfig } from 'astro/config';

// Pure static build (SSG). No adapter.
// The existing pages live in public/ and are copied to dist/ unchanged.
export default defineConfig({
  site: 'https://tatsuki-nakamura.com',
  build: {
    format: 'directory',
  },
});
