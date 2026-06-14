import ServicePage from '../components/ServicePage/ServicePage'
export default function GraphicDesigning() {
  return (
    <ServicePage
      badge="Graphic Designing"
      headline={<>Visuals That<br /><em>Stop the Scroll.</em></>}
      description="Bold, brand-consistent graphic design that communicates your message instantly — from social media assets to full brand identity systems."
      cta1={{ label: 'Start a Project →', to: '/contact' }}
      cta2={{ label: 'See Our Work', to: '/portfolio' }}
      heroMetrics={[
        { icon: '🎨', val: '500+', label: 'Designs Delivered' },
        { icon: '⚡', val: '48hr', label: 'Turnaround' },
        { icon: '✅', val: '98%', label: 'Client Approval Rate' },
      ]}
      stats={[
        { val: '500+', label: 'Designs Delivered' },
        { val: '98%', label: 'Client Approval Rate' },
        { val: '200+', label: 'Brands Served' },
        { val: '48hr', label: 'Avg. Turnaround' },
      ]}
      delivers={[
        { icon: '◎', title: 'Brand Identity', desc: 'Logos, colour palettes, typography, and brand guidelines that define your visual voice.' },
        { icon: '◈', title: 'Social Media Graphics', desc: 'Scroll-stopping posts, stories, and ad creatives sized perfectly for every platform.' },
        { icon: '◆', title: 'Print Design', desc: 'Brochures, flyers, business cards, and banners built for high-impact offline presence.' },
        { icon: '✦', title: 'Infographics', desc: 'Complex data and ideas transformed into clear, shareable visual content.' },
        { icon: '⬡', title: 'Email & Newsletter Design', desc: 'On-brand email templates and newsletter layouts that drive clicks and engagement.' },
        { icon: '❋', title: 'Presentation Design', desc: 'Professional pitch decks and slide presentations that win clients and close deals.' },
      ]}
      why={[
        { title: 'Brand-First Thinking', body: 'Every design decision is rooted in your brand strategy — not just visual preference.' },
        { title: 'Fast Turnaround', body: 'Most projects delivered within 48 hours with unlimited revisions until you are satisfied.' },
        { title: 'Multi-Platform Ready', body: 'All assets exported in formats ready for web, social, print, and advertising platforms.' },
        { title: 'Dedicated Designer', body: 'You work with the same designer throughout your project for consistent, cohesive output.' },
      ]}
      faqs={[
        { q: 'What file formats will I receive?', a: 'All source files (AI, PSD, Figma) plus print-ready PDFs and web-optimised PNG/SVG/JPG exports.' },
        { q: 'How many revisions are included?', a: 'Unlimited revisions until you are 100% satisfied — we do not cap revisions.' },
        { q: 'Can you match our existing brand guidelines?', a: 'Yes — simply share your brand guide and we will design strictly within your established system.' },
        { q: 'Do you offer ongoing retainer packages?', a: 'Yes. Monthly design retainers are available for businesses that need regular creative output.' },
      ]}
    />
  )
}
