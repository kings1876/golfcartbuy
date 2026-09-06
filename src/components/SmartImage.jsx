// NOTE: images ship as SVG placeholders until real product photos are supplied.
// Run `npm run images` after adding real photos to assets/product-photos/ — it
// produces <slug>.webp + <slug>.avif per the pipeline in scripts/images.mjs, and
// PRODUCTS[].images in src/config/site.js should then point at the .webp filenames.
export default function SmartImage({ src, alt, priority, className }) {
  return (
    <img
      src={`/images/${src}`}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      width={800}
      height={600}
    />
  )
}
