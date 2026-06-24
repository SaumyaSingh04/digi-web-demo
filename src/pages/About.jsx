import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import Process from '../components/Process/Process'
import { useCounter } from '../hooks'
import './About.css'

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

const STATS = [
  { val: '150+', label: 'Campaigns Launched', sub: 'Across 12 industries', icon: '↗', color: '#7a9ab8' },
  { val: '93%',  label: 'Client Retention',   sub: 'Year over year',       icon: '★', color: '#b8a46a' },
  { val: '4.2×', label: 'Average ROAS',        sub: 'Paid media portfolio', icon: '◈', color: '#6da98e' },
  { val: '60+',  label: 'Brands Scaled',       sub: 'Seed to Series B',    icon: '✦', color: '#a78a96' },
]

const LEADERS = [
  {
    name: 'Avinash Gupta',
    role: 'Founder',
    bio: 'Visionary behind Trendox. 10+ years transforming brands through performance-driven strategies.',
    color: '#7a9ab8',
    glow: 'rgba(122,154,184,0.12)',
    skinTone: '#f4c49a',
    hairColor: '#3a2010',
    shirtColor: '#2a4a6a',
    tag: 'Leadership',
  },
  {
    name: 'Akash Gupta',
    role: 'Co-Founder',
    bio: 'Drives business strategy and partnerships. Passionate about scaling brands with data-driven decisions.',
    color: '#6da98e',
    glow: 'rgba(109,169,142,0.12)',
    skinTone: '#c8986a',
    hairColor: '#0a0604',
    shirtColor: '#1a4a34',
    tag: 'Leadership',
  },
  {
    name: 'Amar',
    role: 'Manager',
    bio: 'Oversees operations and client delivery. Ensures every project runs on time and exceeds expectations.',
    color: '#b8a46a',
    glow: 'rgba(184,164,106,0.12)',
    skinTone: '#d4a878',
    hairColor: '#2a1808',
    shirtColor: '#4a3a0a',
    tag: 'Operations',
  },
  {
    name: 'Kritika Singh',
    role: 'Full Stack Developer',
    bio: 'Builds robust web solutions from frontend to backend. Specialises in modern React and Node.js ecosystems.',
    color: '#c47aa8',
    glow: 'rgba(196,122,168,0.12)',
    skinTone: '#f0c8a0',
    hairColor: '#0e0608',
    shirtColor: '#5a1a40',
    tag: 'Technology',
  },
]

function PersonSVG({ skinTone, hairColor, shirtColor, color }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="ldr-card__avatar-svg">
      {/* Background circle */}
      <circle cx="60" cy="60" r="58" fill={`${color}14`} />
      {/* Hair */}
      <ellipse cx="60" cy="38" rx="24" ry="26" fill={hairColor} />
      {/* Head */}
      <ellipse cx="60" cy="46" rx="20" ry="22" fill={skinTone} />
      {/* Ear left */}
      <ellipse cx="40" cy="47" rx="4" ry="5" fill={skinTone} />
      {/* Ear right */}
      <ellipse cx="80" cy="47" rx="4" ry="5" fill={skinTone} />
      {/* Neck */}
      <rect x="54" y="64" width="12" height="12" rx="4" fill={skinTone} />
      {/* Shirt / body */}
      <path d="M28,130 C28,100 42,84 54,78 L60,82 L66,78 C78,84 92,100 92,130 Z" fill={shirtColor} />
      {/* Collar */}
      <path d="M54,78 L60,88 L66,78" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
      {/* Eyes */}
      <ellipse cx="53" cy="44" rx="3" ry="3.5" fill="#1a1a1a" />
      <ellipse cx="67" cy="44" rx="3" ry="3.5" fill="#1a1a1a" />
      <circle cx="54" cy="43" r="1" fill="rgba(255,255,255,0.7)" />
      <circle cx="68" cy="43" r="1" fill="rgba(255,255,255,0.7)" />
      {/* Smile */}
      <path d="M53,54 Q60,60 67,54" stroke="#c0806a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="60" cy="50" rx="2" ry="2.5" fill={`${skinTone}99`} />
    </svg>
  )
}

