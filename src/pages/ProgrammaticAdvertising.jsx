import ServicePage from '../components/ServicePage/ServicePage'

export default function ProgrammaticAdvertising() {
  return (
    <ServicePage
      badge="Programmatic Advertising"
      headline={<>Reach the Right Audience<br /><em>At the Right Moment.</em></>}
      description="Data-driven programmatic advertising that places your brand in front of high-intent audiences across display, video, and connected TV — automatically optimised for ROAS."
      cta1={{ label: 'Launch Your Campaign →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎯', val: '95%', label: 'Audience Accuracy' },
        { icon: '📈', val: '3.5x', label: 'Avg. ROAS' },
        { icon: '🌐', val: '10B+', label: 'Daily Impressions' },
      ]}
      stats={[
        { val: '3.5x', label: 'Average ROAS' },
        { val: '95%', label: 'Audience Targeting Accuracy' },
        { val: '10B+', label: 'Daily Impressions Available' },
        { val: '-40%', label: 'Avg. CPM Reduction' },
      ]}
      delivers={[
        { icon: '◎', title: 'Display & Banner Advertising', desc: 'Automated real-time bidding on premium display inventory across millions of publisher sites.' },
        { icon: '◈', title: 'Programmatic Video', desc: 'Pre-roll, mid-roll, and outstream video ads placed programmatically on top-tier video networks.' },
        { icon: '◆', title: 'Connected TV (CTV)', desc: 'Reach cord-cutters on streaming platforms with targeted, unskippable ads on the big screen.' },
        { icon: '✦', title: 'Audience Segmentation', desc: 'Custom audience segments built from first-party data, lookalikes, and intent signals.' },
        { icon: '⬡', title: 'Retargeting & Prospecting', desc: 'Precision retargeting for warm audiences and prospecting campaigns for cold reach at scale.' },
        { icon: '❋', title: 'Real-Time Reporting', desc: 'Live dashboards and monthly reports showing impressions, CTR, conversions, and ROAS.' },
      ]}
      why={[
        { title: 'Algorithmic Optimisation', body: 'Machine learning adjusts bids, placements, and creatives in real-time to minimise CPM and maximise conversions.' },
        { title: 'Premium Inventory Access', body: 'We access top-tier supply-side platforms giving your ads placement on brand-safe, high-traffic publishers.' },
        { title: 'First-Party Data Activation', body: 'We help you activate your CRM and customer data to target your highest-value audience segments.' },
        { title: 'Full Funnel Coverage', body: 'From awareness display to retargeting conversions — programmatic covers every stage of the buyer journey.' },
      ]}
      faqs={[
        { q: 'What is programmatic advertising?', a: 'Programmatic uses automated technology and real-time bidding to buy and place digital ads, removing manual ad buying and enabling precise audience targeting at scale.' },
        { q: 'What is the minimum budget for programmatic campaigns?', a: 'We recommend a minimum of £2,000/month in ad spend for meaningful data and optimisation.' },
        { q: 'Which ad formats do you support?', a: 'Display banners, rich media, pre-roll video, CTV, native ads, and audio advertising.' },
        { q: 'How do you measure campaign success?', a: 'We track impressions, CTR, viewability, conversions, ROAS, and CPM benchmarked against industry standards.' },
      ]}
    />
  )
}
