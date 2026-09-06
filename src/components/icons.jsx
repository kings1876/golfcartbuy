// Simple monoline icons (currentColor) for the premium/luxury visual style —
// replaces colorful emoji, which read as playful rather than upscale.
const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function TruckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <rect x="1.5" y="6.5" width="12" height="9" rx="1" />
      <path d="M13.5 9.5h4l3 3.5v2.5a1 1 0 0 1-1 1h-1" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  )
}

export function BadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.8 8 21l4-2 4 2-1-7.2" />
    </svg>
  )
}

export function WrenchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L3 17.2l1.8 1.8L11 12.7a4 4 0 0 0 4.6-5.4l-2.6 2.6-2-2 2.7-2.6Z" />
    </svg>
  )
}

export function CoinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.3 9.6c0-1.2 1.2-2.1 2.7-2.1s2.7.9 2.7 2c0 2.6-5.4 1.4-5.4 4 0 1.1 1.2 2 2.7 2s2.7-.9 2.7-2.1" />
    </svg>
  )
}

export function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common} {...props}>
      <rect x="3" y="9" width="18" height="10" rx="1.5" />
      <path d="M7 9V7a5 5 0 0 1 10 0v2" />
    </svg>
  )
}
