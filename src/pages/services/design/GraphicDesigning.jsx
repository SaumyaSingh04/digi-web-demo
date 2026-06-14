import ServicePage from '../../../components/ServicePage/ServicePage'

const GraphicVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="gd-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a0a2e" />
        <stop offset="100%" stopColor="#10061e" />
      </linearGradient>
      <linearGradient id="gd-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1040" />
        <stop offset="100%" stopColor="#1e0830" />
      </linearGradient>
      <linearGradient id="gd-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEE8" />
        <stop offset="100%" stopColor="#E8E2DC" />
      </linearGradient>
      <filter id="gd-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#gd-bg)" />
    {/* 3D isometric canvas */}
    <polygon points="80,260 240,300 400,260 240,220" fill="#2a1060" />
    <polygon points="80,200 80,260 240,300 240,240" fill="#1e0850" />
    <polygon points="400,200 400,260 240,300 240,240" fill="#341470" />
    {/* Brand colour palette card */}
    <g filter="url(#gd-shadow)" transform="translate(22,22)">
      <rect width="200" height="110" rx="14" fill="url(#gd-dark)" />
      <polygon points="200,14 204,18 204,118 200,114" fill="#180628" />
      <polygon points="14,110 18,114 204,114 200,110" fill="#120420" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#7060a8" />
      {['#9C6FBE','#C8A0E8','#6B4FA0','#E8D0F8','#3D2060'].map((c,i)=>(
        <rect key={c} x={14+i*36} y="28" width="28" height="28" rx="6" fill={c} />
      ))}
      <rect x="14" y="68" width="172" height="6" rx="3" fill="#6050a0" />
      <rect x="14" y="80" width="120" height="6" rx="3" fill="#504090" />
      <rect x="14" y="92" width="90" height="6" rx="3" fill="#403880" />
    </g>
    {/* Logo design card */}
    <g filter="url(#gd-shadow)" transform="translate(238,22)">
      <rect width="220" height="110" rx="14" fill="url(#gd-card)" />
      <polygon points="220,14 224,18 224,118 220,114" fill="#D4CEC6" />
      <polygon points="14,110 18,114 224,114 220,110" fill="#CCC6BE" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#8A8480" />
      <circle cx="80" cy="65" r="32" fill="#2a1060" opacity="0.15" />
      <circle cx="80" cy="65" r="22" fill="#9C6FBE" opacity="0.8" />
      <text x="80" y="70" fontSize="16" fontWeight="900" fill="#fff" fontFamily="Inter,sans-serif" textAnchor="middle">T</text>
      <rect x="126" y="40" width="80" height="8" rx="4" fill="#C0BAB0" />
      <rect x="126" y="54" width="60" height="6" rx="3" fill="#D0CAC0" />
      <rect x="126" y="66" width="70" height="6" rx="3" fill="#D4CEC4" />
      <rect x="126" y="78" width="50" height="6" rx="3" fill="#D8D2C8" />
    </g>
    {/* Stats row */}
    {[['500+','Designs'],['48hr','Delivery'],['98%','Approval']].map(([v,l],i)=>(
      <g key={l} filter="url(#gd-shadow)" transform={`translate(${22+i*154},150)`}>
        <rect width="134" height="52" rx="10" fill="url(#gd-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#180628" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#120420" />
        <text x="14" y="22" fontSize="7" fill="#7060a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize="18" fontWeight="900" fill="#c0a8e8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Typography showcase */}
    <g filter="url(#gd-shadow)" transform="translate(22,218)">
      <rect width="436" height="58" rx="12" fill="url(#gd-card)" />
      <polygon points="436,12 440,16 440,66 436,62" fill="#D4CEC6" />
      <polygon points="12,58 16,62 440,62 436,58" fill="#CCC6BE" />
      <text x="24" y="36" fontSize="22" fontWeight="900" fill="#2a1060" fontFamily="serif" letterSpacing="-1">Brand Identity</text>
      <text x="24" y="52" fontSize="9" fill="#9C6FBE" fontFamily="Inter,sans-serif" letterSpacing="4">VISUAL DESIGN SYSTEM</text>
      <text x="320" y="36" fontSize="11" fontWeight="700" fill="#6B4FA0" fontFamily="Inter,sans-serif">Aa</text>
      <rect x="360" y="22" width="60" height="30" rx="8" fill="#9C6FBE" />
      <text x="390" y="42" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif" textAnchor="middle">Design</text>
    </g>
    {/* Infographic preview */}
    <g filter="url(#gd-shadow)" transform="translate(22,290)">
      <rect width="436" height="46" rx="10" fill="url(#gd-dark)" />
      <polygon points="436,10 440,14 440,52 436,48" fill="#180628" />
      <polygon points="10,46 14,50 440,50 436,46" fill="#120420" />
      {[40,55,70,80,60,45,75,85,65,50].map((h,i)=>(
        <rect key={i} x={24+i*42} y={36-h*0.28} width="30" rx="3" height={h*0.28} fill={['#9C6FBE','#C8A0E8','#6B4FA0'][i%3]} opacity="0.8" />
      ))}
    </g>
  </svg>
)

export default function GraphicDesigning() {
  return (
    <ServicePage
      badge="Graphic Designing"
      heroVisual={<GraphicVisual />}
      headline={<>Visuals That<br /><em>Stop the Scroll.</em></>}
      description="Bold, brand-consistent graphic design that communicates your message instantly — from social media assets to full brand identity systems."
      cta1={{ label: 'Start a Project →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎨', val: '500+', label: 'Designs Delivered' },
        { icon: '⚡', val: '48hr', label: 'Turnaround' },
        { icon: '✅', val: '98%', label: 'Client Approval Rate' },
      ]}
      stats={[
        { val: '500+', label: 'Designs Delivered' },
        { val: '98%', label: 'Client Approval Rate' },
        { val: '200+', label: 'Brands Served' },
        { val: '48hr', label: 'Avg. Turnaround' },
      ]}
      delivers={[
        { icon: '◎', title: 'Brand Identity', desc: 'Logos, colour palettes, typography, and brand guidelines that define your visual voice.' },
        { icon: '◈', title: 'Social Media Graphics', desc: 'Scroll-stopping posts, stories, and ad creatives sized perfectly for every platform.' },
        { icon: '◆', title: 'Print Design', desc: 'Brochures, flyers, business cards, and banners built for high-impact offline presence.' },
        { icon: '✦', title: 'Infographics', desc: 'Complex data and ideas transformed into clear, shareable visual content.' },
        { icon: '⬡', title: 'Email & Newsletter Design', desc: 'On-brand email templates and newsletter layouts that drive clicks and engagement.' },
        { icon: '❋', title: 'Presentation Design', desc: 'Professional pitch decks and slide presentations that win clients and close deals.' },
      ]}
      why={[
        { title: 'Brand-First Thinking', body: 'Every design decision is rooted in your brand strategy — not just visual preference.' },
        { title: 'Fast Turnaround', body: 'Most projects delivered within 48 hours with unlimited revisions until you are satisfied.' },
        { title: 'Multi-Platform Ready', body: 'All assets exported in formats ready for web, social, print, and advertising platforms.' },
        { title: 'Dedicated Designer', body: 'You work with the same designer throughout your project for consistent, cohesive output.' },
      ]}
      faqs={[
        { q: 'What file formats will I receive?', a: 'All source files (AI, PSD, Figma) plus print-ready PDFs and web-optimised PNG/SVG/JPG exports.' },
        { q: 'How many revisions are included?', a: 'Unlimited revisions until you are 100% satisfied — we do not cap revisions.' },
        { q: 'Can you match our existing brand guidelines?', a: 'Yes — simply share your brand guide and we will design strictly within your established system.' },
        { q: 'Do you offer ongoing retainer packages?', a: 'Yes. Monthly design retainers are available for businesses that need regular creative output.' },
      ]}
    />
  )
}
