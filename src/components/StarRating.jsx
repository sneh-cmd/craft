import { Star } from 'lucide-react'

export default function StarRating({ rating = 5, reviews, compact = false }) {
  return (
    <div
      className={`flex items-center ${
        compact ? 'gap-1 text-[10px] lg:gap-1.5 lg:text-sm' : 'gap-1.5 text-sm'
      }`}
    >
      <div className="flex items-center gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${compact ? 'size-2.5 lg:size-3.5' : 'size-3.5'} ${
              i < Math.round(rating) ? 'fill-gold' : 'opacity-30'
            }`}
          />
        ))}
      </div>
      <span className="text-ink/60">
        {rating.toFixed(1)}
        {typeof reviews === 'number' ? (
          <span className={compact ? 'hidden sm:inline' : ''}>
            {` (${reviews})`}
          </span>
        ) : null}
      </span>
    </div>
  )
}
