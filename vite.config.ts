import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages 專案型網站的 Repository 名稱需為 work-progress
  base: '/work-progress/',
  plugins: [react()],
});
