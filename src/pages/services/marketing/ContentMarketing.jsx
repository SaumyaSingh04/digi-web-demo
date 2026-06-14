import ServicePage from '../../../components/ServicePage/ServicePage'

const ContentVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="cm-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a0e04" />
        <stop offset="100%" stopColor="#0e0802" />
      </linearGradient>
      <linearGradient id="cm-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e1608" />
        <stop offset="100%" stopColor="#1e0e04" />
      </linearGradient>
      <linearGradient id="cm-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a1a06" />
        <stop offset="100%" stopColor="#1a0c02" />
      </linearGradient>
      <filter id="cm-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#cm-bg)" />

    {/* 3D document stack */}
    {[3, 2, 1, 0].map(i => (
      <g key={i} transform={`translate(${i * 9},${i * 8})`}>
        <polygon points={`86,64 86,270 100,284 100,78`} fill={`rgba(200,90,20,${0.3 + i * 0.15})`} />
        <polygon points={`86,64 100,78 300,72 286,58`} fill={`rgba(251,146,60,${0.35 + i * 0.15})`} />
        <polygon points={`286,58 300,72 300,266 286,252`} fill={`rgba(220,100,30,${0.3 + i * 0.15})`} />
        <rect x={100} y={78} width={186} height={188} rx="3" fill={i === 3 ? '#2e1206' : '#1e0e04'} opacity={0.85 + i * 0.04} />
        <rect x={114} y={96} width={120} height={8} rx="4" fill="#c05a20" opacity={0.4 + i * 0.12} />
        <rect x={114} y={112} width={150} height={5} rx="2" fill="#a05020" opacity={0.3 + i * 0.1} />
        <rect x={114} y={123} width={110} height={5} rx="2" fill="#a05020" opacity={0.25 + i * 0.1} />
        <rect x={114} y={134} width={134} height={5} rx="2" fill="#a05020" opacity={0.2 + i * 0.1} />
        <rect x={114} y={148} width={90} height={5} rx="2" fill="#a05020" opacity={0.18 + i * 0.1} />
      </g>
    ))}

    {/* Floating stat card — Inbound Leads */}
    <g filter="url(#cm-shadow)" transform="translate(20,18)">
      <rect width="440" height="52" rx="12" fill="url(#cm-dark)" />
      <polygon points="440,12 444,16 444,60 440,56" fill="#0e0600" />
      <polygon points="12,52 16,56 444,56 440,52" fill="#080400" />
      <rect x="14" y="12" width="70" height="5" rx="2" fill="#7a4010" />
      <text x="14" y="42" fontSize="22" fontWeight="900" fill="#e8905a" fontFamily="Inter,sans-serif">+240%</text>
      <text x="160" y="28" fontSize="8" fill="#9a6030" fontFamily="Inter,sans-serif">Inbound Leads</text>
      <text x="280" y="28" fontSize="8" fill="#9a6030" fontFamily="Inter,sans-serif">Subscribers</text>
      <text x="280" y="44" fontSize="16" fontWeight="900" fill="#e8905a" fontFamily="Inter,sans-serif">8,000</text>
      <text x="380" y="28" fontSize="8" fill="#9a6030" fontFamily="Inter,sans-serif">Domain DA</text>
      <text x="380" y="44" fontSize="16" fontWeight="900" fill="#e8905a" fontFamily="Inter,sans-serif">41</text>
    </g>

    {/* Metric badges */}
    {[['60+', 'Articles'], ['12', 'Whitepapers'], ['8K', 'Subscribers']].map(([val, lbl], i) => (
      <g key={lbl} filter="url(#cm-shadow)" transform={`translate(${20 + i * 154},286)`}>
        <rect width="134" height="52" rx="10" fill="url(#cm-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#0a0400" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#060200" />
        <text x="14" y="22" fontSize="7" fill="#9a5a20" fontFamily="Inter,sans-serif">{lbl}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#c87840" fontFamily="Inter,sans-serif">{val}</text>
      </g>
    ))}
  </svg>
)

export default function ContentMarketing() {
  return (
    <ServicePage
      badge="Content Marketing"
      headline={<>Content That Attracts,<br /><em>Converts & Compounds.</em></>}
      description="Strategic content marketing that builds topical authority, drives inbound leads, and delivers compounding ROI over time."
      cta1={{ label: 'Start Your Strategy →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<ContentVisual />}
      heroMetrics={[
        { icon: '✍️', val: '+240%', label: 'Inbound Lead Growth' },
        { icon: '📧', val: '8,000', label: 'Newsletter Subscribers' },
        { icon: '🏆', val: 'DA 41', label: 'Domain Authority Growth' },
      ]}
      stats={[
        { val: '+240%', label: 'Avg. Inbound Lead Growth' },
        { val: '60+', label: 'Articles Per Campaign' },
        { val: '8,000', label: 'Subscribers Built' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Content Strategy', desc: 'Editorial calendars, topic clusters, and keyword mapping built around your business goals and audience intent.' },
        { icon: '✦', title: 'Long-Form Articles', desc: 'In-depth, SEO-optimised blog posts and guides that build topical authority and rank on Page 1.' },
        { icon: '◈', title: 'Whitepapers & eBooks', desc: 'Lead-generation assets that showcase expertise and fill your pipeline with qualified prospects.' },
        { icon: '◆', title: 'Email Newsletters', desc: 'Weekly newsletters that nurture subscribers into customers and keep your brand top of mind.' },
        { icon: '⬡', title: 'Conversion Copywriting', desc: 'Landing pages, product descriptions, and CTAs written to maximise conversions at every stage.' },
        { icon: '❋', title: 'Content Analytics', desc: 'Monthly reports covering traffic, leads, engagement, and content ROI — no vanity metrics.' },
      ]}
      why={[
        { title: 'Strategy Before Writing', body: 'We map every piece of content to a keyword, funnel stage, and business objective before writing a single word.' },
        { title: 'SEO Embedded', body: 'Every article is built with on-page SEO, internal linking, and schema — so content compounds in search over time.' },
        { title: 'Industry-Specific Writers', body: 'We match your brand with writers who understand your industry — no generic AI fluff.' },
        { title: 'Full Funnel Coverage', body: 'From awareness blogs to decision-stage case studies, we cover every stage of the buyer journey.' },
      ]}
      faqs={[
        { q: 'How many articles do you produce per month?', a: 'Typically 4–12 long-form articles per month depending on your package, plus supplemental content like social posts and newsletters.' },
        { q: 'Do you handle the SEO keyword research?', a: 'Yes. Keyword research, competitor analysis, and topic clustering are all part of our content strategy process.' },
        { q: 'How long before content starts ranking?', a: 'Most content begins gaining traction within 3–6 months, with significant traffic growth by month 6–12 as authority compounds.' },
        { q: 'Can you write for technical or niche industries?', a: 'Yes. We have specialist writers across SaaS, finance, healthcare, legal, and e-commerce verticals.' },
      ]}
    />
  )
}
