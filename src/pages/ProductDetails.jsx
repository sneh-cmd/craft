import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  HandHeart,
  Heart,
  Package,
  RefreshCcw,
  Share2,
  ShieldCheck,
} from 'lucide-react'
import StarRating from '../components/StarRating'
import { formatPrice, getProductById } from '../data/products'
import { useShop } from '../context/ShopContext'
import {
  openWhatsApp,
  productOrderMessage,
  shareProduct,
} from '../utils/whatsapp'

const tabs = ['Description', 'Care Instructions', 'Shipping', 'Reviews']

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart, toggleWishlist, isWishlisted } = useShop()
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [tab, setTab] = useState('Description')
  const [added, setAdded] = useState(false)
  const wished = product ? isWishlisted(product.id) : false

  const tabContent = useMemo(() => {
    if (!product) return ''
    if (tab === 'Description') return product.description
    if (tab === 'Care Instructions') return product.care
    if (tab === 'Shipping') return product.shipping
    return `Customers love this piece — rated ${product.rating}/5 from ${product.reviews} reviews.`
  }, [product, tab])

  if (!product) {
    return (
      <div className="page-shell mx-auto max-w-7xl px-3 py-12 text-center sm:px-4 sm:py-16 lg:py-20">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl">Product not found</h1>
        <Link
          to="/shop"
          className="mt-3 inline-block text-sm text-olive hover:underline sm:mt-4"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const images = product.gallery?.length ? product.gallery : [product.image]

  const handleAdd = () => {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  const handleShare = async () => {
    await shareProduct(product)
  }

  return (
    <div className="page-shell mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-7 lg:py-10">
      <nav className="mb-3 text-xs text-ink/55 sm:mb-4 sm:text-sm lg:mb-6">
        <Link to="/" className="hover:text-olive">
          Home
        </Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <Link to="/shop" className="hover:text-olive">
          Shop
        </Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-5 sm:gap-7 lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="grid gap-2 sm:grid-cols-[88px_1fr] sm:gap-4">
            <div className="order-2 flex gap-2 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible lg:gap-3">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`shrink-0 overflow-hidden rounded-lg border-2 sm:rounded-xl ${
                    activeImage === i ? 'border-olive' : 'border-transparent'
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="size-14 object-cover sm:size-20 lg:size-[88px]"
                  />
                </button>
              ))}
            </div>
            <div className="relative order-1 overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(37,34,31,0.08)] sm:order-2 sm:rounded-3xl lg:rounded-3xl">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
              <button
                type="button"
                aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-2.5 right-2.5 grid size-9 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:scale-105 sm:top-3 sm:right-3 sm:size-10"
              >
                <Heart
                  className={`size-4 sm:size-[18px] ${
                    wished ? 'fill-red-500 text-red-500' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px] text-ink/70 sm:mt-4 sm:gap-2 sm:text-xs lg:mt-5 lg:gap-3">
            {[
              { icon: HandHeart, label: 'Handmade with Love' },
              { icon: ShieldCheck, label: 'Premium Quality' },
              { icon: Package, label: 'Secure Packaging' },
              { icon: RefreshCcw, label: 'Easy Returns' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-xl bg-white px-2 py-2 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-3 lg:rounded-2xl"
              >
                <Icon className="size-3.5 shrink-0 text-olive lg:size-4" />
                <span className="leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-display text-2xl leading-snug sm:text-3xl lg:text-5xl">
            {product.name}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-3 sm:gap-4">
            <p className="text-lg font-semibold text-brown sm:text-xl lg:text-2xl">
              {formatPrice(product.price)}
            </p>
            <StarRating rating={product.rating} reviews={product.reviews} compact />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:mt-3 sm:text-sm lg:mt-4 lg:text-base">
            {product.shortDescription}
          </p>

          <ul className="mt-3 space-y-1.5 rounded-2xl bg-white p-3 text-xs shadow-sm sm:mt-4 sm:space-y-2 sm:rounded-3xl sm:p-4 sm:text-sm lg:mt-6 lg:p-5">
            <li>
              <span className="font-semibold">Material:</span> {product.material}
            </li>
            <li>
              <span className="font-semibold">Size:</span> {product.size}
            </li>
            <li>
              <span className="font-semibold">Color:</span> {product.color}
            </li>
            <li>
              <span className="font-semibold">Availability:</span>{' '}
              <span className={product.inStock ? 'text-olive' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </li>
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3 lg:mt-6">
            <div className="flex items-center rounded-full border border-ink/15 bg-white text-sm">
              <button
                type="button"
                className="px-3 py-1.5 sm:px-4 sm:py-2.5"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="min-w-6 text-center text-sm font-medium sm:min-w-8">
                {qty}
              </span>
              <button
                type="button"
                className="px-3 py-1.5 sm:px-4 sm:py-2.5"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-full border-2 border-olive px-4 py-1.5 text-xs font-semibold text-olive transition hover:bg-olive hover:text-white sm:px-5 sm:py-2 sm:text-sm lg:px-6 lg:py-2.5"
            >
              {added ? 'Added!' : 'Add to Cart'}
            </button>
            <button
              type="button"
              onClick={() => {
                addToCart(product, qty)
                openWhatsApp(productOrderMessage(product, qty))
              }}
              className="rounded-full bg-olive px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-olive-deep sm:px-5 sm:py-2 sm:text-sm lg:px-6 lg:py-2.5"
            >
              Buy Now
            </button>
          </div>

          <button
            type="button"
            onClick={() => openWhatsApp(productOrderMessage(product, qty))}
            className="mt-2 w-full rounded-full bg-whatsapp px-4 py-2 text-xs font-semibold text-white transition hover:brightness-105 sm:mt-3 sm:w-auto sm:px-6 sm:py-2.5 sm:text-sm lg:py-3"
          >
            Order on WhatsApp
          </button>

          <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink/80 transition hover:border-olive hover:text-olive sm:px-4 sm:py-2 sm:text-sm"
            >
              <Share2 className="size-3.5 sm:size-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-3 shadow-sm sm:mt-8 sm:rounded-3xl sm:p-5 lg:mt-12 lg:p-6">
        <div className="flex flex-wrap gap-1.5 border-b border-ink/10 pb-3 sm:gap-2 sm:pb-4">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition sm:px-3.5 sm:py-1.5 sm:text-xs lg:px-4 lg:py-2 lg:text-sm ${
                tab === item
                  ? 'bg-olive text-white'
                  : 'bg-cream text-ink/70 hover:text-ink'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-ink/75 sm:mt-4 sm:text-sm lg:mt-5 lg:text-base">
          {tabContent}
        </p>
      </div>
    </div>
  )
}
