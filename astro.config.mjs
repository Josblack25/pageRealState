import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Cambiamos a 'static' para evitar errores de funciones de servidor
  output: 'static', 

  adapter: vercel(),

  integrations: [react()],
  
  vite: {
    plugins: [tailwind()],
  }
});