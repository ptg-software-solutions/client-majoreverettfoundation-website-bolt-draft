import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/client-majoreverettfoundation-website-bolt-draft/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
