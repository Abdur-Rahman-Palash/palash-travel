import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Set the base for GitHub Pages. Change this to '/' or './' for other targets.
  base: '/palash-travel/',
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  }
})
