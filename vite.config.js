import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'creative-collective': resolve(__dirname, 'creative-collective.html'),
        platforms: resolve(__dirname, 'platforms.html'),
        'immersive-systems': resolve(__dirname, 'immersive-systems.html'),
        'ai-360-lab': resolve(__dirname, 'ai-360-lab.html'),
      }
    }
  }
})