const WHY = [
  {
    title: "Save Money",
    body: "We create solutions that reduce unnecessary costs and improve ROI."
  },
  {
    title: "Save Time",
    body: "Faster execution means quicker results for your business."
  },
  {
    title: "Solutions",
    body: "Custom digital strategies tailored to your growth goals."
  }
]

function AboutVisual() {
  const visualRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 80, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = visualRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
   <motion.div
      className="ap-hero__visual"
      ref={visualRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div className="ap-3d-wrap" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <div className="ap-hero__orb" />

        {/* Team / office scene card */}
        <div className="ap-card">
          {/* card header */}
          <div className="ap-card__header">
            <div className="ap-card__header-left">
              <span className="ap-card__dot" />
              <span className="ap-card__title">Trendox Team</span>
            </div>
            <span className="ap-card__badge">Est. 2019</span>
          </div>

          {/* SVG — same visual language as "Who We Are" section but dark-themed */}
          <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', display: 'block', borderRadius: 10 }}>
            <defs>
              <linearGradient id="hero-desk-top" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a4a6a" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#1a3050" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="hero-mon-face" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3a5878"/>
                <stop offset="100%" stopColor="#4a6e90"/>
              </linearGradient>
            </defs>

            {/* --- isometric desk --- */}
            <polygon points="60,168 220,210 380,168 220,126" fill="url(#hero-desk-top)" />
            <polygon points="60,168 60,196 220,238 220,210" fill="rgba(30,60,90,0.35)" />
            <polygon points="380,168 380,196 220,238 220,210" fill="rgba(50,80,110,0.30)" />

            {/* --- monitor --- */}
            <polygon points="196,80 196,158 228,168 228,90" fill="rgba(40,70,110,0.55)" />
            <polygon points="228,90 228,168 260,158 260,80" fill="rgba(55,85,125,0.55)" />
            <polygon points="196,80 228,90 260,80 228,70" fill="rgba(80,120,170,0.60)" />
            {/* screen */}
            <rect x="202" y="88" width="50" height="62" rx="2" fill="rgba(8,16,32,0.92)" />
            <rect x="202" y="88" width="50" height="10" rx="2" fill="rgba(6,12,24,0.95)" />
            {/* screen content */}
            <rect x="207" y="104" width="28" height="4" rx="1" fill="rgba(80,140,200,0.75)" />
            <rect x="207" y="112" width="38" height="3" rx="1" fill="rgba(60,110,170,0.55)" />
            <rect x="207" y="119" width="30" height="3" rx="1" fill="rgba(60,110,170,0.45)" />
            <rect x="207" y="128" width="22" height="8" rx="3" fill="rgba(70,130,190,0.65)" />
            {/* monitor stand */}
            <rect x="221" y="168" width="14" height="10" rx="1" fill="rgba(40,70,100,0.40)" />
            <rect x="214" y="177" width="28" height="4" rx="2" fill="rgba(40,70,100,0.30)" />

            {/* --- keyboard --- */}
            <polygon points="188,172 188,182 248,192 248,182" fill="rgba(45,75,110,0.38)" />
            <polygon points="248,182 248,192 270,184 270,174" fill="rgba(55,85,120,0.32)" />
            <polygon points="188,172 248,182 270,174 210,164" fill="rgba(70,105,145,0.34)" />

            {/* --- book stack left (colorful spines) --- */}
            {[
              { color: 'rgba(180,80,80,0.55)',  top: 'rgba(210,110,110,0.50)', side: 'rgba(140,50,50,0.40)' },
              { color: 'rgba(80,140,180,0.50)', top: 'rgba(110,170,210,0.45)', side: 'rgba(50,100,140,0.38)' },
              { color: 'rgba(80,160,100,0.45)', top: 'rgba(110,190,130,0.42)', side: 'rgba(50,120,70,0.35)'  },
            ].map((c, i) => (
              <g key={i}>
                <polygon points={`84,${174-i*10} 84,${184-i*10} 148,${198-i*10} 148,${188-i*10}`} fill={c.color} />
                <polygon points={`148,${188-i*10} 148,${198-i*10} 162,${192-i*10} 162,${182-i*10}`} fill={c.side} />
                <polygon points={`84,${174-i*10} 148,${188-i*10} 162,${182-i*10} 98,${168-i*10}`} fill={c.top} />
              </g>
            ))}

            {/* --- team figures --- */}
            {[
              { cx: 100, cy: 120, c: 'rgba(100,160,210,0.55)' },
              { cx: 156, cy: 104, c: 'rgba(160,100,180,0.50)' },
              { cx: 290, cy: 104, c: 'rgba(100,180,130,0.50)' },
              { cx: 346, cy: 120, c: 'rgba(210,140,80,0.50)'  },
            ].map(({ cx, cy, c }, i) => (
              <g key={i}>
                <circle cx={cx} cy={cy - 14} r="11" fill={c} />
                <path d={`M${cx-10},${cy} Q${cx},${cy-4} ${cx+10},${cy} L${cx+14},${cy+38} L${cx-14},${cy+38} Z`} fill={c} opacity="0.7" />
              </g>
            ))}

            {/* --- coffee cup --- */}
            <ellipse cx="338" cy="164" rx="10" ry="4" fill="rgba(160,100,60,0.35)" />
            <rect x="328" y="148" width="20" height="16" rx="3" fill="rgba(140,85,50,0.45)" />
            <path d="M348,152 Q356,156 348,160" stroke="rgba(180,120,80,0.50)" strokeWidth="2" fill="none" />
            <path d="M333,146 Q331,140 333,134" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M338,145 Q336,138 338,132" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* --- plant pot --- */}
            <polygon points="356,142 344,142 348,168 360,168" fill="rgba(100,70,40,0.45)" />
            <ellipse cx="352" cy="142" rx="8" ry="4" fill="rgba(120,85,50,0.40)" />
            <path d="M352,136 Q344,124 336,120 Q344,128 352,130" fill="rgba(60,110,65,0.55)" />
            <path d="M352,134 Q360,122 370,118 Q362,126 352,130" fill="rgba(50,100,55,0.50)" />
            <path d="M352,132 Q350,118 352,110 Q354,118 352,130" fill="rgba(70,125,75,0.48)" />
          </svg>

          {/* bottom metric strip */}
          <div className="ap-card__footer">
            {[{ val: '60+', lbl: 'Brands' }, { val: '15+', lbl: 'Specialists' }, { val: '5 yrs', lbl: 'Experience' }].map(m => (
              <div key={m.lbl} className="ap-card__metric">
                <span className="ap-card__metric-val">{m.val}</span>
                <span className="ap-card__metric-lbl">{m.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badges */}
        <motion.div className="ap-hero__stat-badge ap-badge--tl"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className="ap-hero__stat-icon">★</span>
          <div>
            <div className="ap-hero__stat-value">93%</div>
            <div className="ap-hero__stat-label">Client Retention</div>
          </div>
        </motion.div>

        <motion.div className="ap-hero__stat-badge ap-badge--br"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <span className="ap-hero__stat-icon">↑</span>
          <div>
            <div className="ap-hero__stat-value">4.2×</div>
            <div className="ap-hero__stat-label">Avg. ROAS</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>  
  )
}

export default function About() {
  return (
    <div className="ap">

      {/* 1 · HERO */}
      <section className="ap-hero">
        <div className="ap-hero__bg" />
        <div className="ap-hero__bloom" />
        <div className="ap-hero__noise" />

        {/* Mountain waves — same as Home hero */}
        <svg className="ap-hero__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,130 C60,118 140,96 260,82 C360,70 420,104 540,90 C660,76 760,42 900,28 C1020,16 1140,52 1280,44 C1360,38 1420,46 1440,42 L1440,320 Z" fill="rgba(255,255,255,0.025)" />
          <path d="M0,130 C60,118 140,96 260,82 C360,70 420,104 540,90 C660,76 760,42 900,28 C1020,16 1140,52 1280,44 C1360,38 1420,46 1440,42" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M0,320 L0,190 C80,172 200,144 340,126 C460,110 525,152 665,136 C785,122 885,84 1025,68 C1145,54 1265,90 1440,78 L1440,320 Z" fill="rgba(255,255,255,0.04)" />
          <path d="M0,190 C80,172 200,144 340,126 C460,110 525,152 665,136 C785,122 885,84 1025,68 C1145,54 1265,90 1440,78" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
          <path d="M0,320 L0,240 C100,224 220,196 360,180 C480,166 558,206 698,192 C818,180 940,146 1080,132 C1200,120 1325,152 1440,144 L1440,320 Z" fill="rgba(255,255,255,0.055)" />
          <path d="M0,240 C100,224 220,196 360,180 C480,166 558,206 698,192 C818,180 940,146 1080,132 C1200,120 1325,152 1440,144" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
          <path d="M0,320 L0,276 C100,264 220,242 360,228 C480,216 558,248 698,236 C818,226 960,196 1100,184 C1220,174 1340,196 1440,188 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
          <path d="M0,276 C100,264 220,242 360,228 C480,216 558,248 698,236 C818,226 960,196 1100,184 C1220,174 1340,196 1440,188" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
        </svg>

        <div className="container ap-hero__inner">

          {/* LEFT */}
          <div className="ap-hero__content">
            <motion.div className="ap-hero__pill" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0,ease:[0.22,1,0.36,1]}}>
              <span className="ap-hero__pill-dot" />
              <span>Growth-Focused Digital Agency</span>
            </motion.div>

            <motion.h1 className="ap-hero__h1" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.1,ease:[0.22,1,0.36,1]}}>
              We don't run ads.<br />
              <span className="ap-hero__title-em">We build growth</span><br />
              engines.
            </motion.h1>

            <motion.p className="ap-hero__subtitle" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.2,ease:[0.22,1,0.36,1]}}>
              Trendox is a performance-led digital agency. We work with ambitious brands — from seed-stage startups to established companies — and treat your revenue as our own.
            </motion.p>

            <motion.div className="ap-hero__actions" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.3,ease:[0.22,1,0.36,1]}}>
              <Link to="/contact" className="ap-hero__btn-primary">
                Start a Project <span className="ap-hero__btn-arrow">→</span>
              </Link>
              <Link to="/services" className="ap-hero__btn-outline">Our Services</Link>
            </motion.div>

            <motion.div className="ap-hero__trust" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.42,ease:[0.22,1,0.36,1]}}>
              {['Est. 2019', '15 Specialists', '60+ Brands Scaled'].map(t => (
                <div key={t} className="ap-hero__trust-item">
                  <span className="ap-hero__trust-check">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — interactive 3D visual */}
          <AboutVisual />
        </div>

        {/* Bottom wave */}
        <div className="ap-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* 2 · STATS */}
      <section className="ap-stats">
        <div className="container ap-stats__grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="ap-stats__cell"
              style={{ '--s-color': s.color }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="ap-stats__icon" style={{ color: s.color, background: `${s.color}18` }}>{s.icon}</div>
              <div className="ap-stats__num" style={{ color: s.color }}><Counter target={s.val} /></div>
              <div className="ap-stats__label">{s.label}</div>
              <div className="ap-stats__sub">{s.sub}</div>
              <div className="ap-stats__cell-bar" style={{ background: s.color }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3 · WHO WE ARE */}
      <section className="ap-who">
        <div className="container ap-who__layout">
          <motion.div className="ap-who__img-wrap" {...up(0)}>
  <img
    src="/Teamup.png"
    alt="About Us"
    className="ap-who__img"
  />
</motion.div>
          <motion.div className="ap-who__body" {...up(0.12)}>
            <span className="ap-tag">Who We Are</span>
            <h2 className="ap-h2">A team that treats<br /><em>your revenue</em> as ours.</h2>
            <p>Trendox is a performance-led growth agency. We work with ambitious brands — from seed-stage startups to established companies — who are done settling for vanity metrics.</p>
            <p>We stay intentionally small. Smaller means sharper. Every client gets senior attention, not junior handoffs.</p>
            <div className="ap-who__sig">
              <div className="ap-sig-text">Avinash</div>
              <div>
                <strong>Avinash Gupta</strong>
                <span>Founder &amp; CEO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 · OUR EXPERTISE */}
      <section className="ap-expertise">
        <div className="container">
          <motion.div className="ap-exp-section-head" {...up(0)}>
            <span className="ap-tag">Our Expertise</span>
            <h2 className="ap-expertise__title">What We Do Best</h2>
          </motion.div>

          <div className="ap-expertise__inner">
            {/* LEFT — bars */}
            <motion.div className="ap-exp-card" {...up(0.08)}>
              <div className="ap-exp-card__label">Core Strengths</div>
              <div className="ap-expertise__bars">
                {[
                  { label: 'Low Cost',  pct: 30, color: '#a78a96' },
                  { label: 'Support',  pct: 60, color: '#7a9ab8' },
                  { label: 'Value',    pct: 90, color: '#6da98e' },
                ].map(({ label, pct, color }, i) => (
                  <div key={label} className="ap-bar">
                    <div className="ap-bar__head">
                      <span className="ap-bar__label">{label}</span>
                      <span className="ap-bar__pct" style={{ color }}><Counter target={`${pct}%`} /></span>
                    </div>
                    <div className="ap-bar__track">
                      <motion.div
                        className="ap-bar__fill"
                        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.3, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="ap-exp-tags">
                {['SEO', 'Social Media', 'Web Design', 'PPC', 'Branding'].map(t => (
                  <span key={t} className="ap-exp-tag">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — stat cards */}
            <div className="ap-expertise__right">
              {[
                { val: '70%',  label: 'Digital Global Audience Reached', icon: '🌐', color: '#7a9ab8', glow: 'rgba(122,154,184,0.10)' },
                { val: '90%',  label: 'Clients Satisfied',               icon: '★',  color: '#b8a46a', glow: 'rgba(184,164,106,0.10)'  },
                { val: '150+', label: 'Projects Completed',              icon: '✦',  color: '#6da98e', glow: 'rgba(109,169,142,0.10)'  },
                { val: '30+',  label: 'Team Members',                    icon: '◆',  color: '#a78a96', glow: 'rgba(167,138,150,0.10)' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="ap-exp-stat-card"
                  style={{ '--card-glow': s.glow, '--card-color': s.color }}
                  initial={{ opacity: 0, y: 28, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className="ap-exp-stat-card__icon-wrap" style={{ background: s.glow, color: s.color }}>
                    {s.icon}
                  </div>
                  <div className="ap-expertise__stat-val" style={{ color: s.color }}>
                    <Counter target={s.val} />
                  </div>
                  <div className="ap-expertise__stat-label">{s.label}</div>
                  <div className="ap-exp-stat-card__bar" style={{ background: s.color }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 · MEET OUR LEADERSHIP */}
      <section className="ap-ldr">
        <div className="container">
          <motion.div className="ap-ldr__head" {...up(0)}>
            <span className="ap-tag">Our Team</span>
            <h2 className="ap-h2">Meet Our <em>Leadership</em></h2>
            <p className="ap-ldr__sub">The minds behind every strategy, campaign, and result .</p>
          </motion.div>

          <div className="ap-ldr__grid">
            {LEADERS.map((ldr, i) => (
              <motion.div
                key={ldr.name}
                className="ldr-card"
                style={{ '--ldr-color': ldr.color, '--ldr-glow': ldr.glow }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="ldr-card__avatar">
                  <PersonSVG
                    skinTone={ldr.skinTone}
                    hairColor={ldr.hairColor}
                    shirtColor={ldr.shirtColor}
                    color={ldr.color}
                  />
                  <div className="ldr-card__avatar-ring" />
                </div>
                <div className="ldr-card__tag" style={{ color: ldr.color, background: ldr.glow }}>{ldr.tag}</div>
                <h3 className="ldr-card__name">{ldr.name}</h3>
                <div className="ldr-card__role" style={{ color: ldr.color }}>{ldr.role}</div>
                <p className="ldr-card__bio">{ldr.bio}</p>
                <div className="ldr-card__bar" style={{ background: ldr.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · PROCESS */}
      <Process />

      {/* 5 · WHY CHOOSE US */}
      <section className="why-section">
         <div className="why-heading">
      <span className="why-tag">Why Choose Us</span>
      <h2 className="why-title">We don't just deliver — <em>we transform.</em></h2>
      <p className="why-subtitle">Here's why brands trust us with their growth</p>
    </div>
        <div className="container why-section__inner">
          <div className="why-left">
            <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 500, display: 'block' }}>
              <defs>
                <linearGradient id="why-bg" x1="0" y1="0" x2="480" y2="420" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0e1a2e"/><stop offset="100%" stopColor="#081020"/>
                </linearGradient>
                <linearGradient id="why-card-a" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a3a5a"/><stop offset="100%" stopColor="#0e2240"/>
                </linearGradient>
                <linearGradient id="why-card-b" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a4a34"/><stop offset="100%" stopColor="#0e2e1e"/>
                </linearGradient>
                <linearGradient id="why-card-c" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3a1a4a"/><stop offset="100%" stopColor="#220e30"/>
                </linearGradient>
                <filter id="why-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000055"/></filter>
              </defs>

              {/* bg */}
              <rect width="480" height="420" rx="24" fill="url(#why-bg)"/>

              {/* center circle */}
              <circle cx="240" cy="200" r="80" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
              <circle cx="240" cy="200" r="52" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
              <text x="240" y="194" fontSize="13" fontWeight="900" fill="rgba(255,255,255,0.9)" fontFamily="Inter,sans-serif" textAnchor="middle">WHY</text>
              <text x="240" y="212" fontSize="13" fontWeight="900" fill="rgba(255,255,255,0.9)" fontFamily="Inter,sans-serif" textAnchor="middle">TRENDOX</text>

              {/* connector lines */}
              <line x1="240" y1="120" x2="240" y2="62" stroke="rgba(80,140,200,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="240" y1="280" x2="240" y2="338" stroke="rgba(80,200,130,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="164" y1="168" x2="100" y2="130" stroke="rgba(180,100,220,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="316" y1="168" x2="380" y2="130" stroke="rgba(220,140,60,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="164" y1="232" x2="100" y2="270" stroke="rgba(220,80,100,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="316" y1="232" x2="380" y2="270" stroke="rgba(60,180,200,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>

              {/* card: Save Money — top */}
              <g filter="url(#why-sh)" transform="translate(158,14)">
                <polygon points="164,6 170,12 170,78 164,72" fill="#071628"/>
                <polygon points="6,72 12,78 170,78 164,72" fill="#040e1c"/>
                <rect width="164" height="72" rx="12" fill="url(#why-card-a)"/>
                <rect x="0" y="0" width="164" height="1" rx="1" fill="rgba(80,140,200,0.40)"/>
                <text x="16" y="28" fontSize="9" fill="rgba(80,160,220,0.85)" fontFamily="Inter,sans-serif" fontWeight="700">SAVE MONEY</text>
                <text x="16" y="50" fontSize="20" fontWeight="900" fill="#7ab8e0" fontFamily="Inter,sans-serif">↓ 40%</text>
                <text x="16" y="64" fontSize="7" fill="rgba(120,180,220,0.55)" fontFamily="Inter,sans-serif">Reduced operational costs</text>
              </g>

              {/* card: Save Time — bottom */}
              <g filter="url(#why-sh)" transform="translate(158,328)">
                <polygon points="164,6 170,12 170,78 164,72" fill="#071a0e"/>
                <polygon points="6,72 12,78 170,78 164,72" fill="#041208"/>
                <rect width="164" height="72" rx="12" fill="url(#why-card-b)"/>
                <rect x="0" y="0" width="164" height="1" rx="1" fill="rgba(60,180,110,0.40)"/>
                <text x="16" y="28" fontSize="9" fill="rgba(70,200,120,0.85)" fontFamily="Inter,sans-serif" fontWeight="700">SAVE TIME</text>
                <text x="16" y="50" fontSize="20" fontWeight="900" fill="#6abf90" fontFamily="Inter,sans-serif">10× Faster</text>
                <text x="16" y="64" fontSize="7" fill="rgba(100,200,140,0.55)" fontFamily="Inter,sans-serif">Automated workflows</text>
              </g>

              {/* card: ROI — top left */}
              <g filter="url(#why-sh)" transform="translate(14,96)">
                <polygon points="134,6 140,12 140,78 134,72" fill="#160828"/>
                <polygon points="6,72 12,78 140,78 134,72" fill="#0e0420"/>
                <rect width="134" height="72" rx="12" fill="url(#why-card-c)"/>
                <rect x="0" y="0" width="134" height="1" rx="1" fill="rgba(160,80,220,0.40)"/>
                <text x="14" y="28" fontSize="9" fill="rgba(180,100,240,0.85)" fontFamily="Inter,sans-serif" fontWeight="700">SOLUTIONS</text>
                <text x="14" y="50" fontSize="20" fontWeight="900" fill="#b07ad0" fontFamily="Inter,sans-serif">Custom</text>
                <text x="14" y="64" fontSize="7" fill="rgba(180,120,240,0.55)" fontFamily="Inter,sans-serif">Tailored strategies</text>
              </g>

              {/* card: ROAS — top right */}
              <g filter="url(#why-sh)" transform="translate(332,96)">
                <polygon points="134,6 140,12 140,78 134,72" fill="#1e0e04"/>
                <polygon points="6,72 12,78 140,78 134,72" fill="#140800"/>
                <rect width="134" height="72" rx="12">
                  <animate attributeName="fill" values="#2a1a06;#2a1a06" dur="0s" fill="freeze"/>
                </rect>
                <rect width="134" height="72" rx="12" fill="#221408"/>
                <rect x="0" y="0" width="134" height="1" rx="1" fill="rgba(220,140,60,0.40)"/>
                <text x="14" y="28" fontSize="9" fill="rgba(240,160,70,0.85)" fontFamily="Inter,sans-serif" fontWeight="700">AVG ROAS</text>
                <text x="14" y="50" fontSize="20" fontWeight="900" fill="#d4a060" fontFamily="Inter,sans-serif">4.8×</text>
                <text x="14" y="64" fontSize="7" fill="rgba(220,160,80,0.55)" fontFamily="Inter,sans-serif">Return on ad spend</text>
              </g>

              {/* card: Retention — bottom left */}
              <g filter="url(#why-sh)" transform="translate(14,246)">
                <polygon points="134,6 140,12 140,78 134,72" fill="#1a0808"/>
                <polygon points="6,72 12,78 140,78 134,72" fill="#100404"/>
                <rect width="134" height="72" rx="12" fill="#1c0c0e"/>
                <rect x="0" y="0" width="134" height="1" rx="1" fill="rgba(220,80,100,0.40)"/>
                <text x="14" y="28" fontSize="9" fill="rgba(240,90,110,0.85)" fontFamily="Inter,sans-serif" fontWeight="700">RETENTION</text>
                <text x="14" y="50" fontSize="20" fontWeight="900" fill="#c07080" fontFamily="Inter,sans-serif">93%</text>
                <text x="14" y="64" fontSize="7" fill="rgba(220,100,120,0.55)" fontFamily="Inter,sans-serif">Client retention rate</text>
              </g>

              {/* card: Growth — bottom right */}
              <g filter="url(#why-sh)" transform="translate(332,246)">
                <polygon points="134,6 140,12 140,78 134,72" fill="#041618"/>
                <polygon points="6,72 12,78 140,78 134,72" fill="#020e10"/>
                <rect width="134" height="72" rx="12" fill="#081c20"/>
                <rect x="0" y="0" width="134" height="1" rx="1" fill="rgba(60,180,200,0.40)"/>
                <text x="14" y="28" fontSize="9" fill="rgba(70,200,220,0.85)" fontFamily="Inter,sans-serif" fontWeight="700">GROWTH</text>
                <text x="14" y="50" fontSize="20" fontWeight="900" fill="#60b8c8" fontFamily="Inter,sans-serif">+184%</text>
                <text x="14" y="64" fontSize="7" fill="rgba(80,200,220,0.55)" fontFamily="Inter,sans-serif">Organic traffic growth</text>
              </g>
            </svg>
          </div>
          <div className="why-right">
            {WHY.map((item, index) => (
              <motion.div
                key={item.title}
                className="why-step"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="why-step__dot" />
                <div className="why-step__content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}