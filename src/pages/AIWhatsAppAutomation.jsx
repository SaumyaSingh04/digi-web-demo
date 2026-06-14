import ServicePage from '../components/ServicePage/ServicePage'

export default function AIWhatsAppAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
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
