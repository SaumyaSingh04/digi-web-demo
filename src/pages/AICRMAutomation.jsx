import ServicePage from '../components/ServicePage/ServicePage'

const CRMAutoVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="crma-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="crma-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1828" />
        <stop offset="100%" stopColor="#0e1c2e" />
      </linearGradient>
      <linearGradient id="crma-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF2F8" />
        <stop offset="100%" stopColor="#E2E8F4" />
      </linearGradient>
      <filter id="crma-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#crma-bg)" />
    {/* Pipeline */}
    <g filter="url(#crma-shadow)" transform="translate(22,22)">
      <rect width="436" height="160" rx="14" fill="url(#crma-card)" />
      <polygon points="436,14 440,18 440,172 436,168" fill="#C0C8E0" />
      <polygon points="14,160 18,164 440,164 436,160" fill="#B8C0D8" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#8890A8" />
      {[['New','#5a80b8'],['Qualified','#5aa080'],['Proposal','#a08050'],['Won ✓','#5aa870']].map(([col,clr],ci)=>(
        <g key={col}>
          <rect x={14+ci*108} y={26} width={98} height={12} rx="5" fill={clr} opacity="0.2" />
          <text x={63+ci*108} y={35} fontSize="7" fill={clr} fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{col}</text>
          {[0,1].map(ri=>(
            <g key={ri}>
              <rect x={14+ci*108} y={44+ri*50} width={98} height={40} rx="6" fill={ci===3?'#d4f0da':'#dce4f4'} />
              <circle cx={32+ci*108} cy={64+ri*50} r={9} fill={clr} opacity="0.3" />
              <rect x={46+ci*108} y={58+ri*50} width={50} height="4" rx="2" fill={clr} opacity="0.4" />
              <rect x={46+ci*108} y={66+ri*50} width={34} height="3" rx="1" fill="#a8b0c8" />
            </g>
          ))}
        </g>
      ))}
    </g>
    {/* Stats row */}
    {[['40%','More Deals'],['75%','Auto Follow-up'],['2X','Sales Speed']].map(([v,l],i)=>(
      <g key={l} filter="url(#crma-shadow)" transform={`translate(${22+i*154},198)`}>
        <rect width="134" height="52" rx="10" fill="url(#crma-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#040e1c" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#020810" />
        <text x="14" y="22" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize="18" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
    {/* Automation flow */}
    <g filter="url(#crma-shadow)" transform="translate(22,266)">
      <rect width="436" height="52" rx="12" fill="url(#crma-dark)" />
      {['Lead In','→ Score','→ Nurture','→ Assign','→ Close'].map((s,i)=>(
        <g key={s}>
          <rect x={12+i*86} y={12} width={74} height={28} rx="6" fill={i===4?'#3a6a9a':'#0a1828'} />
          <text x={49+i*86} y={30} fontSize="9" fill={i===4?'#c0d8f0':'#4a80b0'} fontFamily="Inter,sans-serif" fontWeight={i===4?'800':'500'} textAnchor="middle">{s}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AICRMAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<CRMAutoVisual />}
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
