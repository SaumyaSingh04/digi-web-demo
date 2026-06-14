import ServicePage from '../components/ServicePage/ServicePage'

const CustomAIVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="cai-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="cai-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="cai-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
      <filter id="cai-glow"><feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#3a6ab022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#cai-bg)" />
    {/* Central AI brain */}
    <circle cx="240" cy="170" r="50" fill="url(#cai-dark)" filter="url(#cai-glow)" />
    <text x="240" y="165" fontSize="14" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif" textAnchor="middle">AI</text>
    <text x="240" y="182" fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" textAnchor="middle">CUSTOM</text>
    {/* Connected modules */}
    {[
      {x:80,y:80,label:'Fine-Tuned LLM'},
      {x:400,y:80,label:'Predictive Model'},
      {x:60,y:260,label:'Doc Processing'},
      {x:420,y:260,label:'AI Agents'},
      {x:240,y:40,label:'Data Pipeline'},
      {x:240,y:310,label:'API Integration'},
    ].map(({x,y,label})=>(
      <g key={label}>
        <line x1={240} y1={170} x2={x} y2={y} stroke="#3a6a9a" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
        <rect x={x-52} y={y-14} width={104} height={28} rx="8" fill="url(#cai-dark)" />
        <text x={x} y={y+5} fontSize="8" fontWeight="700" fill="#4a80b0" fontFamily="Inter,sans-serif" textAnchor="middle">{label}</text>
      </g>
    ))}
    {/* Stats bottom */}
    {[['100%','Custom Built'],['10X','Productivity'],['3.5X','ROI']].map(([v,l],i)=>(
      <g key={l} filter="url(#cai-shadow)" transform={`translate(${22+i*154},316)`}>
        <rect width="134" height="32" rx="8" fill="url(#cai-dark)" />
        <text x="14" y="14" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="80" y="26" fontSize="14" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif" textAnchor="middle">{v}</text>
      </g>
    ))}
  </svg>
)

export default function CustomAISolutions() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<CustomAIVisual />}
      headline={<>Custom AI Solutions Built<br /><em>Exactly for Your Business.</em></>}
      description="Bespoke AI systems designed around your unique workflows, data, and goals — from intelligent agents to fully integrated automation ecosystems."
      cta1={{ label: 'Build My AI Solution →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🤖', val: '100%', label: 'Custom Built' },
        { icon: '⚡', val: '10X', label: 'Productivity Gain' },
        { icon: '📈', val: '3.5X', label: 'Average ROI' },
      ]}
      stats={[
        { val: '100%', label: 'Tailored to Your Stack' },
        { val: '10X', label: 'Productivity Gains' },
        { val: '3.5X', label: 'Average ROI' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '✦', title: 'Custom AI Agents', desc: 'Purpose-built autonomous agents that perform multi-step tasks across your business systems.' },
        { icon: '◎', title: 'LLM Fine-Tuning', desc: 'Language models trained on your proprietary data for domain-specific intelligence and accuracy.' },
        { icon: '◈', title: 'AI API Integrations', desc: 'Seamlessly connect AI capabilities into your existing apps, CRMs, ERPs, and internal tools.' },
        { icon: '◆', title: 'Predictive Models', desc: 'Machine learning models that forecast demand, churn, revenue, and operational bottlenecks.' },
        { icon: '⬡', title: 'Intelligent Document Processing', desc: 'AI that extracts, classifies, and processes data from documents, contracts, and forms at scale.' },
        { icon: '❋', title: 'AI Strategy Consulting', desc: 'End-to-end AI roadmap — from use-case discovery to deployment and ROI measurement.' },
      ]}
      why={[
        { title: 'Built for Your Exact Problem', body: 'No off-the-shelf tools — every solution is engineered from scratch around your specific business context.' },
        { title: 'Full-Stack AI Expertise', body: 'From data pipelines and model training to front-end interfaces and production deployment.' },
        { title: 'Rapid Prototyping', body: 'We validate ideas with working prototypes in days, so you see results before full investment.' },
        { title: 'Ongoing Support & Iteration', body: 'AI systems evolve. We monitor, retrain, and continuously improve every solution we build.' },
      ]}
      faqs={[
        { q: 'What industries do you build custom AI for?', a: 'We work across e-commerce, healthcare, finance, real estate, SaaS, and professional services — any industry with data and repetitive processes.' },
        { q: 'How long does a custom AI solution take?', a: 'Simple integrations take 2–4 weeks. Complex custom models and agents typically take 6–12 weeks from discovery to launch.' },
        { q: 'Do we need our own data to get started?', a: 'Not always. We can work with publicly available datasets, synthetic data, or third-party APIs depending on the use case.' },
        { q: 'Who owns the AI solution after it is built?', a: 'You do. All code, models, and IP are fully transferred to you upon project completion.' },
      ]}
    />
  )
}
