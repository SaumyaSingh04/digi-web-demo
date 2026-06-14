import ServicePage from '../components/ServicePage/ServicePage'

export default function AILeadGenerationAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      headline={<>AI Lead Generation That<br /><em>Fills Your Pipeline Automatically.</em></>}
      description="Stop chasing cold leads. Our AI systems identify, qualify, and nurture high-intent prospects automatically — delivering warm leads straight to your sales team."
      cta1={{ label: 'Generate More Leads →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎯', val: '5X', label: 'More Qualified Leads' },
        { icon: '⚡', val: '70%', label: 'Less Manual Work' },
        { icon: '📈', val: '4X', label: 'Pipeline Growth' },
      ]}
      stats={[
        { val: '5X', label: 'More Qualified Leads' },
        { val: '70%', label: 'Reduction in Manual Prospecting' },
        { val: '4X', label: 'Pipeline Growth' },
        { val: '2X', label: 'Faster Sales Cycle' },
      ]}
      delivers={[
        { icon: '✦', title: 'AI Prospecting', desc: 'Identify high-intent prospects from multiple data sources automatically.' },
        { icon: '◎', title: 'Lead Scoring', desc: 'AI scores every lead based on behaviour, firmographics, and intent signals.' },
        { icon: '◈', title: 'Automated Outreach', desc: 'Personalised email and LinkedIn sequences triggered by lead behaviour.' },
        { icon: '◆', title: 'Lead Nurturing Flows', desc: 'Multi-step nurturing campaigns that warm up leads until they are ready to buy.' },
        { icon: '⬡', title: 'CRM Auto-Enrichment', desc: 'Leads automatically enriched with contact data and pushed to your CRM.' },
        { icon: '❋', title: 'Conversion Analytics', desc: 'Full funnel visibility from first touch to closed deal.' },
      ]}
      why={[
        { title: 'Quality Over Quantity', body: 'We focus on qualified pipeline, not vanity metrics. Every lead is scored and verified.' },
        { title: 'Works While You Sleep', body: 'Outreach and follow-ups run 24/7 without anyone on your team lifting a finger.' },
        { title: 'CRM Ready', body: 'All leads land in your CRM with full context, source tracking, and lead scores.' },
        { title: 'Compliant Outreach', body: 'All automation built to GDPR and CAN-SPAM standards to protect your domain reputation.' },
      ]}
      faqs={[
        { q: 'What industries does this work for?', a: 'B2B SaaS, agencies, professional services, real estate, ecommerce, and more.' },
        { q: 'Do I need a big database to start?', a: 'No. We can build your prospect list from scratch using AI-powered data sourcing.' },
        { q: 'How do you ensure lead quality?', a: 'Multi-layer scoring using intent data, firmographics, and engagement behaviour.' },
        { q: 'Can this integrate with my existing CRM?', a: 'Yes — HubSpot, Salesforce, Pipedrive, Zoho, and most others.' },
      ]}
    />
  )
}
