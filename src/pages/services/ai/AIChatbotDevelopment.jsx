import ServicePage from '../../../components/ServicePage/ServicePage'

const ChatbotVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="cb-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="cb-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="cb-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
      <filter id="cb-glow"><feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#4a7ab022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#cb-bg)" />
    {/* Chat window */}
    <g filter="url(#cb-shadow)" transform="translate(60,20)">
      <rect width="280" height="230" rx="16" fill="url(#cb-dark)" />
      <polygon points="280,16 284,20 284,244 280,240" fill="#040e1c" />
      <polygon points="16,230 20,234 284,234 280,230" fill="#020a16" />
      {/* header */}
      <rect x="16" y="16" width="248" height="32" rx="8" fill="#0a1828" />
      <circle cx="36" cy="32" r="10" fill="#3a6a9a" />
      <text x="36" y="36" fontSize="10" fill="#fff" fontFamily="Inter,sans-serif" textAnchor="middle">🤖</text>
      <rect x="54" y="24" width="80" height="6" rx="3" fill="#3a6a9a" />
      <rect x="54" y="34" width="50" height="4" rx="2" fill="#2a5080" />
      <circle cx="252" cy="32" r="5" fill="#3ab870" />
      {/* bot messages */}
      <rect x="16" y="58" width="180" height="28" rx="10" fill="#0a1828" />
      <text x="26" y="76" fontSize="8" fill="#80b8e0" fontFamily="Inter,sans-serif">Hi! How can I help you today?</text>
      {/* user message */}
      <rect x="84" y="96" width="160" height="24" rx="10" fill="#3a5a9a" />
      <text x="94" y="112" fontSize="8" fill="#c0d8f0" fontFamily="Inter,sans-serif">I need to book a demo.</text>
      {/* bot reply */}
      <rect x="16" y="130" width="200" height="40" rx="10" fill="#0a1828" />
      <text x="26" y="146" fontSize="8" fill="#80b8e0" fontFamily="Inter,sans-serif">Sure! Let me find a slot for you.</text>
      <text x="26" y="160" fontSize="8" fill="#80b8e0" fontFamily="Inter,sans-serif">What date works best?</text>
      {/* typing indicator */}
      <rect x="16" y="182" width="60" height="22" rx="10" fill="#0a1828" />
      <circle cx="34" cy="193" r="4" fill="#3a6a9a" />
      <circle cx="46" cy="193" r="4" fill="#3a6a9a" opacity="0.6" />
      <circle cx="58" cy="193" r="4" fill="#3a6a9a" opacity="0.3" />
      {/* input bar */}
      <rect x="16" y="212" width="248" height="26" rx="8" fill="#0a1828" />
      <rect x="24" y="219" width="160" height="12" rx="4" fill="#142038" />
      <rect x="244" y="214" width="16" height="20" rx="5" fill="#3a6a9a" />
    </g>
    {/* Stats */}
    {[['24/7','Always On'],['80%','Resolved'],['3X','More Leads']].map(([v,l],i)=>(
      <g key={l} filter="url(#cb-shadow)" transform={`translate(${358+0},${20+i*80})`}>
        <rect width="104" height="62" rx="10" fill="url(#cb-dark)" />
        <text x="12" y="26" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="12" y="50" fontSize="20" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Platform row */}
    <g filter="url(#cb-shadow)" transform="translate(60,266)">
      <rect width="402" height="52" rx="12" fill="url(#cb-dark)" />
      {['Website','WhatsApp','Instagram','Messenger','Telegram'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*80} y={12} width={68} height={28} rx="7" fill="#0a1828" />
          <text x={46+i*80} y={30} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AIChatbotDevelopment() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<ChatbotVisual />}
      headline={<>AI Chatbot Development That<br /><em>Converts 24/7 Without You.</em></>}
      description="Custom AI chatbots that handle sales, support, and lead qualification round the clock — so your team focuses on closing, not answering the same questions."
      cta1={{ label: 'Build My Chatbot →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🤖', val: '24/7', label: 'Always On' },
        { icon: '⚡', val: '80%', label: 'Queries Resolved' },
        { icon: '📈', val: '3X', label: 'Lead Conversion' },
      ]}
      stats={[
        { val: '24/7', label: 'Round-the-Clock Availability' },
        { val: '80%', label: 'Queries Resolved Automatically' },
        { val: '3X', label: 'More Leads Captured' },
        { val: '60%', label: 'Reduction in Support Costs' },
      ]}
      delivers={[
        { icon: '✦', title: 'Lead Qualification Bots', desc: 'Automatically qualify and segment leads before they ever reach your sales team.' },
        { icon: '◎', title: 'Customer Support Bots', desc: 'Handle FAQs, order tracking, and complaints instantly without human intervention.' },
        { icon: '◈', title: 'Sales Assistant Bots', desc: 'Guide visitors through your offerings, answer objections, and push them to convert.' },
        { icon: '◆', title: 'Multi-Platform Deployment', desc: 'Deploy on your website, WhatsApp, Instagram, Facebook Messenger, and more.' },
        { icon: '⬡', title: 'CRM Integration', desc: 'Every conversation synced to your CRM — HubSpot, Salesforce, or any other platform.' },
        { icon: '❋', title: 'Custom Trained on Your Data', desc: 'Bots trained on your products, FAQs, and brand voice for accurate, on-brand responses.' },
      ]}
      why={[
        { title: 'No Generic Templates', body: 'Every chatbot is custom-built to your business flow, not a copy-paste template.' },
        { title: 'Fast Go-Live', body: 'Most chatbots go live within 1–2 weeks from kickoff.' },
        { title: 'Continuous Learning', body: 'We monitor conversations and retrain the bot regularly for improving accuracy.' },
        { title: 'Full Handoff Support', body: 'When a conversation needs a human, the bot hands off seamlessly with full context.' },
      ]}
      faqs={[
        { q: 'Which platforms can the chatbot be deployed on?', a: 'Website, WhatsApp, Facebook Messenger, Instagram DMs, and any platform with API access.' },
        { q: 'Can the bot handle complex queries?', a: 'Yes. We train it on your specific data and set escalation flows for edge cases it cannot handle.' },
        { q: 'How long does development take?', a: 'Typically 1–3 weeks depending on complexity and number of integrations.' },
        { q: 'Do you provide ongoing maintenance?', a: 'Yes. We offer monthly retainers for monitoring, retraining, and optimisation.' },
      ]}
    />
  )
}
