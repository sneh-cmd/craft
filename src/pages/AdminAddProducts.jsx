import { useMemo, useState } from 'react'
import { categories } from '../data/products'

const ADMIN_PIN = '9537'
const ADMIN_PRODUCTS_KEY = 'shreeji_admin_products_v1'

function slugify(input) {
  return String(input || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function safeParse(raw) {
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function AdminAddProducts() {
  const [pin, setPin] = useState('')
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState('')

  const existing = useMemo(() => {
    if (typeof window === 'undefined') return []
    return safeParse(window.localStorage.getItem(ADMIN_PRODUCTS_KEY))
  }, [])

  const [form, setForm] = useState({
    id: '',
    name: '',
    price: '',
    category: categories[0]?.id || 'wall-decor',
    shortDescription: '',
    description: '',
    care: '',
    shipping: '',
    material: '',
    size: '',
    color: '',
    imageFile: '',
    galleryFiles: '',
    bestSeller: false,
    inStock: true,
    rating: '4.6',
    reviews: '0',
  })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (name === 'name' && !form.id) {
      setForm((prev) => ({ ...prev, id: slugify(value) }))
    }
  }

  const validate = () => {
    if (!form.id.trim()) return 'Product id is required.'
    if (!form.name.trim()) return 'Product name is required.'
    if (!form.category.trim()) return 'Category is required.'
    if (!form.price.toString().trim()) return 'Price is required.'
    if (!form.imageFile.trim()) return 'Image filename is required.'
    return ''
  }

  const upsert = () => {
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    const stored = safeParse(
      window.localStorage.getItem(ADMIN_PRODUCTS_KEY),
    )

    const galleryFiles = form.galleryFiles
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    const item = {
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
      reviews: Number(form.reviews),
      imageFile: form.imageFile.trim(),
      galleryFiles: galleryFiles.length
        ? galleryFiles
        : [form.imageFile.trim()],
    }

    const next = [...stored]
    const idx = next.findIndex((p) => p.id === item.id)
    if (idx >= 0) next[idx] = item
    else next.unshift(item)

    window.localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(next))
    setError('')
    alert('Product added/updated!')
  }

  if (!authed) {
    return (
      <div className="page-shell mx-auto max-w-2xl px-3 py-10 sm:px-4">
        <h1 className="font-display text-2xl sm:text-3xl">Admin: Add Products</h1>
        <p className="mt-2 text-sm text-ink/65">
          Enter PIN to add products. Added products are stored in your browser
          (localStorage).
        </p>

        <div className="mt-6 rounded-3xl bg-white p-4 shadow-sm sm:p-6">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">PIN</span>
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              inputMode="numeric"
              type="password"
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-4 py-3 outline-none focus:border-olive"
              placeholder="Enter admin PIN"
            />
          </label>
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

          <button
            type="button"
            onClick={() => {
              if (pin.trim() === ADMIN_PIN) {
                setAuthed(true)
                setError('')
              } else {
                setError('Wrong PIN.')
              }
            }}
            className="mt-4 w-full rounded-full bg-olive px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-deep"
          >
            Unlock
          </button>
        </div>
      </div>
    )
  }

  const storedCount = existing.length

  return (
    <div className="page-shell mx-auto max-w-5xl px-3 py-6 sm:px-4 sm:py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl">Admin: Add Products</h1>
          <p className="mt-1 text-xs text-ink/60 sm:text-sm">
            You have {storedCount} saved products in this browser.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAuthed(false)}
          className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink/80 hover:border-olive hover:text-olive sm:text-sm"
        >
          Lock
        </button>
      </div>

      <div className="rounded-3xl bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Product ID
            </span>
            <input
              name="id"
              value={form.id}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. golden-bell-wall-plaque"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Name
            </span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="Product name"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Price (INR)
            </span>
            <input
              name="price"
              value={form.price}
              onChange={onChange}
              inputMode="numeric"
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. 1499"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Category
            </span>
            <select
              name="category"
              value={form.category}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Short Description
            </span>
            <input
              name="shortDescription"
              value={form.shortDescription}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="One-line description"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Description
            </span>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              rows={3}
              className="w-full resize-y rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="Full description"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Material
            </span>
            <input
              name="material"
              value={form.material}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. Bamboo sticks, Metal bell..."
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Size
            </span>
            <input
              name="size"
              value={form.size}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. Approx. 18 × 8 inch"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Color
            </span>
            <input
              name="color"
              value={form.color}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. Gold, Pink & Multicolor"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Rating
            </span>
            <input
              name="rating"
              value={form.rating}
              onChange={onChange}
              inputMode="decimal"
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. 4.6"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Reviews
            </span>
            <input
              name="reviews"
              value={form.reviews}
              onChange={onChange}
              inputMode="numeric"
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. 10"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Image file (webp)
            </span>
            <input
              name="imageFile"
              value={form.imageFile}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. monk-rose-hanging.webp"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Gallery files (comma)
            </span>
            <input
              name="galleryFiles"
              value={form.galleryFiles}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="e.g. floral-panels.webp, floral-panels-2.webp"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Care
            </span>
            <input
              name="care"
              value={form.care}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="Care instructions"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-ink/80 sm:text-sm">
              Shipping
            </span>
            <input
              name="shipping"
              value={form.shipping}
              onChange={onChange}
              className="w-full rounded-2xl border border-ink/12 bg-cream/50 px-3 py-2 text-xs outline-none focus:border-olive sm:px-4 sm:py-3 sm:text-sm"
              placeholder="Dispatch time"
            />
          </label>

          <label className="flex items-center gap-2 sm:col-span-1">
            <input
              type="checkbox"
              name="bestSeller"
              checked={form.bestSeller}
              onChange={onChange}
              className="accent-olive"
            />
            <span className="text-xs text-ink/80 sm:text-sm">Best Seller</span>
          </label>

          <label className="flex items-center gap-2 sm:col-span-1">
            <input
              type="checkbox"
              name="inStock"
              checked={form.inStock}
              onChange={onChange}
              className="accent-olive"
            />
            <span className="text-xs text-ink/80 sm:text-sm">In Stock</span>
          </label>
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={upsert}
            className="rounded-full bg-olive px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-deep"
          >
            Save product
          </button>
          <p className="text-xs text-ink/60 sm:text-sm">
            Tip: keep image files inside <span className="font-semibold">public/images/products/</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

