import ServicePage from '../../../components/ServicePage/ServicePage'

const PSDtoHTMLVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ph-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0a1420" />
        <stop offset="100%" stopColor="#060c18" />
      </linearGradient>
      <linearGradient id="ph-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#102030" />
        <stop offset="100%" stopColor="#0a1828" />
      </linearGradient>
      <linearGradient id="ph-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#060e1a" />
        <stop offset="100%" stopColor="#030810" />
      </linearGradient>
      <filter id="ph-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#ph-bg)" />

    {/* Left: PSD/Design file */}
    <g filter="url(#ph-shadow)" transform="translate(22,30)">
      <rect width="176" height="210" rx="14" fill="#2a1840" />
      <polygon points="176,14 180,18 180,222 176,218" fill="#1e1030" />
      <polygon points="14,210 18,214 180,214 176,210" fill="#180c28" />
      {/* PSD header */}
      <rect x="14" y="14" width="148" height="18" rx="4" fill="#3a2058" />
      <text x="88" y="26" fontSize="8" fill="#c090e0" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">design.psd</text>
      {/* Layers panel */}
      {['Hero Section','Nav Bar','Card Grid','Footer','Button'].map((l,i)=>(
        <g key={l}>
          <rect x={14} y={38+i*28} width={148} height={22} rx="4" fill={i===0?'#3a2058':'#221440'} />
          <rect x={18} y={42+i*28} width={8} height={8} rx="2" fill={['#e060c0','#60a0e0','#60d0a0','#e0a040','#c060e0'][i]} />
          <text x={32} y={51+i*28} fontSize="7" fill="#9070c0" fontFamily="Inter,sans-serif">{l}</text>
        </g>
      ))}
      {/* Design preview */}
      <rect x="14" y="182" width="148" height="22" rx="4" fill="#1a0e30" />
      <rect x="22" y="186" width="50" height="6" rx="2" fill="#c090e0" opacity="0.3" />
      <rect x="80" y="186" width="40" height="6" rx="2" fill="#9060c0" opacity="0.3" />
      <rect x="22" y="195" width="80" height="4" rx="2" fill="#7050a0" opacity="0.3" />
    </g>

    {/* Arrow */}
    <g transform="translate(214,130)">
      <path d="M0,0 L28,20 L0,40" stroke="#5080b8" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Right: HTML output */}
    <g filter="url(#ph-shadow)" transform="translate(258,30)">
      <rect width="200" height="210" rx="14" fill="url(#ph-dark)" />
      <polygon points="200,14 204,18 204,222 200,218" fill="#030810" />
      <polygon points="14,210 18,214 204,214 200,210" fill="#020610" />
      {/* Code header */}
      <rect x="14" y="14" width="172" height="18" rx="4" fill="#0e1c2c" />
      <text x="100" y="26" fontSize="8" fill="#70b0d8" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">index.html</text>
      {/* HTML code lines */}
      {[
        ['#5090c0',60],['#70a8d0',40],['#90c8e0',80],
        ['#60a0c8',50],['#4888b8',70],['#80b8d8',44],['#5090c0',60],
      ].map(([c,w],i)=>(
        <rect key={i} x={14} y={38+i*22} width={w} height={6} rx="2" fill={c} opacity="0.65" />
      ))}
      {/* Pixel perfect badge */}
      <rect x="14" y="190" width="172" height="14" rx="4" fill="#1a3050" />
      <text x="100" y="200" fontSize="7" fill="#70b8e0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">100% Pixel Perfect</text>
    </g>

    {/* Stats */}
    {[['300+','Files Converted'],['72hr','Delivery'],['100%','Pixel Perfect']].map(([v,l],i)=>(
      <g key={l} filter="url(#ph-shadow)" transform={`translate(${22+i*154},258)`}>
        <rect width="134" height="52" rx="10" fill="url(#ph-card)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#081220" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#060e18" />
        <text x="14" y="22" fontSize="7" fill="#3a6890" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#70b0d8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Formats row */}
    <g filter="url(#ph-shadow)" transform="translate(22,326)">
      <rect width="432" height="24" rx="8" fill="url(#ph-dark)" />
      <polygon points="432,8 436,12 436,28 432,24" fill="#030810" />
      <polygon points="8,24 12,28 436,28 432,24" fill="#020610" />
      {['PSD','Figma','Adobe XD','Sketch','Any Design Format'].map((f,i)=>(
        <text key={f} x={44+i*90} y={18} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{f}</text>
      ))}
    </g>
  </svg>
)

export default function PSDtoHTML() {
  return (
    <ServicePage
      badge="PSD to HTML"
      headline={<>Pixel-Perfect HTML<br /><em>From Any Design File.</em></>}
      description="We convert your PSD, Figma, XD, or Sketch designs into clean, responsive, cross-browser HTML/CSS code — handcrafted and production-ready."
      cta1={{ label: 'Send Your PSD →', to: '/contact' }}
      cta2={{ label: 'View Examples', to: '/portfolio' }}
      heroVisual={<PSDtoHTMLVisual />}
      heroMetrics={[
        { icon: '🖥️', val: '100%', label: 'Pixel Perfect' },
        { icon: '📱', val: '100%', label: 'Responsive' },
        { icon: '⚡', val: '72hr', label: 'Delivery' },
      ]}
      stats={[
        { val: '300+', label: 'Files Converted' },
        { val: '100%', label: 'Pixel-Perfect Accuracy' },
        { val: '72hr', label: 'Average Delivery' },
        { val: '99%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'PSD / Figma / XD to HTML', desc: 'Any design format converted to semantic, valid HTML5 and CSS3 with no templates.' },
        { icon: '◈', title: 'Responsive Layouts', desc: 'Mobile-first CSS that adapts flawlessly to all screen sizes and orientations.' },
        { icon: '◆', title: 'Cross-Browser Compatibility', desc: 'Tested and verified across Chrome, Firefox, Safari, and Edge.' },
        { icon: '✦', title: 'Clean, Commented Code', desc: 'Well-structured, commented code that any developer can easily maintain or extend.' },
        { icon: '⬡', title: 'CSS Animations', desc: 'Subtle transitions and animations coded exactly as specified in the design.' },
        { icon: '❋', title: 'CMS / Framework Integration', desc: 'HTML sliced and integrated into WordPress, React, or any framework on request.' },
      ]}
      why={[
        { title: 'Hand-Coded Quality', body: 'No page builders or auto-generated code — every line is written by an experienced developer.' },
        { title: 'SEO-Friendly Markup', body: 'Semantic HTML5 structure that search engines and screen readers can parse correctly.' },
        { title: 'Fast Load Times', body: 'Optimised CSS and minimal markup ensure your pages load at top speed.' },
        { title: 'Quick Turnaround', body: 'Standard conversions delivered within 72 hours — rush delivery available on request.' },
      ]}
      faqs={[
        { q: 'Which design formats do you accept?', a: 'PSD, Figma, Adobe XD, Sketch, and any other common design file format.' },
        { q: 'Will the HTML be responsive?', a: 'Yes — all conversions are fully responsive and mobile-first by default.' },
        { q: 'Do you integrate into WordPress?', a: 'Yes — we can slice and integrate your HTML into a custom WordPress theme upon request.' },
        { q: 'What if my design has multiple pages?', a: 'We provide per-page pricing for multi-page projects — get in touch for a custom quote.' },
      ]}
    />
  )
}
