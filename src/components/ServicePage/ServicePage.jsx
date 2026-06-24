import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import Process from '../Process/Process'
import CTA from '../CTA/CTA'
import { useCounter } from '../../hooks'
import './ServicePage.css'

const vp = { once: true, margin: '-30px' }
const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

function Counter({ target }) {
  const { val, ref } = useCounter(target)
  return <span ref={ref}>{val}</span>
}

// Icon → gradient bg colour per card index
const CARD_ACCENTS = [
  { bg: 'linear-gradient(135deg,#e8f0fe 0%,#c7d7fd 100%)', icon: '#3b6ef8' },
  { bg: 'linear-gradient(135deg,#fce8ff 0%,#e9b8fd 100%)', icon: '#a63bf8' },
  { bg: 'linear-gradient(135deg,#e8fff3 0%,#b8fdd9 100%)', icon: '#1db87a' },
  { bg: 'linear-gradient(135deg,#fff8e8 0%,#fde9b8 100%)', icon: '#d4860a' },
  { bg: 'linear-gradient(135deg,#ffe8e8 0%,#fdb8b8 100%)', icon: '#e03c3c' },
  { bg: 'linear-gradient(135deg,#e8f9ff 0%,#b8eafd 100%)', icon: '#0a9ed4' },
]

function StackedDeliverCard({ d, i, rowIdx, total, containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scaleVal = useTransform(
    scrollYProgress,
    [rowIdx / total, (rowIdx + 1) / total],
    [1, 1 - (total - rowIdx - 1) * 0.035]
  )
  const scale = useSpring(scaleVal, { stiffness: 160, damping: 28, mass: 0.5 })

  const opacityVal = useTransform(
    scrollYProgress,
    [rowIdx / total, (rowIdx + 1) / total],
    [1, rowIdx === total - 1 ? 1 : 0.65]
  )
  const opacity = useSpring(opacityVal, { stiffness: 160, damping: 28, mass: 0.5 })

  const accent = CARD_ACCENTS[i % CARD_ACCENTS.length]

  return (
    <motion.div
      className="sp-deliver-card sp-deliver-card--stack"
      style={{ scale, opacity, willChange: 'transform, opacity' }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (i % 2) * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left col — icon block */}
      <div className="sp-deliver-card__icon-col">
        <div className="sp-deliver-card__icon-wrap" style={{ background: accent.bg }}>
          <span className="sp-deliver-card__icon" style={{ color: accent.icon }}>{d.icon}</span>
        </div>
        <div className="sp-deliver-card__index" style={{ color: accent.icon }}>
          {String(i + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Right col — text */}
      <div className="sp-deliver-card__body">
        <div className="sp-deliver-card__tag" style={{ color: accent.icon, background: accent.bg }}>
          Service {String(i + 1).padStart(2, '0')}
        </div>
        <h3>{d.title}</h3>
        <p>{d.desc}</p>
        <div className="sp-deliver-card__arrow" style={{ color: accent.icon }}>→</div>
      </div>
    </motion.div>
  )
}

function StackedDeliversList({ delivers }) {
  const containerRef = useRef(null)
  // Group into pairs for 2-per-row layout
  const rows = []
  for (let i = 0; i < delivers.length; i += 2) rows.push(delivers.slice(i, i + 2))
  // Flat index tracker
  let idx = 0
  return (
    <div className="sp-delivers__stack" ref={containerRef}>
      {rows.map((pair, rowIdx) => (
        <div key={rowIdx} className="sp-deliver-card__sticky-wrap" style={{ '--i': rowIdx }}>
          <div className="sp-delivers__row">
            {pair.map((d) => {
              const cardIdx = idx++
              return (
                <StackedDeliverCard
                  key={d.title}
                  d={d}
                  i={cardIdx}
                  rowIdx={rowIdx}
                  total={rows.length}
                  containerRef={containerRef}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="sp-faq__list">
      {items.map((item, i) => (
        <div key={i} className={`sp-faq__item${open === i ? ' sp-faq__item--open' : ''}`}>
          <button className="sp-faq__q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="sp-faq__icon">{open === i ? '−' : '+'}</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                className="sp-faq__a"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

/**
 * ServicePage — reusable template
 *
 * Props:
 *  badge         string   — pill label e.g. "SEO Services"
 *  headline      jsx/str  — hero h1 (can contain <br/>/<em>)
 *  description   string   — hero subtitle
 *  cta1          { label, to }
 *  cta2          { label, to }
 *  heroVisual    jsx      — right-column service illustration
 *  heroMetrics   [{ icon, val, label }] — floating metric cards (2–3)
 *  stats         [{ val, label, sub }]   — 4 items
 *  delivers      [{ icon, title, desc }] — 6 items (bento grid)
 *  why           [{ title, body }]       — 3-4 items
 *  caseStudy     { image, tag, title, results: [{val,label}], cta }
 *  faqs          [{ q, a }]
 */
export default function ServicePage({
  badge,
  headline,
  description,
  cta1 = { label: 'Get Started →', to: '/contact' },
  cta2 = { label: 'See Results', to: '/portfolio' },
  heroVisual,
  heroMetrics,
  stats,
  delivers,
  why,
  caseStudy,
  faqs,
}) {
  return (
    <div className="sp">

      {/* ── 1. HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero__bg-grid" aria-hidden />
        <div className="sp-hero__bloom" aria-hidden />
        <div className="sp-hero__noise" aria-hidden />

        {/* Mountain waves */}
        <svg className="sp-hero__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,130 C60,118 140,96 260,82 C360,70 420,104 540,90 C660,76 760,42 900,28 C1020,16 1140,52 1280,44 C1360,38 1420,46 1440,42 L1440,320 Z" fill="rgba(255,255,255,0.025)" />
          <path d="M0,130 C60,118 140,96 260,82 C360,70 420,104 540,90 C660,76 760,42 900,28 C1020,16 1140,52 1280,44 C1360,38 1420,46 1440,42" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M0,320 L0,190 C80,172 200,144 340,126 C460,110 525,152 665,136 C785,122 885,84 1025,68 C1145,54 1265,90 1440,78 L1440,320 Z" fill="rgba(255,255,255,0.04)" />
          <path d="M0,190 C80,172 200,144 340,126 C460,110 525,152 665,136 C785,122 885,84 1025,68 C1145,54 1265,90 1440,78" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
          <path d="M0,320 L0,240 C100,224 220,196 360,180 C480,166 558,206 698,192 C818,180 940,146 1080,132 C1200,120 1325,152 1440,144 L1440,320 Z" fill="rgba(255,255,255,0.055)" />
          <path d="M0,240 C100,224 220,196 360,180 C480,166 558,206 698,192 C818,180 940,146 1080,132 C1200,120 1325,152 1440,144" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
          <path d="M0,320 L0,276 C100,264 220,242 360,228 C480,216 558,248 698,236 C818,226 960,196 1100,184 C1220,174 1340,196 1440,188 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
          <path d="M0,276 C100,264 220,242 360,228 C480,216 558,248 698,236 C818,226 960,196 1100,184 C1220,174 1340,196 1440,188" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
        </svg>

        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <motion.div className="sp-hero__pill" {...up(0)}>
              <span className="sp-hero__pill-dot" />
              <span>{badge}</span>
            </motion.div>
            <motion.h1 className="sp-hero__h1" {...up(0.08)}>{headline}</motion.h1>
            <motion.p className="sp-hero__desc" {...up(0.15)}>{description}</motion.p>
            <motion.div className="sp-hero__ctas" {...up(0.21)}>
              <Link to={cta1.to} className="btn-primary">{cta1.label}</Link>
              <Link to={cta2.to} className="btn-outline">{cta2.label}</Link>
            </motion.div>
          </div>
          {heroVisual && (
            <motion.div
              className="sp-hero__visual-wrap"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sp-hero__visual">
                {heroVisual}
              </div>
              {heroMetrics?.map((m, i) => (
                <motion.div
                  key={i}
                  className={`sp-hero__metric sp-hero__metric--${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="sp-hero__metric-icon">{m.icon}</span>
                  <div>
                    <div className="sp-hero__metric-val">{m.val}</div>
                    <div className="sp-hero__metric-label">{m.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Bottom wave */}
        <div className="sp-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-alt)" />
          </svg>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      {stats && (
        <section className="sp-stats">
          <div className="container sp-stats__grid">
            {stats.map((s, i) => {
              const ICONS   = ['↗', '★', '◈', '✦']
              const COLORS  = ['#7a9ab8', '#b8a46a', '#6da98e', '#a78a96']
              const icon  = s.icon  || ICONS[i % 4]
              const color = s.color || COLORS[i % 4]
              return (
                <motion.div
                  key={s.label}
                  className="sp-stats__cell"
                  style={{ '--s-color': color }}
                  {...up(i * 0.07)}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="sp-stats__icon" style={{ color, background: `${color}18` }}>
                    {icon}
                  </div>
                  <div className="sp-stats__num" style={{ color }}>
                    <Counter target={s.val} />
                  </div>
                  <div className="sp-stats__label">{s.label}</div>
                  {s.sub && <div className="sp-stats__sub">{s.sub}</div>}
                  <div className="sp-stats__cell-bar" style={{ background: color }} />
                </motion.div>
              )
            })}
          </div>
        </section>
      )}

      {/* ── 3. WHAT WE DELIVER ── */}
      {delivers && (
        <section className="sp-delivers section">
          <div className="container">
            <motion.div className="sp-section-head" {...up(0)}>
              <span className="ap-tag">What We Deliver</span>
              <h2 className="ap-h2">Every angle,<br /><em>fully covered.</em></h2>
            </motion.div>
            <div className="sp-delivers__grid">
              {delivers.map((d, i) => {
                const accent = CARD_ACCENTS[i % CARD_ACCENTS.length]
                return (
                  <motion.div
                    key={d.title}
                    className="sp-deliver-mini"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="sp-deliver-mini__icon" style={{ background: accent.bg, color: accent.icon }}>
                      {d.icon}
                    </div>
                    <div className="sp-deliver-mini__num" style={{ color: accent.icon }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="sp-deliver-mini__title">{d.title}</h3>
                    <p className="sp-deliver-mini__desc">{d.desc}</p>
                    <div className="sp-deliver-mini__bar" style={{ background: accent.icon }} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. PROCESS ── */}
      <Process />

      {/* ── 5. WHY CHOOSE TRENDOX ── */}
      {why && (
        <section className="sp-why">
          <div className="container">
            <motion.div className="sp-section-head" {...up(0)}>
              <span className="ap-tag">Why Choose Trendox</span>
              <h2 className="ap-h2">What makes us<br /><em>different.</em></h2>
            </motion.div>
            <div className="sp-why__grid">
              {why.map((w, i) => {
                const COLORS = ['#7a9ab8', '#6da98e', '#b8a46a', '#a78a96']
                const color  = COLORS[i % 4]
                return (
                  <motion.div
                    key={w.title}
                    className="sp-why__card"
                    style={{ '--w-color': color }}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="sp-why__card-top">
                      <span className="sp-why__num" style={{ color }}>{String(i + 1).padStart(2, '0')}</span>
                      <div className="sp-why__dot" style={{ background: color }} />
                    </div>
                    <h3 className="sp-why__title">{w.title}</h3>
                    <p className="sp-why__body">{w.body}</p>
                    <div className="sp-why__bar" style={{ background: color }} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. CASE STUDY ── */}
      {caseStudy && (
        <section className="sp-case section--alt section">
          <div className="container sp-case__inner">
            <motion.div className="sp-case__img-wrap" {...up(0)}>
              <img src={caseStudy.image} alt={caseStudy.title} />
            </motion.div>
            <motion.div className="sp-case__body" {...up(0.12)}>
              <span className="ap-tag">{caseStudy.tag}</span>
              <h2 className="ap-h2" style={{ marginTop: 14, marginBottom: 20 }}>{caseStudy.title}</h2>
              <div className="sp-case__results">
                {caseStudy.results.map((r) => (
                  <div key={r.label} className="sp-case__stat">
                    <strong>{r.val}</strong>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
              <Link to={caseStudy.cta?.to || '/portfolio'} className="btn-primary" style={{ marginTop: 28, alignSelf: 'flex-start' }}>
                {caseStudy.cta?.label || 'View Full Case Study →'}
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 7. FAQ ── */}
      {faqs && (
        <section className="sp-faq section">
          <div className="container sp-faq__layout">
            <motion.div className="sp-faq__left" {...up(0)}>
              <span className="ap-tag">FAQ</span>
              <h2 className="ap-h2">Common<br /><em>questions.</em></h2>
              <p>Everything you need to know before getting started.</p>
            </motion.div>
            <motion.div {...up(0.1)}>
              <FAQAccordion items={faqs} />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 8. CTA ── */}
      <CTA />
    </div>
  )
}
