import ServicePage from '../components/ServicePage/ServicePage'

const TestVideoVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="tv-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0e1820" />
        <stop offset="100%" stopColor="#081018" />
      </linearGradient>
      <linearGradient id="tv-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#162438" />
        <stop offset="100%" stopColor="#0e1828" />
      </linearGradient>
      <linearGradient id="tv-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1220" />
        <stop offset="100%" stopColor="#040a14" />
      </linearGradient>
      <filter id="tv-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#tv-bg)" />

    {/* 3D isometric screen platform */}
    <polygon points="100,80 240,120 380,80 240,40" fill="#1e3048" />
    <polygon points="100,80 100,240 240,280 240,120" fill="#162438" />
    <polygon points="380,80 380,240 240,280 240,120" fill="#243850" />
    <polygon points="120,88 240,124 360,88 240,52" fill="#0a1a2c" />
    <circle cx="240" cy="78" r="18" fill="#1a3050" />
    <circle cx="240" cy="70" r="10" fill="#2a4a70" />
    <path d="M220,88 Q240,100 260,88" fill="#1e3858" />
    <text x="200" y="90" fontSize="28" fill="#3a7ab8" opacity="0.3" fontFamily="serif">&quot;</text>

    {/* Testimonial card */}
    <g filter="url(#tv-shadow)" transform="translate(24,24)">
      <rect width="220" height="130" rx="14" fill="url(#tv-card)" />
      <polygon points="220,14 224,18 224,142 220,138" fill="#0e1828" />
      <polygon points="14,130 18,134 224,134 220,130" fill="#0a1220" />
      <circle cx="34" cy="34" r="14" fill="#1a3050" />
      <circle cx="34" cy="28" r="7" fill="#2a4a70" />
      <rect x="56" y="22" width="80" height="6" rx="3" fill="#3a6a98" />
      <rect x="56" y="32" width="55" height="4" rx="2" fill="#2a4a78" />
      <text x="56" y="52" fontSize="12" fill="#c8a040" fontFamily="Inter,sans-serif">&#9733;&#9733;&#9733;&#9733;&#9733;</text>
      {[100,90,100,70,80].map((w,i)=>(
        <rect key={i} x={14} y={62+i*12} width={w} height={4} rx="2" fill="#2a4878" opacity="0.6" />
      ))}
      <rect x="14" y="112" width="192" height="12" rx="3" fill="#1a3858" />
      <rect x="18" y="115" width="60" height="4" rx="1" fill="#5090c0" />
      <rect x="18" y="121" width="40" height="3" rx="1" fill="#3a7090" />
    </g>

    {/* Caption track */}
    <g filter="url(#tv-shadow)" transform="translate(260,24)">
      <rect width="196" height="130" rx="14" fill="url(#tv-dark)" />
      <polygon points="196,14 200,18 200,142 196,138" fill="#040a14" />
      <polygon points="14,130 18,134 200,134 196,130" fill="#02060e" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#2a6090" />
      {['The results were...','...absolutely incredible','We saw +72% trust','in the first month.'].map((t,i)=>(
        <g key={i}>
          <rect x={14} y={28+i*24} width={168} height={18} rx="4" fill={i===2?'#1a3858':'#0e1828'} />
          <text x={20} y={41+i*24} fontSize="8" fill={i===2?'#70b0d8':'#4a7898'} fontFamily="Inter,sans-serif">{t}</text>
        </g>
      ))}
    </g>

    {/* Stats */}
    {[['+72%','Trust Lift'],['400+','Testimonials'],['48hr','Delivery']].map(([v,l],i)=>(
      <g key={l} filter="url(#tv-shadow)" transform={`translate(${24+i*154},172)`}>
        <rect width="134" height="52" rx="10" fill="url(#tv-card)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#0e1828" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#0a1220" />
        <text x="14" y="22" fontSize="7" fill="#3a6898" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#70b0e0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Export platforms */}
    <g filter="url(#tv-shadow)" transform="translate(24,240)">
      <rect width="432" height="50" rx="12" fill="url(#tv-dark)" />
      <polygon points="432,12 436,16 436,58 432,54" fill="#040a14" />
      <polygon points="12,50 16,54 436,54 432,50" fill="#02060e" />
      <rect x="14" y="12" width="80" height="4" rx="2" fill="#2a5888" />
      {['Website','YouTube','Instagram','LinkedIn','TikTok'].map((p,i)=>(
        <g key={p}>
          <rect x={14+i*86} y={22} width={76} height={20} rx="6" fill="#0e1828" />
          <text x={52+i*86} y={36} fontSize="8" fill="#70a8d0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function TestimonialVideoEditing() {
  return (
    <ServicePage
      badge="Testimonial Video Editing"
      headline={<>Turn Reviews Into<br /><em>Trust-Building Content.</em></>}
      description="Professional testimonial video editing that transforms raw client recordings into polished social proof content — ready to post and persuade."
      cta1={{ label: 'Send Your Recordings →', to: '/contact' }}
      cta2={{ label: 'View Examples', to: '/portfolio' }}
      heroVisual={<TestVideoVisual />}
      heroMetrics={[
        { icon: '⭐', val: '+72%', label: 'Trust Signal Boost' },
        { icon: '🎬', val: '400+', label: 'Testimonials Edited' },
        { icon: '⚡', val: '48hr', label: 'Turnaround' },
      ]}
      stats={[
        { val: '400+', label: 'Testimonial Videos Edited' },
        { val: '+72%', label: 'Avg. Trust Signal Increase' },
        { val: '48hr', label: 'Turnaround Time' },
        { val: '99%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'Raw Footage Cleanup', desc: 'Filler words, pauses, and awkward cuts removed so every testimonial sounds confident and natural.' },
        { icon: '◈', title: 'Branded Lower-Thirds', desc: 'Client name, company, and title displayed with your brand fonts and colours.' },
        { icon: '◆', title: 'Background Music', desc: 'Subtle licensed background music added to set the right emotional tone.' },
        { icon: '✦', title: 'Captions & Subtitles', desc: 'Accurate captions added for silent viewing — critical for social media performance.' },
        { icon: '⬡', title: 'Branded Intro & Outro', desc: 'Logo animation, brand colours, and CTA end-cards to close every testimonial on brand.' },
        { icon: '❋', title: 'Multi-Format Export', desc: 'Exported for website, YouTube, Instagram Reels, TikTok, and LinkedIn.' },
      ]}
      why={[
        { title: 'Social Proof Specialists', body: 'We know what makes testimonial content persuasive and structure every edit accordingly.' },
        { title: 'Works With Any Quality', body: 'We can enhance and clean up Zoom recordings, smartphone clips, or studio footage.' },
        { title: 'Fast 48-Hour Delivery', body: 'Most testimonial edits are returned within 48 hours of receiving your footage.' },
        { title: 'Scalable for Campaigns', body: 'Need 5 or 50 testimonials edited? Our process scales without quality loss.' },
      ]}
      faqs={[
        { q: 'Can you edit Zoom or video call recordings?', a: 'Yes — we regularly edit testimonials recorded over Zoom, Teams, or Google Meet.' },
        { q: 'Do you provide transcription?', a: 'Yes — transcription and captions are included as standard in every testimonial edit.' },
        { q: 'How long should a testimonial video be?', a: 'Ideally 60–90 seconds for social media. We can also create longer cuts for landing pages.' },
        { q: 'Can you create a highlight reel from multiple testimonials?', a: 'Yes — we offer supercut or highlight reel edits combining multiple clients into one compelling video.' },
      ]}
    />
  )
}
