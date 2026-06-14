import ServicePage from '../../../components/ServicePage/ServicePage'

const EmailAutoVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ea-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="ea-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <linearGradient id="ea-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF2F8" />
        <stop offset="100%" stopColor="#E2EAF4" />
      </linearGradient>
      <filter id="ea-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#ea-bg)" />
    {/* Email sequence flow */}
    <g filter="url(#ea-shadow)" transform="translate(22,20)">
      <rect width="260" height="200" rx="14" fill="url(#ea-dark)" />
      <polygon points="260,14 264,18 264,212 260,208" fill="#040e1c" />
      <polygon points="14,200 18,204 264,204 260,200" fill="#020810" />
      <rect x="14" y="14" width="90" height="5" rx="2" fill="#3a6898" />
      {[['Day 0','Welcome Email','#3a9a70'],['Day 2','Value Content','#3a7ab0'],['Day 5','Case Study','#7a5ab0'],['Day 8','Demo Offer','#9a7a30'],['Day 12','Follow-up','#3a7ab0'],['Day 15','Close','#3a9a70']].map(([day,title,clr],i)=>(
        <g key={day}>
          <rect x="14" y={28+i*28} width="232" height="22" rx="6" fill="#0a1828" />
          <rect x="14" y={28+i*28} width="3" height="22" rx="1" fill={clr} />
          <text x="24" y={42+i*28} fontSize="7" fill={clr} fontFamily="Inter,sans-serif" fontWeight="700">{day}</text>
          <text x="70" y={42+i*28} fontSize="8" fill="#80a8d0" fontFamily="Inter,sans-serif">{title}</text>
          {i < 5 && <line x1="130" y1={50+i*28} x2="130" y2={56+i*28} stroke={clr} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />}
        </g>
      ))}
    </g>
    {/* Open rate chart */}
    <g filter="url(#ea-shadow)" transform="translate(298,20)">
      <rect width="160" height="100" rx="14" fill="url(#ea-card)" />
      <polygon points="160,14 164,18 164,108 160,104" fill="#C0C8E0" />
      <polygon points="14,100 18,104 164,104 160,100" fill="#B8C0D8" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#8890A8" />
      <text x="120" y="30" fontSize="12" fontWeight="900" fill="#1a3060" fontFamily="Inter,sans-serif">5X Opens</text>
      {[20,35,30,50,44,62,56,74,68,82].map((h,i)=>(
        <rect key={i} x={14+i*13} y={86-h*0.56} width={9} height={h*0.56} rx="2"
          fill={i>=7?'#5080a8':i>=5?'#6090b8':'#8090b8'} />
      ))}
    </g>
    {/* Stats */}
    {[['5X','Open Rate'],['90%','Automated'],['2.8X','Revenue']].map(([v,l],i)=>(
      <g key={l} filter="url(#ea-shadow)" transform={`translate(${298+0},${136+i*60})`}>
        <rect width="160" height="48" rx="10" fill="url(#ea-dark)" />
        <text x="14" y="20" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="38" fontSize="18" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Platform row */}
    <g filter="url(#ea-shadow)" transform="translate(22,236)">
      <rect width="436" height="44" rx="10" fill="url(#ea-dark)" />
      {['HubSpot','Klaviyo','ActiveCampaign','Mailchimp','Custom SMTP'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*87} y={8} width={75} height={28} rx="7" fill="#0a1828" />
          <text x={49+i*87} y={26} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AIEmailAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<EmailAutoVisual />}
      headline={<>AI Email Automation &<br /><em>Convert More with Less Effort.</em></>}
      description="Smart email automation that writes, personalises, sends, and optimises campaigns — so your pipeline keeps moving while you focus on closing."
      cta1={{ label: 'Get Started →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '📧', val: '5X', label: 'More Opens' },
        { icon: '🤖', val: '90%', label: 'Emails Automated' },
        { icon: '📈', val: '2.8X', label: 'More Revenue' },
      ]}
      stats={[
        { val: '5X', label: 'Higher Open Rates' },
        { val: '90%', label: 'Emails on Autopilot' },
        { val: '2.8X', label: 'More Revenue from Email' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '✦', title: 'Drip Sequences', desc: 'Automated nurture sequences that move prospects from cold to closed without manual follow-up.' },
        { icon: '◎', title: 'AI Personalisation', desc: 'Dynamic content that adapts to each recipient\'s behaviour, industry, and stage in the funnel.' },
        { icon: '◈', title: 'Trigger-Based Flows', desc: 'Emails that fire automatically based on user actions — sign-ups, page visits, cart abandonment, and more.' },
        { icon: '◆', title: 'AI Subject Line Optimisation', desc: 'AI-tested subject lines and preview text that maximise open rates.' },
        { icon: '⬡', title: 'CRM Integration', desc: 'Two-way sync with your CRM so every email interaction is tracked and scored.' },
        { icon: '❋', title: 'Analytics & Reporting', desc: 'Real-time dashboards showing opens, clicks, replies, and revenue attributed to every campaign.' },
      ]}
      why={[
        { title: 'AI-First Execution', body: 'We don\'t just set up sequences — we use AI to continuously improve copy, timing, and targeting.' },
        { title: 'Platform Agnostic', body: 'We work with Mailchimp, ActiveCampaign, HubSpot, Klaviyo, and custom SMTP setups.' },
        { title: 'Fast Launch', body: 'Core email flows are live within 2 weeks. Complex multi-step sequences within 4 weeks.' },
        { title: 'Deliverability Focus', body: 'We configure SPF, DKIM, DMARC, and warm-up protocols to ensure inbox placement.' },
      ]}
      faqs={[
        { q: 'Which email platforms do you work with?', a: 'We support HubSpot, Klaviyo, ActiveCampaign, Mailchimp, and custom setups.' },
        { q: 'Can AI write the emails for us?', a: 'Yes. We use AI-assisted copywriting tailored to your brand voice and audience.' },
        { q: 'How do you avoid spam filters?', a: 'We handle full deliverability setup — domain authentication, warm-up, and list hygiene.' },
        { q: 'How soon will I see results?', a: 'Most clients see improved open and click rates within the first 30 days of going live.' },
      ]}
    />
  )
}
