import { useState } from 'react'
import {
  CheckCircle2,
  MessageCircle,
  Palette,
  Ruler,
} from 'lucide-react'
import { PHONE_DISPLAY, categories } from '../data/products'
import { customOrderMessage, openWhatsApp } from '../utils/whatsapp'

const initial = {
  name: '',
  phone: '',
  email: '',
  productType: categories[0]?.name || 'Wall Decor',
  requirements: '',
}

const steps = [
  {
    icon: Palette,
    title: 'Share your idea',
    text: 'Colour, size, motif — tell us what you imagine.',
  },
  {
    icon: Ruler,
    title: 'We craft it',
    text: 'Handmade with care in our Rajkot workshop.',
  },
  {
    icon: MessageCircle,
    title: 'Confirm on WhatsApp',
    text: 'Price, timeline and details — all in one chat.',
  },
]

export default function CustomOrders() {
  const [form, setForm] = useState(initial)

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.requirements.trim()) {
      alert('Please fill name, phone and requirements.')
      return
    }
    openWhatsApp(customOrderMessage(form))
  }

  return (
    <div className="page-shell overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 pt-5 pb-1 sm:px-4 sm:pt-7 lg:pt-10 lg:pb-2">
        <h1 className="font-display text-2xl font-bold sm:text-3xl lg:text-5xl">
          Custom Orders
        </h1>
        <p className="mt-1 max-w-xl text-xs text-ink/65 sm:mt-2 sm:text-sm lg:text-base">
          Have a design in mind? We create personalised décor pieces for your home.
        </p>
      </div>

      {/* Steps */}
      <section className="border-b border-ink/8 bg-white/55">
        <div className="mx-auto grid max-w-7xl gap-3 px-3 py-5 sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-7 lg:gap-6 lg:py-10">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="flex gap-2.5 sm:gap-3 lg:gap-4">
              <div className="relative shrink-0">
                <div className="grid size-9 place-items-center rounded-xl bg-cream text-olive sm:size-10 lg:size-12 lg:rounded-2xl">
                  <Icon className="size-4 lg:size-[22px]" />
                </div>
                <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-olive text-[9px] font-bold text-white lg:size-5 lg:text-[10px]">
                  {index + 1}
                </span>
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-base text-ink sm:text-lg lg:text-2xl">
                  {title}
                </h2>
                <p className="mt-0.5 text-[11px] leading-snug text-ink/60 sm:text-xs lg:mt-1 lg:text-sm lg:leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + visual */}
      <section className="mx-auto max-w-7xl px-3 py-6 sm:px-4 sm:py-8 lg:py-16">
        <div className="mb-4 max-w-2xl sm:mb-6 lg:mb-8">
          <h2 className="font-display text-xl sm:text-2xl lg:text-4xl">
            Start your custom request
          </h2>
          <p className="mt-1 text-xs text-ink/65 sm:mt-2 sm:text-sm lg:text-base">
            Pick a style, share details — we will continue on WhatsApp ({PHONE_DISPLAY}).
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[10px] font-semibold tracking-wider text-ink/50 uppercase sm:text-xs lg:text-sm">
              What would you like?
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {categories.map((cat) => {
                const active = form.productType === cat.name
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({ ...prev, productType: cat.name }))
                    }
                    className={`group overflow-hidden rounded-2xl text-left transition lg:rounded-3xl ${
                      active
                        ? 'ring-2 ring-olive shadow-[0_12px_28px_rgba(63,74,56,0.18)]'
                        : 'ring-1 ring-ink/10 hover:ring-olive/40'
                    }`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 p-2 lg:p-3">
                        <span className="font-display text-sm leading-tight text-white sm:text-base lg:text-xl">
                          {cat.name}
                        </span>
                        {active && (
                          <CheckCircle2 className="size-3.5 shrink-0 text-white lg:size-[18px]" />
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1.5 rounded-[1.35rem] bg-gradient-to-br from-gold/30 via-olive/15 to-brown/20 blur-md lg:-inset-3 lg:rounded-[2.4rem]" />
            <div
              className="relative rounded-2xl p-[2px] lg:rounded-[2rem] lg:p-[3px]"
              style={{
                background:
                  'linear-gradient(145deg, #e8d5a8 0%, #c89b5c 28%, #8a6b3d 55%, #efe8dc 78%, #c89b5c 100%)',
                boxShadow:
                  '0 18px 40px rgba(37,34,31,0.14), inset 0 1px 0 rgba(255,255,255,0.55)',
              }}
            >
              <div
                className="rounded-[0.9rem] p-px lg:rounded-[1.85rem] lg:p-[2px]"
                style={{
                  background:
                    'linear-gradient(160deg, #3f4a38 0%, #5c6b52 40%, #25221f 100%)',
                }}
              >
                <form
                  onSubmit={onSubmit}
                  className="relative space-y-2 overflow-hidden rounded-[0.85rem] bg-white p-3 lg:space-y-4 lg:rounded-[1.7rem] lg:p-8"
                  style={{
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -10px 24px rgba(107,79,58,0.06)',
                  }}
                >
                  <span className="pointer-events-none absolute top-1.5 left-1.5 size-4 border-t-2 border-l-2 border-gold/70 lg:top-3 lg:left-3 lg:size-7" />
                  <span className="pointer-events-none absolute top-1.5 right-1.5 size-4 border-t-2 border-r-2 border-gold/70 lg:top-3 lg:right-3 lg:size-7" />
                  <span className="pointer-events-none absolute bottom-1.5 left-1.5 size-4 border-b-2 border-l-2 border-gold/70 lg:bottom-3 lg:left-3 lg:size-7" />
                  <span className="pointer-events-none absolute right-1.5 bottom-1.5 size-4 border-r-2 border-b-2 border-gold/70 lg:right-3 lg:bottom-3 lg:size-7" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.2]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(107,79,58,0.16) 1px, transparent 0)',
                      backgroundSize: '18px 18px',
                    }}
                  />

                  <div className="relative">
                    <h2 className="font-display text-lg leading-none lg:text-3xl">
                      Tell us more
                    </h2>
                    <p className="mt-0.5 text-[11px] text-ink/55 lg:mt-1 lg:text-sm">
                      Selected:{' '}
                      <span className="font-medium text-olive">{form.productType}</span>
                    </p>
                  </div>

                  <div className="relative grid grid-cols-2 gap-2 lg:gap-4">
                    <Field
                      label="Name *"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                    <Field
                      label="Phone *"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                  />

                  <label className="relative block">
                    <span className="mb-0.5 block text-[11px] font-medium lg:mb-1.5 lg:text-sm">
                      Your requirements *
                    </span>
                    <textarea
                      name="requirements"
                      value={form.requirements}
                      onChange={onChange}
                      rows={3}
                      placeholder="Colours, size, quantity, theme..."
                      className="w-full resize-y rounded-lg border-2 border-olive/30 bg-cream px-2.5 py-1.5 text-[10px] placeholder:text-[10px] outline-none transition focus:border-olive focus:bg-cream-dark lg:rounded-2xl lg:px-4 lg:py-3 lg:text-sm lg:placeholder:text-sm"
                      required
                    />
                  </label>

                  <div className="relative flex justify-center pt-0.5 lg:pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.28)] transition hover:brightness-105 lg:gap-2 lg:px-5 lg:py-2.5 lg:text-sm"
                    >
                      <MessageCircle className="size-3.5 lg:size-4" />
                      Send on WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <label className="block">
      <span className="mb-0.5 block text-[11px] font-medium lg:mb-1.5 lg:text-sm">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border-2 border-olive/30 bg-cream px-2.5 py-1.5 text-xs outline-none transition focus:border-olive focus:bg-cream-dark lg:rounded-2xl lg:px-4 lg:py-3 lg:text-sm"
      />
    </label>
  )
}
