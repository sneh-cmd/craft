import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { useShop } from '../context/ShopContext'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useShop()
  const wished = isWishlisted(product.id)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    setImgLoaded(false)
  }, [product.id])

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(37,34,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(37,34,31,0.1)] lg:rounded-2xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
        {/* Image loading skeleton (shows until the product image is loaded) */}
        {!imgLoaded && (
          <div
            className="absolute inset-0 animate-pulse bg-cream-dark/70"
            aria-hidden="true"
          />
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(true)}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </Link>
        <button
          type="button"
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-1.5 right-1.5 grid size-7 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:scale-105 lg:top-3 lg:right-3 lg:size-9"
        >
          <Heart
            className={`size-3.5 lg:size-[18px] ${
              wished ? 'fill-red-500 text-red-500' : ''
            }`}
          />
        </button>
      </div>
      <div className="space-y-1 p-2.5 sm:p-3 lg:space-y-2 lg:p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 font-display text-sm leading-snug text-ink transition hover:text-olive sm:text-base lg:text-xl">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-semibold text-brown lg:text-base">
          {formatPrice(product.price)}
        </p>
        <StarRating rating={product.rating} reviews={product.reviews} compact />
      </div>
    </article>
  )
}
