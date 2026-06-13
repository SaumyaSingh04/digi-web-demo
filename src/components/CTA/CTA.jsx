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
          <svg className="cta__person-img" viewBox="0 0 420 500" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* Person - legs */}
            <rect x="170" y="370" width="28" height="80" rx="10" fill="#2d2b50"/>
            <rect x="222" y="370" width="28" height="80" rx="10" fill="#2d2b50"/>
            <rect x="158" y="438" width="48" height="18" rx="8" fill="#1a1830"/>
            <rect x="214" y="438" width="48" height="18" rx="8" fill="#1a1830"/>

            {/* Person - body */}
            <rect x="148" y="240" width="124" height="140" rx="24" fill="#4a4870"/>

            {/* Shirt collar */}
            <path d="M194 240 L210 265 L226 240" fill="#fff" opacity="0.1"/>

            {/* Left arm - holding phone */}
            <rect x="90" y="255" width="62" height="26" rx="13" fill="#4a4870"/>
            {/* Phone in left hand */}
            <rect x="58" y="232" width="38" height="62" rx="9" fill="#1a1830" stroke="#5a5880" strokeWidth="2"/>
            <rect x="64" y="240" width="26" height="40" rx="5" fill="#0d0b2e"/>
            {/* Phone screen glow */}
            <rect x="66" y="242" width="22" height="10" rx="3" fill="#5a5880" opacity="0.6"/>
            <rect x="66" y="256" width="16" height="6" rx="3" fill="#7a7898" opacity="0.5"/>
            <rect x="66" y="266" width="20" height="6" rx="3" fill="#7a7898" opacity="0.35"/>
            <circle cx="77" cy="284" r="4" fill="#4a4870"/>

            {/* Right arm - raised/waving */}
            <rect x="268" y="248" width="62" height="26" rx="13" fill="#4a4870"/>
            {/* Hand */}
            <circle cx="342" cy="240" r="18" fill="#c4a870"/>

            {/* Head */}
            <circle cx="210" cy="200" r="52" fill="#c4a870"/>
            {/* Hair */}
            <path d="M160 188 Q165 148 210 145 Q255 148 260 188" fill="#1a1830"/>
            {/* Eyes */}
            <ellipse cx="194" cy="196" rx="6" ry="7" fill="#1a1830"/>
            <ellipse cx="226" cy="196" rx="6" ry="7" fill="#1a1830"/>
            <circle cx="196" cy="194" r="2" fill="#fff"/>
            <circle cx="228" cy="194" r="2" fill="#fff"/>
            {/* Smile */}
            <path d="M194 214 Q210 228 226 214" stroke="#1a1830" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Cheeks */}
            <circle cx="182" cy="212" r="8" fill="#b07070" opacity="0.3"/>
            <circle cx="238" cy="212" r="8" fill="#b07070" opacity="0.3"/>
            {/* Headset */}
            <path d="M160 188 Q158 165 175 158" stroke="#2d2b50" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <rect x="154" y="186" width="14" height="20" rx="6" fill="#2d2b50"/>
            <path d="M260 188 Q262 165 245 158" stroke="#2d2b50" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <rect x="252" y="186" width="14" height="20" rx="6" fill="#2d2b50"/>
            {/* Mic */}
            <path d="M154 200 Q140 205 142 215" stroke="#5a5880" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <circle cx="142" cy="218" r="5" fill="#5a5880"/>

            {/* Floating bubble - email */}
            <rect x="270" y="120" width="140" height="54" rx="14" fill="#1a1830" stroke="#5a5880" strokeWidth="1.5"/>
            <path d="M280 136 L340 136 L340 162 L280 162 Z" fill="none" stroke="#5a5880" strokeWidth="1.5" rx="4"/>
            <path d="M280 136 L310 152 L340 136" stroke="#5a5880" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <rect x="352" y="136" width="46" height="8" rx="4" fill="#5a5880" opacity="0.45"/>
            <rect x="352" y="150" width="32" height="6" rx="3" fill="#7a7898" opacity="0.35"/>
            {/* bubble tail */}
            <path d="M295 174 L285 188 L310 174" fill="#1a1830" stroke="#5a5880" strokeWidth="1.5"/>

            {/* Floating bubble - message */}
            <rect x="10" y="100" width="130" height="54" rx="14" fill="#1a1830" stroke="#5a7a6a" strokeWidth="1.5"/>
            {/* Chat lines */}
            <rect x="26" y="116" width="72" height="8" rx="4" fill="#5a7a6a" opacity="0.7"/>
            <rect x="26" y="130" width="90" height="7" rx="3" fill="#7a9a8a" opacity="0.45"/>
            <rect x="26" y="143" width="56" height="7" rx="3" fill="#7a9a8a" opacity="0.3"/>
            <path d="M30 154 L20 170 L50 154" fill="#1a1830" stroke="#5a7a6a" strokeWidth="1.5"/>

            {/* Floating badge - call */}
            <rect x="290" y="310" width="120" height="48" rx="14" fill="#1a1830" stroke="#8a6a75" strokeWidth="1.5"/>
            <circle cx="316" cy="334" r="14" fill="#8a6a75" opacity="0.15"/>
            {/* Phone icon */}
            <path d="M309 327 Q308 334 315 340 Q322 347 328 345 L325 339 L320 341 Q316 337 314 333 L317 329 Z" fill="#8a6a75"/>
            <rect x="336" y="326" width="62" height="8" rx="4" fill="#8a6a75" opacity="0.6"/>
            <rect x="336" y="340" width="44" height="6" rx="3" fill="#aa8a95" opacity="0.45"/>

            {/* Stars / sparkles */}
            <circle cx="130" cy="60" r="4" fill="#b89a60" opacity="0.6"/>
            <circle cx="300" cy="80" r="3" fill="#5a5880" opacity="0.6"/>
            <circle cx="380" cy="200" r="4" fill="#5a7a6a" opacity="0.6"/>
            <circle cx="50" cy="300" r="3" fill="#8a6a75" opacity="0.6"/>
            <circle cx="20" cy="200" r="5" fill="#7a7898" opacity="0.45"/>

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
