import { getGalleryImages } from '../data/products'

export default function Gallery() {
  const galleryImages = getGalleryImages()
  return (
    <div className="page-shell mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-8 lg:py-12">
      <div className="mb-5 max-w-2xl sm:mb-7 lg:mb-10">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-olive uppercase sm:text-xs">
          Inspiration
        </p>
        <h1 className="mt-1 font-display text-2xl sm:mt-2 sm:text-3xl lg:text-5xl">
          Gallery
        </h1>
        <p className="mt-1.5 text-xs text-ink/65 sm:mt-2 sm:text-sm lg:mt-3 lg:text-base">
          A glimpse of our handcrafted décor — more real photos coming soon.
        </p>
      </div>

      <div className="columns-2 gap-2 sm:gap-3 lg:columns-3 lg:gap-4">
        {galleryImages.map((item, index) => (
          <figure
            key={item.id}
            className="mb-2 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm sm:mb-3 sm:rounded-2xl lg:mb-4 lg:rounded-3xl"
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`w-full object-cover ${
                index % 3 === 0
                  ? 'aspect-[4/5]'
                  : index % 3 === 1
                    ? 'aspect-square'
                    : 'aspect-[5/4]'
              }`}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
