'use client'

import { useEffect, useState } from 'react'
import { CHAT, SITE } from '@/config/site'

const LINK_TYPES = new Set(['whatsapp', 'telegram', 'messenger', 'signal', 'email', 'phone'])
const WIDGET_TYPES = new Set(['tawk', 'crisp', 'jivochat'])

const ICONS = {
  whatsapp: '💬',
  telegram: '✈️',
  messenger: '📩',
  signal: '🔒',
  email: '✉️',
  phone: '📞',
  tawk: '💬',
}

function hrefFor(channel) {
  switch (channel.type) {
    case 'whatsapp':
      return `https://wa.me/${channel.value}`
    case 'telegram':
      return channel.value.startsWith('http') ? channel.value : `https://t.me/${channel.value}`
    case 'messenger':
      return `https://m.me/${channel.value}`
    case 'signal':
      return channel.value
    case 'email':
      return `mailto:${channel.value}`
    case 'phone':
      return `tel:${channel.value}`
    default:
      return '#'
  }
}

function labelFor(channel) {
  const names = {
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    messenger: 'Messenger',
    signal: 'Signal',
    email: 'Email',
    phone: 'Call',
  }
  return names[channel.type] || channel.type
}

export default function ChatHub() {
  const [open, setOpen] = useState(false)
  const linkChannels = CHAT.channels.filter((c) => LINK_TYPES.has(c.type))
  const widget = CHAT.channels.find((c) => WIDGET_TYPES.has(c.type))
  const widgetPending = widget && widget.value.includes('PENDING')

  useEffect(() => {
    if (!widget || widgetPending || widget.type !== 'tawk') return
    const id = window.setTimeout(() => {
      const [propertyId, widgetId] = widget.value.split('/')
      const s = document.createElement('script')
      s.async = true
      s.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
      s.charset = 'UTF-8'
      s.setAttribute('crossorigin', '*')
      document.body.appendChild(s)
    }, 3000)
    return () => window.clearTimeout(id)
  }, [widget, widgetPending])

  if (linkChannels.length === 0) return null // tawk widget (if any) still loads via the effect above, and renders its own bubble

  if (linkChannels.length === 1 && !widget) {
    const c = linkChannels[0]
    return (
      <div className="chat-hub">
        <a
          href={hrefFor(c)}
          className="chat-fab"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          aria-label={`Chat with ${SITE.name} on ${labelFor(c)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">{ICONS[c.type]}</span>
        </a>
      </div>
    )
  }

  return (
    <div className="chat-hub">
      <div className={`chat-panel${open ? ' open' : ''}`} role="menu">
        {linkChannels.map((c) => (
          <a key={c.type} href={hrefFor(c)} target="_blank" rel="noopener noreferrer" role="menuitem">
            <span aria-hidden="true">{ICONS[c.type]}</span> {labelFor(c)}
          </a>
        ))}
      </div>
      <button
        type="button"
        className="chat-fab"
        aria-label={open ? 'Close chat options' : 'Open chat options'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">💬</span>
      </button>
    </div>
  )
}
