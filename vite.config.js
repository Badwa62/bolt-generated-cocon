import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3001,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
