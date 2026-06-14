import ServicePage from '../components/ServicePage/ServicePage'

export default function AIWorkflowAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      headline={<>AI Workflow Automation &<br /><em>Eliminate Repetitive Work Forever.</em></>}
      description="End-to-end workflow automation powered by AI that connects your tools, removes manual steps, and lets your team focus on high-value work."
      cta1={{ label: 'Get Started →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroMetrics={[
        { icon: '⚡', val: '70%', label: 'Time Saved' },
        { icon: '🤖', val: '100+', label: 'Tools Integrated' },
        { icon: '📈', val: '3X', label: 'Team Productivity' },
      ]}
      stats={[
        { val: '70%', label: 'Reduction in Manual Work' },
        { val: '100+', label: 'Tools We Integrate' },
        { val: '3X', label: 'Team Productivity Gain' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '✦', title: 'Cross-App Automation', desc: 'Connect any combination of apps and automate data flow between them without writing code.' },
        { icon: '◎', title: 'Approval Workflows', desc: 'Automate multi-step approval processes with conditional logic and automatic escalation.' },
        { icon: '◈', title: 'Data Sync & Migration', desc: 'Keep data consistent across all your tools with real-time sync and transformation rules.' },
        { icon: '◆', title: 'Document Automation', desc: 'Auto-generate contracts, invoices, reports, and proposals triggered by workflow events.' },
        { icon: '⬡', title: 'Notification & Alert Systems', desc: 'Smart alerts that notify the right person at the right time based on workflow conditions.' },
        { icon: '❋', title: 'AI Decision Logic', desc: 'Embed AI decision points into workflows to handle exceptions and complex branching automatically.' },
      ]}
      why={[
        { title: 'No-Code & Custom', body: 'We build on Zapier, Make, n8n, or fully custom code — whichever best fits your needs and budget.' },
        { title: 'Process-First Approach', body: 'We document and optimise your process before automating to avoid digitising broken workflows.' },
        { title: 'Fast Deployment', body: 'Most workflow automations are live within 1–2 weeks of kick-off.' },
        { title: 'Maintained & Monitored', body: 'We monitor all automations for errors and keep them running reliably after launch.' },
      ]}
      faqs={[
        { q: 'What tools can you integrate?', a: 'Any tool with an API or Zapier/Make connector — including Slack, Google Workspace, Notion, Airtable, Salesforce, and hundreds more.' },
        { q: 'Do we need to change our existing tools?', a: 'No. We automate around your existing stack without requiring you to switch platforms.' },
        { q: 'What if a workflow breaks?', a: 'We set up error monitoring and alerts so issues are caught and fixed before they impact your team.' },
        { q: 'How complex can workflows be?', a: 'We handle multi-branch, conditional, and AI-augmented workflows of any complexity.' },
      ]}
    />
  )
}
