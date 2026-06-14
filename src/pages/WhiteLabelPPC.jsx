import ServicePage from '../components/ServicePage/ServicePage'

export default function WhiteLabelPPC() {
  return (
    <ServicePage
      badge="White Label PPC Services"
      headline={<>Resell PPC Without<br /><em>The Overhead.</em></>}
      description="Fully white-labelled Google Ads and paid search management delivered under your brand — expert execution, your clients, your revenue."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🤝', val: '50+', label: 'Agency Partners' },
        { icon: '📊', val: '100%', label: 'Branded Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '50+', label: 'Agency Partners' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '4.2x', label: 'Avg. ROAS Delivered' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Google Ads Management', desc: 'Search, Display, Shopping, and Performance Max campaigns managed and optimised under your brand.' },
        { icon: '◈', title: 'Branded Reporting', desc: 'Monthly reports fully branded with your logo and domain — no mention of us, ever.' },
        { icon: '◆', title: 'Landing Page Recommendations', desc: 'CRO insights and landing page briefs included with every campaign review.' },
        { icon: '✦', title: 'Bid Strategy & Optimisation', desc: 'Daily bid management and A/B ad testing to maximise ROAS for every client.' },
        { icon: '⬡', title: 'Keyword Research', desc: 'In-depth keyword and competitor research delivered as a white-label strategy document.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality agreements — your client relationships are always protected.' },
      ]}
      why={[
        { title: 'Your Brand, Our Work', body: 'Every report, strategy, and campaign asset is delivered under your agency name.' },
        { title: 'Certified PPC Experts', body: 'Google-certified specialists who have managed millions in ad spend across all industries.' },
        { title: 'Flexible Volume Pricing', body: 'The more clients you bring, the better your margin — pricing that scales with your agency.' },
        { title: 'No Client Conflict', body: 'We never pitch your clients directly or operate as a competing agency.' },
      ]}
      faqs={[
        { q: 'Will my clients know you manage their ads?', a: 'Never. All work is fully white-labelled under your agency brand with NDA protection.' },
        { q: 'Which ad platforms do you manage?', a: 'Google Ads, Microsoft Advertising (Bing), YouTube Ads, and Google Shopping campaigns.' },
        { q: 'Do you handle account creation and tracking setup?', a: 'Yes — full account setup, conversion tracking, and Google Analytics integration are included.' },
        { q: 'What is the minimum ad spend per client?', a: 'We recommend a minimum of £500/month ad spend per client for meaningful optimisation.' },
      ]}
    />
  )
}
