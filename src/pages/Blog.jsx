import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import '../styles/layout.css'
import './Blog.css'

const articles = [
  {
    id: 1,
    tag: 'SEO',
    title: '10 Technical SEO Fixes That Will Double Your Organic Traffic',
    excerpt: 'Most websites are leaving rankings on the table due to fixable technical issues. Here are the ten highest-impact fixes we apply to every new client site.',
    author: 'Avinash Gupta',
    date: 'Jan 14, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?w=1200&h=600&fit=crop',
  },
  {
    id: 2,
    tag: 'PPC',
    title: 'How We Achieved 4.5x ROAS on a ₹15L/Month Google Ads Budget',
    excerpt: 'A behind-the-scenes breakdown of the campaign structure, bidding strategy, and creative testing that drove exceptional returns for an e-commerce client.',
    author: 'Vikram Patel',
    date: 'Jan 08, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    tag: 'Web Design',
    title: 'The 5 UX Principles Behind Every High-Converting Landing Page',
    excerpt: "Conversion rate optimisation isn't magic — it's psychology. We break down the five principles we apply to every landing page we design.",
    author: 'Priya Sharma',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    tag: 'Social Media',
    title: 'Why Your Instagram Reach Dropped and How to Fix It in 2025',
    excerpt: "The algorithm changed again. Here's what's actually working for our clients right now — and what you should stop doing immediately.",
    author: 'Sneha Joshi',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    tag: 'Strategy',
    title: 'Full-Funnel Marketing: The Framework We Use for Every Client',
    excerpt: 'Siloed marketing channels waste budget. This is the integrated framework we use to connect awareness, consideration, and conversion into one cohesive engine.',
    author: 'Avinash Gupta',
    date: 'Dec 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    tag: 'Web Development',
    title: "Why We Moved All Client Sites to Next.js (And You Should Too)",
    excerpt: "Performance, SEO, and developer experience — Next.js wins on all three. Here's our migration process and the results we've seen across 20+ projects.",
    author: 'Rahul Gupta',
    date: 'Dec 05, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
  },
  {
    id: 7,
    tag: 'SEO',
    title: 'Local SEO in 2025: The Complete Guide for Service Businesses',
    excerpt: 'Google Business Profile, local citations, review strategy, and geo-targeted content — everything a local business needs to dominate their area.',
    author: 'Neha Singh',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=500&fit=crop',
  },
  {
    id: 8,
    tag: 'PPC',
    title: 'Meta Ads vs Google Ads: Which Should You Prioritise in 2025?',
    excerpt: 'The answer depends on your funnel stage, audience, and product type. We break down the decision framework we use with every new client.',
    author: 'Vikram Patel',
    date: 'Nov 18, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=500&fit=crop',
  },
  {
    id: 9,
    tag: 'Branding',
    title: 'Brand Strategy Before Marketing: Why Most Campaigns Fail',
    excerpt: "Pouring budget into ads without a clear brand position is like filling a leaky bucket. Here's how to fix the foundation before scaling spend.",
    author: 'Priya Sharma',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
  },
]

const blogFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '✦',
    value: '9+',
    label: 'Articles Published',
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
    value: '5 min',
    label: 'Avg. Read Time',
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
    value: '6+',
    label: 'Topics Covered',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Blog() {
  return (
    <>
      <section className="ph ph--blog">
        <div className="ph__bg-glow" />
        <div className="ph__noise" />
        <svg className="ph__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,130 C60,118 140,96 260,82 C360,70 420,104 540,90 C660,76 760,42 900,28 C1020,16 1140,52 1280,44 C1360,38 1420,46 1440,42 L1440,320 Z" fill="rgba(255,255,255,0.025)" />
          <path d="M0,130 C60,118 140,96 260,82 C360,70 420,104 540,90 C660,76 760,42 900,28 C1020,16 1140,52 1280,44 C1360,38 1420,46 1440,42" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M0,320 L0,190 C80,172 200,144 340,126 C460,110 525,152 665,136 C785,122 885,84 1025,68 C1145,54 1265,90 1440,78 L1440,320 Z" fill="rgba(255,255,255,0.04)" />
          <path d="M0,190 C80,172 200,144 340,126 C460,110 525,152 665,136 C785,122 885,84 1025,68 C1145,54 1265,90 1440,78" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
          <path d="M0,320 L0,240 C100,224 220,196 360,180 C480,166 558,206 698,192 C818,180 940,146 1080,132 C1200,120 1325,152 1440,144 L1440,320 Z" fill="rgba(255,255,255,0.055)" />
          <path d="M0,240 C100,224 220,196 360,180 C480,166 558,206 698,192 C818,180 940,146 1080,132 C1200,120 1325,152 1440,144" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
          <path d="M0,320 L0,276 C100,264 220,242 360,228 C480,216 558,248 698,236 C818,226 960,196 1100,184 C1220,174 1340,196 1440,188 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
          <path d="M0,276 C100,264 220,242 360,228 C480,216 558,248 698,236 C818,226 960,196 1100,184 C1220,174 1340,196 1440,188" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
        </svg>
        <div className="container ph__inner">
          <div className="ph__content">
            <motion.div className="hero__trust-badge" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <span className="hero__badge-pulse" />
              <span className="hero__trust-badge-text">Our Blog</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Insights, Strategy<br />
              <span className="hero__title-accent">& Agency Thinking</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              Practical guides, case study breakdowns, and marketing strategy from the Trendox team.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#articles" className="hero__btn-primary">Read Articles <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Work With Us</Link>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['SEO & PPC', 'Web & Design', 'Strategy & Growth'].map(item => (
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
                    <linearGradient id="bl-bg" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0a1628"/><stop offset="100%" stopColor="#040e1c"/>
                    </linearGradient>
                    <filter id="bl-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00000050"/></filter>
                  </defs>
                  <rect width="420" height="320" rx="16" fill="url(#bl-bg)"/>
                  {/* grid lines */}
                  {[80,130,180,230].map(y => <line key={y} x1="24" y1={y} x2="396" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>)}
                  {/* article topic rows */}
                  {[
                    { label: 'SEO',           count: 2, color: '#4f8bff', w: 220 },
                    { label: 'PPC',           count: 2, color: '#fb923c', w: 180 },
                    { label: 'Web Design',    count: 2, color: '#34d399', w: 200 },
                    { label: 'Social Media',  count: 1, color: '#f472b6', w: 140 },
                    { label: 'Strategy',      count: 1, color: '#a78bfa', w: 160 },
                    { label: 'Branding',      count: 1, color: '#38bdf8', w: 120 },
                  ].map(({ label, count, color, w }, i) => (
                    <g key={label} transform={`translate(24, ${56 + i * 36})`}>
                      <text x="0" y="12" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">{label}</text>
                      <rect x="90" y="3" width={w} height="10" rx="5" fill={color} opacity="0.25"/>
                      <rect x="90" y="3" width={w * 0.7} height="10" rx="5" fill={color} opacity="0.7"/>
                      <text x={90 + w + 8} y="12" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="Inter,sans-serif">{count} article{count > 1 ? 's' : ''}</text>
                    </g>
                  ))}
                  {/* stat badge top-left */}
                  <g filter="url(#bl-sh)" transform="translate(18,16)">
                    <rect width="120" height="46" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <text x="14" y="22" fontSize="7" fill="rgba(99,153,255,0.8)" fontFamily="Inter,sans-serif">Total Articles</text>
                    <text x="14" y="40" fontSize="18" fontWeight="900" fill="#93c5fd" fontFamily="Inter,sans-serif">9+</text>
                  </g>
                  {/* stat badge top-right */}
                  <g filter="url(#bl-sh)" transform="translate(282,16)">
                    <rect width="120" height="46" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <text x="14" y="22" fontSize="7" fill="rgba(52,211,153,0.8)" fontFamily="Inter,sans-serif">Topics</text>
                    <text x="14" y="40" fontSize="18" fontWeight="900" fill="#6ee7b7" fontFamily="Inter,sans-serif">6+</text>
                  </g>
                  {/* bottom tag strip */}
                  <g transform="translate(18,278)">
                    <rect width="384" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                    {[['SEO','#4f8bff'],['PPC','#fb923c'],['Design','#34d399'],['Social','#f472b6'],['Strategy','#a78bfa'],['Branding','#38bdf8']].map(([lbl,clr],i)=>(
                      <g key={lbl}>
                        <circle cx={22+i*64} cy={15} r={4} fill={clr} opacity="0.8"/>
                        <text x={30+i*64} y={19} fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="Inter,sans-serif">{lbl}</text>
                      </g>
                    ))}
                  </g>
                </svg>
              </motion.div>
              {blogFloatCards.map((card) => (
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

      <section className="section" id="articles">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                className="blog-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/blog/${article.id}`} className="blog-card__link">
                  <div className="blog-card__image">
                    <img src={article.image} alt={article.title} />
                    <div className="blog-card__overlay">
                      <span className="blog-card__read-btn">Read Article →</span>
                    </div>
                  </div>
                  <div className="blog-card__body">
                    <span className="blog-card__tag">{article.tag}</span>
                    <h2 className="blog-card__title">{article.title}</h2>
                    <p className="blog-card__excerpt">{article.excerpt}</p>
                    <div className="blog-card__footer">
                      <div className="blog-card__author">
                        <div className="blog-card__avatar">{article.author[0]}</div>
                        <span>{article.author}</span>
                      </div>
                      <div className="blog-card__meta">
                        <span>{article.date}</span>
                        <span className="blog-card__dot">·</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
