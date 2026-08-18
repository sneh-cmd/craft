import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const dist = resolve('dist')
const indexHtml = resolve(dist, 'index.html')
const fallbackHtml = resolve(dist, '404.html')

if (!existsSync(indexHtml)) {
  console.error('spa-fallback: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

copyFileSync(indexHtml, fallbackHtml)
console.log('spa-fallback: wrote dist/404.html for GitHub Pages')
