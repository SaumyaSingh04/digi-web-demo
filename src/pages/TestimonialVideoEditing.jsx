import ServicePage from '../components/ServicePage/ServicePage'
export default function TestimonialVideoEditing() {
  return (
    <ServicePage
      badge="Testimonial Video Editing"
      headline={<>Turn Reviews Into<br /><em>Trust-Building Content.</em></>}
      description="Professional testimonial video editing that transforms raw client recordings into polished social proof content — ready to post and persuade."
      cta1={{ label: 'Send Your Recordings →', to: '/contact' }}
      cta2={{ label: 'View Examples', to: '/portfolio' }}
      heroMetrics={[
        { icon: '⭐', val: '+72%', label: 'Trust Signal Boost' },
        { icon: '🎬', val: '400+', label: 'Testimonials Edited' },
        { icon: '⚡', val: '48hr', label: 'Turnaround' },
      ]}
      stats={[
        { val: '400+', label: 'Testimonial Videos Edited' },
        { val: '+72%', label: 'Avg. Trust Signal Increase' },
        { val: '48hr', label: 'Turnaround Time' },
        { val: '99%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'Raw Footage Cleanup', desc: 'Filler words, pauses, and awkward cuts removed so every testimonial sounds confident and natural.' },
        { icon: '◈', title: 'Branded Lower-Thirds', desc: 'Client name, company, and title displayed with your brand fonts and colours.' },
        { icon: '◆', title: 'Background Music', desc: 'Subtle licensed background music added to set the right emotional tone.' },
        { icon: '✦', title: 'Captions & Subtitles', desc: 'Accurate captions added for silent viewing — critical for social media performance.' },
        { icon: '⬡', title: 'Branded Intro & Outro', desc: 'Logo animation, brand colours, and CTA end-cards to close every testimonial on brand.' },
        { icon: '❋', title: 'Multi-Format Export', desc: 'Exported for website, YouTube, Instagram Reels, TikTok, and LinkedIn.' },
      ]}
      why={[
        { title: 'Social Proof Specialists', body: 'We know what makes testimonial content persuasive and structure every edit accordingly.' },
        { title: 'Works With Any Quality', body: 'We can enhance and clean up Zoom recordings, smartphone clips, or studio footage.' },
        { title: 'Fast 48-Hour Delivery', body: 'Most testimonial edits are returned within 48 hours of receiving your footage.' },
        { title: 'Scalable for Campaigns', body: 'Need 5 or 50 testimonials edited? Our process scales without quality loss.' },
      ]}
      faqs={[
        { q: 'Can you edit Zoom or video call recordings?', a: 'Yes — we regularly edit testimonials recorded over Zoom, Teams, or Google Meet.' },
        { q: 'Do you provide transcription?', a: 'Yes — transcription and captions are included as standard in every testimonial edit.' },
        { q: 'How long should a testimonial video be?', a: 'Ideally 60–90 seconds for social media. We can also create longer cuts for landing pages.' },
        { q: 'Can you create a highlight reel from multiple testimonials?', a: 'Yes — we offer supercut or highlight reel edits combining multiple clients into one compelling video.' },
      ]}
    />
  )
}
