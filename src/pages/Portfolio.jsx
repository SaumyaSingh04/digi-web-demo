import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import Testimonials from '../components/Testimonials/Testimonials'
import '../styles/layout.css'
import './Portfolio.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const handleMouseMove = (e, cardRef) => {
  const r = cardRef.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  const rx = (y - 0.5) * -14
  const ry = (x - 0.5) * 14
  cardRef.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px) scale(1.02)`
  const shine = cardRef.querySelector('.pf-card__shine')
  if (shine) {
    shine.style.setProperty('--mx', `${x * 100}%`)
    shine.style.setProperty('--my', `${y * 100}%`)
  }
}

const handleMouseLeave = (cardRef) => {
  cardRef.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)'
}

const cases = [
  {
    tag: 'SEO Campaign', client: 'Nexora Tech', industry: 'SaaS',
    result: '+180% Organic Traffic', metric: '180%', metricLabel: 'Traffic Growth',
    desc: 'Technical SEO overhaul and content strategy that tripled search visibility in 4 months.',
    services: ['SEO', 'Content Strategy', 'Link Building'],
    glow: 'rgba(99,153,255,0.6)',
    grad: 'linear-gradient(90deg,#4f8bff,#a78bfa)',
    tagColor: 'rgba(167,139,250,0.7)',
  },
  {
    tag: 'Website Redesign', client: 'Veltrix Solutions', industry: 'B2B Services',
    result: '+60% Conversion Rate', metric: '60%', metricLabel: 'More Conversions',
    desc: 'Full website transformation with UX-first design that dramatically improved lead quality.',
    services: ['Website Design', 'Web Development', 'CRO'],
    glow: 'rgba(52,211,153,0.6)',
    grad: 'linear-gradient(90deg,#34d399,#06b6d4)',
    tagColor: 'rgba(52,211,153,0.7)',
  },
  {
    tag: 'PPC Advertising', client: 'Brandify Co.', industry: 'E-Commerce',
    result: '4.5x ROAS', metric: '4.5x', metricLabel: 'Return on Ad Spend',
    desc: 'Managed $20K/month ad budget across Google and Meta, achieving consistent 4.5x return.',
    services: ['Google Ads', 'Meta Ads', 'Analytics'],
    glow: 'rgba(251,146,60,0.6)',
    grad: 'linear-gradient(90deg,#fb923c,#f59e0b)',
    tagColor: 'rgba(251,146,60,0.7)',
  },
  {
    tag: 'Social Media Marketing', client: 'Optica Retail', industry: 'Retail',
    result: '+220% Engagement', metric: '220%', metricLabel: 'Engagement Lift',
    desc: 'Rebranded social presence with editorial content strategy that turned followers into buyers.',
    services: ['SMM', 'Content Creation', 'Influencer Outreach'],
    glow: 'rgba(244,114,182,0.6)',
    grad: 'linear-gradient(90deg,#f472b6,#c084fc)',
    tagColor: 'rgba(244,114,182,0.7)',
  },
  {
    tag: 'Digital Marketing', client: 'FinEdge Capital', industry: 'Finance',
    result: '3.2x Lead Volume', metric: '3.2x', metricLabel: 'Lead Growth',
    desc: 'Full-funnel digital strategy combining SEO, PPC, and email nurture to scale qualified leads.',
    services: ['SEO', 'PPC', 'Email Marketing'],
    glow: 'rgba(56,189,248,0.6)',
    grad: 'linear-gradient(90deg,#38bdf8,#818cf8)',
    tagColor: 'rgba(56,189,248,0.7)',
  },
  {
    tag: 'Web Development', client: 'Luminary Studios', industry: 'Creative Agency',
    result: '98 PageSpeed Score', metric: '98', metricLabel: 'PageSpeed Score',
    desc: 'Custom React build with headless CMS delivering sub-second load times and flawless UX.',
    services: ['Web Development', 'Performance', 'CMS Integration'],
    glow: 'rgba(163,230,53,0.6)',
    grad: 'linear-gradient(90deg,#a3e635,#34d399)',
    tagColor: 'rgba(163,230,53,0.7)',
  },
]

const pfFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '◆',
    value: '100+',
    label: 'Projects Delivered',
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
    icon: '✦',
    value: '4.8x',
    label: 'Avg. ROAS',
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
    value: '95%',
    label: 'Client Retention',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Portfolio() {
  return (
    <>
      <section className="ph ph--portfolio">
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
              <span className="hero__trust-badge-text">Our Work</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Results That Speak<br />
              <span className="hero__title-accent">for Themselves</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              A curated selection of campaigns and projects that delivered measurable business impact.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#cases" className="hero__btn-primary">View Case Studies <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Start a Project</Link>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['100+ Projects', '4.8x Avg. ROAS', '95% Retention'].map(item => (
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
                    <linearGradient id="pf-bg" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0a1628"/><stop offset="100%" stopColor="#040e1c"/>
                    </linearGradient>
                    <linearGradient id="pf-bar-a" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4f8bff"/><stop offset="100%" stopColor="#3a6ad4"/>
                    </linearGradient>
                    <linearGradient id="pf-bar-b" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#059669"/>
                    </linearGradient>
                    <linearGradient id="pf-bar-c" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c"/><stop offset="100%" stopColor="#c2410c"/>
                    </linearGradient>
                    <linearGradient id="pf-bar-d" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f472b6"/><stop offset="100%" stopColor="#be185d"/>
                    </linearGradient>
                    <filter id="pf-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00000050"/></filter>
                  </defs>
                  <rect width="420" height="320" rx="16" fill="url(#pf-bg)"/>
                  {/* grid lines */}
                  {[80,130,180,230].map(y => <line key={y} x1="24" y1={y} x2="396" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>)}
                  {/* bars - 6 clients */}
                  {[
                    {x:28, h:140, g:'pf-bar-a', label:'Nexora',  val:'+180%'},
                    {x:88, h:100, g:'pf-bar-b', label:'Veltrix', val:'+60%'},
                    {x:148,h:160, g:'pf-bar-c', label:'Brandify',val:'4.5x'},
                    {x:208,h:120, g:'pf-bar-d', label:'Optica',  val:'+220%'},
                    {x:268,h:180, g:'pf-bar-a', label:'FinEdge', val:'3.2x'},
                    {x:328,h:200, g:'pf-bar-b', label:'Luminary',val:'98'},
                  ].map(({x,h,g,label,val})=>(
                    <g key={label}>
                      <polygon points={`${x+44},${250-h} ${x+52},${242-h} ${x+52},250 ${x+44},258`} fill={`url(#${g})`} opacity="0.4"/>
                      <polygon points={`${x},${250-h} ${x+8},${242-h} ${x+52},${242-h} ${x+44},${250-h}`} fill={`url(#${g})`} opacity="0.6"/>
                      <rect x={x} y={250-h} width={44} height={h} rx="3" fill={`url(#${g})`} opacity="0.85"/>
                      <text x={x+22} y={266} fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif" textAnchor="middle">{label}</text>
                      <text x={x+22} y={244-h} fontSize="8" fontWeight="800" fill="rgba(255,255,255,0.85)" fontFamily="Inter,sans-serif" textAnchor="middle">{val}</text>
                    </g>
                  ))}
                  {/* trend line */}
                  <polyline points="50,110 110,150 170,90 230,130 290,70 350,50" fill="none" stroke="rgba(99,153,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="350" cy="50" r="5" fill="#4f8bff"/>
                  {/* stat badge top */}
                  <g filter="url(#pf-sh)" transform="translate(18,16)">
                    <rect width="120" height="46" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <text x="14" y="22" fontSize="7" fill="rgba(99,153,255,0.8)" fontFamily="Inter,sans-serif">Avg. Growth</text>
                    <text x="14" y="40" fontSize="18" fontWeight="900" fill="#93c5fd" fontFamily="Inter,sans-serif">+168%</text>
                  </g>
                  <g filter="url(#pf-sh)" transform="translate(282,16)">
                    <rect width="120" height="46" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <text x="14" y="22" fontSize="7" fill="rgba(52,211,153,0.8)" fontFamily="Inter,sans-serif">Projects</text>
                    <text x="14" y="40" fontSize="18" fontWeight="900" fill="#6ee7b7" fontFamily="Inter,sans-serif">100+</text>
                  </g>
                  {/* bottom row */}
                  <g transform="translate(18,278)">
                    <rect width="384" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                    {[['SEO','#4f8bff'],['PPC','#fb923c'],['SMM','#f472b6'],['Web Dev','#34d399'],['Content','#a78bfa'],['AI','#38bdf8']].map(([lbl,clr],i)=>(
                      <g key={lbl}>
                        <circle cx={22+i*64} cy={15} r={4} fill={clr} opacity="0.8"/>
                        <text x={30+i*64} y={19} fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="Inter,sans-serif">{lbl}</text>
                      </g>
                    ))}
                  </g>
                </svg>
              </motion.div>
              {pfFloatCards.map((card) => (
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

      <section className="section">
        <div className="container">
          <div className="pf-grid">
            {cases.map((c, i) => (
              <motion.div
                key={c.client}
                className="pf-card"
                style={{
                  '--glow-col': c.glow,
                  '--accent-grad': c.grad,
                  '--tag-color': c.tagColor,
                }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              >
                <div className="pf-card__shine" />
                <div className="pf-card__visual">
                  <div className="pf-card__metric-big">{c.metric}</div>
                  <div className="pf-card__metric-label">{c.metricLabel}</div>
                  <div className="pf-card__bars">
                    {[40, 55, 45, 70, 58, 82, 68, 100].map((h, j) => (
                      <motion.div
                        key={j}
                        className="pf-card__bar"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + j * 0.04 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="pf-card__body">
                  <div className="pf-card__meta">
                    <span className="pf-card__tag">{c.tag}</span>
                    <span className="pf-card__industry">{c.industry}</span>
                  </div>
                  <h3 className="pf-card__client">{c.client}</h3>
                  <p className="pf-card__desc">{c.desc}</p>
                  <div className="pf-card__services">
                    {c.services.map(s => (
                      <span key={s} className="pf-card__service">{s}</span>
                    ))}
                  </div>
                  <span className="pf-card__result">{c.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  )
}
