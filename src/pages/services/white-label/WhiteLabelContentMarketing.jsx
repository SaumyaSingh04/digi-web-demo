import ServicePage from '../../../components/ServicePage/ServicePage'

const WLContentVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wlc-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0e1a10" />
        <stop offset="100%" stopColor="#080e08" />
      </linearGradient>
      <linearGradient id="wlc-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#142818" />
        <stop offset="100%" stopColor="#0e1c10" />
      </linearGradient>
      <linearGradient id="wlc-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1a0c" />
        <stop offset="100%" stopColor="#040e06" />
      </linearGradient>
      <filter id="wlc-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wlc-bg)" />

    {/* 3D document with YOUR BRAND label */}
    <polygon points="140,60 280,100 420,60 280,20" fill="#1e4028" />
    <polygon points="140,60 140,240 280,280 280,100" fill="#162e1e" />
    <polygon points="420,60 420,240 280,280 280,100" fill="#265238" />
    {/* Brand label on top */}
    <rect x="210" y="36" width="140" height="22" rx="5" fill="#4ade80" opacity="0.15" />
    <text x="280" y="51" fontSize="9" fill="#4ade80" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">YOUR BRAND</text>

    {/* Article card */}
    <g filter="url(#wlc-shadow)" transform="translate(24,24)">
      <rect width="200" height="150" rx="14" fill="url(#wlc-card)" />
      <polygon points="200,14 204,18 204,162 200,158" fill="#0a1a0c" />
      <polygon points="14,150 18,154 204,154 200,150" fill="#060e08" />
      <rect x="14" y="14" width="90" height="6" rx="3" fill="#2e6840" />
      <rect x="14" y="26" width="172" height="8" rx="3" fill="#1e4828" />
      {[130,172,110,150,90,140,160,100,120].map((w,i)=>(
        <rect key={i} x={14} y={42+i*10} width={w} height={5} rx="2" fill="#1a4020" opacity="0.7" />
      ))}
      {/* Your brand badge */}
      <rect x="14" y="134" width="172" height="10" rx="3" fill="#4ade80" opacity="0.15" />
      <text x="100" y="142" fontSize="7" fill="#4ade80" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Published as: YourAgency.com</text>
    </g>

    {/* Traffic chart */}
    <g filter="url(#wlc-shadow)" transform="translate(240,24)">
      <rect width="216" height="100" rx="14" fill="url(#wlc-dark)" />
      <polygon points="216,14 220,18 220,108 216,104" fill="#040c06" />
      <polygon points="14,100 18,104 220,104 216,100" fill="#020a04" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#2e6840" />
      <text x="170" y="30" fontSize="11" fontWeight="900" fill="#4ade80" fontFamily="Inter,sans-serif">+180%</text>
      {[18,26,22,36,32,50,44,62,56,74,84,96].map((h,i)=>(
        <rect key={i} x={14+i*16} y={84-h*0.6} width={11} height={h*0.6} rx="2"
          fill={i>=9?'#4ade80':i>=6?'#22c55e':'#16a34a'} opacity="0.75" />
      ))}
    </g>

    {/* Stats */}
    {[['500+','Articles/mo'],['100%','White-Label'],['48hr','Onboarding']].map(([v,l],i)=>(
      <g key={l} filter="url(#wlc-shadow)" transform={`translate(${24+i*154},184)`}>
        <rect width="134" height="52" rx="10" fill="url(#wlc-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#040c06" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#020a04" />
        <text x="14" y="22" fontSize="7" fill="#2e6840" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#4ade80" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* NDA shield */}
    <g filter="url(#wlc-shadow)" transform="translate(24,252)">
      <rect width="432" height="50" rx="12" fill="url(#wlc-card)" />
      <polygon points="432,12 436,16 436,58 432,54" fill="#0a1a0c" />
      <polygon points="12,50 16,54 436,54 432,50" fill="#060e08" />
      <rect x="14" y="12" width="60" height="4" rx="2" fill="#4ade80" opacity="0.3" />
      {['NDA Protected','100% White-Label','No Client Conflict','Scalable Output'].map((t,i)=>(
        <g key={t}>
          <rect x={14+i*108} y={22} width={98} height={20} rx="6" fill="#0e2016" />
          <text x={63+i*108} y={36} fontSize="7.5" fill="#4ade80" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function WhiteLabelContentMarketing() {
  return (
    <ServicePage
      badge="White Label Content Marketing"
      headline={<>Content That Ranks,<br /><em>Under Your Brand.</em></>}
      description="Fully white-labelled content marketing — strategy, writing, and distribution delivered under your agency name so your clients never know we exist."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroVisual={<WLContentVisual />}
      heroMetrics={[
        { icon: '✍️', val: '500+', label: 'Articles Delivered' },
        { icon: '📈', val: '+180%', label: 'Avg. Organic Traffic Lift' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '500+', label: 'Articles Delivered Monthly' },
        { val: '+180%', label: 'Avg. Organic Traffic Lift' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'SEO Blog Writing', desc: 'Keyword-targeted, expert-level blog posts written and formatted for rankings — branded as yours.' },
        { icon: '◈', title: 'Content Strategy', desc: 'Full editorial calendars and topic cluster strategies delivered as white-label documents.' },
        { icon: '◆', title: 'Pillar Pages & Cluster Content', desc: 'Authority-building pillar content and supporting cluster articles for topical dominance.' },
        { icon: '✦', title: 'Branded Content Reports', desc: 'Monthly performance reports showing traffic, rankings, and engagement under your agency brand.' },
        { icon: '⬡', title: 'Content Distribution', desc: 'Social distribution plans and outreach strategies to amplify every piece of content.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality — your clients will never know we produce their content.' },
      ]}
      why={[
        { title: 'Your Brand, Our Writing', body: 'Every article, report, and strategy document is delivered under your agency name.' },
        { title: 'SEO-First Approach', body: 'All content is built around keyword research, search intent, and on-page best practices.' },
        { title: 'Scalable Output', body: 'From 5 to 500 articles per month — we scale with your client roster without quality loss.' },
        { title: 'No Client Conflict', body: 'We never pitch your clients directly or position ourselves as a competing agency.' },
      ]}
      faqs={[
        { q: 'Will my clients know you write their content?', a: 'Never. All content is delivered fully ghostwritten and white-labelled under your brand.' },
        { q: 'What industries do you write for?', a: 'All industries — we assign specialist writers matched to each client\'s niche.' },
        { q: 'Do you handle publishing and on-page optimisation?', a: 'Yes — we can publish directly to WordPress or CMS and apply full on-page SEO formatting.' },
        { q: 'How quickly can you onboard a new client?', a: 'Typically within 48 hours of receiving a brief and access credentials.' },
      ]}
    />
  )
}
