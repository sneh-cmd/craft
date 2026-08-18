import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { BUSINESS_NOTE, PHONE_DISPLAY, SOCIAL } from '../data/products'
import { useShop } from '../context/ShopContext'
import BrandLogo from './BrandLogo'
import { FacebookIcon, InstagramIcon } from './SocialIcons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/custom-orders', label: 'Custom Orders' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { cartCount, wishlist } = useShop()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const searchInputRef = useRef(null)
  const menuButtonRef = useRef(null)
  const menuPanelRef = useRef(null)

  useEffect(() => {
    if (!searchOpen) return

    const onPointerDown = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [searchOpen])

  useEffect(() => {
    if (!open) return

    const onPointerDown = (e) => {
      const target = e.target
      if (menuButtonRef.current?.contains(target)) return
      if (menuPanelRef.current?.contains(target)) return
      setOpen(false)
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!searchOpen) return
    const id = window.setTimeout(() => searchInputRef.current?.focus(), 80)
    return () => window.clearTimeout(id)
  }, [searchOpen])

  const navClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition hover:text-olive ${
      isActive ? 'text-olive' : 'text-ink/80'
    }`

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brown text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 text-[10px] lg:px-4 lg:py-2 lg:text-sm">
          <p className="min-w-0 truncate">
            <span className="lg:hidden">
              Wholesale &amp; Retail |{' '}
              <a href="tel:+919537126525" className="underline-offset-2 hover:underline">
                {PHONE_DISPLAY}
              </a>
            </span>
            <span className="hidden lg:inline">
              Handcrafted with love | {BUSINESS_NOTE} |{' '}
              <a href="tel:+919537126525" className="underline-offset-2 hover:underline">
                {PHONE_DISPLAY}
              </a>
            </span>
          </p>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-b border-ink/8 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 lg:gap-4 lg:px-4 lg:py-3.5">
          <Link to="/" className="flex min-w-0 items-center gap-1.5 lg:gap-3">
            <BrandLogo
              to={null}
              imgClassName="h-9 w-auto rounded-md lg:h-14 lg:rounded-lg"
            />
            <span className="min-w-0">
              <span className="font-display block text-base font-semibold leading-none tracking-wide text-olive-deep lg:text-2xl">
                SHREEJI CRAFT
              </span>
              <span className="mt-0.5 hidden text-[10px] tracking-[0.18em] text-brown uppercase lg:mt-1 lg:block">
                Handcrafted with Love
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile: only Cart + Menu | Desktop: Search + Wishlist + Cart */}
          <div className="flex shrink-0 items-center gap-0.5 lg:gap-3">
            <div className="relative hidden lg:block" ref={searchRef}>
              <button
                type="button"
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={() => {
                  setSearchOpen((v) => !v)
                  setOpen(false)
                }}
                className="grid size-10 place-items-center rounded-full transition hover:bg-cream-dark"
              >
                <Search size={20} />
              </button>
              <form
                className={`search-dropdown absolute top-full right-0 z-50 mt-2 flex w-72 items-center gap-1.5 rounded-full border border-ink/10 bg-cream p-1.5 shadow-[0_12px_28px_rgba(37,34,31,0.14)] ${
                  searchOpen ? 'is-open' : ''
                }`}
                onSubmit={submitSearch}
                aria-hidden={!searchOpen}
              >
                <input
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  tabIndex={searchOpen ? 0 : -1}
                  className="w-full rounded-full border border-ink/15 bg-white px-3 py-1.5 text-sm outline-none focus:border-olive"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  tabIndex={searchOpen ? 0 : -1}
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-olive p-2 text-white"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative hidden size-10 place-items-center rounded-full transition hover:bg-cream-dark lg:grid"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 grid size-4 place-items-center rounded-full bg-olive text-[10px] text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative grid size-8 place-items-center rounded-full transition hover:bg-cream-dark lg:size-10"
            >
              <ShoppingBag size={18} className="lg:hidden" />
              <ShoppingBag size={20} className="hidden lg:block" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 grid size-3.5 place-items-center rounded-full bg-brown text-[9px] text-white lg:top-1 lg:right-1 lg:size-4 lg:text-[10px]">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              className="relative z-[60] grid size-8 place-items-center rounded-full transition hover:bg-cream-dark lg:hidden"
              onClick={() => {
                setOpen((v) => !v)
                setSearchOpen(false)
              }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label="Close menu"
          className={`mobile-menu-backdrop fixed inset-0 z-[45] bg-ink/25 lg:hidden ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(false)}
        />
        <nav
          ref={menuPanelRef}
          className={`mobile-menu-panel absolute inset-x-0 top-full z-50 border-b border-ink/8 bg-cream px-3 py-2.5 shadow-[0_12px_32px_rgba(37,34,31,0.16)] lg:hidden ${open ? 'is-open' : ''}`}
          aria-hidden={!open}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-0.5">
            <form className="mb-1.5 flex items-center gap-1.5" onSubmit={submitSearch}>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                tabIndex={open ? 0 : -1}
                className="w-full rounded-full border border-ink/15 bg-white px-3 py-1.5 text-xs outline-none focus:border-olive"
              />
              <button
                type="submit"
                aria-label="Search"
                tabIndex={open ? 0 : -1}
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-olive p-1.5 text-white"
              >
                <Search size={14} />
              </button>
            </form>

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-olive/10 text-olive' : 'text-ink/80 hover:bg-cream-dark'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/wishlist"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-cream-dark"
            >
              <Heart size={16} />
              Wishlist
              {wishlist.length > 0 && (
                <span className="rounded-full bg-olive px-1.5 py-0.5 text-[10px] text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
