import ServicePage from '../components/ServicePage/ServicePage'
export default function CorporateVideoEditing() {
  return (
    <ServicePage
      badge="Corporate Video Editing"
      headline={<>Professional Videos That<br /><em>Represent Your Brand.</em></>}
      description="High-quality corporate video editing for brand films, company overviews, investor presentations, and internal communications — polished and on-brand."
      cta1={{ label: 'Send Your Footage →', to: '/contact' }}
      cta2={{ label: 'View Showreel', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎬', val: '200+', label: 'Videos Edited' },
        { icon: '⚡', val: '5-day', label: 'Delivery' },
        { icon: '🏆', val: '4K', label: 'Quality Output' },
      ]}
      stats={[
        { val: '200+', label: 'Corporate Videos Delivered' },
        { val: '4K', label: 'Maximum Output Quality' },
        { val: '97%', label: 'Client Satisfaction' },
        { val: '5-day', label: 'Average Turnaround' },
      ]}
      delivers={[
        { icon: '◎', title: 'Brand Film Editing', desc: 'Company overview and brand story videos edited to impress investors, partners, and clients.' },
        { icon: '◈', title: 'Colour Grading', desc: 'Cinematic colour grading and correction to give your footage a consistent, professional look.' },
        { icon: '◆', title: 'Motion Graphics', desc: 'Animated lower-thirds, titles, and branded intros/outros that reinforce your identity.' },
        { icon: '✦', title: 'Audio Mastering', desc: 'Noise reduction, sound balancing, and music sync for crisp, professional audio.' },
        { icon: '⬡', title: 'Multi-Platform Export', desc: 'Exported in optimal formats and resolutions for YouTube, LinkedIn, website, and broadcast.' },
        { icon: '❋', title: 'Subtitles & Captions', desc: 'Accurate, styled subtitles added for accessibility and silent-view engagement.' },
      ]}
      why={[
        { title: 'Brand-Aligned Editing', body: 'We study your brand guidelines to ensure every cut, colour, and graphic reflects your identity.' },
        { title: 'Experienced Editors', body: 'Our editors have worked on corporate content for global brands across multiple industries.' },
        { title: 'Revision-Friendly Process', body: 'Structured review rounds ensure you have full creative control at every stage.' },
        { title: 'Secure File Handling', body: 'All footage is handled under NDA and deleted from our systems after project completion.' },
      ]}
      faqs={[
        { q: 'What footage formats do you accept?', a: 'All major formats including MP4, MOV, MXF, AVI, and RAW camera files.' },
        { q: 'Do you provide voiceover or script writing?', a: 'Yes — voiceover recording and script writing are available as add-on services.' },
        { q: 'How long does editing take?', a: 'A standard 2–3 minute corporate video is delivered within 5 business days.' },
        { q: 'Can you add our logo and brand colours to the video?', a: 'Absolutely — all branded elements including logo animations are included as standard.' },
      ]}
    />
  )
}
