import ServicePage from '../../../components/ServicePage/ServicePage'

const WLPPCVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wlp-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1c0a2e" />
        <stop offset="100%" stopColor="#10061a" />
      </linearGradient>
      <linearGradient id="wlp-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1048" />
        <stop offset="100%" stopColor="#18082e" />
      </linearGradient>
      <linearGradient id="wlp-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#160824" />
        <stop offset="100%" stopColor="#0e0418" />
      </linearGradient>
      <filter id="wlp-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wlp-bg)" />

    {/* Agency partners visual — isometric handshake platform */}
    <polygon points="80,280 240,316 400,280 240,244" fill="#2a1060" />
    <polygon points="80,240 80,280 240,316 240,276" fill="#1e0850" />
    <polygon points="400,240 400,280 240,316 240,276" fill="#341470" />

    {/* Branded report card */}
    <g filter="url(#wlp-shadow)" transform="translate(24,24)">
      <rect width="210" height="160" rx="14" fill="url(#wlp-card)" />
      <polygon points="210,14 214,18 214,172 210,168" fill="#120830" />
      <polygon points="14,160 18,164 214,164 210,160" fill="#0e0628" />
      {/* Your brand header */}
      <rect x="14" y="14" width="182" height="20" rx="5" fill="#200a3c" />
      <rect x="20" y="18" width="60" height="10" rx="3" fill="#6040a0" />
      <rect x="150" y="18" width="40" height="10" rx="5" fill="#9060d0" opacity="0.5" />
      <text x="170" y="26" fontSize="7" fill="#d0a0f0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">YOUR LOGO</text>
      {/* ROAS metric big */}
      <text x="108" y="72" fontSize="32" fontWeight="900" fill="#c080e8" fontFamily="Inter,sans-serif" textAnchor="middle">4.2x</text>
      <text x="108" y="86" fontSize="8" fill="#7050a8" fontFamily="Inter,sans-serif" textAnchor="middle">ROAS</text>
      {/* Mini stats */}
      {[['CPC','$1.4'],['CTR','6.2%'],['Conv','340']].map(([l,v],i)=>(
        <g key={l}>
          <rect x={14+i*62} y={98} width={54} height={32} rx="5" fill="#1a0838" />
          <text x={41+i*62} y={112} fontSize="7" fill="#7050a8" fontFamily="Inter,sans-serif" textAnchor="middle">{l}</text>
          <text x={41+i*62} y={124} fontSize="10" fontWeight="900" fill="#c080e8" fontFamily="Inter,sans-serif" textAnchor="middle">{v}</text>
        </g>
      ))}
      {/* NDA tag */}
      <rect x="14" y="138" width="182" height="14" rx="4" fill="#9060d0" opacity="0.12" />
      <text x="105" y="148" fontSize="7" fill="#9060d0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Sent as: YourAgency.com</text>
    </g>

    {/* Campaign performance chart */}
    <g filter="url(#wlp-shadow)" transform="translate(250,24)">
      <rect width="206" height="120" rx="14" fill="url(#wlp-dark)" />
      <polygon points="206,14 210,18 210,128 206,124" fill="#0a0414" />
      <polygon points="14,120 18,124 210,124 206,120" fill="#060210" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#6040a0" />
      {[20,34,28,46,40,58,52,70,64,80,88,98].map((h,i)=>(
        <rect key={i} x={14+i*16} y={100-h*0.72} width={11} height={h*0.72} rx="2"
          fill={i>=9?'#160824':i>=6?'#9060c0':'#b080e0'} />
      ))}
    </g>

    {/* Stats */}
    {[['50+','Partners'],['4.2x','Avg ROAS'],['100%','White-Label']].map(([v,l],i)=>(
      <g key={l} filter="url(#wlp-shadow)" transform={`translate(${24+i*154},196)`}>
        <rect width="134" height="52" rx="10" fill="url(#wlp-card)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#120830" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#0e0628" />
        <text x="14" y="22" fontSize="7" fill="#6040a0" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#c080e8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Platforms */}
    <g filter="url(#wlp-shadow)" transform="translate(24,264)">
      <rect width="432" height="46" rx="12" fill="url(#wlp-dark)" />
      <polygon points="432,12 436,16 436,54 432,50" fill="#0a0414" />
      <polygon points="12,46 16,50 436,50 432,46" fill="#060210" />
      {['Google Ads','Microsoft Ads','YouTube Ads','Google Shopping'].map((p,i)=>(
        <g key={p}>
          <rect x={14+i*108} y={10} width={98} height={26} rx="6" fill="#1a0838" />
          <text x={63+i*108} y={27} fontSize="8" fill="#9060c0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function WhiteLabelPPC() {
  return (
    <ServicePage
      badge="White Label PPC Services"
      headline={<>Resell PPC Without<br /><em>The Overhead.</em></>}
      description="Fully white-labelled Google Ads and paid search management delivered under your brand — expert execution, your clients, your revenue."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroVisual={<WLPPCVisual />}
      heroMetrics={[
        { icon: '🤝', val: '50+', label: 'Agency Partners' },
        { icon: '📊', val: '100%', label: 'Branded Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '50+', label: 'Agency Partners' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '4.2x', label: 'Avg. ROAS Delivered' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Google Ads Management', desc: 'Search, Display, Shopping, and Performance Max campaigns managed and optimised under your brand.' },
        { icon: '◈', title: 'Branded Reporting', desc: 'Monthly reports fully branded with your logo and domain — no mention of us, ever.' },
        { icon: '◆', title: 'Landing Page Recommendations', desc: 'CRO insights and landing page briefs included with every campaign review.' },
        { icon: '✦', title: 'Bid Strategy & Optimisation', desc: 'Daily bid management and A/B ad testing to maximise ROAS for every client.' },
        { icon: '⬡', title: 'Keyword Research', desc: 'In-depth keyword and competitor research delivered as a white-label strategy document.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality agreements — your client relationships are always protected.' },
      ]}
      why={[
        { title: 'Your Brand, Our Work', body: 'Every report, strategy, and campaign asset is delivered under your agency name.' },
        { title: 'Certified PPC Experts', body: 'Google-certified specialists who have managed millions in ad spend across all industries.' },
        { title: 'Flexible Volume Pricing', body: 'The more clients you bring, the better your margin — pricing that scales with your agency.' },
        { title: 'No Client Conflict', body: 'We never pitch your clients directly or operate as a competing agency.' },
      ]}
      faqs={[
        { q: 'Will my clients know you manage their ads?', a: 'Never. All work is fully white-labelled under your agency brand with NDA protection.' },
        { q: 'Which ad platforms do you manage?', a: 'Google Ads, Microsoft Advertising (Bing), YouTube Ads, and Google Shopping campaigns.' },
        { q: 'Do you handle account creation and tracking setup?', a: 'Yes — full account setup, conversion tracking, and Google Analytics integration are included.' },
        { q: 'What is the minimum ad spend per client?', a: 'We recommend a minimum of £500/month ad spend per client for meaningful optimisation.' },
      ]}
    />
  )
}
