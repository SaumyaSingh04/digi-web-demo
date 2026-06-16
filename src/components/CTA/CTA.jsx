import { useState } from 'react'
import { motion } from 'framer-motion'
import './CTA.css'

export default function CTA() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="cta">
      <div className="container cta__inner">
        {/* Left: Image */}
        <motion.div
          className="cta__image-side"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 420 500" xmlns="http://www.w3.org/2000/svg" width="100%" style={{maxWidth:'460px'}}>
            <defs>
              <radialGradient id="bgGrad" cx="50%" cy="60%" r="55%">
                <stop offset="0%" stopColor="#2e2a4a" stopOpacity="0.55"/>
                <stop offset="100%" stopColor="#1a1828" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Soft bg glow */}
            <ellipse cx="210" cy="300" rx="180" ry="130" fill="url(#bgGrad)"/>
            <ellipse cx="210" cy="460" rx="145" ry="28" fill="#3a3560" opacity="0.25"/>

            {/* ── BIG ENVELOPE (main hero) ── */}
            <g className="svg-envelope">
              {/* body */}
              <rect x="80" y="160" width="260" height="180" rx="14" fill="#2c2845" stroke="#4a4270" strokeWidth="2"/>
              {/* envelope flap open */}
              <path d="M80 160 L210 248 L340 160" fill="none" stroke="#4a4270" strokeWidth="2"/>
              <path d="M80 160 L210 232 L340 160 L340 148 Q340 136 328 136 L92 136 Q80 136 80 148 Z" fill="#3a3560" stroke="#4a4270" strokeWidth="1.5"/>
              {/* letter inside peeking */}
              <rect x="148" y="125" width="124" height="90" rx="7" fill="#232040" stroke="#3d3968" strokeWidth="1.5" className="svg-letter"/>
              <rect x="162" y="140" width="60" height="5" rx="2.5" fill="#5a5490" opacity="0.8"/>
              <rect x="162" y="152" width="96" height="4" rx="2" fill="#4a4470" opacity="0.6"/>
              <rect x="162" y="163" width="80" height="4" rx="2" fill="#4a4470" opacity="0.5"/>
              <rect x="162" y="174" width="50" height="4" rx="2" fill="#4a4470" opacity="0.4"/>
              {/* cursor blink on letter */}
              <rect x="162" y="185" width="6" height="8" rx="1" fill="#7b74cc" className="svg-cursor"/>
              {/* bottom fold lines */}
              <line x1="80" y1="340" x2="175" y2="258" stroke="#4a4270" strokeWidth="1.5" opacity="0.7"/>
              <line x1="340" y1="340" x2="245" y2="258" stroke="#4a4270" strokeWidth="1.5" opacity="0.7"/>
              {/* stamp */}
              <rect x="298" y="172" width="28" height="22" rx="4" fill="#3d3968" stroke="#5a5490" strokeWidth="1"/>
              <rect x="302" y="176" width="20" height="14" rx="2" fill="#4a4490" opacity="0.6"/>
            </g>

            {/* ── FLOATING BUBBLE: email ── */}
            <g className="svg-bubble-1">
              <rect x="18" y="80" width="110" height="52" rx="12" fill="#2e2a4a" stroke="#4a4270" strokeWidth="1.5"/>
              <polygon points="38,132 52,132 45,144" fill="#2e2a4a"/>
              {/* @ symbol */}
              <text x="34" y="112" fontSize="22" fill="#6b63b5" fontFamily="monospace" fontWeight="bold">@</text>
              <rect x="64" y="96" width="46" height="5" rx="2.5" fill="#5a5490" opacity="0.7"/>
              <rect x="64" y="107" width="32" height="4" rx="2" fill="#4a4470" opacity="0.5"/>
              <rect x="64" y="117" width="38" height="4" rx="2" fill="#4a4470" opacity="0.45"/>
            </g>

            {/* ── FLOATING BUBBLE: phone ── */}
            <g className="svg-bubble-2">
              <rect x="292" y="60" width="110" height="52" rx="12" fill="#2a2840" stroke="#413d6a" strokeWidth="1.5"/>
              <polygon points="298,112 312,112 305,124" fill="#2a2840"/>
              {/* phone icon */}
              <path d="M312 78 Q310 76 308 78 L304 88 Q302 92 306 94 Q312 98 318 104 Q322 108 326 103 L330 99 Q332 97 330 95 L326 91 Q324 89 322 91 L320 93 Q316 90 312 86 L314 84 Q316 82 314 80 Z" fill="#6b63b5" strokeWidth="0"/>
              <rect x="330" y="76" width="56" height="5" rx="2.5" fill="#5a5490" opacity="0.7"/>
              <rect x="330" y="87" width="40" height="4" rx="2" fill="#4a4470" opacity="0.5"/>
              <rect x="330" y="98" width="48" height="4" rx="2" fill="#4a4470" opacity="0.45"/>
            </g>

            {/* ── FLOATING BUBBLE: chat ── */}
            <g className="svg-bubble-3">
              <rect x="270" y="330" width="120" height="52" rx="12" fill="#2c2845" stroke="#4a4270" strokeWidth="1.5"/>
              <polygon points="380,382 366,382 373,394" fill="#2c2845"/>
              <circle cx="300" cy="356" r="4" fill="#5a5490" opacity="0.8"/>
              <circle cx="315" cy="356" r="4" fill="#5a5490" opacity="0.8"/>
              <circle cx="330" cy="356" r="4" fill="#5a5490" opacity="0.8"/>
              <rect x="348" y="344" width="30" height="5" rx="2.5" fill="#5a5490" opacity="0.55"/>
              <rect x="348" y="355" width="22" height="4" rx="2" fill="#4a4470" opacity="0.4"/>
              <rect x="348" y="365" width="28" height="4" rx="2" fill="#4a4470" opacity="0.35"/>
            </g>

            {/* ── FLOATING BUBBLE: location ── */}
            <g className="svg-bubble-4">
              <rect x="20" y="310" width="100" height="52" rx="12" fill="#2a2840" stroke="#413d6a" strokeWidth="1.5"/>
              <polygon points="30,362 44,362 37,374" fill="#2a2840"/>
              {/* pin icon */}
              <ellipse cx="46" cy="330" rx="9" ry="9" fill="#4a4470" stroke="#6b63b5" strokeWidth="1.5"/>
              <ellipse cx="46" cy="330" rx="4" ry="4" fill="#6b63b5"/>
              <line x1="46" y1="339" x2="46" y2="350" stroke="#6b63b5" strokeWidth="2" strokeLinecap="round"/>
              <rect x="62" y="324" width="44" height="5" rx="2.5" fill="#5a5490" opacity="0.7"/>
              <rect x="62" y="335" width="32" height="4" rx="2" fill="#4a4470" opacity="0.5"/>
              <rect x="62" y="345" width="38" height="4" rx="2" fill="#4a4470" opacity="0.4"/>
            </g>

            {/* ── SMALL DOTS decoration ── */}
            <circle cx="200" cy="68" r="4" fill="#4a4470" opacity="0.5" className="svg-dot-pulse"/>
            <circle cx="220" cy="52" r="2.5" fill="#5a5490" opacity="0.4"/>
            <circle cx="185" cy="55" r="2" fill="#5a5490" opacity="0.35"/>
            <circle cx="72" cy="230" r="3" fill="#4a4470" opacity="0.4" className="svg-dot-pulse"/>
            <circle cx="352" cy="220" r="3" fill="#4a4470" opacity="0.4"/>

            {/* ── SIGNAL ARCS around envelope ── */}
            <path d="M174 108 Q150 88 174 68" fill="none" stroke="#4a4270" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" className="svg-arc"/>
            <path d="M246 108 Q270 88 246 68" fill="none" stroke="#4a4270" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" className="svg-arc"/>
          </svg>
        </motion.div>

        {/* Right: Form Card */}
        <motion.div
          className="cta__form-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit} className="cta__form">
            <div className="cta__form-row">
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="cta__form-row">
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange} />
            </div>
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
            <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} />
            <div className="cta__recaptcha">
              <input type="checkbox" id="robot" />
              <label htmlFor="robot">I'm not a robot</label>
              <div className="cta__recaptcha-logo">
                <svg viewBox="0 0 64 64" width="38" height="38"><path fill="#4A90D9" d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z"/><path fill="#fff" d="M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 6a14 14 0 110 28A14 14 0 0132 18z"/></svg>
                <span>reCAPTCHA</span>
                <small>Privacy · Terms</small>
              </div>
            </div>
            <button type="submit" className="cta__submit">Submit</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
