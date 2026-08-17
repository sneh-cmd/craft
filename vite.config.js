import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Change base to '/' if deploying at domain root.
// For GitHub Pages project site: '/<repo-name>/'
export default defineConfig({
  base: '/craft/',
  plugins: [react(), tailwindcss()],
})
