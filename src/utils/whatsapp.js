import { WHATSAPP_NUMBER, formatPrice } from "../data/products";

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Turn site-relative asset paths into absolute URLs. */
export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return "";
  try {
    return new URL(pathOrUrl, window.location.origin).href;
  } catch {
    return pathOrUrl;
  }
}

/** Absolute product page URL (works with GitHub Pages base path). */
export function getProductShareUrl(productId) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return new URL(`product/${productId}`, `${window.location.origin}${base}`).href;
}

export function getProductImageUrl(product) {
  return absoluteUrl(product?.image);
}

export async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

/** Fetch product image as a File for native share sheets. */
export async function getProductImageFile(product) {
  const imageUrl = getProductImageUrl(product);
  if (!imageUrl) return null;
  const res = await fetch(imageUrl);
  if (!res.ok) return null;
  const blob = await res.blob();
  const ext = (blob.type.split("/")[1] || "png").replace("jpeg", "jpg");
  return new File([blob], `${product.id}.${ext}`, {
    type: blob.type || "image/png",
  });
}

/**
 * Share product with photo when the device supports it.
 * Falls back to text + image URL + product link.
 */
export async function shareProduct(product) {
  const pageUrl = getProductShareUrl(product.id);
  const imageUrl = getProductImageUrl(product);
  const text = [
    `${product.name} — ${formatPrice(product.price)}`,
    "Shreeji Craft | Handcrafted with love",
    imageUrl ? `Photo: ${imageUrl}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  if (navigator.share) {
    try {
      const file = await getProductImageFile(product);
      if (file && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: product.name,
          text,
          url: pageUrl,
          files: [file],
        });
        return true;
      }
    } catch {
      // Fall through to text/url share
    }

    try {
      await navigator.share({
        title: product.name,
        text,
        url: pageUrl,
      });
      return true;
    } catch {
      return false;
    }
  }

  return false;
}

export function productOrderMessage(product, qty = 1) {
  const pageUrl = getProductShareUrl(product.id);
  const imageUrl = getProductImageUrl(product);

  return [
    "Hello Shreeji Craft!",
    "",
    "I would like to order:",
    `• ${product.name}`,
    `• Qty: ${qty}`,
    `• Price: ${formatPrice(product.price)} each`,
    `• Total: ${formatPrice(product.price * qty)}`,
    imageUrl ? `• Photo: ${imageUrl}` : null,
    `• Link: ${pageUrl}`,
    "",
    "Please confirm availability. Thank you!",
  ]
    .filter(Boolean)
    .join("\n");
}

export function cartOrderMessage(items, total) {
  const lines = items.flatMap((item) => {
    const imageUrl = getProductImageUrl(item);
    return [
      `• ${item.name} × ${item.qty} = ${formatPrice(item.price * item.qty)}`,
      imageUrl ? `  Photo: ${imageUrl}` : null,
      `  Link: ${getProductShareUrl(item.id)}`,
    ].filter(Boolean);
  });

  return [
    "Hello Shreeji Craft!",
    "",
    "I would like to place an order:",
    ...lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "Please share payment & delivery details. Thank you!",
  ].join("\n");
}

export function customOrderMessage(form) {
  return [
    "Hello Shreeji Craft!",
    "",
    "New Custom Order Request:",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    `Product type: ${form.productType}`,
    "",
    "Requirements:",
    form.requirements,
  ]
    .filter(Boolean)
    .join("\n");
}

export function contactMessage(form) {
  return [
    "Hello Shreeji Craft!",
    "",
    "Contact enquiry:",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    "",
    form.message,
  ]
    .filter(Boolean)
    .join("\n");
}
