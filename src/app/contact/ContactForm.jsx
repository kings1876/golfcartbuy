'use client'

import { SITE } from '@/config/site'
import WebForm from '@/components/WebForm'

export default function ContactForm() {
  return (
    <WebForm subject={`New contact message — ${SITE.name}`} thankYouPath="/thank-you-contact/" submitLabel="Send Message">
      <div className="form-row">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
    </WebForm>
  )
}
