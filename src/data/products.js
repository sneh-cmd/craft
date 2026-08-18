const img = (file) => `${import.meta.env.BASE_URL}images/products/${file}`;

export const WHATSAPP_NUMBER = "919537126525";
export const PHONE_DISPLAY = "+91 95371 26525";
export const BUSINESS_NOTE = "Available for Wholesale & Retail";
export const EMAIL = "jayeshdulla@gmail.com";
export const LOCATION = "Rajkot";
export const SOCIAL = {
  facebook: "https://www.facebook.com/share/14qg4N1gwD9/",
  instagram: "https://www.instagram.com/jayeshdulla?igsh=aDNsZXk1Nzd0cXE2",
};

export const categories = [
  { id: "wall-decor", name: "Wall Decor", image: img("monk-rose-hanging.webp") },
  {
    id: "table-decor",
    name: "Table Decor",
    image: img("thread-rose-vase.webp"),
  },
  {
    id: "traditional",
    name: "Traditional Decor",
    image: img("radha-krishna.webp"),
  },
  { id: "custom", name: "Custom Creations", image: img("floral-panels.webp") },
];

export const products = [
  {
    id: "monk-rose-hanging",
    name: "Monk Rose Wall Hanging",
    price: 1299,
    category: "wall-decor",
    rating: 4.8,
    reviews: 24,
    bestSeller: true,
    inStock: true,
    material: "Craft tubes, Artificial roses, Beads, Tassels",
    size: "Approx. 14 × 20 inch",
    color: "Red, White & Multicolor",
    image: img("monk-rose-hanging.webp"),
    gallery: [img("monk-rose-hanging.webp")],
    shortDescription:
      "Vibrant wall hanging with rose basket, monk figurine and colourful tassels.",
    description:
      "A cheerful handmade wall piece featuring red-and-white craft tubes, a floral rose basket, golden accents and playful monk detail — perfect for living rooms and festive corners.",
    care: "Dust gently with a soft cloth. Keep away from moisture and direct sunlight.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "golden-bell-wall-plaque",
    name: "Golden Bell Wall Plaque",
    price: 1499,
    category: "wall-decor",
    rating: 4.9,
    reviews: 18,
    bestSeller: true,
    inStock: true,
    material: "Bamboo sticks, Metal bell, Artificial flowers, Braided cord",
    size: "Approx. 18 × 8 inch",
    color: "Gold, Pink & Multicolor",
    image: img("golden-bell-wall-plaque.webp"),
    gallery: [img("golden-bell-wall-plaque.webp")],
    shortDescription:
      "Tall bamboo wall plaque with golden bell, vine leaves and floral pot.",
    description:
      "Inspired by festive home traditions, this vertical plaque blends natural bamboo sticks with a golden bell, soft florals and ornate borders — ideal for entryways.",
    care: "Wipe gently. Avoid water on painted and metal parts.",
    shipping: "Dispatched within 3–5 working days.",
  },
  {
    id: "floral-panels",
    name: "Blue Floral Wall Panel",
    price: 1399,
    category: "wall-decor",
    rating: 4.7,
    reviews: 14,
    bestSeller: true,
    inStock: true,
    material: "Frame, Fabric panel, Artificial florals, Gold accents",
    size: "Approx. 16 × 8 inch",
    color: "Royal Blue, Gold & Pink",
    image: img("floral-panels.webp"),
    gallery: [img("floral-panels.webp"), img("floral-panels-2.webp")],
    shortDescription:
      "Deep blue framed panel with gold border, pink florals and bright tassel.",
    description:
      "A premium handmade wall panel with ornate gold detailing, glass-style vase arrangement and vibrant pink florals on a rich blue background.",
    care: "Dust lightly. Hang indoors only.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "floral-panels-2",
    name: "Pink Peacock Floral Panel",
    price: 1399,
    category: "wall-decor",
    rating: 4.7,
    reviews: 11,
    bestSeller: false,
    inStock: true,
    material: "Frame, Fabric panel, Artificial greenery, Gold accents",
    size: "Approx. 16 × 8 inch",
    color: "Fuchsia Pink, Gold & Green",
    image: img("floral-panels-2.webp"),
    gallery: [img("floral-panels-2.webp"), img("floral-panels.webp")],
    shortDescription:
      "Hot-pink framed panel with peacock vase motif and lush greenery.",
    description:
      "Bold and elegant — a fuchsia wall panel framed in black and gold, featuring peacock accents, artificial greenery and a charming hanging bird detail.",
    care: "Dust lightly. Hang indoors only.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "desk-organizer",
    name: "Handmade Desk Organizer",
    price: 999,
    category: "table-decor",
    rating: 4.6,
    reviews: 31,
    bestSeller: true,
    inStock: true,
    material: "Popsicle sticks, Rhinestones, Beads, Fabric trim",
    size: "Approx. 10 × 6 × 4 inch",
    color: "Natural Wood & Multicolor",
    image: img("desk-organizer.webp"),
    gallery: [img("desk-organizer.webp")],
    shortDescription:
      "Colourful popsicle-stick desk set with pen holder and open tray.",
    description:
      "Functional and decorative — keeps stationery tidy while adding a cheerful handmade touch to study tables and workspaces.",
    care: "Wipe dry. Do not soak in water.",
    shipping: "Dispatched within 2–4 working days.",
  },
  {
    id: "peacock-key-holder",
    name: "Peacock Key Holder",
    price: 1199,
    category: "traditional",
    rating: 4.8,
    reviews: 20,
    bestSeller: true,
    inStock: true,
    material: "Metal accents, Rhinestones, Beads",
    size: "Approx. 12 × 6 inch",
    color: "Gold, Red & Blue",
    image: img("peacock-key-holder.webp"),
    gallery: [img("peacock-key-holder.webp")],
    shortDescription:
      "Ornate gold key holder with peacock motifs and hanging rings.",
    description:
      "A festive traditional key holder featuring peacock detailing, rhinestone borders and golden rings — useful décor for entryways and living spaces.",
    care: "Dust gently. Keep dry.",
    shipping: "Dispatched within 3–5 working days.",
  },
  {
    id: "radha-krishna",
    name: "Radha Krishna Wall Hanging",
    price: 1899,
    category: "traditional",
    rating: 4.9,
    reviews: 27,
    bestSeller: true,
    inStock: true,
    material: "Bamboo slats, Figurines, Beads, Artificial flowers",
    size: "Approx. 18 × 10 inch",
    color: "Gold, Black & Multicolor",
    image: img("radha-krishna.webp"),
    gallery: [img("radha-krishna.webp")],
    shortDescription:
      "Devotional wall hanging with Radha-Krishna figures and festive detailing.",
    description:
      "A richly detailed handmade piece with Radha-Krishna centrepiece, colourful tassels, floral base and golden bell — beautiful for puja rooms and traditional homes.",
    care: "Dust gently. Store carefully when not displayed.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "golden-pillar-vase",
    name: "Golden Peacock Pillar Vase",
    price: 1099,
    category: "table-decor",
    rating: 4.6,
    reviews: 16,
    bestSeller: false,
    inStock: true,
    material: "Metal-style vase, Artificial foliage",
    size: "Approx. 10 inch height",
    color: "Gold, Blue & Purple",
    image: img("golden-pillar-vase.webp"),
    gallery: [img("golden-pillar-vase.webp")],
    shortDescription:
      "Gold lattice pillar vase with peacock motifs and purple foliage.",
    description:
      "A statement table accent with embossed peacock panels and lush artificial foliage — perfect for consoles, shelves and gifting.",
    care: "Wipe with dry cloth. Indoor use only.",
    shipping: "Dispatched within 2–4 working days.",
  },
  {
    id: "peacock-pillar-hanging",
    name: "Peacock Pillar Wall Hanging",
    price: 1699,
    category: "traditional",
    rating: 4.8,
    reviews: 13,
    bestSeller: false,
    inStock: true,
    material: "Gold pillars, Rhinestones, Artificial flowers",
    size: "Approx. 16 × 12 inch",
    color: "Gold & Multicolor",
    image: img("peacock-pillar-hanging.webp"),
    gallery: [img("peacock-pillar-hanging.webp")],
    shortDescription:
      "Palace-inspired wall hanging with peacock pillars and floral base.",
    description:
      "Two ornate peacock pillars frame a jewelled centre panel above a bed of bright artificial flowers — a festive showpiece for traditional interiors.",
    care: "Dust lightly. Hang indoors only.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "puja-wall-shelf",
    name: "Puja Wall Shelf",
    price: 1599,
    category: "traditional",
    rating: 4.7,
    reviews: 19,
    bestSeller: false,
    inStock: true,
    material: "Wood shelf, Fabric pillars, Artificial flowers, Metal chain",
    size: "Approx. 14 × 12 inch",
    color: "Pink, Blue & Gold",
    image: img("puja-wall-shelf.webp"),
    gallery: [img("puja-wall-shelf.webp")],
    shortDescription:
      "Hanging puja shelf with golden bell, floral accents and decorative pillars.",
    description:
      "A colourful handmade wall shelf designed for sacred corners — with arched frame, golden bell, floral sides and rich traditional detailing.",
    care: "Dust gently. Keep dry and hang securely.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "sweet-home-hanging",
    name: "Sweet Home Wall Hanging",
    price: 1199,
    category: "wall-decor",
    rating: 4.5,
    reviews: 22,
    bestSeller: false,
    inStock: true,
    material: "Bamboo slats, Beads, Tassels, Artificial plants",
    size: "Approx. 14 × 12 inch",
    color: "Multicolor",
    image: img("sweet-home-hanging.webp"),
    gallery: [img("sweet-home-hanging.webp")],
    shortDescription:
      "Cheerful “Sweet Home” hanging with tassels and mini balcony garden.",
    description:
      "A warm welcome piece for your entrance or living room — colourful lettering, festive tassels and a tiny balcony filled with greenery.",
    care: "Dust gently. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days.",
  },
  {
    id: "table-decor-display",
    name: "Monk Table Decor Set",
    price: 1799,
    category: "table-decor",
    rating: 4.6,
    reviews: 10,
    bestSeller: false,
    inStock: true,
    material: "Mixed craft materials, Artificial flowers, Wood stand",
    size: "Set display · Approx. 16 inch width",
    color: "Gold, Blue & Multicolor",
    image: img("table-decor-display.webp"),
    gallery: [img("table-decor-display.webp")],
    shortDescription:
      "Complete table décor arrangement with twin vases and monk display stand.",
    description:
      "A ready-to-style handmade set featuring twin decorative vases, floral centre and a tiered monk figurine stand — beautiful for shelves and consoles.",
    care: "Wipe dry. Handle figurines carefully.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "thread-rose-vase",
    name: "Thread Rose Flower Vase",
    price: 899,
    category: "table-decor",
    rating: 4.4,
    reviews: 15,
    bestSeller: false,
    inStock: true,
    material: "Thread-wrapped vase, Artificial roses",
    size: "Approx. 10 inch height",
    color: "Multicolor & Red",
    image: img("thread-rose-vase.webp"),
    gallery: [img("thread-rose-vase.webp")],
    shortDescription:
      "Thread-wrapped vase filled with bright red roses and greenery.",
    description:
      "A compact handmade vase with woven colour bands, golden bead rim and a cheerful rose bouquet — ideal for tables, shelves and gifting.",
    care: "Wipe with dry cloth. Indoor use only.",
    shipping: "Dispatched within 2–4 working days.",
  },
];

