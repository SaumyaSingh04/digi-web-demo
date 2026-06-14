import ServicePage from '../components/ServicePage/ServicePage'

const LeadGenVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="lg-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="lg-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="lg-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#lg-bg)" />
    {/* Funnel */}
    {[{y:20,w:380,label:'Prospects Identified',clr:'#3a5a9a'},{y:80,w:290,label:'Qualified Leads',clr:'#3a7ab0'},{y:140,w:200,label:'Engaged',clr:'#4a9a80'},{y:200,w:120,label:'Sales Ready',clr:'#70c060'}].map(({y,w,label,clr},i)=>(
      <g key={label}>
        <rect x={240-w/2} y={y} width={w} height={50} rx="8" fill={clr} opacity="0.18" />
        <rect x={240-w/2} y={y} width={w} height={50} rx="8" stroke={clr} strokeWidth="1.5" fill="none" opacity="0.6" />
        <text x={240} y={y+30} fontSize="9" fontWeight="700" fill={clr} fontFamily="Inter,sans-serif" textAnchor="middle">{label}</text>
      </g>
    ))}
    {/* AI badge */}
    <g filter="url(#lg-shadow)" transform="translate(22,20)">
      <rect width="80" height="250" rx="12" fill="url(#lg-dark)" />
      <polygon points="80,12 84,16 84,258 80,254" fill="#040e1c" />
      <polygon points="12,250 16,254 84,254 80,250" fill="#020810" />
      <text x="40" y="140" fontSize="9" fontWeight="900" fill="#3a70a8" fontFamily="Inter,sans-serif" textAnchor="middle" transform="rotate(-90 40 140)">AI ENGINE</text>
    </g>
    {/* Stats */}
    {[['5X','More Leads'],['70%','Less Manual'],['4X','Pipeline']].map(([v,l],i)=>(
      <g key={l} filter="url(#lg-shadow)" transform={`translate(${378},${20+i*80})`}>
        <rect width="80" height="62" rx="10" fill="url(#lg-dark)" />
        <text x="12" y="24" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="12" y="50" fontSize="20" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Channel row */}
    <g filter="url(#lg-shadow)" transform="translate(22,286)">
      <rect width="436" height="48" rx="10" fill="url(#lg-dark)" />
      {['AI Prospecting','Lead Scoring','Email Outreach','LinkedIn','CRM Sync'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*87} y={10} width={75} height={28} rx="7" fill="#0a1828" />
          <text x={49+i*87} y={28} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AILeadGenerationAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<LeadGenVisual />}
      headline={<>AI Lead Generation That<br /><em>Fills Your Pipeline Automatically.</em></>}
      description="Stop chasing cold leads. Our AI systems identify, qualify, and nurture high-intent prospects automatically — delivering warm leads straight to your sales team."
      cta1={{ label: 'Generate More Leads →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎯', val: '5X', label: 'More Qualified Leads' },
        { icon: '⚡', val: '70%', label: 'Less Manual Work' },
        { icon: '📈', val: '4X', label: 'Pipeline Growth' },
      ]}
      stats={[
        { val: '5X', label: 'More Qualified Leads' },
        { val: '70%', label: 'Reduction in Manual Prospecting' },
        { val: '4X', label: 'Pipeline Growth' },
        { val: '2X', label: 'Faster Sales Cycle' },
      ]}
      delivers={[
        { icon: '✦', title: 'AI Prospecting', desc: 'Identify high-intent prospects from multiple data sources automatically.' },
        { icon: '◎', title: 'Lead Scoring', desc: 'AI scores every lead based on behaviour, firmographics, and intent signals.' },
        { icon: '◈', title: 'Automated Outreach', desc: 'Personalised email and LinkedIn sequences triggered by lead behaviour.' },
        { icon: '◆', title: 'Lead Nurturing Flows', desc: 'Multi-step nurturing campaigns that warm up leads until they are ready to buy.' },
        { icon: '⬡', title: 'CRM Auto-Enrichment', desc: 'Leads automatically enriched with contact data and pushed to your CRM.' },
        { icon: '❋', title: 'Conversion Analytics', desc: 'Full funnel visibility from first touch to closed deal.' },
      ]}
      why={[
        { title: 'Quality Over Quantity', body: 'We focus on qualified pipeline, not vanity metrics. Every lead is scored and verified.' },
        { title: 'Works While You Sleep', body: 'Outreach and follow-ups run 24/7 without anyone on your team lifting a finger.' },
        { title: 'CRM Ready', body: 'All leads land in your CRM with full context, source tracking, and lead scores.' },
        { title: 'Compliant Outreach', body: 'All automation built to GDPR and CAN-SPAM standards to protect your domain reputation.' },
      ]}
      faqs={[
        { q: 'What industries does this work for?', a: 'B2B SaaS, agencies, professional services, real estate, ecommerce, and more.' },
        { q: 'Do I need a big database to start?', a: 'No. We can build your prospect list from scratch using AI-powered data sourcing.' },
        { q: 'How do you ensure lead quality?', a: 'Multi-layer scoring using intent data, firmographics, and engagement behaviour.' },
        { q: 'Can this integrate with my existing CRM?', a: 'Yes — HubSpot, Salesforce, Pipedrive, Zoho, and most others.' },
      ]}
    />
  )
}
