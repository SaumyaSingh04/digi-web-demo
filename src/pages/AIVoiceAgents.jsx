import ServicePage from '../components/ServicePage/ServicePage'

const AIVoiceAgentsVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="va-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="va-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="va-glow"><feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#4a7ab022" /></filter>
      <filter id="va-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#va-bg)" />
    {/* Central mic */}
    <circle cx="240" cy="180" r="42" fill="url(#va-dark)" filter="url(#va-glow)" />
    <rect x="228" y="150" width="24" height="40" rx="12" fill="#4a6a9a" />
    <path d="M218 188 Q218 208 240 208 Q262 208 262 188" stroke="#7aaad0" strokeWidth="2.5" fill="none" />
    <line x1="240" y1="208" x2="240" y2="220" stroke="#7aaad0" strokeWidth="2.5" />
    <line x1="228" y1="220" x2="252" y2="220" stroke="#7aaad0" strokeWidth="2.5" />
    {/* Sound waves */}
    {[60, 80, 100].map((r, i) => (
      <circle key={r} cx="240" cy="180" r={r} stroke="#3a5a8a" strokeWidth="1" strokeDasharray={`${4 + i * 2} ${3 + i}`} fill="none" opacity={0.5 - i * 0.1} />
    ))}
    {/* Waveform bars */}
    {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => {
      const heights = [8,14,20,28,34,40,34,28,20,14,8,14,20]
      return <rect key={i} x={60 + i * 28} y={300 - heights[i]} width="14" height={heights[i]} rx="4" fill="#3a6a9a" opacity="0.8" />
    })}
    {/* Stat cards */}
    {[['24/7','Always On'],['<1s','Response'],['99%','Accuracy']].map(([val, lbl], i) => (
      <g key={lbl} filter="url(#va-shadow)" transform={`translate(${20 + i * 154}, 18)`}>
        <rect width="134" height="52" rx="10" fill="url(#va-dark)" />
        <text x="14" y="22" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{lbl}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#4a6a9a" fontFamily="Inter,sans-serif">{val}</text>
      </g>
    ))}
  </svg>
)

export default function AIVoiceAgents() {
  return (
    <ServicePage
      badge="AI & Automation"
      headline={<>AI Voice Agents That<br /><em>Handle Calls Automatically.</em></>}
      description="Deploy intelligent voice agents that answer calls, qualify leads, book appointments, and handle support — 24/7 without a single human agent."
      cta1={{ label: 'Deploy Voice Agents →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<AIVoiceAgentsVisual />}
      heroMetrics={[
        { icon: '📞', val: '24/7', label: 'Always Available' },
        { icon: '⚡', val: '<1s', label: 'Response Time' },
        { icon: '🎯', val: '99%', label: 'Call Accuracy' },
      ]}
      stats={[
        { val: '24/7', label: 'Uninterrupted Availability' },
        { val: '80%', label: 'Call Handling Automated' },
        { val: '60%', label: 'Reduction in Support Costs' },
        { val: '3X', label: 'More Leads Qualified' },
      ]}
      delivers={[
        { icon: '📞', title: 'Inbound Call Handling', desc: 'AI voice agents answer every call instantly, route inquiries, and resolve common questions without hold times.' },
        { icon: '🤖', title: 'Lead Qualification', desc: 'Qualify prospects in real-time during the call using custom scripts aligned to your sales process.' },
        { icon: '📅', title: 'Appointment Booking', desc: 'Automatically schedule meetings and demos directly into your calendar during the conversation.' },
        { icon: '🔄', title: 'Outbound Campaigns', desc: 'Run automated outbound calling campaigns for follow-ups, reminders, and re-engagement.' },
        { icon: '🌐', title: 'Multilingual Support', desc: 'Support customers in multiple languages with natural-sounding AI voices.' },
        { icon: '📊', title: 'Call Analytics', desc: 'Full transcripts, sentiment analysis, and conversion tracking for every call.' },
      ]}
      why={[
        { title: 'Natural Conversations', body: 'Our voice agents use advanced NLP to hold fluid, context-aware conversations that feel human.' },
        { title: 'CRM Integration', body: 'Every call is logged and synced to your CRM automatically — no manual data entry required.' },
        { title: 'Rapid Deployment', body: 'Go live in days, not months. We handle setup, scripting, testing, and integration end-to-end.' },
        { title: 'Scalable Without Headcount', body: 'Handle 10 or 10,000 calls simultaneously without adding staff or infrastructure.' },
      ]}
      faqs={[
        { q: 'Can voice agents handle complex conversations?', a: 'Yes. Modern AI voice agents handle multi-turn conversations, objection handling, and complex routing with high accuracy.' },
        { q: 'What if the AI cannot resolve the query?', a: 'Calls are seamlessly escalated to a human agent with full context, so the customer never has to repeat themselves.' },
        { q: 'Which CRMs do you integrate with?', a: 'We integrate with HubSpot, Salesforce, Zoho, Pipedrive, and most major CRMs and scheduling tools.' },
        { q: 'How quickly can voice agents go live?', a: 'Typically 5–10 business days from kickoff, including scripting, testing, and integration.' },
      ]}
    />
  )
}
