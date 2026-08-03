import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  server: {
    host: true,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
