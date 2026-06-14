import ServicePage from '../components/ServicePage/ServicePage'
export default function ProductVideoEditing() {
  return (
    <ServicePage
      badge="Product Video Editing"
      headline={<>Videos That Make<br /><em>Products Irresistible.</em></>}
      description="Compelling product video editing for e-commerce, Amazon listings, social ads, and launch campaigns — crafted to drive clicks and conversions."
      cta1={{ label: 'Send Your Footage →', to: '/contact' }}
      cta2={{ label: 'View Examples', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🛒', val: '+80%', label: 'Conversion Lift' },
        { icon: '🎬', val: '300+', label: 'Product Videos' },
        { icon: '⚡', val: '3-day', label: 'Delivery' },
      ]}
      stats={[
        { val: '+80%', label: 'Avg. Conversion Lift' },
        { val: '300+', label: 'Product Videos Edited' },
        { val: '3-day', label: 'Average Turnaround' },
        { val: '98%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'E-Commerce Product Videos', desc: 'Short, punchy product showcase videos optimised for Amazon, Shopify, and brand websites.' },
        { icon: '◈', title: 'Social Ad Cuts', desc: 'Vertical and square cuts for Instagram, TikTok, Facebook, and Pinterest ads that stop scrollers.' },
        { icon: '◆', title: 'Feature Highlight Reels', desc: 'Focused edits that showcase key product features with on-screen text and callouts.' },
        { icon: '✦', title: 'Unboxing Video Editing', desc: 'Engaging unboxing edits with music, text overlays, and colour grading for maximum shareability.' },
        { icon: '⬡', title: 'Before & After Edits', desc: 'Side-by-side or split-screen edits ideal for beauty, health, and lifestyle products.' },
        { icon: '❋', title: 'Multi-Ratio Export', desc: 'Delivered in 16:9, 1:1, 9:16, and 4:5 for all platform placements.' },
      ]}
      why={[
        { title: 'Conversion-Focused', body: 'Every edit is designed to move viewers closer to a purchase — not just look pretty.' },
        { title: 'E-Commerce Experts', body: 'We understand Amazon, Shopify, and social commerce requirements inside and out.' },
        { title: 'Fast Turnaround', body: 'Standard product videos delivered in 3 business days — rush options available.' },
        { title: 'All Platforms Covered', body: 'One shoot, multiple formats — we optimise and export for every channel you sell on.' },
      ]}
      faqs={[
        { q: 'Do I need professional footage for you to edit?', a: 'No — we can work with smartphone footage and still deliver a polished, professional result.' },
        { q: 'Can you add music and sound effects?', a: 'Yes — we have access to a licensed music library and add appropriate audio as standard.' },
        { q: 'What length videos do you produce?', a: 'Typically 15 seconds to 3 minutes depending on the platform and use case.' },
        { q: 'Can you edit multiple product videos in bulk?', a: 'Yes — bulk editing packages are available with discounted per-video pricing.' },
      ]}
    />
  )
}
