const isStatic = process.env.TARGET === 'static'

export default {
  output: isStatic ? 'export' : undefined,
  trailingSlash: true,
  images: isStatic
    ? { unoptimized: true }
    : { formats: ['image/avif', 'image/webp'] },
}
