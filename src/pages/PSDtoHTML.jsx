import ServicePage from '../components/ServicePage/ServicePage'
export default function PSDtoHTML() {
  return (
    <ServicePage
      badge="PSD to HTML"
      headline={<>Pixel-Perfect HTML<br /><em>From Any Design File.</em></>}
      description="We convert your PSD, Figma, XD, or Sketch designs into clean, responsive, cross-browser HTML/CSS code — handcrafted and production-ready."
      cta1={{ label: 'Send Your PSD →', to: '/contact' }}
      cta2={{ label: 'View Examples', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🖥️', val: '100%', label: 'Pixel Perfect' },
        { icon: '📱', val: '100%', label: 'Responsive' },
        { icon: '⚡', val: '72hr', label: 'Delivery' },
      ]}
      stats={[
        { val: '300+', label: 'Files Converted' },
        { val: '100%', label: 'Pixel-Perfect Accuracy' },
        { val: '72hr', label: 'Average Delivery' },
        { val: '99%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'PSD / Figma / XD to HTML', desc: 'Any design format converted to semantic, valid HTML5 and CSS3 with no templates.' },
        { icon: '◈', title: 'Responsive Layouts', desc: 'Mobile-first CSS that adapts flawlessly to all screen sizes and orientations.' },
        { icon: '◆', title: 'Cross-Browser Compatibility', desc: 'Tested and verified across Chrome, Firefox, Safari, and Edge.' },
        { icon: '✦', title: 'Clean, Commented Code', desc: 'Well-structured, commented code that any developer can easily maintain or extend.' },
        { icon: '⬡', title: 'CSS Animations', desc: 'Subtle transitions and animations coded exactly as specified in the design.' },
        { icon: '❋', title: 'CMS / Framework Integration', desc: 'HTML sliced and integrated into WordPress, React, or any framework on request.' },
      ]}
      why={[
        { title: 'Hand-Coded Quality', body: 'No page builders or auto-generated code — every line is written by an experienced developer.' },
        { title: 'SEO-Friendly Markup', body: 'Semantic HTML5 structure that search engines and screen readers can parse correctly.' },
        { title: 'Fast Load Times', body: 'Optimised CSS and minimal markup ensure your pages load at top speed.' },
        { title: 'Quick Turnaround', body: 'Standard conversions delivered within 72 hours — rush delivery available on request.' },
      ]}
      faqs={[
        { q: 'Which design formats do you accept?', a: 'PSD, Figma, Adobe XD, Sketch, and any other common design file format.' },
        { q: 'Will the HTML be responsive?', a: 'Yes — all conversions are fully responsive and mobile-first by default.' },
        { q: 'Do you integrate into WordPress?', a: 'Yes — we can slice and integrate your HTML into a custom WordPress theme upon request.' },
        { q: 'What if my design has multiple pages?', a: 'We provide per-page pricing for multi-page projects — get in touch for a custom quote.' },
      ]}
    />
  )
}
