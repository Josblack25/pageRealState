import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Debes declarar el output como server para usar el adaptador
  output: 'server',
  adapter: vercel(), 
  
  integrations: [react()],

  vite: {
    plugins: [tailwind()],
    ssr: {
      noExternal: ['lucide-react', '@radix-ui/react-slot']
    },
    optimizeDeps: {
      include: ['lucide-react']
    }
  }
});