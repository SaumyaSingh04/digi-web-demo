import ServicePage from '../../../components/ServicePage/ServicePage'

const SupportAutoVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="sa-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="sa-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <linearGradient id="sa-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF4F8" />
        <stop offset="100%" stopColor="#E2EEF4" />
      </linearGradient>
      <filter id="sa-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#sa-bg)" />
    {/* Ticket queue */}
    <g filter="url(#sa-shadow)" transform="translate(22,20)">
      <rect width="260" height="220" rx="14" fill="url(#sa-card)" />
      <polygon points="260,14 264,18 264,232 260,228" fill="#C0CCE0" />
      <polygon points="14,220 18,224 264,224 260,220" fill="#B8C4D8" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#8090A8" />
      {[['New Ticket','#5090b8','Billing Issue'],['AI Routing','→','Billing Bot'],['Auto Reply','#5ab870','Hi! I can help..'],['Resolved','✓','Ticket #1042'],['New Ticket','#5090b8','Order Status'],['AI Routing','→','Order Bot'],['Escalated','#e09040','Complex Query']].map(([stage,icon,detail],i)=>(
        <g key={i}>
          <rect x="14" y={26+i*26} width="232" height="20" rx="5" fill={icon==='✓'?'#d4f0da':icon==='→'?'#dde4f0':'#e8eef8'} />
          <text x="20" y={40+i*26} fontSize="7" fill="#3a6090" fontFamily="Inter,sans-serif" fontWeight="700">{stage}</text>
          <text x="220" y={40+i*26} fontSize="8" fill="#2a5080" fontFamily="Inter,sans-serif" textAnchor="end">{detail.slice(0,14)}</text>
        </g>
      ))}
    </g>
    {/* Stats */}
    {[['90%','Faster'],['75%','Auto-Resolved'],['60%','Cost Down']].map(([v,l],i)=>(
      <g key={l} filter="url(#sa-shadow)" transform={`translate(${298},${20+i*80})`}>
        <rect width="160" height="62" rx="10" fill="url(#sa-dark)" />
        <polygon points="160,10 164,14 164,68 160,64" fill="#040e1c" />
        <polygon points="10,62 14,66 164,66 160,62" fill="#020810" />
        <text x="14" y="24" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="46" fontSize="20" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Channel row */}
    <g filter="url(#sa-shadow)" transform="translate(22,256)">
      <rect width="436" height="48" rx="10" fill="url(#sa-dark)" />
      {['Email','Live Chat','WhatsApp','Social DMs','Help Desk'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*87} y={10} width={75} height={28} rx="7" fill="#0a1828" />
          <text x={49+i*87} y={28} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AICustomerSupportAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<SupportAutoVisual />}
      headline={<>AI Customer Support That<br /><em>Resolves Issues Instantly.</em></>}
      description="Automate your entire customer support pipeline with AI — faster resolutions, lower costs, and happier customers without scaling your team."
      cta1={{ label: 'Automate My Support →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '⚡', val: '90%', label: 'Faster Response' },
        { icon: '🤖', val: '75%', label: 'Auto-Resolved' },
        { icon: '💰', val: '60%', label: 'Cost Reduction' },
      ]}
      stats={[
        { val: '90%', label: 'Faster First Response Time' },
        { val: '75%', label: 'Tickets Resolved Automatically' },
        { val: '60%', label: 'Reduction in Support Costs' },
        { val: '4.8★', label: 'Average CSAT Score' },
      ]}
      delivers={[
        { icon: '✦', title: 'Automated Ticket Routing', desc: 'AI categorises and routes every ticket to the right agent or resolves it automatically.' },
        { icon: '◎', title: 'Instant FAQ Resolution', desc: 'Common queries answered instantly from your knowledge base — zero wait time.' },
        { icon: '◈', title: 'Sentiment Analysis', desc: 'Detect frustrated customers and escalate priority tickets before they churn.' },
        { icon: '◆', title: 'Multi-Channel Support', desc: 'Unified AI support across email, chat, WhatsApp, and social media.' },
        { icon: '⬡', title: 'Smart Escalation', desc: 'Seamless handoff to human agents with full conversation context when needed.' },
        { icon: '❋', title: 'Support Analytics', desc: 'Real-time dashboards showing resolution rates, CSAT, and bottlenecks.' },
      ]}
      why={[
        { title: 'Always Available', body: '24/7 support without hiring night-shift agents or outsourcing to unreliable call centres.' },
        { title: 'Scales Instantly', body: 'Handle 10 or 10,000 tickets with the same setup — no extra headcount needed.' },
        { title: 'Integrates with Your Tools', body: 'Works with Zendesk, Freshdesk, Intercom, HubSpot, and your existing helpdesk.' },
        { title: 'Improves Over Time', body: 'The more tickets it handles, the smarter and more accurate it becomes.' },
      ]}
      faqs={[
        { q: 'Can it handle returns and order issues?', a: 'Yes. We train it on your specific policies and integrate with your order management system.' },
        { q: 'What helpdesks do you integrate with?', a: 'Zendesk, Freshdesk, Intercom, HubSpot Service Hub, and custom APIs.' },
        { q: 'Will customers know they are talking to AI?', a: 'You can choose full transparency or a blended experience — we configure it per your preference.' },
        { q: 'How quickly can we go live?', a: 'Basic setup in 1 week, full custom integration typically 2–4 weeks.' },
      ]}
    />
  )
}
