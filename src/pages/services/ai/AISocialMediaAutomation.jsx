import ServicePage from '../../../components/ServicePage/ServicePage'

const AISocialMediaVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="sm-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="sm-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="sm-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
      <filter id="sm-glow"><feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#4a7ab022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#sm-bg)" />
    {/* Central hub */}
    <circle cx="240" cy="185" r="38" fill="url(#sm-dark)" filter="url(#sm-glow)" />
    <text x="240" y="181" fontSize="10" fill="#7aaad0" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">AI</text>
    <text x="240" y="196" fontSize="7" fill="#4a80b0" fontFamily="Inter,sans-serif" textAnchor="middle">SOCIAL</text>
    {/* Platform nodes */}
    {[
      { x: 240, y: 100, label: 'IG' },
      { x: 320, y: 140, label: 'FB' },
      { x: 320, y: 230, label: 'TW' },
      { x: 240, y: 270, label: 'LI' },
      { x: 160, y: 230, label: 'YT' },
      { x: 160, y: 140, label: 'TK' },
    ].map(({ x, y, label }) => (
      <g key={label}>
        <line x1="240" y1="185" x2={x} y2={y} stroke="#4a7ab0" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
        <circle cx={x} cy={y} r="18" fill="url(#sm-dark)" />
        <text x={x} y={y + 4} fontSize="9" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
      </g>
    ))}
    {/* Workflow strip */}
    <g filter="url(#sm-shadow)" transform="translate(20,18)">
      <rect width="440" height="52" rx="12" fill="url(#sm-dark)" />
      {['Create', '→ Schedule', '→ Publish', '→ Engage', '→ Analyse'].map((step, i) => (
        <g key={step}>
          <rect x={14 + i * 84} y={16} width={72} height={18} rx="5" fill={i === 4 ? '#4a6a9a' : '#0a1828'} />
          <text x={14 + i * 84 + 36} y={29} fontSize="8" fill={i === 4 ? '#061828' : '#60a0d0'} fontFamily="Inter,sans-serif" fontWeight={i === 4 ? '800' : '500'} textAnchor="middle">{step}</text>
        </g>
      ))}
    </g>
    {/* Stats */}
    {[['10X', 'Content Output'], ['4.2X', 'Engagement'], ['60%', 'Time Saved']].map(([val, lbl], i) => (
      <g key={lbl} filter="url(#sm-shadow)" transform={`translate(${20 + i * 154}, 296)`}>
        <rect width="134" height="48" rx="10" fill="url(#sm-dark)" />
        <text x="14" y="20" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{lbl}</text>
        <text x="14" y="40" fontSize="18" fontWeight="900" fill="#4a6a9a" fontFamily="Inter,sans-serif">{val}</text>
      </g>
    ))}
  </svg>
)

export default function AISocialMediaAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      headline={<>AI Social Media Automation<br /><em>That Grows Your Brand.</em></>}
      description="Automate content creation, scheduling, posting, and engagement across all social platforms — so your brand stays active 24/7 without the manual grind."
      cta1={{ label: 'Automate Social Media →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<AISocialMediaVisual />}
      heroMetrics={[
        { icon: '📱', val: '10X', label: 'Content Output' },
        { icon: '📈', val: '4.2X', label: 'Engagement Boost' },
        { icon: '⏱️', val: '60%', label: 'Time Saved' },
      ]}
      stats={[
        { val: '10X', label: 'More Content Published' },
        { val: '4.2X', label: 'Higher Engagement Rates' },
        { val: '60%', label: 'Reduction in Manual Effort' },
        { val: '3X', label: 'Faster Brand Growth' },
      ]}
      delivers={[
        { icon: '✦', title: 'AI Content Generation', desc: 'Auto-generate captions, hashtags, and post ideas tailored to your brand voice and platform.' },
        { icon: '📅', title: 'Smart Scheduling', desc: 'Post at optimal times across Instagram, Facebook, LinkedIn, Twitter, and TikTok automatically.' },
        { icon: '💬', title: 'Auto Engagement', desc: 'AI monitors and responds to comments and DMs, keeping your audience engaged without manual effort.' },
        { icon: '📊', title: 'Performance Analytics', desc: 'Real-time dashboards tracking reach, engagement, follower growth, and ROI per platform.' },
        { icon: '🎯', title: 'Competitor Monitoring', desc: 'Track competitor content and trending topics to keep your strategy ahead of the curve.' },
        { icon: '🔄', title: 'Content Repurposing', desc: 'Automatically repurpose blogs, videos, and podcasts into platform-specific social posts.' },
      ]}
      why={[
        { title: 'Multi-Platform Coverage', body: 'Manage all social channels from a single AI-powered system — no juggling multiple tools.' },
        { title: 'Brand-Consistent Output', body: 'AI learns your tone, style, and brand guidelines to produce on-brand content every time.' },
        { title: 'Data-Driven Strategy', body: 'Every decision is backed by real performance data — we iterate based on what actually works.' },
        { title: 'Hands-Free Operation', body: 'Once set up, the system runs autonomously. You review, approve, and grow.' },
      ]}
      faqs={[
        { q: 'Which social platforms do you automate?', a: 'We support Instagram, Facebook, LinkedIn, Twitter/X, TikTok, YouTube, and Pinterest.' },
        { q: 'Does AI-generated content sound authentic?', a: 'Yes. Our AI is trained on your existing content, brand guidelines, and audience data to produce authentic, on-brand posts.' },
        { q: 'Can I still review posts before they go live?', a: 'Absolutely. You can set an approval workflow so nothing publishes without your sign-off.' },
        { q: 'How soon will I see growth?', a: 'Most clients see measurable engagement improvements within the first 30–60 days of consistent automated posting.' },
      ]}
    />
  )
}
