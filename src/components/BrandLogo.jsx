import { Link } from 'react-router-dom'

const logoSrc = `${import.meta.env.BASE_URL}images/logo.webp`

export default function BrandLogo({
  to = '/',
  className = '',
  imgClassName = '',
  showTagline = false,
}) {
  const image = (
    <img
      src={logoSrc}
      alt="Shreeji Craft — Handcrafted with Love"
      className={`block object-contain ${imgClassName}`}
    />
  )

  if (!to) {
    return (
      <div className={className}>
        {image}
        {showTagline && (
          <span className="sr-only">Shreeji Craft — Handcrafted with Love</span>
        )}
      </div>
    )
  }

  return (
    <Link to={to} className={`inline-flex shrink-0 items-center ${className}`}>
      {image}
      <span className="sr-only">Shreeji Craft</span>
    </Link>
  )
}

export { logoSrc }
