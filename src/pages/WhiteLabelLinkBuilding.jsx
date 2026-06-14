import ServicePage from '../components/ServicePage/ServicePage'

export default function WhiteLabelLinkBuilding() {
  return (
    <ServicePage
      badge="White Label Link Building"
      headline={<>High-Authority Links,<br /><em>Under Your Brand.</em></>}
      description="Fully white-labelled link building — manual outreach, editorial placements, and detailed reports delivered under your agency name."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🔗', val: 'DR 50+', label: 'Avg. Link Authority' },
        { icon: '📊', val: '100%', label: 'Branded Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '10,000+', label: 'Links Delivered' },
        { val: 'DR 50+', label: 'Average Link Authority' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Editorial Link Outreach', desc: 'Manual outreach to relevant, high-DR websites for genuine editorial placements.' },
        { icon: '◈', title: 'Guest Post Placements', desc: 'Niche-relevant guest posts written and placed on real traffic sites under your brand.' },
        { icon: '◆', title: 'Niche Edits', desc: 'Contextual link insertions into existing high-authority content for immediate SEO impact.' },
        { icon: '✦', title: 'HARO & Digital PR', desc: 'Journalist request responses and digital PR campaigns that earn authoritative media links.' },
        { icon: '⬡', title: 'Branded Link Reports', desc: 'White-label reports listing every acquired link with DR, traffic, and anchor data.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality — your clients will never know we build their links.' },
      ]}
      why={[
        { title: 'Your Brand, Our Outreach', body: 'Every link report and communication is branded as your agency\'s work.' },
        { title: 'Manual, White-Hat Only', body: 'Zero PBNs or spam — all links are earned through manual outreach and editorial standards.' },
        { title: 'Scalable Volume', body: 'From 10 to 500 links per month — we scale to match any client portfolio.' },
        { title: 'No Client Conflict', body: 'We never approach your clients directly or compete in your market.' },
      ]}
      faqs={[
        { q: 'Will my clients know you build their links?', a: 'Never. All reports and communications are fully white-labelled under your agency name.' },
        { q: 'What is the minimum DR of links you acquire?', a: 'Our standard tier targets DR 30+ with premium tiers reaching DR 60+ and beyond.' },
        { q: 'Do you use PBNs or any black-hat methods?', a: 'Absolutely not. Every link is acquired through manual outreach and editorial placements only.' },
        { q: 'How are links reported?', a: 'Full white-label reports with live URL, DR, traffic estimate, anchor text, and placement date.' },
      ]}
    />
  )
}
