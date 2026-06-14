import ServicePage from '../components/ServicePage/ServicePage'

const WLLinkVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wll-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0a1828" />
        <stop offset="100%" stopColor="#060e1c" />
      </linearGradient>
      <linearGradient id="wll-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#102238" />
        <stop offset="100%" stopColor="#0a1828" />
      </linearGradient>
      <linearGradient id="wll-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#061220" />
        <stop offset="100%" stopColor="#030a16" />
      </linearGradient>
      <filter id="wll-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wll-bg)" />

    {/* Link chain visual — 3D isometric */}
    {[0,1,2].map(i=>(
      <g key={i} transform={`translate(${80+i*100},${130-i*20})`}>
        <ellipse cx="40" cy="20" rx="36" ry="16" stroke="#3a6898" strokeWidth="8" fill="none" />
        <ellipse cx="40" cy="20" rx="36" ry="16" stroke="#5090c8" strokeWidth="5" fill="none" opacity="0.5" />
        {i < 2 && <line x1="76" y1="20" x2="104" y2="20" stroke="#3a6898" strokeWidth="6" />}
      </g>
    ))}

    {/* DR authority card */}
    <g filter="url(#wll-shadow)" transform="translate(24,24)">
      <rect width="200" height="130" rx="14" fill="url(#wll-card)" />
      <polygon points="200,14 204,18 204,142 200,138" fill="#081220" />
      <polygon points="14,130 18,134 204,134 200,130" fill="#060e18" />
      <rect x="14" y="14" width="80" height="6" rx="3" fill="#3a6898" />
      {/* DR bar chart */}
      {[30,42,55,68,72,80].map((dr,i)=>(
        <g key={i}>
          <rect x={14+i*30} y={100-dr*0.7} width={22} height={dr*0.7} rx="3"
            fill={dr>=70?'#4a90d0':dr>=55?'#3a78b8':'#2a6090'} opacity="0.8" />
          <text x={25+i*30} y={115} fontSize="7" fill="#4a80b8" fontFamily="Inter,sans-serif" textAnchor="middle">{dr}</text>
        </g>
      ))}
      <text x="14" y="128" fontSize="6" fill="#3a6070" fontFamily="Inter,sans-serif">DR Score per placement</text>
    </g>

    {/* White-label report card */}
    <g filter="url(#wll-shadow)" transform="translate(240,24)">
      <rect width="216" height="130" rx="14" fill="url(#wll-dark)" />
      <polygon points="216,14 220,18 220,142 216,138" fill="#030a16" />
      <polygon points="14,130 18,134 220,134 216,130" fill="#020710" />
      <rect x="14" y="14" width="90" height="6" rx="3" fill="#3a6898" />
      {/* Report rows */}
      {['Live URL','Domain Rating','Traffic','Anchor Text','Date'].map((col,i)=>(
        <g key={col}>
          <rect x={14} y={28+i*18} width={188} height={14} rx="3" fill={i%2===0?'#0a1828':'#0e1c30'} />
          <rect x={18} y={31+i*18} width={50} height={5} rx="2" fill="#2a5080" />
          <rect x={80} y={31+i*18} width={30} height={5} rx="2" fill="#4a90c0" />
          <rect x={118} y={31+i*18} width={40} height={5} rx="2" fill="#3a7098" />
        </g>
      ))}
      {/* Brand tag */}
      <rect x="14" y="118" width="188" height="8" rx="3" fill="#4a90d0" opacity="0.15" />
      <text x="108" y="125" fontSize="7" fill="#4a90d0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Reported as: YourAgency.com</text>
    </g>

    {/* Stats */}
    {[['DR 50+','Avg Authority'],['10K+','Links Built'],['100%','White-Label']].map(([v,l],i)=>(
      <g key={l} filter="url(#wll-shadow)" transform={`translate(${24+i*154},168)`}>
        <rect width="134" height="52" rx="10" fill="url(#wll-card)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#081220" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#060e18" />
        <text x="14" y="22" fontSize="7" fill="#3a6898" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#70b0e0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Method badges */}
    <g filter="url(#wll-shadow)" transform="translate(24,236)">
      <rect width="432" height="50" rx="12" fill="url(#wll-dark)" />
      <polygon points="432,12 436,16 436,58 432,54" fill="#030a16" />
      <polygon points="12,50 16,54 436,54 432,50" fill="#020710" />
      {['Editorial Outreach','Guest Posts','Niche Edits','HARO & Digital PR'].map((t,i)=>(
        <g key={t}>
          <rect x={14+i*108} y={12} width={98} height={28} rx="6" fill="#0a1828" />
          <text x={63+i*108} y={30} fontSize="7.5" fill="#5090c0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function WhiteLabelLinkBuilding() {
  return (
    <ServicePage
      badge="White Label Link Building"
      headline={<>High-Authority Links,<br /><em>Under Your Brand.</em></>}
      description="Fully white-labelled link building — manual outreach, editorial placements, and detailed reports delivered under your agency name."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroVisual={<WLLinkVisual />}
      heroMetrics={[
        { icon: '🔗', val: 'DR 50+', label: 'Avg. Link Authority' },
        { icon: '📊', val: '100%', label: 'Branded Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '10,000+', label: 'Links Delivered' },
        { val: 'DR 50+', label: 'Average Link Authority' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Editorial Link Outreach', desc: 'Manual outreach to relevant, high-DR websites for genuine editorial placements.' },
        { icon: '◈', title: 'Guest Post Placements', desc: 'Niche-relevant guest posts written and placed on real traffic sites under your brand.' },
        { icon: '◆', title: 'Niche Edits', desc: 'Contextual link insertions into existing high-authority content for immediate SEO impact.' },
        { icon: '✦', title: 'HARO & Digital PR', desc: 'Journalist request responses and digital PR campaigns that earn authoritative media links.' },
        { icon: '⬡', title: 'Branded Link Reports', desc: 'White-label reports listing every acquired link with DR, traffic, and anchor data.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality — your clients will never know we build their links.' },
      ]}
      why={[
        { title: 'Your Brand, Our Outreach', body: 'Every link report and communication is branded as your agency\'s work.' },
        { title: 'Manual, White-Hat Only', body: 'Zero PBNs or spam — all links are earned through manual outreach and editorial standards.' },
        { title: 'Scalable Volume', body: 'From 10 to 500 links per month — we scale to match any client portfolio.' },
        { title: 'No Client Conflict', body: 'We never approach your clients directly or compete in your market.' },
      ]}
      faqs={[
        { q: 'Will my clients know you build their links?', a: 'Never. All reports and communications are fully white-labelled under your agency name.' },
        { q: 'What is the minimum DR of links you acquire?', a: 'Our standard tier targets DR 30+ with premium tiers reaching DR 60+ and beyond.' },
        { q: 'Do you use PBNs or any black-hat methods?', a: 'Absolutely not. Every link is acquired through manual outreach and editorial placements only.' },
        { q: 'How are links reported?', a: 'Full white-label reports with live URL, DR, traffic estimate, anchor text, and placement date.' },
      ]}
    />
  )
}
