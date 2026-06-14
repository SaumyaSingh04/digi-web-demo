import ServicePage from '../components/ServicePage/ServicePage'
export default function WhiteLabelSMM() {
  return (
    <ServicePage
      badge="White Label Social Media Marketing"
      headline={<>Grow Your Agency<br /><em>With White Label SMM.</em></>}
      description="Fully white-labelled social media management and campaigns delivered under your brand. Your clients, your credit."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroMetrics={[
        { icon: '📱', val: '50+', label: 'Agency Partners' },
        { icon: '📊', val: '100%', label: 'Branded Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '50+', label: 'Agency Partners' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '10×', label: 'Engagement Growth' },
        { val: '95%', label: 'Partner Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'Content Creation', desc: 'Platform-native content crafted for your clients\' audience, fully branded as yours.' },
        { icon: '◈', title: 'Community Management', desc: 'Daily engagement, replies, and community building handled under your brand.' },
        { icon: '◆', title: 'Paid Social Campaigns', desc: 'Meta, LinkedIn, and TikTok ad campaigns managed for maximum ROAS.' },
        { icon: '✦', title: 'Analytics & Reporting', desc: 'Monthly branded reports with detailed performance insights for your clients.' },
        { icon: '⬡', title: 'Strategy & Calendar', desc: 'Full monthly content calendars and strategy documents ready for client review.' },
        { icon: '❋', title: 'NDA Protected', desc: 'Strict confidentiality — your clients will never know we are involved.' },
      ]}
      why={[
        { title: 'Your Brand, Our Work', body: 'Every post, report, and strategy is delivered under your agency name.' },
        { title: 'Platform Experts', body: 'Specialists in Instagram, Facebook, LinkedIn, TikTok and Twitter/X.' },
        { title: 'Scale Without Hiring', body: 'Take on unlimited social media clients without adding headcount.' },
        { title: 'No Client Conflict', body: 'We never pitch your clients directly or operate in your market.' },
      ]}
      faqs={[
        { q: 'Will my clients know you manage their social media?', a: 'Never. All work is fully white-labelled under your agency brand.' },
        { q: 'Which platforms do you support?', a: 'Instagram, Facebook, LinkedIn, TikTok, Twitter/X, YouTube, and Pinterest.' },
        { q: 'Do you create the content or just schedule it?', a: 'We handle everything — strategy, copywriting, design, scheduling, and reporting.' },
        { q: 'What is the onboarding time?', a: 'Typically 48 hours after receiving client credentials and a brief.' },
      ]}
    />
  )
}
