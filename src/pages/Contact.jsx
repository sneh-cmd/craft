import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Store } from 'lucide-react'
import { BUSINESS_NOTE, EMAIL, LOCATION, PHONE_DISPLAY } from '../data/products'
import { contactMessage, openWhatsApp } from '../utils/whatsapp'

const initial = { name: '', phone: '', email: '', message: '' }

const contactItems = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: PHONE_DISPLAY,
    href: 'tel:+919537126525',
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: LOCATION,
  },
  {
    icon: Store,
    label: 'Business',
    value: BUSINESS_NOTE,
  },
]

export default function Contact() {
  const [form, setForm] = useState(initial)

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      alert('Please fill name, phone and message.')
      return
    }
    openWhatsApp(contactMessage(form))
  }

  return (
    <div className="page-shell overflow-hidden">
      <section className="mx-auto max-w-6xl px-3 pt-5 pb-2 sm:px-4 sm:pt-7 sm:pb-3 lg:pt-10 lg:pb-4">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-olive uppercase sm:text-xs">
          Get in touch
        </p>
        <h1 className="mt-1 font-display text-2xl font-bold sm:mt-2 sm:text-3xl lg:text-5xl">
          Contact
        </h1>
        <div className="mt-2 h-0.5 w-12 rounded-full bg-gold sm:mt-3 sm:h-1 sm:w-16" />
        <p className="mt-2 max-w-xl text-xs text-ink/65 sm:mt-3 sm:text-sm lg:mt-4 lg:text-base">
          Questions about a product or order? We are happy to help on WhatsApp.
          Wholesale and retail enquiries welcome.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-3 py-5 sm:px-4 sm:py-7 lg:py-10">
        <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Info panel */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-olive-deep p-4 text-cream shadow-lg sm:rounded-[1.75rem] sm:p-5 lg:rounded-[2rem] lg:p-7">
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute -bottom-12 -left-8 size-36 rounded-full bg-olive/40 blur-2xl" />
              <p className="relative font-display text-xl leading-snug sm:text-2xl lg:text-4xl">
                Let’s craft something beautiful together.
              </p>
              <p className="relative mt-2 max-w-sm text-xs leading-relaxed text-cream/75 sm:mt-3 sm:text-sm">
                Reach out for product details, custom orders, or wholesale —
                we reply quickly on WhatsApp.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(37,34,31,0.08)] ring-1 ring-brown/15 sm:rounded-[1.5rem] lg:rounded-[1.75rem]">
              {contactItems.map(({ icon: Icon, label, value, href }, index) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 px-3 py-2.5 transition hover:bg-cream/80 sm:gap-3 sm:px-4 sm:py-3.5 lg:gap-4 lg:px-5 lg:py-4 ${
                    index !== contactItems.length - 1 ? 'border-b border-ink/8' : ''
                  }`}
                >
                  <div className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-olive to-olive-deep text-cream shadow-md sm:size-10 lg:size-12">
                    <Icon className="size-3.5 lg:size-[18px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-semibold tracking-[0.16em] text-olive uppercase sm:text-[10px] lg:text-[11px]">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block truncate text-xs font-semibold text-ink hover:text-brown sm:text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-xs font-semibold text-ink sm:text-sm">
                        {value}
                      </p>
                    )}
                  </div>
                  <span className="hidden h-8 w-1 rounded-full bg-gold/80 sm:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Form with 3D border */}
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
                      Send a message
                    </h2>
                    <p className="mt-0.5 text-[11px] text-ink/55 lg:mt-1 lg:text-sm">
                      We will continue the chat on WhatsApp.
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
                      Message *
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={3}
                      required
                      placeholder="Tell us how we can help..."
                      className="w-full resize-y rounded-lg border-2 border-olive/30 bg-cream px-2.5 py-1.5 text-[10px] placeholder:text-[10px] outline-none transition focus:border-olive focus:bg-cream-dark lg:rounded-2xl lg:px-4 lg:py-3 lg:text-sm lg:placeholder:text-sm"
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
