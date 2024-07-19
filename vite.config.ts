import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/api/weather': {
        target: 'https://thanhtoantu-portfolio-backend.fly.dev/',
        changeOrigin: true,
      }
    },
  },
  base: '/thanhtoantu-portfolio-frontend/',
});