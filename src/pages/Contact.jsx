import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './pages.css'
import './Contact.css'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const services = [
  'Website Development', 'Website Design', 'SEO Services',
  'Social Media Marketing', 'PPC Advertising', 'Branding', 'Other',
]

const INFO_CARDS = [
  {
    icon: <FaEnvelope />,
    label: 'Email Us',
    value: 'hello@trendoxmarketing.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@trendoxmarketing.com',
    color: '#4f8bff',
  },
  {
    icon: <FaPhone />,
    label: 'Call Us',
    value: '+91 885-353-3552',
    sub: 'Mon–Sat, 10am–7pm IST',
    href: 'tel:+918853533552',
    color: '#34d399',
  },
  {
    icon: <FaLocationDot />,
    label: 'Office',
    value: 'Lucknow, UP, India',
    sub: 'Available for in-person meetings',
    href: null,
    color: '#f472b6',
  },
]

const contactFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '✦',
    value: '24h',
    label: 'Response Time',
    initial: { opacity: 0, x: 20, y: -10 },
    animate: { opacity: 1, x: 0, y: [0, -8, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 0.85 },
      x:       { duration: 0.5, delay: 0.85 },
      y:       { duration: 4.4, delay: 0.85, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'ph-float--2',
    icon: '◆',
    value: '500+',
    label: 'Projects Done',
    initial: { opacity: 0, x: -20, y: 10 },
    animate: { opacity: 1, x: 0, y: [0, 7, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.0 },
      x:       { duration: 0.5, delay: 1.0 },
      y:       { duration: 5.0, delay: 1.0, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'ph-float--3',
    icon: '↑',
    value: '98%',
    label: 'Client Satisfaction',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

const initialValues = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [focused, setFocused] = useState({})
  const [values, setValues]   = useState(initialValues)
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle')

  const handleFocus  = key => setFocused(f => ({ ...f, [key]: true }))
  const handleBlur   = key => setFocused(f => ({ ...f, [key]: false }))
  const handleChange = (key, val) => {
    setValues(v => ({ ...v, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }
  const isActive = key => focused[key] || !!values[key]

  const validate = () => {
    const e = {}
    if (!values.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email'
    if (!values.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="ct">

      {/* ── HERO ── */}
      <section className="ph ph--contact">
        <div className="ph__bg-glow" />
        <div className="ph__noise" />
        <svg className="ph__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
        </svg>

        <div className="container ph__inner">
          <div className="ph__content">
            <motion.div className="hero__trust-badge" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <span className="hero__badge-pulse" />
              <span className="hero__trust-badge-text">Get In Touch · Response Within 24h</span>
            </motion.div>

            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Let's Build Something<br />
              <span className="hero__title-accent">Remarkable Together</span>
            </motion.h1>

            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              Tell us about your project. We'll craft a strategy that drives real, measurable growth for your business.
            </motion.p>

            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#contact-form" className="hero__btn-primary">Start a Project <span className="hero__btn-arrow">→</span></a>
              <a href="mailto:hello@trendoxmarketing.com" className="hero__btn-ghost">hello@trendoxmarketing.com</a>
            </motion.div>

            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['24h Response', '500+ Projects', '98% Satisfaction'].map(item => (
                <div key={item} className="hero__trust-item">
                  <span className="hero__trust-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="ph__visual"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ph__visual-glow" />
            <div className="ph__parallax">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'relative', zIndex: 2 }}>
                <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block', borderRadius: 16 }}>
                  <defs>
                    <linearGradient id="ct-bg" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0a0f1e"/><stop offset="100%" stopColor="#050810"/>
                    </linearGradient>
                    <filter id="ct-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00000060"/></filter>
                  </defs>
                  <rect width="420" height="320" rx="16" fill="url(#ct-bg)"/>

                  {/* ── Contact info cards ── */}
                  {[
                    { y: 16,  icon: '✉', label: 'Email Us',   value: 'hello@trendoxmarketing.com', color: '#4f8bff', tagBg: 'rgba(79,139,255,0.15)' },
                    { y: 102, icon: '☎', label: 'Call Us',    value: '+91 885-353-3552',            color: '#34d399', tagBg: 'rgba(52,211,153,0.15)' },
                    { y: 188, icon: '📍', label: 'Office',     value: 'Lucknow, UP, India',          color: '#f472b6', tagBg: 'rgba(244,114,182,0.15)' },
                  ].map(({ y, icon, label, value, color, tagBg }) => (
                    <g key={label} filter="url(#ct-sh)">
                      <rect x="16" y={y} width="388" height="72" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                      {/* left bar */}
                      <rect x="16" y={y} width="4" height="72" rx="2" fill={color} opacity="0.85"/>
                      {/* icon circle */}
                      <rect x="30" y={y + 16} width="38" height="38" rx="10" fill={tagBg}/>
                      <text x="49" y={y + 40} fontSize="16" fill={color} fontFamily="Inter,sans-serif" textAnchor="middle">{icon}</text>
                      {/* label */}
                      <text x="80" y={y + 28} fontSize="7" fontWeight="700" fill={color} fontFamily="Inter,sans-serif" textTransform="uppercase" letterSpacing="1">{label}</text>
                      {/* value */}
                      <text x="80" y={y + 46} fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.88)" fontFamily="Inter,sans-serif">{value}</text>
                      {/* progress bar */}
                      <rect x="80" y={y + 58} width="300" height="3" rx="2" fill="rgba(255,255,255,0.06)"/>
                      <rect x="80" y={y + 58} width="200" height="3" rx="2" fill={color} opacity="0.4"/>
                    </g>
                  ))}

                  {/* ── Response time badge ── */}
                  <g filter="url(#ct-sh)" transform="translate(16,274)">
                    <rect width="175" height="34" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
                    <circle cx="16" cy="17" r="5" fill="#4f8bff" opacity="0.8"/>
                    <text x="28" y="21" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="Inter,sans-serif">Avg. Response: 24 hours</text>
                  </g>

                  {/* ── Satisfaction badge ── */}
                  <g filter="url(#ct-sh)" transform="translate(229,262)">
                    <rect width="175" height="50" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
                    <text x="14" y="20" fontSize="7" fill="rgba(52,211,153,0.8)" fontFamily="Inter,sans-serif">Client Satisfaction</text>
                    <text x="14" y="42" fontSize="20" fontWeight="900" fill="#6ee7b7" fontFamily="Inter,sans-serif">98%</text>
                  </g>
                </svg>
              </motion.div>

              {contactFloatCards.map((card) => (
                <motion.div
                  key={card.cls}
                  className={`hero__float-card ph-float ${card.cls}`}
                  initial={card.initial}
                  animate={card.animate}
                  transition={card.transition}
                >
                  <span className="hero__float-icon">{card.icon}</span>
                  <div>
                    <div className="hero__float-value">{card.value}</div>
                    <div className="hero__float-label">{card.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="ph__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="ct-info">
        <div className="container ct-info__grid">
          {INFO_CARDS.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            const extra = c.href ? { href: c.href } : {}
            return (
              <motion.div key={c.label} {...up(i * 0.08)}>
                <Tag className="ct-info-card" style={{ '--card-color': c.color }} {...extra}>
                  <span className="ct-info-card__icon" style={{ color: c.color, background: `${c.color}18` }}>{c.icon}</span>
                  <div className="ct-info-card__body">
                    <span className="ct-info-card__label">{c.label}</span>
                    <strong className="ct-info-card__value">{c.value}</strong>
                    <span className="ct-info-card__sub">{c.sub}</span>
                  </div>
                  <div className="ct-info-card__bar" style={{ background: c.color }} />
                </Tag>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="ct-main" id="contact-form">
        <div className="container ct-main__inner">

          {/* Form */}
          <motion.div className="ct-form-card" {...up(0)}>
            <div className="ct-form-card__head">
              <span className="ct-tag">Send a Message</span>
              <h2 className="ct-form-card__title">Start a conversation</h2>
              <p className="ct-form-card__sub">Fill in the details and we'll get back to you within one business day.</p>
            </div>

            <form ref={formRef} className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form__row">
                <div className={`cf-field${isActive('firstName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" className="cf-input" name="first_name"
                    value={values.firstName}
                    onFocus={() => handleFocus('firstName')} onBlur={() => handleBlur('firstName')}
                    onChange={e => handleChange('firstName', e.target.value)} />
                </div>
                <div className={`cf-field${isActive('lastName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" className="cf-input" name="last_name"
                    value={values.lastName}
                    onFocus={() => handleFocus('lastName')} onBlur={() => handleBlur('lastName')}
                    onChange={e => handleChange('lastName', e.target.value)} />
                </div>
              </div>

              <div className="ct-form__row">
                <div className={`cf-field${isActive('email') ? ' cf-field--active' : ''}${errors.email ? ' cf-field--error' : ''}`}>
                  <label className="cf-label" htmlFor="email">Email Address <span>*</span></label>
                  <input id="email" type="email" className="cf-input" name="from_email"
                    value={values.email}
                    onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')}
                    onChange={e => handleChange('email', e.target.value)} />
                  {errors.email && <p className="cf-error">{errors.email}</p>}
                </div>
                <div className={`cf-field${isActive('phone') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" className="cf-input" name="phone"
                    value={values.phone}
                    onFocus={() => handleFocus('phone')} onBlur={() => handleBlur('phone')}
                    onChange={e => handleChange('phone', e.target.value)} />
                </div>
              </div>

              <div className={`cf-field${isActive('service') ? ' cf-field--active' : ''}`}>
                <label className="cf-label" htmlFor="service">Service Interested In</label>
                <select id="service" className="cf-input cf-select" name="service"
                  value={values.service}
                  onFocus={() => handleFocus('service')} onBlur={() => handleBlur('service')}
                  onChange={e => handleChange('service', e.target.value)}>
                  <option value="" disabled />
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={`cf-field${isActive('message') ? ' cf-field--active' : ''}${errors.message ? ' cf-field--error' : ''}`}>
                <label className="cf-label" htmlFor="message">Message <span>*</span></label>
                <textarea id="message" className="cf-input cf-textarea" rows={5} name="message"
                  value={values.message}
                  onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')}
                  onChange={e => handleChange('message', e.target.value)} />
                {errors.message && <p className="cf-error">{errors.message}</p>}
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div className="cf-feedback cf-feedback--success"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    ✓ Message sent! We'll get back to you within 24 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div className="cf-feedback cf-feedback--error"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <button type="submit" className="ct-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : (<>Send Message <span className="ct-submit__arrow">→</span></>)}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside className="ct-sidebar" {...up(0.12)}>
            <div className="ct-sidebar__img-wrap">
              <img src="/ContactUs .png" alt="Contact Trendox" className="ct-sidebar__img" />
              <div className="ct-sidebar__img-overlay" />
            </div>

            <div className="ct-sidebar__info">
              {INFO_CARDS.map((c, i) => {
                const Tag = c.href ? 'a' : 'div'
                const extra = c.href ? { href: c.href } : {}
                return (
                  <Tag key={i} className="ct-sidebar__row" {...extra}>
                    <span className="ct-sidebar__row-icon" style={{ color: c.color, background: `${c.color}18` }}>{c.icon}</span>
                    <div>
                      <div className="ct-sidebar__row-label">{c.label}</div>
                      <div className="ct-sidebar__row-value">{c.value}</div>
                    </div>
                  </Tag>
                )
              })}
            </div>

            <div className="ct-sidebar__promise">
              <span className="ct-sidebar__promise-dot" />
              <p>We respond to every enquiry within 24 hours. No spam, ever.</p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ct-cta">
        <div className="ct-cta__pattern" aria-hidden="true" />
        <div className="container ct-cta__inner">
          <motion.div {...up(0)}>
            <p className="ct-cta__eyebrow"><span className="ct-cta__dot" />Ready to scale?</p>
            <h2 className="ct-cta__title">
              Not sure where<br />to <em>start?</em>
            </h2>
            <p className="ct-cta__sub">Book a free 30-minute strategy call. No pitch, no pressure — just honest advice about what will move your numbers.</p>
            <div className="ct-cta__actions">
              <Link to="/contact" className="ct-cta__btn-primary">Book a Free Call →</Link>
              <a href="mailto:hello@trendoxmarketing.com" className="ct-cta__btn-ghost">hello@trendoxmarketing.com</a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
