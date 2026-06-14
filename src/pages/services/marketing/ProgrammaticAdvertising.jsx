import ServicePage from '../../../components/ServicePage/ServicePage'

const ProgAdVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="pa-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a0e28" />
        <stop offset="100%" stopColor="#10081a" />
      </linearGradient>
      <linearGradient id="pa-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1840" />
        <stop offset="100%" stopColor="#1c1030" />
      </linearGradient>
      <linearGradient id="pa-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#140c22" />
        <stop offset="100%" stopColor="#0c0618" />
      </linearGradient>
      <filter id="pa-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#pa-bg)" />

    {/* Isometric platform base */}
    <polygon points="60,290 240,330 420,290 240,250" fill="#2a1850" />
    <polygon points="60,240 60,290 240,330 240,280" fill="#1e1040" />
    <polygon points="420,240 420,290 240,330 240,280" fill="#341a60" />

    {/* Audience targeting grid card */}
    <g filter="url(#pa-shadow)" transform="translate(24,24)">
      <rect width="200" height="150" rx="14" fill="url(#pa-card)" />
      <polygon points="200,14 204,18 204,162 200,158" fill="#180a30" />
      <polygon points="14,150 18,154 204,154 200,150" fill="#120828" />
      <rect x="14" y="14" width="80" height="6" rx="3" fill="#6040a0" />
      {/* Target rings */}
      <circle cx="80" cy="92" r="50" stroke="#3a2060" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="92" r="35" stroke="#4a3080" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="92" r="20" stroke="#c060e0" strokeWidth="2" fill="none" />
      <circle cx="80" cy="92" r="7" fill="#c060e0" opacity="0.8" />
      {/* Audience dots */}
      {[[50,60],[108,70],[60,120],[100,115],[40,90],[120,95]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill={i<2?'#c060e0':'#603080'} opacity="0.7" />
      ))}
      <rect x="148" y="14" width="40" height="16" rx="7" fill="#6040a0" />
      <text x="152" y="26" fontSize="9" fill="#d0b0f0" fontFamily="Inter,sans-serif" fontWeight="800">95%</text>
    </g>

    {/* RTB / bid stream */}
    <g filter="url(#pa-shadow)" transform="translate(240,24)">
      <rect width="216" height="90" rx="14" fill="url(#pa-dark)" />
      <polygon points="216,14 220,18 220,98 216,94" fill="#0a0614" />
      <polygon points="14,90 18,94 220,94 216,90" fill="#060410" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#5030a0" />
      {['0.12ms','0.08ms','0.14ms','0.09ms'].map((t,i)=>(
        <g key={t}>
          <rect x={14+i*50} y={28} width={42} height={48} rx="6" fill="#1a0e30" />
          <text x={35+i*50} y={48} fontSize="8" fill="#a070d0" fontFamily="Inter,sans-serif" textAnchor="middle">BID</text>
          <text x={35+i*50} y={64} fontSize="8" fontWeight="900" fill="#d0a0f0" fontFamily="Inter,sans-serif" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>

    {/* ROAS + CPM cards */}
    <g filter="url(#pa-shadow)" transform="translate(240,130)">
      <rect width="100" height="90" rx="14" fill="url(#pa-card)" />
      <polygon points="100,14 104,18 104,98 100,94" fill="#180a30" />
      <polygon points="14,90 18,94 104,94 100,90" fill="#120828" />
      <rect x="14" y="14" width="50" height="5" rx="2" fill="#6040a0" />
      <text x="14" y="60" fontSize="24" fontWeight="900" fill="#c080e8" fontFamily="Inter,sans-serif">3.5x</text>
      <rect x="14" y="68" width="60" height="4" rx="2" fill="#5030a0" />
    </g>
    <g filter="url(#pa-shadow)" transform="translate(356,130)">
      <rect width="100" height="90" rx="14" fill="url(#pa-dark)" />
      <polygon points="100,14 104,18 104,98 100,94" fill="#0a0614" />
      <polygon points="14,90 18,94 104,94 100,90" fill="#060410" />
      <rect x="14" y="14" width="50" height="5" rx="2" fill="#5030a0" />
      <text x="14" y="60" fontSize="22" fontWeight="900" fill="#d0a0f0" fontFamily="Inter,sans-serif">-40%</text>
      <rect x="14" y="68" width="50" height="4" rx="2" fill="#4a2890" />
    </g>

    {/* Channel distribution bar */}
    <g filter="url(#pa-shadow)" transform="translate(24,192)">
      <rect width="432" height="44" rx="12" fill="url(#pa-dark)" />
      <polygon points="432,12 436,16 436,52 432,48" fill="#0a0614" />
      <polygon points="12,44 16,48 436,48 432,44" fill="#060410" />
      <rect x="12" y="10" width="60" height="4" rx="2" fill="#5030a0" />
      {[['Display',35,'#a060d0'],['Video',28,'#8050b8'],['CTV',20,'#6040a0'],['Native',12,'#503088'],['Audio',5,'#40205e']].map(([ch,pct,clr],i,arr)=>{
        const off = arr.slice(0,i).reduce((s,a)=>s+a[1],0)
        return <rect key={ch} x={12+off*3.9} y={20} width={pct*3.9} height={16} rx="4" fill={clr} />
      })}
      {[['Display',35,'#a060d0'],['Video',28,'#8050b8'],['CTV',20,'#6040a0']].map(([ch,pct,clr],i,arr)=>{
        const off = arr.slice(0,i).reduce((s,a)=>s+a[1],0)
        return <text key={ch} x={12+off*3.9+pct*1.95} y={32} fontSize="7" fill="#fff" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="700">{ch}</text>
      })}
    </g>

    {/* Impressions badge */}
    <g filter="url(#pa-shadow)" transform="translate(24,250)">
      <rect width="200" height="44" rx="12" fill="url(#pa-card)" />
      <polygon points="200,12 204,16 204,52 200,48" fill="#180a30" />
      <polygon points="12,44 16,48 204,48 200,44" fill="#120828" />
      <text x="14" y="22" fontSize="7" fill="#6040a0" fontFamily="Inter,sans-serif">Daily Impressions</text>
      <text x="14" y="40" fontSize="18" fontWeight="900" fill="#c080e8" fontFamily="Inter,sans-serif">10B+ Available</text>
    </g>
  </svg>
)

export default function ProgrammaticAdvertising() {
  return (
    <ServicePage
      badge="Programmatic Advertising"
      headline={<>Reach the Right Audience<br /><em>At the Right Moment.</em></>}
      description="Data-driven programmatic advertising that places your brand in front of high-intent audiences across display, video, and connected TV — automatically optimised for ROAS."
      cta1={{ label: 'Launch Your Campaign →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<ProgAdVisual />}
      heroMetrics={[
        { icon: '🎯', val: '95%', label: 'Audience Accuracy' },
        { icon: '📈', val: '3.5x', label: 'Avg. ROAS' },
        { icon: '🌐', val: '10B+', label: 'Daily Impressions' },
      ]}
      stats={[
        { val: '3.5x', label: 'Average ROAS' },
        { val: '95%', label: 'Audience Targeting Accuracy' },
        { val: '10B+', label: 'Daily Impressions Available' },
        { val: '-40%', label: 'Avg. CPM Reduction' },
      ]}
      delivers={[
        { icon: '◎', title: 'Display & Banner Advertising', desc: 'Automated real-time bidding on premium display inventory across millions of publisher sites.' },
        { icon: '◈', title: 'Programmatic Video', desc: 'Pre-roll, mid-roll, and outstream video ads placed programmatically on top-tier video networks.' },
        { icon: '◆', title: 'Connected TV (CTV)', desc: 'Reach cord-cutters on streaming platforms with targeted, unskippable ads on the big screen.' },
        { icon: '✦', title: 'Audience Segmentation', desc: 'Custom audience segments built from first-party data, lookalikes, and intent signals.' },
        { icon: '⬡', title: 'Retargeting & Prospecting', desc: 'Precision retargeting for warm audiences and prospecting campaigns for cold reach at scale.' },
        { icon: '❋', title: 'Real-Time Reporting', desc: 'Live dashboards and monthly reports showing impressions, CTR, conversions, and ROAS.' },
      ]}
      why={[
        { title: 'Algorithmic Optimisation', body: 'Machine learning adjusts bids, placements, and creatives in real-time to minimise CPM and maximise conversions.' },
        { title: 'Premium Inventory Access', body: 'We access top-tier supply-side platforms giving your ads placement on brand-safe, high-traffic publishers.' },
        { title: 'First-Party Data Activation', body: 'We help you activate your CRM and customer data to target your highest-value audience segments.' },
        { title: 'Full Funnel Coverage', body: 'From awareness display to retargeting conversions — programmatic covers every stage of the buyer journey.' },
      ]}
      faqs={[
        { q: 'What is programmatic advertising?', a: 'Programmatic uses automated technology and real-time bidding to buy and place digital ads, removing manual ad buying and enabling precise audience targeting at scale.' },
        { q: 'What is the minimum budget for programmatic campaigns?', a: 'We recommend a minimum of £2,000/month in ad spend for meaningful data and optimisation.' },
        { q: 'Which ad formats do you support?', a: 'Display banners, rich media, pre-roll video, CTV, native ads, and audio advertising.' },
        { q: 'How do you measure campaign success?', a: 'We track impressions, CTR, viewability, conversions, ROAS, and CPM benchmarked against industry standards.' },
      ]}
    />
  )
}
