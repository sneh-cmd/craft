import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const root = 'r:/public_html/craft/shreeji_craft/public/images'
const jobs = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_')) continue
      walk(full)
    } else if (/\.png$/i.test(entry.name)) {
      if (/favicon/i.test(entry.name)) continue
      jobs.push(full)
    }
  }
}

walk(root)

function maxWidthFor(file) {
  const name = path.basename(file).toLowerCase()
  if (name === 'logo.png') return 512
  if (name === 'hero-banner.png') return 1920
  if (name === 'og-image.png') return 1200
  return 1200
}

function qualityFor(file) {
  const name = path.basename(file).toLowerCase()
  if (name === 'logo.png') return 85
  if (name === 'og-image.png') return 80
  return 78
}

let before = 0
let after = 0

for (const file of jobs) {
  const stat = fs.statSync(file)
  before += stat.size
  const out = file.replace(/\.png$/i, '.webp')
  const mw = maxWidthFor(file)
  const q = qualityFor(file)

  const meta = await sharp(file).metadata()
  let pipeline = sharp(file).rotate()
  if (meta.width && meta.width > mw) {
    pipeline = pipeline.resize({ width: mw, withoutEnlargement: true })
  }
  await pipeline.webp({ quality: q, effort: 6 }).toFile(out)

  const outSize = fs.statSync(out).size
  after += outSize
  console.log(
    `${path.relative(root, file)}  ${(stat.size / 1024).toFixed(0)}KB -> ${(outSize / 1024).toFixed(0)}KB`,
  )
}

console.log('---')
console.log(`Before (source PNG): ${(before / 1024 / 1024).toFixed(1)} MB`)
console.log(`After (WebP): ${(after / 1024 / 1024).toFixed(1)} MB`)
console.log(`Saved: ${(((before - after) / before) * 100).toFixed(0)}%`)
