import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { formatPrice } from '../data/products'
import { useShop } from '../context/ShopContext'
import { cartOrderMessage, openWhatsApp } from '../utils/whatsapp'

export default function Cart() {
  const { cart, cartTotal, updateQty, removeFromCart, clearCart } = useShop()

  if (cart.length === 0) {
    return (
      <div className="page-shell mx-auto max-w-7xl px-3 py-12 text-center sm:px-4 sm:py-16 lg:py-20">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl">Your cart is empty</h1>
        <p className="mt-2 text-xs text-ink/60 sm:mt-3 sm:text-sm lg:text-base">
          Explore our handmade collection and add favourites.
        </p>
        <Link
          to="/shop"
          className="mt-4 inline-block rounded-full bg-olive px-4 py-2 text-xs font-semibold text-white sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm lg:mt-6 lg:px-6 lg:py-3"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="page-shell mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-8 lg:py-12">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2 sm:mb-6 sm:gap-3 lg:mb-8">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl">Cart</h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs text-ink/55 hover:text-brown sm:text-sm"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
        <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-sm sm:gap-3 sm:p-3.5 lg:gap-4 lg:rounded-3xl lg:p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="size-16 shrink-0 rounded-xl object-cover sm:size-20 sm:rounded-2xl lg:h-24 lg:w-24"
              />
              <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-4">
                <div className="min-w-0 flex-1">
                  <Link
                    to={`/product/${item.id}`}
                    className="line-clamp-2 font-display text-sm leading-snug hover:text-olive sm:text-lg lg:text-2xl lg:line-clamp-none"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-0.5 text-xs font-medium text-brown sm:mt-1 sm:text-sm lg:text-base">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <div className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-3 lg:mt-0">
                  <div className="flex items-center rounded-full border border-ink/15 text-xs sm:text-sm">
                    <button
                      type="button"
                      className="px-2 py-1 sm:px-3 sm:py-1.5"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-5 text-center sm:min-w-6">{item.qty}</span>
                    <button
                      type="button"
                      className="px-2 py-1 sm:px-3 sm:py-1.5"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="min-w-14 text-right text-xs font-semibold sm:min-w-20 sm:text-sm lg:text-base">
                    {formatPrice(item.price * item.qty)}
                  </p>
                  <button
                    type="button"
                    aria-label="Remove"
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto grid size-7 place-items-center rounded-full text-ink/50 hover:bg-cream hover:text-brown sm:size-8 lg:ml-0 lg:size-9"
                  >
                    <Trash2 className="size-3.5 lg:size-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-2xl bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5 lg:rounded-[2rem] lg:p-6">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl">Order Summary</h2>
          <div className="mt-3 flex justify-between text-xs sm:mt-4 sm:text-sm">
            <span className="text-ink/60">Subtotal</span>
            <span className="font-semibold">{formatPrice(cartTotal)}</span>
          </div>
          <p className="mt-1.5 text-[10px] text-ink/50 sm:mt-2 sm:text-xs">
            Final delivery charges will be shared on WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => openWhatsApp(cartOrderMessage(cart, cartTotal))}
            className="mt-4 w-full rounded-full bg-whatsapp px-4 py-2.5 text-xs font-semibold text-white sm:mt-5 sm:px-5 sm:py-3 sm:text-sm lg:mt-6 lg:py-3.5"
          >
            Order on WhatsApp
          </button>
          <Link
            to="/shop"
            className="mt-2 block text-center text-xs font-medium text-olive hover:underline sm:mt-3 sm:text-sm"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
