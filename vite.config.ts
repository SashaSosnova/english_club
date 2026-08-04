import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Project site: https://sashasosnova.github.io/english_club/
  base: '/english_club/',
  server: {
    host: true,
    watch: {
      ignored: ['**/android/**'],
    },
  },
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
