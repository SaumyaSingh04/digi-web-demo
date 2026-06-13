import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Services.css'

/* ─── 3D SVG Illustrations per service ─── */
const SeoIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-seo-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#141e14"/><stop offset="100%" stopColor="#0a120a"/>
      </linearGradient>
      <linearGradient id="seo-card-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#172a20"/><stop offset="100%" stopColor="#101e18"/>
      </linearGradient>
      <linearGradient id="seo-dark-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0b1e12"/><stop offset="100%" stopColor="#060e06"/>
      </linearGradient>
      <filter id="svc-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000060"/></filter>
      <filter id="seo-inner-shadow"><feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00000030"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-seo-bg)"/>
    {/* 3D podium */}
    <polygon points="120,185 200,210 280,185 200,160" fill="#1e3e28"/>
    <polygon points="120,145 120,185 200,210 200,170" fill="#16301e"/>
    <polygon points="280,145 280,185 200,210 200,170" fill="#245430"/>
    <polygon points="120,145 200,170 280,145 200,120" fill="#285e38"/>
    <line x1="120" y1="145" x2="200" y2="120" stroke="#367048" strokeWidth="1"/>
    <line x1="200" y1="120" x2="280" y2="145" stroke="#367048" strokeWidth="1"/>
    {/* Rank card */}
    <g filter="url(#svc-sh)" transform="translate(44,22)">
      <polygon points="130,6 136,12 136,102 130,96" fill="#1a3a28"/>
      <polygon points="6,96 12,102 136,102 130,96" fill="#142e20"/>
      <rect width="130" height="96" rx="10" fill="url(#seo-card-top)"/>
      <rect x="0" y="0" width="130" height="1" rx="1" fill="rgba(100,220,140,0.3)"/>
      <rect x="12" y="14" width="70" height="6" rx="3" fill="#2a6a40"/>
      {['#1','#2','#3'].map((r,i)=>(
        <g key={r}>
          <rect x="12" y={30+i*18} width="80" height="6" rx="3" fill="#1e4a30"/>
          <rect x="100" y={28+i*18} width="22" height="10" rx="4" fill={i===0?'#3a7a4e':'#2a5e3c'}/>
          <text x={i===0?105:104} y={37+i*18} fontSize="7" fill="#fff" fontFamily="Inter,sans-serif" fontWeight="800">{r}</text>
        </g>
      ))}
    </g>
    {/* Traffic chart */}
    <g filter="url(#svc-sh)" transform="translate(216,14)">
      <polygon points="140,6 146,12 146,102 140,96" fill="#1a3a28"/>
      <polygon points="6,96 12,102 146,102 140,96" fill="#142e20"/>
      <rect width="140" height="96" rx="10" fill="url(#seo-card-top)"/>
      <rect x="0" y="0" width="140" height="1" rx="1" fill="rgba(100,220,140,0.3)"/>
      <rect x="12" y="14" width="60" height="5" rx="2" fill="#2a6a40"/>
      {[18,26,22,36,30,46,40,58].map((h,i)=>(
        <g key={i}>
          <polygon points={`${12+i*14},${80-h*0.85} ${12+i*14+10},${80-h*0.85} ${12+i*14+14},${76-h*0.85} ${12+i*14+4},${76-h*0.85}`} fill={i>=6?'#3a7a50':'#2e6040'}/>
          <rect x={12+i*14} y={80-h*0.85} width="10" height={h*0.85} rx="1" fill={i>=6?'#265838':'#1e4a2c'}/>
        </g>
      ))}
    </g>
    {/* Bottom stat bar */}
    <g filter="url(#svc-sh)" transform="translate(44,168)">
      <polygon points="300,8 306,14 306,66 300,60" fill="#061006"/>
      <polygon points="8,60 14,66 306,66 300,60" fill="#040c04"/>
      <rect width="300" height="60" rx="10" fill="url(#seo-dark-top)"/>
      <rect x="0" y="0" width="300" height="1" rx="1" fill="rgba(74,222,128,0.2)"/>
      <text x="20" y="28" fontSize="8" fill="#5a9e70" fontFamily="Inter,sans-serif">Organic Traffic</text>
      <text x="20" y="50" fontSize="18" fontWeight="900" fill="#7ab888" fontFamily="Inter,sans-serif">+184%</text>
      <text x="170" y="28" fontSize="8" fill="#5a9e70" fontFamily="Inter,sans-serif">Page 1 Keywords</text>
      <text x="170" y="50" fontSize="18" fontWeight="900" fill="#7ab888" fontFamily="Inter,sans-serif">47</text>
    </g>
  </svg>
)

const WebIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-web-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0b1422"/><stop offset="100%" stopColor="#060a14"/>
      </linearGradient>
      <linearGradient id="web-mon-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#142236"/><stop offset="100%" stopColor="#0c1828"/>
      </linearGradient>
      <linearGradient id="web-badge-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#182848"/><stop offset="100%" stopColor="#101c38"/>
      </linearGradient>
      <filter id="svc-web-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000060"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-web-bg)"/>
    {/* 3D monitor box */}
    <polygon points="78,48 78,212 200,244 200,80" fill="#1a3060"/>
    <polygon points="200,80 200,244 322,212 322,48" fill="#1e3a72"/>
    <polygon points="78,48 200,80 322,48 200,16" fill="url(#web-mon-top)"/>
    <line x1="78" y1="48" x2="200" y2="16" stroke="rgba(96,165,250,0.4)" strokeWidth="1"/>
    <line x1="200" y1="16" x2="322" y2="48" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
    {/* Screen */}
    <rect x="94" y="62" width="194" height="138" rx="4" fill="#0a1628"/>
    <rect x="94" y="62" width="194" height="22" rx="4" fill="#060e1c"/>
    <circle cx="107" cy="73" r="3" fill="#ef4444" opacity="0.9"/>
    <circle cx="117" cy="73" r="3" fill="#f59e0b" opacity="0.9"/>
    <circle cx="127" cy="73" r="3" fill="#22c55e" opacity="0.9"/>
    <rect x="102" y="93" width="80" height="7" rx="3" fill="#4a78a8" opacity="0.7"/>
    <rect x="102" y="105" width="120" height="5" rx="2" fill="#2e5e8e" opacity="0.4"/>
    <rect x="102" y="115" width="46" height="10" rx="5" fill="#1e4878" opacity="0.8"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <polygon points={`${103+i*62+52},${137+2} ${103+i*62+56},${137+6} ${103+i*62+56},${137+44} ${103+i*62+52},${137+40}`} fill="#0a1628"/>
        <rect x={103+i*62} y="137" width="52" height="40" rx="4" fill="#112040"/>
        <rect x={109+i*62} y="145" width="20" height="5" rx="2" fill="#2e5e8e" opacity="0.6"/>
        <rect x={109+i*62} y="154" width="34" height="4" rx="2" fill="#183870" opacity="0.5"/>
        <rect x={109+i*62} y="162" width="28" height="4" rx="2" fill="#183870" opacity="0.4"/>
      </g>
    ))}
    {/* Speed badge */}
    <g filter="url(#svc-web-sh)" transform="translate(236,166)">
      <polygon points="92,8 98,14 98,60 92,54" fill="#0a1628"/>
      <polygon points="8,54 14,60 98,60 92,54" fill="#060e1c"/>
      <rect width="92" height="54" rx="9" fill="url(#web-badge-top)"/>
      <rect x="0" y="0" width="92" height="1" rx="1" fill="rgba(96,165,250,0.35)"/>
      <text x="13" y="26" fontSize="7" fill="#5a88b8" fontFamily="Inter,sans-serif">PageSpeed</text>
      <text x="13" y="46" fontSize="18" fontWeight="900" fill="#7aa0c8" fontFamily="Inter,sans-serif">98+</text>
    </g>
  </svg>
)

const PpcIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ppc-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#150820"/><stop offset="100%" stopColor="#0c0414"/>
      </linearGradient>
      <linearGradient id="ppc-dark-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e0c34"/><stop offset="100%" stopColor="#120820"/>
      </linearGradient>
      <linearGradient id="ppc-bar-a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7a50a8"/><stop offset="100%" stopColor="#5a3480"/>
      </linearGradient>
      <linearGradient id="ppc-bar-b" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a85880"/><stop offset="100%" stopColor="#7a2e58"/>
      </linearGradient>
      <filter id="svc-ppc-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000060"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ppc-bg)"/>
    {/* 3D isometric bar chart */}
    {[{h:40,x:56},{h:65,x:106},{h:52,x:156},{h:82,x:206},{h:70,x:256},{h:100,x:306}].map(({h,x},i)=>(
      <g key={i}>
        <rect x={x} y={160-h} width={28} height={h} fill={i>=4?'url(#ppc-bar-b)':'url(#ppc-bar-a)'}/>
        <polygon points={`${x+28},${160-h} ${x+36},${152-h} ${x+36},152 ${x+28},160`} fill={i>=4?'#6a1840':'#3e2070'}/>
        <polygon points={`${x},${160-h} ${x+8},${152-h} ${x+36},${152-h} ${x+28},${160-h}`} fill={i>=4?'#a87898':'#8878a8'}/>
        <line x1={x} y1={160-h} x2={x+8} y2={152-h} stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
        <line x1={x+8} y1={152-h} x2={x+36} y2={152-h} stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
      </g>
    ))}
    <ellipse cx="196" cy="162" rx="160" ry="8" fill="rgba(168,85,247,0.15)"/>
    {/* ROAS stat bar */}
    <g filter="url(#svc-ppc-sh)" transform="translate(38,172)">
      <polygon points="312,8 318,14 318,66 312,60" fill="#0e0418"/>
      <polygon points="8,60 14,66 318,66 312,60" fill="#080210"/>
      <rect width="312" height="60" rx="10" fill="url(#ppc-dark-top)"/>
      <rect x="0" y="0" width="312" height="1" rx="1" fill="rgba(168,85,247,0.3)"/>
      <text x="20" y="28" fontSize="8" fill="#8868a8" fontFamily="Inter,sans-serif">Avg. ROAS</text>
      <text x="20" y="50" fontSize="18" fontWeight="900" fill="#aa98c8" fontFamily="Inter,sans-serif">4.8x</text>
      <text x="160" y="28" fontSize="8" fill="#8868a8" fontFamily="Inter,sans-serif">CPA Reduction</text>
      <text x="160" y="50" fontSize="18" fontWeight="900" fill="#aa98c8" fontFamily="Inter,sans-serif">62%</text>
    </g>
  </svg>
)

const SmmIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-smm-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#130816"/><stop offset="100%" stopColor="#1e0822"/>
      </linearGradient>
      <linearGradient id="smm-phone-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2c1434"/><stop offset="100%" stopColor="#1e0c26"/>
      </linearGradient>
      <linearGradient id="smm-dark-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a0848"/><stop offset="100%" stopColor="#160428"/>
      </linearGradient>
      <linearGradient id="smm-light-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8e3868"/><stop offset="100%" stopColor="#6a1e44"/>
      </linearGradient>
      <filter id="svc-smm-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000060"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-smm-bg)"/>
    {/* 3D phone */}
    <polygon points="118,28 118,222 180,244 180,50" fill="#340c44"/>
    <polygon points="180,50 180,244 242,222 242,28" fill="#420e54"/>
    <polygon points="118,28 180,50 242,28 180,6" fill="url(#smm-phone-top)"/>
    <line x1="118" y1="28" x2="180" y2="6" stroke="rgba(232,121,249,0.4)" strokeWidth="1"/>
    <line x1="180" y1="6" x2="242" y2="28" stroke="rgba(232,121,249,0.3)" strokeWidth="1"/>
    <rect x="128" y="44" width="100" height="172" rx="3" fill="#0f0520"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x="134" y={52+i*54} width="88" height="46" rx="4" fill="#1a0a30"/>
        <circle cx="145" cy={63+i*54} r="6" fill={['#8e4870','#6e5898','#4878a0'][i]}/>
        <rect x="156" y={59+i*54} width="48" height="4" rx="2" fill="#2d1050" opacity="0.9"/>
        <rect x="156" y={66+i*54} width="32" height="3" rx="1" fill="#3d1a60" opacity="0.8"/>
        <rect x="134" y={73+i*54} width="88" height="18" rx="2" fill="#1a0838"/>
      </g>
    ))}
    {/* Engagement card */}
    <g filter="url(#svc-smm-sh)" transform="translate(258,36)">
      <polygon points="112,8 118,14 118,80 112,74" fill="#0a0218"/>
      <polygon points="8,74 14,80 118,80 112,74" fill="#060010"/>
      <rect width="112" height="74" rx="10" fill="url(#smm-dark-card)"/>
      <rect x="0" y="0" width="112" height="1" rx="1" fill="rgba(232,121,249,0.3)"/>
      <rect x="12" y="14" width="55" height="5" rx="2" fill="#7e22ce" opacity="0.8"/>
      <text x="12" y="50" fontSize="22" fontWeight="900" fill="#9858a8" fontFamily="Inter,sans-serif">3.8x</text>
      <rect x="12" y="56" width="60" height="4" rx="2" fill="#6b21a8" opacity="0.6"/>
    </g>
    {/* Reach card */}
    <g filter="url(#svc-smm-sh)" transform="translate(258,124)">
      <polygon points="112,8 118,14 118,80 112,74" fill="#9d1060"/>
      <polygon points="8,74 14,80 118,80 112,74" fill="#7a0a4a"/>
      <rect width="112" height="74" rx="10" fill="url(#smm-light-card)"/>
      <rect x="0" y="0" width="112" height="1" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="12" y="14" width="55" height="5" rx="2" fill="rgba(255,255,255,0.4)"/>
      <text x="12" y="52" fontSize="20" fontWeight="900" fill="#ddc8d0" fontFamily="Inter,sans-serif">+310%</text>
      <rect x="12" y="58" width="70" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
    </g>
  </svg>
)

const ContentIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ct-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#140e06"/><stop offset="100%" stopColor="#0a0602"/>
      </linearGradient>
      <linearGradient id="ct-dark-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#281606"/><stop offset="100%" stopColor="#160a02"/>
      </linearGradient>
      <filter id="svc-ct-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000060"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ct-bg)"/>
    {/* 3D document stack */}
    {[3,2,1,0].map(i=>(
      <g key={i} transform={`translate(${i*8},${i*7})`}>
        <polygon points={`78,${58} 78,${196} 90,${208} 90,${70}`} fill={`rgba(180,80,20,${0.3+i*0.15})`}/>
        <polygon points={`236,${76} 236,${214} 248,${202} 248,${64}`} fill={`rgba(220,100,30,${0.3+i*0.15})`}/>
        <polygon points={`78,${58} 90,${70} 248,${64} 236,${52}`} fill={`rgba(251,146,60,${0.35+i*0.15})`}/>
        <rect x={90} y={70} width={146} height={138} rx="2" fill={i===3?'#2a1206':'#1e0e04'} opacity={0.85+i*0.05}/>
        <line x1={90} y1={70} x2={236} y2={70} stroke="rgba(251,146,60,0.4)" strokeWidth="0.8"/>
        <rect x={100} y={86+i} width={100} height={6} rx="3" fill="#a85a28" opacity={0.4+i*0.12}/>
        <rect x={100} y={98+i} width={120} height={4} rx="2" fill="#a86030" opacity={0.3+i*0.1}/>
        <rect x={100} y={108+i} width={90} height={4} rx="2" fill="#a86030" opacity={0.25+i*0.1}/>
        <rect x={100} y={118+i} width={110} height={4} rx="2" fill="#a86030" opacity={0.2+i*0.1}/>
      </g>
    ))}
    {/* Stats bar */}
    <g filter="url(#svc-ct-sh)" transform="translate(44,186)">
      <polygon points="308,8 314,14 314,66 308,60" fill="#0a0400"/>
      <polygon points="8,60 14,66 314,66 308,60" fill="#060200"/>
      <rect width="308" height="60" rx="10" fill="url(#ct-dark-top)"/>
      <rect x="0" y="0" width="308" height="1" rx="1" fill="rgba(251,146,60,0.25)"/>
      <text x="20" y="28" fontSize="8" fill="#a06840" fontFamily="Inter,sans-serif">Inbound Leads</text>
      <text x="20" y="50" fontSize="18" fontWeight="900" fill="#c89870" fontFamily="Inter,sans-serif">+240%</text>
      <text x="170" y="28" fontSize="8" fill="#a06840" fontFamily="Inter,sans-serif">Subscribers</text>
      <text x="170" y="50" fontSize="18" fontWeight="900" fill="#c89870" fontFamily="Inter,sans-serif">8,000</text>
    </g>
  </svg>
)

const AiIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ai-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#04101c"/><stop offset="100%" stopColor="#020a10"/>
      </linearGradient>
      <linearGradient id="ai-core-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1878a8"/><stop offset="100%" stopColor="#0e5a80"/>
      </linearGradient>
      <linearGradient id="ai-stat-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#081e30"/><stop offset="100%" stopColor="#04101c"/>
      </linearGradient>
      <filter id="svc-ai-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000060"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ai-bg)"/>
    {/* 3D hex prism core */}
    <polygon points="200,144 168,126 168,144 200,162 232,144 232,126" fill="#023a58"/>
    <polygon points="168,108 168,126 200,144 200,126" fill="#025278"/>
    <polygon points="232,108 232,126 200,144 200,126" fill="#036a98"/>
    <polygon points="200,96 168,114 200,132 232,114" fill="url(#ai-core-top)"/>
    <line x1="200" y1="96" x2="168" y2="114" stroke="rgba(125,211,252,0.4)" strokeWidth="1"/>
    <line x1="200" y1="96" x2="232" y2="114" stroke="rgba(125,211,252,0.3)" strokeWidth="1"/>
    {/* Core circle */}
    <circle cx="200" cy="114" r="16" fill="#0369a1"/>
    <text x="200" y="111" fontSize="8" fill="#e0f2fe" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">AI</text>
    <text x="200" y="121" fontSize="5" fill="#7dd3fc" fontFamily="Inter,sans-serif" textAnchor="middle">ENGINE</text>
    {/* Node connections */}
    {[
      {cx:200,cy:44,l:'CRM',c:'#8e5878'},{cx:272,cy:80,l:'Email',c:'#4a8a6e'},
      {cx:272,cy:150,l:'Ads',c:'#a06838'},{cx:200,cy:186,l:'Chat',c:'#6e5888'},
      {cx:128,cy:150,l:'Data',c:'#4a6e98'},{cx:128,cy:80,l:'AI',c:'#8e6878'},
    ].map(({cx,cy,l,c})=>(
      <g key={l}>
        <line x1="200" y1="114" x2={cx} y2={cy} stroke={c} strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
        <polygon points={`${cx},${cy-12} ${cx+10},${cy-4} ${cx},${cy+4} ${cx-10},${cy-4}`} fill={c} opacity="0.9"/>
        <polygon points={`${cx-10},${cy-4} ${cx},${cy+4} ${cx-6},${cy+10} ${cx-16},${cy+2}`} fill={c} opacity="0.5"/>
        <polygon points={`${cx+10},${cy-4} ${cx},${cy+4} ${cx+6},${cy+10} ${cx+16},${cy+2}`} fill={c} opacity="0.7"/>
        <line x1={cx-10} y1={cy-4} x2={cx} y2={cy-12} stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
        <text x={cx} y={cy+2} fontSize="6" fill="#fff" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{l}</text>
      </g>
    ))}
    {/* Bottom stats */}
    <g filter="url(#svc-ai-sh)" transform="translate(38,194)">
      <polygon points="322,8 328,14 328,58 322,52" fill="#010810"/>
      <polygon points="8,52 14,58 328,58 322,52" fill="#010608"/>
      <rect width="322" height="52" rx="10" fill="url(#ai-stat-top)"/>
      <rect x="0" y="0" width="322" height="1" rx="1" fill="rgba(14,165,233,0.3)"/>
      <text x="20" y="24" fontSize="7" fill="#4a8aaa" fontFamily="Inter,sans-serif">Tasks Automated</text>
      <text x="20" y="42" fontSize="16" fontWeight="900" fill="#6aa0b8" fontFamily="Inter,sans-serif">70%</text>
      <text x="142" y="24" fontSize="7" fill="#4a8aaa" fontFamily="Inter,sans-serif">Faster Ops</text>
      <text x="142" y="42" fontSize="16" fontWeight="900" fill="#6aa0b8" fontFamily="Inter,sans-serif">10X</text>
      <text x="238" y="24" fontSize="7" fill="#4a8aaa" fontFamily="Inter,sans-serif">Avg ROI</text>
      <text x="238" y="42" fontSize="16" fontWeight="900" fill="#6aa0b8" fontFamily="Inter,sans-serif">3.5X</text>
    </g>
  </svg>
)

const illustrations = {
  seo: SeoIllustration,
  web: WebIllustration,
  ppc: PpcIllustration,
  smm: SmmIllustration,
  content: ContentIllustration,
  ai: AiIllustration,
}

const serviceColors = {
  seo:     { light: '#22c55e', dark: '#15803d' },
  web:     { light: '#60a5fa', dark: '#1d4ed8' },
  ppc:     { light: '#a855f7', dark: '#7c3aed' },
  smm:     { light: '#e879f9', dark: '#9d1760' },
  content: { light: '#fb923c', dark: '#c2410c' },
  ai:      { light: '#38bdf8', dark: '#0369a1' },
}

