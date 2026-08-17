import { Link } from 'react-router-dom'
import {
  BadgeCheck,
  Flower2,
  HandHeart,
  Sparkles,
} from 'lucide-react'
import BrandLogo from '../components/BrandLogo'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'
import { openWhatsApp } from '../utils/whatsapp'

const features = [
  { icon: HandHeart, title: '100% Handmade', text: 'Every piece crafted by hand' },
  { icon: Sparkles, title: 'Unique Designs', text: 'No mass-produced products' },
  { icon: BadgeCheck, title: 'Premium Quality', text: 'Finished with care' },
  { icon: Flower2, title: 'Custom Orders', text: 'Made to your idea' },
]

export default function Home() {
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4)
  const heroBanner = `${import.meta.env.BASE_URL}images/hero-banner.png`

  return (
    <div>
      {/* Hero — compact on mobile, unchanged from lg up */}
      <section className="relative min-h-[68vh] overflow-hidden lg:min-h-[calc(100vh-7.5rem)]">
        <img
          src={heroBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-right"
        />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center justify-center px-4 py-6 lg:min-h-[calc(100vh-7.5rem)] lg:justify-start lg:pl-[12%] lg:py-10">
          <div className="animate-fade-up max-w-[20rem] rounded-2xl bg-cream/75 p-4 backdrop-blur-[2px] sm:max-w-md sm:bg-transparent sm:p-0 sm:backdrop-blur-none lg:ml-8 lg:max-w-lg">
            <BrandLogo
              to={null}
              className="mb-2 lg:mb-3"
              imgClassName="h-16 w-auto rounded-lg shadow-[0_8px_24px_rgba(37,34,31,0.16)] sm:h-24 lg:h-40"
            />
            <h1 className="font-display text-[1.65rem] font-bold leading-[1.15] text-ink sm:text-3xl lg:text-[2.75rem]">
              Handcrafted with Tradition.
              <span className="block text-olive-deep">Designed for Your Home.</span>
            </h1>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-ink/80 sm:mt-3 sm:text-sm lg:text-base">
              Unique handcrafted décor pieces, thoughtfully made to bring warmth,
              culture and character into your space.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5 lg:mt-5 lg:gap-2.5">
              <Link
                to="/shop"
                className="hero-cta bg-olive text-white transition hover:bg-olive-deep"
              >
                Explore Collection
              </Link>
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    'Hello Shreeji Craft! I would like to order on WhatsApp.',
                  )
                }
                className="hero-cta border border-olive bg-white text-olive transition hover:bg-olive/5"
              >
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 sm:gap-6 sm:py-8 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-2 sm:gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-full bg-cream text-olive sm:size-11">
                <Icon size={18} className="sm:hidden" />
                <Icon size={20} className="hidden sm:block" />
              </div>
              <div>
                <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
                <p className="text-xs text-ink/60 sm:text-sm">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-5 sm:pb-8">
          <p className="rounded-xl bg-olive/10 px-3 py-2.5 text-center text-xs font-medium text-olive-deep sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm">
            Available for Wholesale &amp; Retail — Call / WhatsApp{' '}
            <a href="tel:+919537126525" className="font-semibold underline-offset-2 hover:underline">
              +91 95371 26525
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16">
        <div className="mb-5 flex items-end justify-between gap-4 lg:mb-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-olive uppercase sm:text-xs">
              Browse
            </p>
            <h2 className="font-display text-3xl text-ink lg:text-4xl">Shop by Category</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 lg:p-5">
                <h3 className="font-display text-lg text-white lg:text-2xl">{cat.name}</h3>
                <span className="mt-1.5 inline-block rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold text-olive-deep lg:mt-2 lg:px-3 lg:py-1 lg:text-xs">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:pb-12 lg:pb-16">
        <div className="mb-5 flex items-end justify-between gap-4 lg:mb-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-olive uppercase sm:text-xs">
              Popular
            </p>
            <h2 className="font-display text-3xl text-ink lg:text-4xl">Best Sellers</h2>
          </div>
          <Link to="/shop" className="text-xs font-semibold text-olive hover:underline sm:text-sm">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-brown">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 text-cream sm:gap-6 sm:py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl">
              Every piece has a story.
              <span className="block">Every detail is made by hand.</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-cream/80 sm:mt-3 sm:text-base">
              From our family workshop to your home — crafted with patience,
              creativity and love.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex shrink-0 rounded-full bg-cream px-5 py-2.5 text-xs font-semibold !text-brown transition hover:bg-white sm:px-6 sm:py-3 sm:text-sm"
          >
            Know Our Story
          </Link>
        </div>
      </section>
    </div>
  )
}
