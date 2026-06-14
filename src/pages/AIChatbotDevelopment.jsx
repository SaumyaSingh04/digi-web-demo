import ServicePage from '../components/ServicePage/ServicePage'

export default function AIChatbotDevelopment() {
  return (
    <ServicePage
      badge="AI & Automation"
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
