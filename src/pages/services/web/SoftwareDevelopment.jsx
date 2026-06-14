import ServicePage from '../../../components/ServicePage/ServicePage'

const SoftwareDevVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="sd-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#040e1c" />
      </linearGradient>
      <linearGradient id="sd-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c2244" />
        <stop offset="100%" stopColor="#081838" />
      </linearGradient>
      <linearGradient id="sd-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#061828" />
        <stop offset="100%" stopColor="#020e18" />
      </linearGradient>
      <filter id="sd-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#sd-bg)" />

    {/* 3D isometric server stack */}
    {[0,1,2].map(i=>(
      <g key={i} transform={`translate(0,${-i*40})`}>
        <polygon points="100,250 240,288 380,250 240,212" fill={['#1e3a5a','#263a62','#2e4a6a'][i]} />
        <polygon points="100,220 100,250 240,288 240,258" fill={['#162e4a','#1e384a','#263852'][i]} />
        <polygon points="380,220 380,250 240,288 240,258" fill={['#2e4a6a','#365068','#3e5870'][i]} />
        <rect x="120" y={222+0} width="50" height="8" rx="4" fill="#3a6898" opacity="0.5" />
        <circle cx="350" cy={226} r="5" fill="#60a870" opacity="0.7" />
        <circle cx="338" cy={226} r="5" fill="#a0c060" opacity="0.5" />
      </g>
    ))}

    {/* Code editor card */}
    <g filter="url(#sd-shadow)" transform="translate(26,20)">
      <rect width="240" height="160" rx="14" fill="url(#sd-dark)" />
      <polygon points="240,14 244,18 244,172 240,168" fill="#020810" />
      <polygon points="14,160 18,164 244,164 240,160" fill="#010608" />
      {/* tab bar */}
      <rect x="14" y="14" width="212" height="18" rx="5" fill="#060a16" />
      <rect x="18" y="18" width="50" height="10" rx="4" fill="#0e1828" />
      <rect x="72" y="18" width="40" height="10" rx="4" fill="#080f1e" />
      {/* code lines */}
      {[
        [14,'#5a90c0',30],
        [30,'#c0b870',60],
        [46,'#6aaad8',80],
        [46,'#80b870',50],
        [62,'#6090c0',70],
        [62,'#c0b060',40],
        [78,'#5888c0',90],
        [94,'#4a80b8',55],
        [110,'#b0a860',70],
        [126,'#6090c0',45],
        [142,'#5a90c0',30],
      ].map(([y,clr,w],i)=>(
        <rect key={i} x={18+(i%2)*8} y={38+i*10} width={w} height="5" rx="2" fill={clr} opacity="0.8" />
      ))}
    </g>

    {/* Sprint board */}
    <g filter="url(#sd-shadow)" transform="translate(278,20)">
      <rect width="176" height="160" rx="14" fill="url(#sd-card)" />
      <polygon points="176,14 180,18 180,172 176,168" fill="#1a3060" />
      <polygon points="14,160 18,164 180,164 176,160" fill="#142858" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#5080b8" />
      {[['Todo','#263a62'],['In Progress','#c8b060'],['Done','#70a870']].map(([col,clr],ci)=>(
        <g key={col}>
          <rect x={14+ci*52} y={26} width={44} height={8} rx="3" fill={clr} opacity="0.4" />
          <text x={36+ci*52} y={33} fontSize="6" fill="#c0d4f0" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{col}</text>
          {[0,1,2].slice(0,ci===1?2:3).map(ri=>(
            <rect key={ri} x={14+ci*52} y={40+ri*32} width={44} height={26} rx="5" fill="#1a2848" />
          ))}
        </g>
      ))}
    </g>

    {/* Stats row */}
    {[['150+','Projects'],['99.9%','Uptime'],['2X','Faster']].map(([v,l],i)=>(
      <g key={l} filter="url(#sd-shadow)" transform={`translate(${26+i*154},198)`}>
        <rect width="134" height="54" rx="10" fill="url(#sd-dark)" />
        <polygon points="134,10 138,14 138,60 134,56" fill="#020810" />
        <polygon points="10,54 14,58 138,58 134,54" fill="#010608" />
        <text x="14" y="22" fontSize="7" fill="#3a6898" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#90b8e8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}
  </svg>
)

export default function SoftwareDevelopment() {
  return (
    <ServicePage
      badge="Software Development"
      headline={<>Custom Software Built<br /><em>Around Your Business.</em></>}
      description="Bespoke software solutions engineered to solve complex business problems, automate operations, and give you a competitive edge."
      cta1={{ label: 'Discuss Your Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<SoftwareDevVisual />}
      heroMetrics={[
        { icon: '⚙️', val: '100%', label: 'Custom Built' },
        { icon: '🚀', val: '2x', label: 'Faster Delivery' },
        { icon: '🔒', val: 'ISO', label: 'Security Standards' },
      ]}
      stats={[
        { icon: '◎', val: '150+', label: 'Software Projects Delivered', color: '#7a9ab8' },
        { icon: '⬡', val: '99.9%', label: 'Avg. Uptime SLA',            color: '#6da98e' },
        { icon: '⚡', val: '2x',   label: 'Faster than In-House Build', color: '#b8a46a' },
        { icon: '★', val: '95%',  label: 'Client Retention Rate',       color: '#a78a96' },
      ]}
      delivers={[
        { icon: '◎', title: 'Requirements Analysis', desc: 'Deep-dive discovery to map your business logic, user workflows, and technical constraints.' },
        { icon: '✦', title: 'Architecture Design', desc: 'Scalable, maintainable system architecture designed for growth and long-term performance.' },
        { icon: '◈', title: 'Agile Development', desc: 'Iterative sprints with regular demos so you see progress and provide feedback throughout.' },
        { icon: '◆', title: 'QA & Testing', desc: 'Comprehensive unit, integration, and end-to-end testing before every release.' },
        { icon: '⬡', title: 'Deployment & DevOps', desc: 'CI/CD pipelines, cloud deployments, and infrastructure management for reliable releases.' },
        { icon: '❋', title: 'Maintenance & Support', desc: 'Post-launch monitoring, bug fixes, and iterative improvements as your needs evolve.' },
      ]}
      why={[
        { title: 'Full Ownership', body: 'You receive complete source code and IP ownership — no lock-in, no ongoing licensing fees.' },
        { title: 'Agile Transparency', body: 'Regular sprint reviews keep you informed and in control throughout the entire build.' },
        { title: 'Tech-Agnostic', body: 'We recommend the right technology for your project, not the stack that is easiest for us.' },
        { title: 'Long-Term Partner', body: 'We build for the future with documentation and architecture that your in-house team can maintain.' },
      ]}
      faqs={[
        { q: 'What types of software do you build?', a: 'SaaS platforms, internal tools, workflow automation software, APIs, portals, and enterprise applications.' },
        { q: 'How do you handle project scoping?', a: 'We conduct a paid discovery workshop to define requirements, architecture, and a fixed-scope estimate.' },
        { q: 'What technologies do you use?', a: 'Node.js, React, Python, PHP, .NET, and cloud platforms like AWS and Azure depending on the project.' },
        { q: 'Do you sign NDAs?', a: 'Yes — we sign NDAs before any project discussions involving sensitive business information.' },
      ]}
    />
  )
}
