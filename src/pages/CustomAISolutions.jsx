import ServicePage from '../components/ServicePage/ServicePage'

export default function CustomAISolutions() {
  return (
    <ServicePage
      badge="AI & Automation"
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
