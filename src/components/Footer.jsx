import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BUSINESS_NOTE, EMAIL, LOCATION, PHONE_DISPLAY, SOCIAL } from '../data/products'
import BrandLogo from './BrandLogo'
import { FacebookIcon, InstagramIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-olive-deep text-cream">
      {/* Mobile: 2x2 — Logo | Quick Links / Customer Care | Contact Us
          Desktop (lg): unchanged 4 columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-8 lg:grid-cols-4 lg:gap-10 lg:py-14">
        {/* Logo */}
        <div>
          <BrandLogo imgClassName="h-20 w-auto rounded-lg lg:h-40 lg:rounded-xl" />
          <p className="mt-1.5 text-[11px] font-medium text-gold lg:mt-0 lg:text-sm">
            {BUSINESS_NOTE}
          </p>
          <p className="mt-1 text-[10px] leading-snug text-cream/60 lg:text-xs">
            © {new Date().getFullYear()} Shreeji Craft. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-2 text-[11px] font-semibold tracking-wider uppercase lg:mb-4 lg:text-sm">
            Quick Links
          </h4>
          <ul className="space-y-1 text-xs text-cream/85 lg:space-y-2 lg:text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/custom-orders" className="hover:text-white">Custom Orders</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="mb-2 text-[11px] font-semibold tracking-wider uppercase lg:mb-4 lg:text-sm">
            Customer Care
          </h4>
          <ul className="space-y-1 text-xs text-cream/85 lg:space-y-2 lg:text-sm">
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="mb-2 text-[11px] font-semibold tracking-wider uppercase lg:mb-4 lg:text-sm">
            Contact Us
          </h4>
          <ul className="space-y-1.5 text-xs text-cream/85 lg:space-y-3 lg:text-sm">
            <li className="flex items-start gap-1.5 lg:gap-2">
              <Phone size={14} className="mt-0.5 shrink-0 lg:hidden" />
              <Phone size={16} className="mt-0.5 hidden shrink-0 lg:block" />
              <a href="tel:+919537126525" className="break-all hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-1.5 lg:gap-2">
              <Mail size={14} className="mt-0.5 shrink-0 lg:hidden" />
              <Mail size={16} className="mt-0.5 hidden shrink-0 lg:block" />
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-1.5 lg:gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 lg:hidden" />
              <MapPin size={16} className="mt-0.5 hidden shrink-0 lg:block" />
              <span>{LOCATION}</span>
            </li>
          </ul>
          <div className="mt-2.5 flex gap-2.5 lg:mt-4 lg:gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} className="lg:hidden" />
              <span className="hidden lg:inline"><InstagramIcon size={18} /></span>
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={16} className="lg:hidden" />
              <span className="hidden lg:inline"><FacebookIcon size={18} /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-3 text-center text-xs text-cream/75 lg:py-4 lg:text-sm">
        Made with <Heart size={12} className="mx-1 inline fill-cream text-cream lg:hidden" />
        <Heart size={14} className="mx-1 hidden fill-cream text-cream lg:inline" /> in India
      </div>
    </footer>
  )
}
