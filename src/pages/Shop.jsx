import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, getProducts } from '../data/products'

const priceFilters = [
  { id: 'all', label: 'All prices' },
  { id: 'u500', label: 'Under ₹500', test: (p) => p.price < 500 },
  { id: '500-1000', label: '₹500 – ₹1000', test: (p) => p.price >= 500 && p.price <= 1000 },
  { id: '1000-1500', label: '₹1000 – ₹1500', test: (p) => p.price > 1000 && p.price <= 1500 },
  { id: '1500+', label: 'Above ₹1500', test: (p) => p.price > 1500 },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') || 'all'
  const qRaw = (params.get('q') || '').trim()
  const q = qRaw.toLowerCase()
  const [priceId, setPriceId] = useState('all')
  const [sort, setSort] = useState('popular')

  const filtered = useMemo(() => {
    let list = getProducts()

    if (category !== 'all') {
      list = list.filter((p) => p.category === category)
    }

    if (q) {
      list = list.filter((p) => {
        const haystack = [
          p.name,
          p.shortDescription,
          p.description,
          p.material,
          p.color,
          p.category,
          categories.find((c) => c.id === p.category)?.name,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return haystack.includes(q)
      })
    }

    const priceRule = priceFilters.find((f) => f.id === priceId)
    if (priceRule?.test) list = list.filter(priceRule.test)

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'popular') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [category, q, priceId, sort])

  const setCategory = (id) => {
    const next = new URLSearchParams(params)
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    setParams(next)
  }

  const categoryBtn = (id, label) => {
    const active = category === id
    return (
      <button
        type="button"
        onClick={() => setCategory(id)}
        className={`w-full rounded-xl px-3 py-2 text-left text-sm transition ${
          active
            ? 'bg-olive/15 font-semibold text-olive'
            : 'text-ink/70 hover:bg-cream hover:text-olive'
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="page-shell mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-7 lg:py-10">
      <nav className="mb-3 text-xs text-ink/55 sm:mb-4 sm:text-sm lg:mb-6">
        <Link to="/" className="hover:text-olive">
          Home
        </Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-ink">Shop</span>
      </nav>

      <div className="mb-4 flex flex-wrap items-end justify-between gap-2 sm:mb-6 sm:gap-4 lg:mb-8">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl">Shop</h1>
          <p className="mt-1 text-xs text-ink/65 sm:mt-2 sm:text-sm lg:text-base">
            {filtered.length} handcrafted pieces
            {qRaw ? ` matching “${qRaw}”` : ''}
          </p>
        </div>
        <label className="hidden items-center gap-2 text-sm lg:flex">
          <span className="text-ink/60">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-ink/15 bg-white px-4 py-2 outline-none"
          >
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>

      {/* Mobile filters: compact dropdowns */}
      <div className="mb-4 grid grid-cols-3 gap-2 lg:hidden">
        <label className="min-w-0">
          <span className="mb-1 block text-[10px] font-semibold tracking-wider text-ink/50 uppercase">
            Category
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full truncate rounded-xl border border-ink/12 bg-white px-2 py-2 text-xs outline-none focus:border-olive"
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
        <label className="min-w-0">
          <span className="mb-1 block text-[10px] font-semibold tracking-wider text-ink/50 uppercase">
            Price
          </span>
          <select
            value={priceId}
            onChange={(e) => setPriceId(e.target.value)}
            className="w-full truncate rounded-xl border border-ink/12 bg-white px-2 py-2 text-xs outline-none focus:border-olive"
          >
            {priceFilters.map((filter) => (
              <option key={filter.id} value={filter.id}>
                {filter.label}
              </option>
            ))}
          </select>
        </label>
        <label className="min-w-0">
          <span className="mb-1 block text-[10px] font-semibold tracking-wider text-ink/50 uppercase">
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full truncate rounded-xl border border-ink/12 bg-white px-2 py-2 text-xs outline-none focus:border-olive"
          >
            <option value="popular">Popular</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[240px_1fr] lg:gap-8">
        <aside className="hidden h-fit rounded-3xl bg-white p-5 shadow-[0_8px_24px_rgba(37,34,31,0.05)] lg:block">
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase">
            Categories
          </h2>
          <ul className="mb-6 space-y-1">
            <li>{categoryBtn('all', 'All Products')}</li>
            {categories.map((cat) => (
              <li key={cat.id}>{categoryBtn(cat.id, cat.name)}</li>
            ))}
          </ul>

          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase">
            Price Range
          </h2>
          <ul className="space-y-2 text-sm">
            {priceFilters.map((filter) => (
              <li key={filter.id}>
                <label className="flex cursor-pointer items-center gap-2 text-ink/75">
                  <input
                    type="radio"
                    name="price"
                    checked={priceId === filter.id}
                    onChange={() => setPriceId(filter.id)}
                    className="accent-olive"
                  />
                  {filter.label}
                </label>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
              <p className="font-display text-2xl sm:text-3xl">No products found</p>
              <p className="mt-1.5 text-sm text-ink/60 sm:mt-2">
                Try another category or price range.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory('all')
                  setPriceId('all')
                }}
                className="mt-4 rounded-full bg-olive px-4 py-2 text-xs font-semibold text-white sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
