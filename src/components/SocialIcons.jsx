export function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function FacebookIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 9h3V6h-3c-1.6 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

export function YoutubeIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23 12s0-3.6-.5-5.2c-.2-.9-.9-1.6-1.8-1.8C18.2 4.5 12 4.5 12 4.5s-6.2 0-8.7.5c-.9.2-1.6.9-1.8 1.8C1 8.4 1 12 1 12s0 3.6.5 5.2c.2.9.9 1.6 1.8 1.8 2.5.5 8.7.5 8.7.5s6.2 0 8.7-.5c.9-.2 1.6-.9 1.8-1.8.5-1.6.5-5.2.5-5.2zM9.8 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  )
}
