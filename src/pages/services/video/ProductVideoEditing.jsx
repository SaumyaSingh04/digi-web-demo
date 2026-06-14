import ServicePage from '../../../components/ServicePage/ServicePage'

const ProdVideoVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="pv-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a100a" />
        <stop offset="100%" stopColor="#0e0804" />
      </linearGradient>
      <linearGradient id="pv-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e1c10" />
        <stop offset="100%" stopColor="#1e1008" />
      </linearGradient>
      <linearGradient id="pv-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#120c06" />
        <stop offset="100%" stopColor="#080402" />
      </linearGradient>
      <filter id="pv-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#pv-bg)" />

    {/* 3D product on pedestal */}
    <polygon points="160,280 240,308 320,280 240,252" fill="#2a1810" />
    <polygon points="160,240 160,280 240,308 240,268" fill="#1e1008" />
    <polygon points="320,240 320,280 240,308 240,268" fill="#361e14" />
    {/* Product box */}
    <polygon points="180,160 240,180 300,160 240,140" fill="#e07840" />
    <polygon points="180,160 180,240 240,260 240,180" fill="#b05a28" />
    <polygon points="300,160 300,240 240,260 240,180" fill="#d06830" />
    <rect x="188" y="170" width="44" height="30" rx="3" fill="#c06030" opacity="0.4" />
    <text x="212" y="190" fontSize="10" fill="#ffe0c0" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">PRO</text>

    {/* Video frame card */}
    <g filter="url(#pv-shadow)" transform="translate(24,24)">
      <rect width="210" height="140" rx="14" fill="url(#pv-dark)" />
      <polygon points="210,14 214,18 214,152 210,148" fill="#060200" />
      <polygon points="14,140 18,144 214,144 210,140" fill="#040100" />
      {/* Scene */}
      <rect x="14" y="14" width="182" height="100" rx="4" fill="#1a0e06" />
      <rect x="14" y="14" width="182" height="55" fill="#200e06" />
      <rect x="14" y="69" width="182" height="45" fill="#120a04" />
      {/* Play button */}
      <circle cx="105" cy="64" r="20" fill="#e07840" opacity="0.8" />
      <polygon points="98,56 120,64 98,72" fill="#fff" opacity="0.9" />
      {/* Conversion badge */}
      <rect x="14" y="122" width="80" height="12" rx="4" fill="#e07840" />
      <text x="54" y="132" fontSize="8" fill="#fff" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">+80% Conversions</text>
    </g>

    {/* Multi-ratio export card */}
    <g filter="url(#pv-shadow)" transform="translate(250,24)">
      <rect width="206" height="140" rx="14" fill="url(#pv-card)" />
      <polygon points="206,14 210,18 210,152 206,148" fill="#0e0604" />
      <polygon points="14,140 18,144 210,144 206,140" fill="#0a0402" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#7a4020" />
      {[['16:9',110,60,'#e07840'],['9:16',60,100,'#c05828'],['1:1',80,80,'#a84820'],['4:5',66,84,'#905028']].map(([r,w,h,clr],i)=>(
        <g key={r}>
          <rect x={14+(i%2)*100} y={28+(Math.floor(i/2))*55} width={w*0.44} height={h*0.44} rx="4"
            fill={clr} opacity="0.7" />
          <text x={14+(i%2)*100+w*0.22} y={28+(Math.floor(i/2))*55+h*0.26} fontSize="8"
            fill="#ffe0c0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{r}</text>
        </g>
      ))}
    </g>

    {/* Stats */}
    {[['+80%','Conv. Lift'],['300+','Videos'],['3-day','Delivery']].map(([v,l],i)=>(
      <g key={l} filter="url(#pv-shadow)" transform={`translate(${24+i*154},182)`}>
        <rect width="134" height="52" rx="10" fill="url(#pv-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#060200" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#040100" />
        <text x="14" y="22" fontSize="7" fill="#7a4020" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#e09060" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Platform row */}
    <g filter="url(#pv-shadow)" transform="translate(24,252)">
      <rect width="432" height="42" rx="12" fill="url(#pv-card)" />
      <polygon points="432,12 436,16 436,50 432,46" fill="#0e0604" />
      <polygon points="12,42 16,46 436,46 432,42" fill="#0a0402" />
      {['Amazon','Shopify','Instagram','TikTok','YouTube'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*86} y={10} width={76} height={22} rx="6" fill="#1e1008" />
          <text x={50+i*86} y={25} fontSize="8" fill="#e09060" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function ProductVideoEditing() {
  return (
    <ServicePage
      badge="Product Video Editing"
      headline={<>Videos That Make<br /><em>Products Irresistible.</em></>}
      description="Compelling product video editing for e-commerce, Amazon listings, social ads, and launch campaigns — crafted to drive clicks and conversions."
      cta1={{ label: 'Send Your Footage →', to: '/contact' }}
      cta2={{ label: 'View Examples', to: '/portfolio' }}
      heroVisual={<ProdVideoVisual />}
      heroMetrics={[
        { icon: '🛒', val: '+80%', label: 'Conversion Lift' },
        { icon: '🎬', val: '300+', label: 'Product Videos' },
        { icon: '⚡', val: '3-day', label: 'Delivery' },
      ]}
      stats={[
        { val: '+80%', label: 'Avg. Conversion Lift' },
        { val: '300+', label: 'Product Videos Edited' },
        { val: '3-day', label: 'Average Turnaround' },
        { val: '98%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'E-Commerce Product Videos', desc: 'Short, punchy product showcase videos optimised for Amazon, Shopify, and brand websites.' },
        { icon: '◈', title: 'Social Ad Cuts', desc: 'Vertical and square cuts for Instagram, TikTok, Facebook, and Pinterest ads that stop scrollers.' },
        { icon: '◆', title: 'Feature Highlight Reels', desc: 'Focused edits that showcase key product features with on-screen text and callouts.' },
        { icon: '✦', title: 'Unboxing Video Editing', desc: 'Engaging unboxing edits with music, text overlays, and colour grading for maximum shareability.' },
        { icon: '⬡', title: 'Before & After Edits', desc: 'Side-by-side or split-screen edits ideal for beauty, health, and lifestyle products.' },
        { icon: '❋', title: 'Multi-Ratio Export', desc: 'Delivered in 16:9, 1:1, 9:16, and 4:5 for all platform placements.' },
      ]}
      why={[
        { title: 'Conversion-Focused', body: 'Every edit is designed to move viewers closer to a purchase — not just look pretty.' },
        { title: 'E-Commerce Experts', body: 'We understand Amazon, Shopify, and social commerce requirements inside and out.' },
        { title: 'Fast Turnaround', body: 'Standard product videos delivered in 3 business days — rush options available.' },
        { title: 'All Platforms Covered', body: 'One shoot, multiple formats — we optimise and export for every channel you sell on.' },
      ]}
      faqs={[
        { q: 'Do I need professional footage for you to edit?', a: 'No — we can work with smartphone footage and still deliver a polished, professional result.' },
        { q: 'Can you add music and sound effects?', a: 'Yes — we have access to a licensed music library and add appropriate audio as standard.' },
        { q: 'What length videos do you produce?', a: 'Typically 15 seconds to 3 minutes depending on the platform and use case.' },
        { q: 'Can you edit multiple product videos in bulk?', a: 'Yes — bulk editing packages are available with discounted per-video pricing.' },
      ]}
    />
  )
}
