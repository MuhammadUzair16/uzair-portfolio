// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 this line allows access from LAN (mobile)
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
