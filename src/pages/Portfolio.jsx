import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import CTA from '../components/CTA/CTA'
import './pages.css'
import './Portfolio.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, type: "spring", stiffness: 200 },
})

const testimonials = [
  {
    quote: "Their strategic approach to SEO transformed our online presence. The team truly understands what startups need to grow.",
    name: "Rahul Sharma",
    title: "Founder, TechStart Solutions",
  },
  {
    quote: "Most honest agency we've worked with. No fake promises, just real work and transparent communication throughout.",
    name: "Priya Mehta",
    title: "CEO, GrowthLabs India",
  },
  {
    quote: "The attention to detail in their web development work is outstanding. Our website has never performed better.",
    name: "Amit Kumar",
    title: "Marketing Director, DigitalEdge",
  },
  {
    quote: "Finally found a marketing partner who cares about our success as much as we do. Highly recommended for any startup!",
    name: "Neha Singh",
    title: "Co-Founder, SmartStart",
  },
  {
    quote: "Their content strategy helped us establish authority in our niche. The team is responsive, creative, and results-driven.",
    name: "Vikram Malhotra",
    title: "Head of Growth, NexGen Tech",
  },
  {
    quote: "Working with them feels like having an in-house marketing team. Always available, always delivering quality work.",
    name: "Anjali Desai",
    title: "Owner, CreativeHub",
  },
]

const cases = [
  {
    tag: 'SEO Campaign',
    client: 'Nexora Tech',
    industry: 'SaaS',
    result: '+180% Organic Traffic',
    metric: '180%',
    metricLabel: 'Traffic Growth',
    desc: 'Technical SEO overhaul and content strategy that tripled search visibility in 4 months.',
    services: ['SEO', 'Content Strategy', 'Link Building'],
    accent: 'cyan',
  },
  {
    tag: 'Website Redesign',
    client: 'Veltrix Solutions',
    industry: 'B2B Services',
    result: '+60% Conversion Rate',
    metric: '60%',
    metricLabel: 'More Conversions',
    desc: 'Full website transformation with UX-first design that dramatically improved lead quality.',
    services: ['Website Design', 'Web Development', 'CRO'],
    accent: 'lavender',
  },
  {
    tag: 'PPC Advertising',
    client: 'Brandify Co.',
    industry: 'E-Commerce',
    result: '4.5x ROAS',
    metric: '4.5x',
    metricLabel: 'Return on Ad Spend',
    desc: 'Managed $20K/month ad budget across Google and Meta, achieving consistent 4.5x return.',
    services: ['Google Ads', 'Meta Ads', 'Analytics'],
    accent: 'gold',
  },
  {
    tag: 'Social Media Marketing',
    client: 'Optica Retail',
    industry: 'Retail',
    result: '+220% Engagement',
    metric: '220%',
    metricLabel: 'Engagement Lift',
    desc: 'Rebranded social presence with editorial content strategy that turned followers into buyers.',
    services: ['SMM', 'Content Creation', 'Influencer Outreach'],
    accent: 'rose',
  },
  {
    tag: 'Digital Marketing',
    client: 'FinEdge Capital',
    industry: 'Finance',
    result: '3.2x Lead Volume',
    metric: '3.2x',
    metricLabel: 'Lead Growth',
    desc: 'Full-funnel digital strategy combining SEO, PPC, and email nurture to scale qualified leads.',
    services: ['SEO', 'PPC', 'Email Marketing'],
    accent: 'cyan',
  },
  {
    tag: 'Web Development',
    client: 'Luminary Studios',
    industry: 'Creative Agency',
    result: '98 PageSpeed Score',
    metric: '98',
    metricLabel: 'PageSpeed Score',
    desc: 'Custom React build with headless CMS delivering sub-second load times and flawless UX.',
    services: ['Web Development', 'Performance', 'CMS Integration'],
    accent: 'lavender',
  },
]

const HeroOrbs = () => (
  <div className="hero-orbs" aria-hidden="true">
    <div className="orb orb--cyan" />
    <div className="orb orb--lavender" />
    <div className="orb orb--gold" />
    <div className="orb orb--rose" />
  </div>
)

const GridOverlay = () => (
  <div className="grid-overlay" aria-hidden="true">
    <div className="grid-lines" />
  </div>
)

const InfiniteMovingCards = ({ items, direction = "right", speed = "slow" }) => {
  const getSpeed = () => {
    switch(speed) {
      case "slow": return "28s";
      case "normal": return "18s";
      case "fast": return "10s";
      default: return "28s";
    }
  }

  return (
    <div className="infinite-moving-cards-container">
      <div
        className="infinite-moving-cards-track"
        style={{
          '--animation-duration': getSpeed(),
          '--animation-direction': direction === "right" ? "normal" : "reverse"
        }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="testimonial-card-moving"
            whileHover={{ y: -10, transition: { duration: 0.25 } }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-name">{item.name}</div>
                <div className="author-title">{item.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="testimonial-card-moving" aria-hidden="true">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-name">{item.name}</div>
                <div className="author-title">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      <section className="portfolio-hero" ref={heroRef}>
        <HeroOrbs />
        <GridOverlay />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            className="hero-content"
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            

            <h1 className="hero-title">
              The Growth Partner Your<br />
              Startup Can Rely On
            </h1>
            
            <p className="hero-subtitle">
              We're a new agency with fresh ideas, honest work, and a burning desire to help startups succeed.
              No fake promises. Just real results and transparent partnerships.
            </p>

            <div className="hero-chips" aria-hidden="true">
              {['SEO', 'PPC', 'Web Dev', 'Social', 'CRO'].map((chip, i) => (
                <motion.span
                  key={chip}
                  className="hero-chip"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="stats-row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { number: "30+", label: "Startups Helped" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "14+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                variants={scaleUp(index * 0.1)}
                whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="portfolio-cases-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp(0)}>
            <span className="section-tag">OUR WORK</span>
            <h2 className="section-title">Results That Speak<br />for Themselves</h2>
            <p className="section-subtitle">
              A curated selection of campaigns and projects that delivered measurable business impact.
            </p>
          </motion.div>

          <div className="pf-grid">
            {cases.map((c, i) => (
              <motion.div
                key={c.client}
                className={`pf-card pf-card--${c.accent}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, transition: { duration: 0.25 } }}
              >
                <div className="pf-card__shine" aria-hidden="true" />

                <div className="pf-card__visual">
                  <div className="pf-card__holo-ring ring-1" aria-hidden="true" />
                  <div className="pf-card__holo-ring ring-2" aria-hidden="true" />

                  <motion.div
                    className="pf-card__metric-big"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: "spring", stiffness: 180 }}
                  >
                    {c.metric}
                  </motion.div>
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
                        transition={{ duration: 0.5, delay: 0.3 + j * 0.04 }}
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
                      <motion.span
                        key={s}
                        className="pf-card__service"
                        whileHover={{ scale: 1.07, backgroundColor: "#6366f1", color: "#fff" }}
                        transition={{ duration: 0.2 }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                  <motion.span
                    className="pf-card__result"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {c.result} →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp(0)}>
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-title">Words of praise from others<br />about our presence</h2>
          </motion.div>
        </div>

        <div className="infinite-moving-cards-wrapper">
          <div className="cards-fade-left" aria-hidden="true" />
          <div className="cards-fade-right" aria-hidden="true" />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      <CTA />
    </>
  )
}