import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Pricing.css'

function WhatsIncludedSVG() {
  return (
    <svg viewBox="0 0 340 390" fill="none" xmlns="http://www.w3.org/2000/svg" className="cp-illustration">
      {/* Background card */}
      <rect x="0" y="0" width="340" height="390" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>

      {/* Header */}
      <text x="24" y="34" fontFamily="inherit" fontSize="10" fontWeight="700" letterSpacing="2" fill="rgba(255,255,255,0.45)">WHAT'S INCLUDED</text>
      <line x1="24" y1="44" x2="316" y2="44" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

      {/* Row 1 — Tailored Solutions */}
      <rect x="24" y="58" width="34" height="34" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <path d="M31 75h12M37 69v12" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M33 71l8 8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round"/>
      <text x="70" y="72" fontFamily="inherit" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.92)">Tailored Solutions</text>
      <text x="70" y="87" fontFamily="inherit" fontSize="10.5" fill="rgba(255,255,255,0.42)">Built for your unique goals</text>
      <circle cx="308" cy="75" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
      <path d="M303 75l3 3 6-6" stroke="rgba(255,255,255,0.72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

      <line x1="24" y1="104" x2="316" y2="104" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Row 2 — Flexible Engagement Models */}
      <rect x="24" y="116" width="34" height="34" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <path d="M30 126v3a2 2 0 002 2h10" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M40 129l3-2-3-2" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48 138v-3a2 2 0 00-2-2H36" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M38 135l-3 2 3 2" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="70" y="130" fontFamily="inherit" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.92)">Flexible Engagement</text>
      <text x="70" y="145" fontFamily="inherit" fontSize="10.5" fill="rgba(255,255,255,0.42)">Models that fit your workflow</text>
      <circle cx="308" cy="133" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
      <path d="M303 133l3 3 6-6" stroke="rgba(255,255,255,0.72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

      <line x1="24" y1="162" x2="316" y2="162" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Row 3 — Dedicated Team Support */}
      <rect x="24" y="174" width="34" height="34" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <circle cx="37" cy="184" r="4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="none"/>
      <path d="M29 198a8 8 0 0116 0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="47" cy="184" r="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" fill="none"/>
      <path d="M44 198a6 6 0 018 0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <text x="70" y="188" fontFamily="inherit" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.92)">Dedicated Team Support</text>
      <text x="70" y="203" fontFamily="inherit" fontSize="10.5" fill="rgba(255,255,255,0.42)">Your growth, our priority</text>
      <circle cx="308" cy="191" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
      <path d="M303 191l3 3 6-6" stroke="rgba(255,255,255,0.72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

      <line x1="24" y1="220" x2="316" y2="220" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Row 4 — Transparent Deliverables */}
      <rect x="24" y="232" width="34" height="34" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <rect x="32" y="239" width="14" height="18" rx="2" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="none"/>
      <path d="M35 246h8M35 251h8" stroke="rgba(255,255,255,0.65)" strokeWidth="1.3" strokeLinecap="round"/>
      <text x="70" y="246" fontFamily="inherit" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.92)">Transparent Deliverables</text>
      <text x="70" y="261" fontFamily="inherit" fontSize="10.5" fill="rgba(255,255,255,0.42)">Clear reports, zero surprises</text>
      <circle cx="308" cy="249" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
      <path d="M303 249l3 3 6-6" stroke="rgba(255,255,255,0.72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

      <line x1="24" y1="278" x2="316" y2="278" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Row 5 — Scalable Growth Plans */}
      <rect x="24" y="290" width="34" height="34" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <polyline points="29,314 35,306 41,310 51,300" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="47,300 51,300 51,304" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="70" y="304" fontFamily="inherit" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.92)">Scalable Growth Plans</text>
      <text x="70" y="319" fontFamily="inherit" fontSize="10.5" fill="rgba(255,255,255,0.42)">Scales as your business grows</text>
      <circle cx="308" cy="307" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
      <path d="M303 307l3 3 6-6" stroke="rgba(255,255,255,0.72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>

      <line x1="24" y1="336" x2="316" y2="336" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Row 6 — No Hidden Charges */}
      <rect x="24" y="348" width="34" height="34" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <circle cx="41" cy="365" r="8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="none"/>
      <path d="M41 359v2M41 369v2" stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M38 362a3 3 0 016 0c0 2-3 3-3 3s-3 1-3 3a3 3 0 006 0" stroke="rgba(255,255,255,0.65)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <text x="70" y="362" fontFamily="inherit" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.92)">No Hidden Charges</text>
      <text x="70" y="377" fontFamily="inherit" fontSize="10.5" fill="rgba(255,255,255,0.42)">100% pricing transparency</text>
      <circle cx="308" cy="365" r="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
      <path d="M303 365l3 3 6-6" stroke="rgba(255,255,255,0.72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <section className="section custom-pricing" id="pricing">
      <div className="container">
        <motion.div
          className="custom-pricing__card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow orbs */}
          <div className="cp-orb cp-orb--1" aria-hidden />
          <div className="cp-orb cp-orb--2" aria-hidden />
          <div className="cp-orb cp-orb--3" aria-hidden />

          <div className="custom-pricing__inner">
            {/* Left */}
            <div className="custom-pricing__left">
              <motion.span
                className="section-tag cp-tag"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Custom Pricing
              </motion.span>

              <motion.h2
                className="custom-pricing__headline"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                Every Business Has<br />Different Goals.
              </motion.h2>

              <motion.p
                className="custom-pricing__sub"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.26 }}
              >
                We create custom growth strategies and pricing based on your
                business size, goals, industry, and requirements.
              </motion.p>

              <motion.div
                className="custom-pricing__ctas"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.34 }}
              >
                <div className="cp-cta-glow" aria-hidden />
                <button
                  className="cp-btn-primary"
                  onClick={() => navigate('/contact')}
                >
                  Get Custom Quote →
                </button>
                <button
                  className="cp-btn-secondary"
                  onClick={() => navigate('/contact')}
                >
                  Schedule A Free Consultation
                </button>
              </motion.div>

              <motion.p
                className="custom-pricing__trust"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.44 }}
              >
                ✦ Most proposals are delivered within 24 hours.
              </motion.p>
            </div>

            {/* Right — SVG Illustration */}
            <motion.div
              className="custom-pricing__right"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <WhatsIncludedSVG />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
