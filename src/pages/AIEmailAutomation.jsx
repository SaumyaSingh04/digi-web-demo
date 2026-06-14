import ServicePage from '../components/ServicePage/ServicePage'

export default function AIEmailAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
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
