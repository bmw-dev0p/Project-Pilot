import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001, //changed so that npm start launched correct page
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
