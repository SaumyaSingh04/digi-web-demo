import ServicePage from '../components/ServicePage/ServicePage'

const WLSMMVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wls-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a0a1e" />
        <stop offset="100%" stopColor="#12061a" />
      </linearGradient>
      <linearGradient id="wls-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1038" />
        <stop offset="100%" stopColor="#1e0a2c" />
      </linearGradient>
      <linearGradient id="wls-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b0764" />
        <stop offset="100%" stopColor="#1e0438" />
      </linearGradient>
      <filter id="wls-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wls-bg)" />

    {/* Phone with YOUR BRAND overlay */}
    <polygon points="100,60 136,40 136,310 100,330" fill="#4a1060" />
    <polygon points="136,40 232,40 232,310 136,310" fill="url(#wls-card)" />
    <polygon points="100,60 136,40 232,40 196,60" fill="#3d1a48" />
    <rect x="148" y="58" width="72" height="236" rx="2" fill="#0f0520" />
    <rect x="172" y="58" width="24" height="8" rx="4" fill="#080314" />
    {/* Brand badge on phone */}
    <rect x="148" y="64" width="72" height="12" rx="2" fill="#9060c8" opacity="0.3" />
    <text x="184" y="73" fontSize="6" fill="#d0a0f0" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">YOUR BRAND</text>
    {/* Feed posts */}
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <rect x={152} y={80+i*44} width={64} height={38} rx="3" fill="#1a0a30" />
        <circle cx={162} cy={90+i*44} r={6} fill="#3a1a50" />
        <rect x={172} y={86+i*44} width={34} height={4} rx="2" fill="#3a1a50" />
        <rect x={152} y={98+i*44} width={64} height={14} rx="2" fill="#2a1040" />
      </g>
    ))}

    {/* Branded analytics report */}
    <g filter="url(#wls-shadow)" transform="translate(250,24)">
      <rect width="206" height="130" rx="14" fill="url(#wls-card)" />
      <polygon points="206,14 210,18 210,142 206,138" fill="#180628" />
      <polygon points="14,130 18,134 210,134 206,130" fill="#120420" />
      {/* Brand header */}
      <rect x="14" y="14" width="178" height="16" rx="4" fill="#200840" />
      <text x="103" y="25" fontSize="7" fill="#c090e8" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">YOUR AGENCY REPORT</text>
      {/* Sparkline */}
      <rect x="14" y="36" width="80" height="5" rx="2" fill="#7050a8" />
      <text x="178" y="52" fontSize="11" fontWeight="900" fill="#d0a0f0" fontFamily="Inter,sans-serif" textAnchor="end">+210%</text>
      <polyline points="14,120 34,110 54,105 74,92 94,84 114,72 134,62 154,52 174,44 194,38"
        stroke="#9060c8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>

    {/* Stats */}
    {[['50+','Partners'],['10x','Engagement'],['100%','White-Label']].map(([v,l],i)=>(
      <g key={l} filter="url(#wls-shadow)" transform={`translate(${24+i*154},170)`}>
        <rect width="134" height="52" rx="10" fill="url(#wls-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#100228" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#0a021e" />
        <text x="14" y="22" fontSize="7" fill="#7050a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#d0b0f0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Platforms row */}
    <g filter="url(#wls-shadow)" transform="translate(24,238)">
      <rect width="432" height="48" rx="12" fill="url(#wls-card)" />
      <polygon points="432,12 436,16 436,56 432,52" fill="#180628" />
      <polygon points="12,48 16,52 436,52 432,48" fill="#120420" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#7050a8" />
      {['Instagram','Facebook','LinkedIn','TikTok','Twitter/X'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*86} y={22} width={76} height={18} rx="6" fill="#1e0838" />
          <text x={50+i*86} y={35} fontSize="8" fill="#c090e0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>

    {/* NDA badge */}
    <g filter="url(#wls-shadow)" transform="translate(24,302)">
      <rect width="432" height="32" rx="8" fill="url(#wls-dark)" />
      <polygon points="432,8 436,12 436,36 432,32" fill="#100228" />
      <polygon points="8,32 12,36 436,36 432,32" fill="#0a021e" />
      {['NDA Protected','48hr Onboarding','No Client Conflict','Your Brand Always'].map((t,i)=>(
        <g key={t}>
          <text x={54+i*108} y={20} fontSize="7.5" fill="#c090e0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{t}</text>
          {i<3 && <line x1={108+i*108} y1={8} x2={108+i*108} y2={32} stroke="#3a1858" strokeWidth="1" />}
        </g>
      ))}
    </g>
  </svg>
)

export default function WhiteLabelSMM() {
  return (
    <ServicePage
      badge="White Label Social Media Marketing"
      headline={<>Grow Your Agency<br /><em>With White Label SMM.</em></>}
      description="Fully white-labelled social media management and campaigns delivered under your brand. Your clients, your credit."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroVisual={<WLSMMVisual />}
      heroMetrics={[
        { icon: '📱', val: '50+', label: 'Agency Partners' },
        { icon: '📊', val: '100%', label: 'Branded Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '50+', label: 'Agency Partners' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '10×', label: 'Engagement Growth' },
        { val: '95%', label: 'Partner Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'Content Creation', desc: 'Platform-native content crafted for your clients\' audience, fully branded as yours.' },
        { icon: '◈', title: 'Community Management', desc: 'Daily engagement, replies, and community building handled under your brand.' },
        { icon: '◆', title: 'Paid Social Campaigns', desc: 'Meta, LinkedIn, and TikTok ad campaigns managed for maximum ROAS.' },
        { icon: '✦', title: 'Analytics & Reporting', desc: 'Monthly branded reports with detailed performance insights for your clients.' },
        { icon: '⬡', title: 'Strategy & Calendar', desc: 'Full monthly content calendars and strategy documents ready for client review.' },
        { icon: '❋', title: 'NDA Protected', desc: 'Strict confidentiality — your clients will never know we are involved.' },
      ]}
      why={[
        { title: 'Your Brand, Our Work', body: 'Every post, report, and strategy is delivered under your agency name.' },
        { title: 'Platform Experts', body: 'Specialists in Instagram, Facebook, LinkedIn, TikTok and Twitter/X.' },
        { title: 'Scale Without Hiring', body: 'Take on unlimited social media clients without adding headcount.' },
        { title: 'No Client Conflict', body: 'We never pitch your clients directly or operate in your market.' },
      ]}
      faqs={[
        { q: 'Will my clients know you manage their social media?', a: 'Never. All work is fully white-labelled under your agency brand.' },
        { q: 'Which platforms do you support?', a: 'Instagram, Facebook, LinkedIn, TikTok, Twitter/X, YouTube, and Pinterest.' },
        { q: 'Do you create the content or just schedule it?', a: 'We handle everything — strategy, copywriting, design, scheduling, and reporting.' },
        { q: 'What is the onboarding time?', a: 'Typically 48 hours after receiving client credentials and a brief.' },
      ]}
    />
  )
}
