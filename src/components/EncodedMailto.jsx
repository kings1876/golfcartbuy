'use client'

import { useEffect, useRef } from 'react'

// Accepts character CODES rather than the raw email string, so the plaintext address
// never appears in the server-rendered HTML or the RSC hydration payload embedded in it.
// Renders entity-encoded text on the server, then attaches the real mailto: href
// client-side after mount.
export default function EncodedMailto({ codes, className }) {
  const ref = useRef(null)
  const encoded = codes.map((c) => `&#${c};`).join('')

  useEffect(() => {
    if (ref.current) ref.current.href = `mailto:${String.fromCharCode(...codes)}`
  }, [codes])

  return (
    <a ref={ref} className={className} dangerouslySetInnerHTML={{ __html: encoded }} />
  )
}
