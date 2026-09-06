'use client'

import { useState } from 'react'
import { FORMS, SITE } from '@/config/site'

const KEY_PENDING = !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')

export default function WebForm({ subject, thankYouPath, children, submitLabel = 'Submit' }) {
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    const form = e.target

    if (KEY_PENDING) {
      // Key not configured yet — never dead-end the customer during pre-launch.
      window.location.href = thankYouPath
      return
    }

    setSubmitting(true)
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then((r) => r.json().then((data) => ({ status: r.status, data })))
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          window.location.href = thankYouPath
        } else {
          throw new Error((res.data && res.data.message) || 'Submission failed')
        }
      })
      .catch(() => {
        setSubmitting(false)
        setError(
          `Something went wrong sending your message. Please try again, or email us directly at ${SITE.contactEmail}.`
        )
      })
  }

  function onFormInput(e) {
    if (e.target.name === 'email') {
      const replyto = e.target.form.elements.namedItem('replyto')
      if (replyto) replyto.value = e.target.value
    }
  }

  return (
    <form className="form-grid" onSubmit={onSubmit} onInput={onFormInput} noValidate>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value={SITE.name} />
      <input type="hidden" name="replyto" defaultValue="" />
      <input
        type="text"
        name="botcheck"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {children}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? 'Sending…' : submitLabel}
      </button>
      {KEY_PENDING && (
        <p className="form-note">
          Note: online submission is being finalized — you can also reach us directly.
        </p>
      )}
    </form>
  )
}
