import ServicePage from '../components/ServicePage/ServicePage'

export default function WhiteLabelContentMarketing() {
  return (
    <ServicePage
      badge="White Label Content Marketing"
      headline={<>Content That Ranks,<br /><em>Under Your Brand.</em></>}
      description="Fully white-labelled content marketing — strategy, writing, and distribution delivered under your agency name so your clients never know we exist."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroMetrics={[
        { icon: '✍️', val: '500+', label: 'Articles Delivered' },
        { icon: '📈', val: '+180%', label: 'Avg. Organic Traffic Lift' },
        { icon: '⚡', val: '48hr', label: 'Onboarding' },
      ]}
      stats={[
        { val: '500+', label: 'Articles Delivered Monthly' },
        { val: '+180%', label: 'Avg. Organic Traffic Lift' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'SEO Blog Writing', desc: 'Keyword-targeted, expert-level blog posts written and formatted for rankings — branded as yours.' },
        { icon: '◈', title: 'Content Strategy', desc: 'Full editorial calendars and topic cluster strategies delivered as white-label documents.' },
        { icon: '◆', title: 'Pillar Pages & Cluster Content', desc: 'Authority-building pillar content and supporting cluster articles for topical dominance.' },
        { icon: '✦', title: 'Branded Content Reports', desc: 'Monthly performance reports showing traffic, rankings, and engagement under your agency brand.' },
        { icon: '⬡', title: 'Content Distribution', desc: 'Social distribution plans and outreach strategies to amplify every piece of content.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality — your clients will never know we produce their content.' },
      ]}
      why={[
        { title: 'Your Brand, Our Writing', body: 'Every article, report, and strategy document is delivered under your agency name.' },
        { title: 'SEO-First Approach', body: 'All content is built around keyword research, search intent, and on-page best practices.' },
        { title: 'Scalable Output', body: 'From 5 to 500 articles per month — we scale with your client roster without quality loss.' },
        { title: 'No Client Conflict', body: 'We never pitch your clients directly or position ourselves as a competing agency.' },
      ]}
      faqs={[
        { q: 'Will my clients know you write their content?', a: 'Never. All content is delivered fully ghostwritten and white-labelled under your brand.' },
        { q: 'What industries do you write for?', a: 'All industries — we assign specialist writers matched to each client\'s niche.' },
        { q: 'Do you handle publishing and on-page optimisation?', a: 'Yes — we can publish directly to WordPress or CMS and apply full on-page SEO formatting.' },
        { q: 'How quickly can you onboard a new client?', a: 'Typically within 48 hours of receiving a brief and access credentials.' },
      ]}
    />
  )
}