const services = [
  {
    id: 'seo',
    label: 'SEO',
    metric: { value: '+184%', label: 'Organic Traffic Growth' },
    challenge: 'Buried on page 3+ for all high-intent keywords. Organic traffic plateaued at 4K/month with no growth trajectory.',
    solution: 'Deep technical audit, site architecture restructure, 200+ backlinks, and a topic-cluster content strategy targeting commercial-intent queries.',
    results: ['184% increase in organic traffic', '47 keywords on Page 1 of Google', '3.2x growth in leads from organic search'],
  },
  {
    id: 'web',
    label: 'Web Development',
    metric: { value: '+60%', label: 'Conversion Rate Lift' },
    challenge: '78% bounce rate, 6.4s load time, and unclear CTAs costing thousands in lost signups monthly.',
    solution: 'Full rebuild in React — sub-2s load, A/B-tested landing pages, and conversion-optimised funnel pages.',
    results: ['60% conversion rate improvement', 'Lighthouse score: 34 → 94', '41% bounce rate reduction in 30 days'],
  },
  {
    id: 'ppc',
    label: 'Performance Marketing',
    metric: { value: '+4.8x', label: 'Return on Ad Spend' },
    challenge: '1.2x ROAS with broad targeting and no creative testing. The account was entirely reactive.',
    solution: 'Rebuilt Google & Meta infrastructure with campaign tiers, dynamic product ads, creative rotation, and attribution modeling.',
    results: ['4.8x ROAS within 60 days', 'CPA dropped by 62%', 'Paid revenue grew 3.1x YoY'],
  },
  {
    id: 'smm',
    label: 'Social Media Marketing',
    metric: { value: '+310%', label: 'Engagement Growth' },
    challenge: '12K followers, near-zero engagement. Content was inconsistent and failing to convert.',
    solution: 'Social identity playbook, Reels-first strategy, creator partnerships, and engagement cadence across Instagram & TikTok.',
    results: ['310% engagement growth', 'Followers: 12K → 68K organically', '22% of monthly revenue from social'],
  },
  {
    id: 'content',
    label: 'Content Marketing',
    metric: { value: '+240%', label: 'Inbound Lead Growth' },
    challenge: 'Zero content presence. No inbound pipeline, no thought leadership, no search footprint.',
    solution: 'Editorial calendar, 60+ long-form articles, 12 whitepapers, and a weekly newsletter grown to 8,000 subscribers.',
    results: ['240% growth in inbound demos', '8,000 newsletter subscribers', 'Domain authority: 14 → 41'],
  },
  {
    id: 'ai',
    label: 'AI Automation',
    metric: { value: '-68%', label: 'Operational Cost Reduction' },
    challenge: "Manual reporting and repetitive tasks consuming 40+ hrs/week, limiting the team's growth capacity.",
    solution: 'AI reporting dashboards, automated nurture sequences, GPT content workflows, and full CRM automation.',
    results: ['68% less time on manual ops', 'Reporting: 6 hrs → 20 mins', 'Capacity to take on 3x more clients'],
  },
]

export default function Services() {
  const [active, setActive] = useState('seo')
  const navigate = useNavigate()
  const current = services.find(s => s.id === active)

  return (
    <section className="section svc-explorer" id="services">
      <div className="container">

        <div className="svc-explorer__head">
          <span className="section-tag">What We Offer</span>
          <h1 className="svc-explorer__title">
            Our <em>Services</em>
          </h1>
          <p className="svc-explorer__sub">
            Full-service digital marketing solutions tailored to grow your business online.
          </p>
        </div>

        <div className="svc-pills">
          {services.map(s => (
            <button
              key={s.id}
              className={`svc-pill${active === s.id ? ' svc-pill--active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="svc-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="svc-panel__left">
              <div className="svc-metric">
                <span className="svc-metric__value">{current.metric.value}</span>
                <span className="svc-metric__label">{current.metric.label}</span>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--challenge">⚠</span>
                  The Challenge
                </h4>
                <p>{current.challenge}</p>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--solution">◎</span>
                  The Solution
                </h4>
                <p>{current.solution}</p>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--results">✦</span>
                  The Results
                </h4>
                <ul className="svc-results">
                  {current.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <button className="svc-cta" onClick={() => navigate('/contact')}>
                Get Similar Results →
              </button>
            </div>

            <div className="svc-panel__right">
              <div className="svc-img-wrap" style={{
                boxShadow: `4px 4px 0 ${serviceColors[current.id].dark}, 8px 8px 0 ${serviceColors[current.id].light}66, 12px 12px 20px rgba(0,0,0,0.25)`,
              }}>
                {(() => { const Illus = illustrations[current.id]; return <Illus /> })()}
                <div className="svc-img-badge">
                  <span className="svc-img-badge__value">{current.metric.value}</span>
                  <span className="svc-img-badge__label">{current.metric.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