const ADMIN_PRODUCTS_KEY = 'shreeji_admin_products_v1'

function readAdminProducts() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(ADMIN_PRODUCTS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function normalizeAdminProduct(p) {
  // Admin page stores `imageFile` and `galleryFiles` (filenames inside /images/products/)
  const imageFile = typeof p.imageFile === 'string' ? p.imageFile.trim() : ''
  const galleryFiles = Array.isArray(p.galleryFiles) ? p.galleryFiles : []

  if (!p.id || !p.name || !p.category || !p.price || !imageFile) return null

  const priceNum = Number(p.price)
  if (!Number.isFinite(priceNum)) return null

  return {
    id: String(p.id),
    name: String(p.name),
    price: priceNum,
    category: String(p.category),
    rating: Number.isFinite(Number(p.rating)) ? Number(p.rating) : 4.5,
    reviews: Number.isFinite(Number(p.reviews)) ? Number(p.reviews) : 0,
    bestSeller: Boolean(p.bestSeller),
    inStock: p.inStock === undefined ? true : Boolean(p.inStock),
    material: p.material ? String(p.material) : '',
    size: p.size ? String(p.size) : '',
    color: p.color ? String(p.color) : '',
    image: img(imageFile),
    gallery: galleryFiles.length ? galleryFiles.map((f) => img(String(f))) : [img(imageFile)],
    shortDescription: p.shortDescription ? String(p.shortDescription) : '',
    description: p.description ? String(p.description) : '',
    care: p.care ? String(p.care) : '',
    shipping: p.shipping ? String(p.shipping) : '',
  }
}

export function getProducts() {
  const admin = readAdminProducts()
  const adminNormalized = admin
    .map((p) => normalizeAdminProduct(p))
    .filter(Boolean)

  const byId = new Map()
  for (const p of products) byId.set(p.id, p)
  for (const p of adminNormalized) byId.set(p.id, p)
  return Array.from(byId.values())
}

export function getGalleryImages() {
  const all = getProducts()
  return all.map((product, index) => ({
    id: index + 1,
    src: product.image,
    alt: product.name,
  }))
}

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProductById(id) {
  return getProducts().find((p) => p.id === id)
}

export function getProductsByCategory(categoryId) {
  const all = getProducts()
  if (!categoryId || categoryId === "all") return all
  return all.filter((p) => p.category === categoryId)
}
