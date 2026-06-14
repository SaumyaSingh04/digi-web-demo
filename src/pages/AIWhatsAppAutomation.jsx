import ServicePage from '../components/ServicePage/ServicePage'

const WAVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wa-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="wa-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="wa-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wa-bg)" />
    {/* Phone mockup */}
    <polygon points="130,40 160,26 160,304 130,318" fill="#3a5080" />
    <polygon points="160,26 310,26 310,304 160,304" fill="url(#wa-dark)" />
    <polygon points="130,40 160,26 310,26 280,40" fill="#5a78a8" />
    <rect x="172" y="44" width="126" height="244" rx="2" fill="#0a1020" />
    <rect x="210" y="44" width="50" height="8" rx="4" fill="#060810" />
    {/* WA header */}
    <rect x="172" y="52" width="126" height="28" rx="2" fill="#0a3a0a" />
    <circle cx="186" cy="66" r="9" fill="#1a7a1a" />
    <text x="186" y="70" fontSize="9" fill="#90e090" fontFamily="Inter,sans-serif" textAnchor="middle">📱</text>
    <rect x="202" y="59" width="60" height="5" rx="2" fill="#3ab83a" />
    <rect x="202" y="68" width="40" height="4" rx="2" fill="#1a7a1a" />
    {/* Chat bubbles */}
    {[
      {x:176,y:90,w:100,side:'bot',text:'Hi! How can I help?',clr:'#0d2a0d'},
      {x:196,y:122,w:90,side:'user',text:'I want to order.',clr:'#0a3a6a'},
      {x:176,y:150,w:110,side:'bot',text:'Great! Check this link:',clr:'#0d2a0d'},
      {x:196,y:180,w:85,side:'user',text:'Looks good!',clr:'#0a3a6a'},
      {x:176,y:208,w:115,side:'bot',text:'Your order is confirmed ✓',clr:'#0d2a0d'},
    ].map(({x,y,w,text,clr},i)=>(
      <g key={i}>
        <rect x={x} y={y} width={w} height={22} rx={8} fill={clr} />
        <text x={x+8} y={y+15} fontSize="7" fill="#c0e0c0" fontFamily="Inter,sans-serif">{text}</text>
      </g>
    ))}
    {/* Stats */}
    {[['24/7','Available'],['80%','Automated'],['3X','Faster']].map(([v,l],i)=>(
      <g key={l} filter="url(#wa-shadow)" transform={`translate(${330},${20+i*80})`}>
        <rect width="128" height="62" rx="10" fill="url(#wa-dark)" />
        <text x="12" y="24" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="12" y="48" fontSize="20" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Feature row */}
    <g filter="url(#wa-shadow)" transform="translate(22,300)">
      <rect width="436" height="44" rx="10" fill="url(#wa-dark)" />
      {['Auto Replies','Lead Qualify','Appointments','Drip Flows','Broadcasts'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*87} y={8} width={75} height={28} rx="7" fill="#0a1828" />
          <text x={49+i*87} y={26} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AIWhatsAppAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<WAVisual />}
      headline={<>Automate WhatsApp &<br /><em>Engage Customers 24/7.</em></>}
      description="AI-powered WhatsApp automation that handles inquiries, sends follow-ups, qualifies leads, and books appointments — all on autopilot."
      cta1={{ label: 'Get Started →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '💬', val: '24/7', label: 'Always Available' },
        { icon: '🤖', val: '80%', label: 'Queries Automated' },
        { icon: '📈', val: '3X', label: 'Faster Response' },
      ]}
      stats={[
        { val: '24/7', label: 'Automated Responses' },
        { val: '80%', label: 'Queries Handled by AI' },
        { val: '3X', label: 'Faster Customer Response' },
        { val: '95%', label: 'Client Satisfaction Rate' },
      ]}
      delivers={[
        { icon: '✦', title: 'Automated Replies', desc: 'Instant, context-aware responses to common customer questions around the clock.' },
        { icon: '◎', title: 'Lead Qualification', desc: 'AI qualifies incoming leads through WhatsApp conversations and routes hot leads to your sales team.' },
        { icon: '◈', title: 'Drip Campaigns', desc: 'Automated WhatsApp sequences for onboarding, re-engagement, and promotional campaigns.' },
        { icon: '◆', title: 'Appointment Booking', desc: 'Let customers book meetings directly through WhatsApp without any manual effort.' },
        { icon: '⬡', title: 'CRM Sync', desc: 'Every WhatsApp interaction logged and synced to your CRM automatically.' },
        { icon: '❋', title: 'Broadcast Messages', desc: 'Send targeted bulk messages to segmented lists with high open rates.' },
      ]}
      why={[
        { title: 'WhatsApp-First Approach', body: 'We build automation natively for WhatsApp Business API for maximum reliability and reach.' },
        { title: 'Fast Setup', body: 'Your WhatsApp automation can go live in under 2 weeks with minimal input from your team.' },
        { title: 'Compliant & Secure', body: 'All automations follow WhatsApp Business Policy and GDPR guidelines.' },
        { title: 'Ongoing Optimisation', body: 'We monitor conversation flows and improve automations based on real user data.' },
      ]}
      faqs={[
        { q: 'Do I need a WhatsApp Business API account?', a: 'Yes. We can help you get verified and set up on the WhatsApp Business API as part of the onboarding process.' },
        { q: 'Can it handle complex conversations?', a: 'Yes. Our AI flows handle multi-turn conversations, fallbacks, and human handoff when needed.' },
        { q: 'What CRMs do you integrate with?', a: 'We integrate with HubSpot, Salesforce, Zoho, and most major CRMs via native connectors or webhooks.' },
        { q: 'Is it suitable for ecommerce?', a: 'Absolutely. Order confirmations, shipping updates, and cart recovery are common WhatsApp automation use cases.' },
      ]}
    />
  )
}
