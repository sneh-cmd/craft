import { Link } from 'react-router-dom'
import { products } from '../data/products'

const stats = [
  { value: '100%', label: 'Handmade' },
  { value: '500+', label: 'Happy Customers' },
  { value: '100+', label: 'Unique Designs' },
  { value: '5+', label: 'Years of Crafting' },
]

export default function About() {
  const storyImage = products[0]?.image
  const makerImage = `${import.meta.env.BASE_URL}images/products/peacock-pillar-hanging.webp`
  const collage = products.slice(0, 3).map((p) => p.image)

  return (
    <div className="page-shell">
      <section className="mx-auto max-w-6xl px-3 py-5 sm:px-4 sm:py-8 lg:py-10 xl:py-12">
        <div className="grid items-start gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="mx-auto flex w-full max-w-[300px] flex-col items-center justify-center sm:max-w-[360px] lg:mx-0 lg:max-w-none lg:justify-self-start">
            <div className="relative flex h-[220px] w-full items-end justify-center sm:h-[280px] lg:h-[320px]">
              {/* back left */}
              <img
                src={collage[1] || storyImage}
                alt="Handmade craft"
                className="absolute bottom-5 left-[6%] z-10 h-[145px] w-[95px] -rotate-12 rounded-md border-[4px] border-white object-cover shadow-[0_12px_28px_rgba(37,34,31,0.18)] sm:bottom-7 sm:left-[8%] sm:h-[190px] sm:w-[125px] sm:rounded-lg sm:border-[5px] lg:bottom-8 lg:h-[220px] lg:w-[145px] lg:border-[6px]"
              />

              {/* center front */}
              <img
                src={`${import.meta.env.BASE_URL}images/products/table-decor-display.webp`}
                alt="Handmade craft"
                className="relative z-30 mb-1 h-[165px] w-[108px] rounded-md border-[4px] border-white object-cover shadow-[0_16px_36px_rgba(37,34,31,0.22)] sm:mb-2 sm:h-[210px] sm:w-[140px] sm:rounded-lg sm:border-[5px] lg:h-[250px] lg:w-[165px] lg:border-[6px]"
              />

              {/* back right */}
              <img
                src={collage[2] || storyImage}
                alt="Handmade craft"
                className="absolute right-[6%] bottom-5 z-10 h-[145px] w-[95px] rotate-12 rounded-md border-[4px] border-white object-cover shadow-[0_12px_28px_rgba(37,34,31,0.18)] sm:right-[8%] sm:bottom-7 sm:h-[190px] sm:w-[125px] sm:rounded-lg sm:border-[5px] lg:bottom-8 lg:h-[220px] lg:w-[145px] lg:border-[6px]"
              />
            </div>

            {/* shelf line */}
            <div className="mt-0.5 h-1 w-[85%] rounded-full bg-gradient-to-r from-transparent via-brown/25 to-transparent sm:mt-1 sm:h-1.5" />
            <p className="mt-2 text-center font-display text-sm text-ink/55 italic sm:mt-3 lg:text-lg">
              Handcrafted with love
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-olive uppercase sm:text-xs">
              Our Story
            </p>
            <h1 className="mt-1 font-display text-2xl sm:mt-2 sm:text-3xl lg:text-5xl">
              About Shreeji Craft
            </h1>
            <p className="mt-1 text-sm text-ink/65 sm:mt-2 lg:text-lg">
              Crafted with Tradition. Made with Love.
            </p>

            <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-ink/75 sm:mt-4 sm:space-y-3 sm:text-sm lg:mt-5 lg:space-y-3.5 lg:text-[0.95rem]">
              <p>
                What started as a passion for creating beautiful things by hand has
                grown into a collection of unique home décor pieces — each carefully
                crafted with patience, creativity and love.
              </p>
              <p>
                At Shreeji Craft, every wall hanging, table accent and custom piece
                is made in our family workshop. We believe homes deserve warmth that
                machines cannot copy: texture, colour, and the quiet story of
                handmade work.
              </p>
              <p>
                From Hands to Homes — that is our promise. Whether you choose a
                ready design or share a custom idea, we create décor meant to be
                lived with and gifted with pride.
              </p>
            </div>

            <Link
              to="/custom-orders"
              className="mt-4 inline-block rounded-full bg-olive px-4 py-2 text-xs font-semibold text-white sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm lg:mt-6 lg:px-6 lg:py-3"
            >
              Request a Custom Piece
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-olive">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-3 py-6 text-center text-cream sm:gap-5 sm:px-4 sm:py-8 lg:grid-cols-4 lg:gap-6 lg:py-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-cream/80 sm:mt-1 sm:text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-ink/8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,155,92,0.18),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-3 py-8 sm:gap-8 sm:px-4 sm:py-10 lg:grid-cols-[auto_1fr] lg:gap-14 lg:py-14">
          <div className="mx-auto lg:mx-0">
            <div className="relative size-[200px] sm:size-[280px] lg:size-[360px]">
              <div className="absolute inset-0 rounded-full border border-gold/40" />
              <div className="absolute inset-2 rounded-full border border-dashed border-olive/30 sm:inset-3 lg:inset-3" />
              <div className="absolute inset-4 overflow-hidden rounded-full shadow-[0_18px_40px_rgba(37,34,31,0.2)] ring-2 ring-white sm:inset-5 sm:ring-4 lg:inset-6">
                <img
                  src={makerImage}
                  alt="Meet the maker"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-1 -bottom-0.5 rounded-full bg-brown px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cream shadow-md sm:-right-2 sm:-bottom-1 sm:px-4 sm:py-2 sm:text-xs">
                Handmade
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-olive uppercase sm:text-xs">
              The workshop
            </p>
            <h2 className="mt-1 font-display text-2xl sm:mt-2 sm:text-3xl lg:text-5xl">
              Meet the Maker
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gold sm:mt-3 sm:h-1 sm:w-16 lg:mx-0" />
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-ink/70 sm:mt-4 sm:text-sm lg:mx-0 lg:mt-5 lg:text-base">
              Behind every Shreeji Craft piece is dedicated handmade work —
              selecting materials, shaping details, and finishing each décor item
              so it feels personal in your home.
            </p>
            <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-ink/70 sm:mt-3 sm:text-sm lg:mx-0 lg:text-base">
              From Rajkot, with patience and love — every detail tells a story.
            </p>
            <Link
              to="/gallery"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-olive px-4 py-2 text-xs font-semibold text-white transition hover:bg-olive-deep sm:mt-5 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm lg:mt-7 lg:px-6 lg:py-3"
            >
              View Gallery
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
