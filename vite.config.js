import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        menu: './menu.html',
        gallery: './gallery.html',
        reviews: './reviews.html',
        reservations: './reservations.html'
      }
    }
  }
})