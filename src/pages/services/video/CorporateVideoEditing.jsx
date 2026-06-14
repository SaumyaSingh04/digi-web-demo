import ServicePage from '../../../components/ServicePage/ServicePage'

const CorpVideoVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="cv-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0e0e1a" />
        <stop offset="100%" stopColor="#060610" />
      </linearGradient>
      <linearGradient id="cv-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="100%" stopColor="#0e0e20" />
      </linearGradient>
      <linearGradient id="cv-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#080814" />
        <stop offset="100%" stopColor="#040408" />
      </linearGradient>
      <filter id="cv-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000030" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#cv-bg)" />

    {/* 3D isometric camera body */}
    <polygon points="130,200 240,232 350,200 240,168" fill="#2a2a40" />
    <polygon points="130,160 130,200 240,232 240,192" fill="#1e1e32" />
    <polygon points="350,160 350,200 240,232 240,192" fill="#36364a" />
    <polygon points="130,160 240,192 350,160 240,128" fill="#3a3a52" />
    {/* Lens */}
    <circle cx="240" cy="160" r="28" fill="#101018" stroke="#4a4a60" strokeWidth="3" />
    <circle cx="240" cy="160" r="18" fill="#0a0a12" stroke="#3a3a50" strokeWidth="2" />
    <circle cx="240" cy="160" r="9" fill="#181820" />
    <circle cx="234" cy="154" r="3" fill="#6060a0" opacity="0.5" />

    {/* Timeline card */}
    <g filter="url(#cv-shadow)" transform="translate(24,24)">
      <rect width="432" height="52" rx="12" fill="url(#cv-card)" />
      <polygon points="432,12 436,16 436,60 432,56" fill="#0c0c1c" />
      <polygon points="12,52 16,56 436,56 432,52" fill="#080810" />
      <rect x="12" y="14" width="60" height="4" rx="2" fill="#4040a0" />
      {/* Timeline track */}
      <rect x="12" y="24" width="408" height="6" rx="3" fill="#0e0e1a" />
      {[0,0.1,0.22,0.38,0.55,0.7,0.82,0.92].map((p,i)=>(
        <rect key={i} x={12+p*408} y={22} width={[40,30,50,28,44,32,38,22][i]} height={10} rx="3"
          fill={['#5050b0','#c08040','#4080c0','#c05050','#5080c0','#a06040','#5090b0','#8060a0'][i]} opacity="0.8" />
      ))}
      {/* Playhead */}
      <rect x="240" y="18" width="2" height="18" rx="1" fill="#ffffff" opacity="0.8" />
      <polygon points="239,18 241,18 240,14" fill="#ffffff" opacity="0.8" />
    </g>

    {/* Preview screen */}
    <g filter="url(#cv-shadow)" transform="translate(24,90)">
      <rect width="190" height="120" rx="14" fill="url(#cv-screen)" />
      <polygon points="190,14 194,18 194,128 190,124" fill="#020208" />
      <polygon points="14,120 18,124 194,124 190,120" fill="#010106" />
      {/* Film frame */}
      <rect x="14" y="14" width="162" height="90" rx="4" fill="#0c0c18" />
      <rect x="22" y="22" width="146" height="74" rx="3" fill="#14141e" />
      {/* Fake scene */}
      <rect x="22" y="22" width="146" height="40" fill="#1a1a2a" />
      <rect x="22" y="62" width="146" height="34" fill="#0e0e18" />
      <polygon points="95,36 115,46 95,56" fill="#ffffff" opacity="0.6" />
      {/* Lower third */}
      <rect x="22" y="82" width="100" height="14" rx="2" fill="#2a2a50" opacity="0.9" />
      <rect x="26" y="85" width="50" height="4" rx="1" fill="#8080c0" />
      <rect x="26" y="91" width="36" height="3" rx="1" fill="#6060a0" />
    </g>

    {/* Colour grade panel */}
    <g filter="url(#cv-shadow)" transform="translate(230,90)">
      <rect width="226" height="120" rx="14" fill="url(#cv-card)" />
      <polygon points="226,14 230,18 230,128 226,124" fill="#0c0c1c" />
      <polygon points="14,120 18,124 230,124 226,120" fill="#080810" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#4040a0" />
      {/* RGB scopes */}
      {[['R','#c04040',14],['G','#40c040',90],['B','#4040c0',166]].map(([ch,clr,x])=>(
        <g key={ch}>
          <rect x={x} y={28} width={60} height={70} rx="4" fill="#0a0a14" />
          <text x={x+30} y={42} fontSize="8" fill={clr} fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="700">{ch}</text>
          {[0,1,2,3,4].map(i=>(
            <rect key={i} x={x+8+i*10} y={88-[30,50,44,60,38][i]*0.5} width={7}
              height={[30,50,44,60,38][i]*0.5} rx="2" fill={clr} opacity="0.7" />
          ))}
        </g>
      ))}
    </g>

    {/* Stats row */}
    {[['200+','Videos Edited'],['4K','Quality'],['5-day','Delivery']].map(([v,l],i)=>(
      <g key={l} filter="url(#cv-shadow)" transform={`translate(${24+i*154},228)`}>
        <rect width="134" height="52" rx="10" fill="url(#cv-card)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#0c0c1c" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#080810" />
        <text x="14" y="22" fontSize="7" fill="#4040a0" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#9090d0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Export formats badge */}
    <g filter="url(#cv-shadow)" transform="translate(24,296)">
      <rect width="432" height="36" rx="10" fill="url(#cv-screen)" />
      <polygon points="432,10 436,14 436,42 432,38" fill="#020208" />
      <polygon points="10,36 14,40 436,40 432,36" fill="#010106" />
      {['MP4','MOV','4K','HD','CC'].map((f,i)=>(
        <g key={f}>
          <rect x={14+i*84} y={8} width={70} height={20} rx="5" fill="#181828" />
          <text x={49+i*84} y={22} fontSize="9" fill="#7070b0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{f}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function CorporateVideoEditing() {
  return (
    <ServicePage
      badge="Corporate Video Editing"
      headline={<>Professional Videos That<br /><em>Represent Your Brand.</em></>}
      description="High-quality corporate video editing for brand films, company overviews, investor presentations, and internal communications — polished and on-brand."
      cta1={{ label: 'Send Your Footage →', to: '/contact' }}
      cta2={{ label: 'View Showreel', to: '/portfolio' }}
      heroVisual={<CorpVideoVisual />}
      heroMetrics={[
        { icon: '🎬', val: '200+', label: 'Videos Edited' },
        { icon: '⚡', val: '5-day', label: 'Delivery' },
        { icon: '🏆', val: '4K', label: 'Quality Output' },
      ]}
      stats={[
        { val: '200+', label: 'Corporate Videos Delivered' },
        { val: '4K', label: 'Maximum Output Quality' },
        { val: '97%', label: 'Client Satisfaction' },
        { val: '5-day', label: 'Average Turnaround' },
      ]}
      delivers={[
        { icon: '◎', title: 'Brand Film Editing', desc: 'Company overview and brand story videos edited to impress investors, partners, and clients.' },
        { icon: '◈', title: 'Colour Grading', desc: 'Cinematic colour grading and correction to give your footage a consistent, professional look.' },
        { icon: '◆', title: 'Motion Graphics', desc: 'Animated lower-thirds, titles, and branded intros/outros that reinforce your identity.' },
        { icon: '✦', title: 'Audio Mastering', desc: 'Noise reduction, sound balancing, and music sync for crisp, professional audio.' },
        { icon: '⬡', title: 'Multi-Platform Export', desc: 'Exported in optimal formats and resolutions for YouTube, LinkedIn, website, and broadcast.' },
        { icon: '❋', title: 'Subtitles & Captions', desc: 'Accurate, styled subtitles added for accessibility and silent-view engagement.' },
      ]}
      why={[
        { title: 'Brand-Aligned Editing', body: 'We study your brand guidelines to ensure every cut, colour, and graphic reflects your identity.' },
        { title: 'Experienced Editors', body: 'Our editors have worked on corporate content for global brands across multiple industries.' },
        { title: 'Revision-Friendly Process', body: 'Structured review rounds ensure you have full creative control at every stage.' },
        { title: 'Secure File Handling', body: 'All footage is handled under NDA and deleted from our systems after project completion.' },
      ]}
      faqs={[
        { q: 'What footage formats do you accept?', a: 'All major formats including MP4, MOV, MXF, AVI, and RAW camera files.' },
        { q: 'Do you provide voiceover or script writing?', a: 'Yes — voiceover recording and script writing are available as add-on services.' },
        { q: 'How long does editing take?', a: 'A standard 2–3 minute corporate video is delivered within 5 business days.' },
        { q: 'Can you add our logo and brand colours to the video?', a: 'Absolutely — all branded elements including logo animations are included as standard.' },
      ]}
    />
  )
}
