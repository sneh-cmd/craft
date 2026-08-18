import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../data/products'
import { useShop } from '../context/ShopContext'

export default function Wishlist() {
  const { wishlist } = useShop()
  const items = getProducts().filter((p) => wishlist.includes(p.id))

  if (items.length === 0) {
    return (
      <div className="page-shell mx-auto max-w-7xl px-3 py-12 text-center sm:px-4 sm:py-16 lg:py-20">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl">Wishlist is empty</h1>
        <p className="mt-2 text-xs text-ink/60 sm:mt-3 sm:text-sm lg:text-base">
          Tap the heart on products you love.
        </p>
        <Link
          to="/shop"
          className="mt-4 inline-block rounded-full bg-olive px-4 py-2 text-xs font-semibold text-white sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm lg:mt-6 lg:px-6 lg:py-3"
        >
          Browse Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="page-shell mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-8 lg:py-12">
      <h1 className="mb-4 font-display text-2xl sm:mb-6 sm:text-3xl lg:mb-8 lg:text-5xl">
        Wishlist
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
