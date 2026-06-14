import ServicePage from '../components/ServicePage/ServicePage'

const WorkflowVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wf-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="wf-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <filter id="wf-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wf-bg)" />
    {/* Workflow nodes */}
    {[
      {x:60,y:80,label:'Trigger',color:'#3a7ab0'},
      {x:200,y:80,label:'Filter',color:'#7a5ab0'},
      {x:340,y:80,label:'Action',color:'#3a9a70'},
      {x:120,y:180,label:'Notify',color:'#9a6a30'},
      {x:260,y:180,label:'Update CRM',color:'#3a7ab0'},
      {x:200,y:280,label:'Close Deal',color:'#3a9a70'},
    ].map(({x,y,label,color})=>(
      <g key={label}>
        <rect x={x-44} y={y-20} width={88} height={40} rx="10" fill="url(#wf-dark)" />
        <rect x={x-44} y={y-20} width={4} height={40} rx="2" fill={color} />
        <text x={x+4} y={y+5} fontSize="9" fontWeight="700" fill={color} fontFamily="Inter,sans-serif">{label}</text>
      </g>
    ))}
    {/* Connectors */}
    {[[104,80,156,80],[244,80,296,80],[104,100,120,160],[244,100,260,160],[200,200,200,260]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a6a9a" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
    ))}
    {/* Stats */}
    {[['70%','Time Saved'],['100+','Tools'],['3X','Productivity']].map(([v,l],i)=>(
      <g key={l} filter="url(#wf-shadow)" transform={`translate(${22+i*154},316)`}>
        <rect width="134" height="28" rx="8" fill="url(#wf-dark)" />
        <text x="14" y="12" fontSize="7" fill="#3a70a8" fontFamily="Inter,sans-serif">{l}</text>
        <text x="80" y="22" fontSize="13" fontWeight="900" fill="#7aaad0" fontFamily="Inter,sans-serif" textAnchor="middle">{v}</text>
      </g>
    ))}
    {/* Tool badges */}
    <g filter="url(#wf-shadow)" transform="translate(22,22)">
      <rect width="436" height="40" rx="10" fill="url(#wf-dark)" />
      {['Zapier','Make','Slack','Notion','Salesforce','HubSpot'].map((t,i)=>(
        <g key={t}>
          <rect x={12+i*72} y={8} width={62} height={24} rx="6" fill="#0a1828" />
          <text x={43+i*72} y={24} fontSize="8" fill="#4a80b0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AIWorkflowAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      heroVisual={<WorkflowVisual />}
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
