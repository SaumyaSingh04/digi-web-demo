import ServicePage from '../components/ServicePage/ServicePage'

export default function AICustomerSupportAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
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
