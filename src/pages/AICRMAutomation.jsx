import ServicePage from '../components/ServicePage/ServicePage'

export default function AICRMAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      headline={<>AI CRM Automation &<br /><em>Close More Deals on Autopilot.</em></>}
      description="Automate your entire CRM pipeline — from lead capture to deal close — with AI that follows up, scores leads, and surfaces the right opportunities at the right time."
      cta1={{ label: 'Get Started →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎯', val: '40%', label: 'More Deals Closed' },
        { icon: '🤖', val: '75%', label: 'Follow-ups Automated' },
        { icon: '📈', val: '2X', label: 'Faster Sales Cycle' },
      ]}
      stats={[
        { val: '40%', label: 'More Deals Closed' },
        { val: '75%', label: 'Follow-ups on Autopilot' },
        { val: '2X', label: 'Faster Sales Cycle' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '✦', title: 'Lead Scoring', desc: 'AI ranks every lead by conversion likelihood so your team focuses only on hot prospects.' },
        { icon: '◎', title: 'Automated Follow-ups', desc: 'Timely, personalised follow-up sequences triggered by lead behaviour and pipeline stage.' },
        { icon: '◈', title: 'Pipeline Management', desc: 'Deals automatically move through pipeline stages based on contact actions and deal signals.' },
        { icon: '◆', title: 'Task Automation', desc: 'Auto-create tasks, reminders, and notifications for your sales reps at every deal stage.' },
        { icon: '⬡', title: 'Contact Enrichment', desc: 'AI enriches contact records with company data, social profiles, and intent signals.' },
        { icon: '❋', title: 'Revenue Forecasting', desc: 'Predictive models that forecast pipeline health and revenue with high accuracy.' },
      ]}
      why={[
        { title: 'CRM-Agnostic', body: 'We work with HubSpot, Salesforce, Zoho, Pipedrive, and custom CRM setups.' },
        { title: 'Built Around Your Process', body: 'We map your existing sales process before automating — no forced frameworks.' },
        { title: 'Quick Wins First', body: 'We prioritise high-impact automations so you see results within the first 30 days.' },
        { title: 'Training Included', body: 'Your team gets full training so they can manage and extend automations independently.' },
      ]}
      faqs={[
        { q: 'Which CRMs do you work with?', a: 'HubSpot, Salesforce, Zoho, Pipedrive, and most others via API or Zapier/Make.' },
        { q: 'Will automation work with our existing data?', a: 'Yes. We audit, clean, and migrate your data as part of the onboarding process.' },
        { q: 'How long does setup take?', a: 'Core automations go live in 2–3 weeks. Complex multi-system setups take 4–6 weeks.' },
        { q: 'Can we customise the workflows later?', a: 'Absolutely. We build modular workflows that your team can adjust as your process evolves.' },
      ]}
    />
  )
}
