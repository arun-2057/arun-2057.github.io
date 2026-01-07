import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const form = e.target
    try {
      const body = new URLSearchParams(new FormData(form)).toString()
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleCopy(text, kind = 'copied') {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(kind)
      setError(null)
      setTimeout(() => setCopied(''), 2000)
    } catch (err) {
      setError('Unable to copy to clipboard')
    }
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Feel free to reach out — quick email or use the form to send a message.</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="mailto:lamaarun2001@gmail.com"
              className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded shadow-sm hover:shadow-md transition"
            >
              <MdEmail aria-hidden="true" /> Email me
            </a>
            <a
              href="https://www.linkedin.com/in/lama-arun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <MdEmail className="text-3xl text-brand mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fast replies for quick questions — I typically respond within 24 hours.</p>
                  <div className="mt-3 flex items-center gap-2">
                    <a href="mailto:lamaarun2001@gmail.com" className="inline-flex items-center gap-2 bg-brand text-white px-3 py-1 rounded">
                      <MdEmail aria-hidden="true" /> Email
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('lamaarun2001@gmail.com', 'email')}
                      className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded"
                    >
                      Copy
                    </button>
                    <span className="text-sm text-green-600 dark:text-green-300">{copied === 'email' ? 'Copied!' : ''}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <FaGithub className="text-3xl text-brand mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Check out my projects and repos.</p>
                  <div className="mt-3">
                    <a href="https://github.com/arun-2057" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-3 py-1 rounded">
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <SiKaggle className="text-3xl text-brand mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Kaggle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Data science notebooks and competitions.</p>
                  <div className="mt-3">
                    <a href="https://www.kaggle.com/zorornoa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-3 py-1 rounded">
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div role="status" aria-live="polite" className="p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded shadow">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <p className="font-semibold">Message sent</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Thanks — I’ll get back to you shortly.</p>
                  <div className="mt-3 flex gap-2">
                    <a href="#contact" onClick={() => setSubmitted(false)} className="text-sm underline">Send another</a>
                    <a href="mailto:lamaarun2001@gmail.com" className="text-sm underline">Or email directly</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              aria-busy={submitting}
              className="flex flex-col gap-3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-100 dark:border-gray-600"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </div>

              <label className="sr-only" htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                disabled={submitting}
                className="p-3 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand"
              />

              <label className="sr-only" htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                disabled={submitting}
                className="p-3 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand"
              />

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                required
                disabled={submitting}
                className="p-3 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand"
              />

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-brand text-white px-4 py-2 rounded disabled:opacity-60 shadow-sm hover:shadow-md transition"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
                <a href="mailto:lamaarun2001@gmail.com" className="text-sm text-brand underline">Or email directly</a>
              </div>

              {error && (
                <div role="alert" aria-live="assertive" className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
