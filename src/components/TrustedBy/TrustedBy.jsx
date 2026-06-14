import './TrustedBy.css'

const brands = [
  {
    name: 'Google',
    svg: (
      <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 10.5v2.9h4.8c-.2 1.2-.9 2.2-1.9 2.9l3.1 2.4c1.8-1.7 2.8-4.1 2.8-7 0-.7-.1-1.4-.2-2H9.5z" fill="#4285F4"/>
        <path d="M9.5 5c2 0 3.7.7 5.1 1.9l2.8-2.8C15.4 2 12.6.8 9.5.8 5.6.8 2.2 3 .6 6.3l3.3 2.6C4.7 6.6 6.9 5 9.5 5z" fill="#EA4335"/>
        <path d="M9.5 19c2.6 0 4.8-.9 6.4-2.3l-3.1-2.4c-.9.6-2 .9-3.3.9-2.6 0-4.8-1.7-5.6-4.1L.6 13.7C2.2 17 5.6 19 9.5 19z" fill="#34A853"/>
        <path d="M.6 6.3C.2 7.4 0 8.5 0 9.6s.2 2.2.6 3.1l3.3-2.6c-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5L.6 6.3z" fill="#FBBC05"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 4.8c0-.1-.1-.2-.2-.2-.1 0-1.8-.1-1.8-.1s-1.2-1.2-1.3-1.3c-.1-.1-.4-.1-.5 0l-.7.2C11.6 2.6 11 2 9.9 2 7.3 2 5 3.9 4.1 6.7c-.8.2-1.3.4-1.4.4C1.9 7.4 1.8 7.5 1.7 8.3L.1 20.3l12.5 2.4 6.7-1.4L16.5 4.8zm-5.3-1.5c.8 0 1.3.5 1.6 1.2l-3.9 1.2c.4-1.4 1.4-2.4 2.3-2.4z" fill="#96BF48"/>
        <path d="M16.3 4.6c-.1 0-1.8-.1-1.8-.1s-1.2-1.2-1.3-1.3c0-.1-.1-.1-.2-.1v19.6l6.7-1.4-2.8-16.4c0-.2-.5-.3-.6-.3z" fill="#5E8E3E"/>
        <path d="M9.9 8.5l-.8 2.5s-.8-.4-1.7-.4c-1.4 0-1.5.9-1.5 1.1 0 1.2 3.1 1.7 3.1 4.5 0 2.2-1.4 3.6-3.3 3.6-2.3 0-3.4-1.4-3.4-1.4l.6-2s1.2 1 2.2 1c.7 0 .9-.5.9-.9 0-1.6-2.5-1.6-2.5-4.3 0-2.2 1.6-4.3 4.7-4.3 1.2 0 1.7.3 1.7.3z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3" fill="#FF7A59"/>
        <path d="M12 11v8M8 15h8" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="4" r="1.5" fill="#FF7A59"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#635BFF"/>
        <path d="M11 9.5c0-.8.7-1.1 1.8-1.1 1.6 0 3.6.5 5 1.3V5.3C16.4 4.5 14.9 4 13.1 4 9.6 4 7 5.8 7 9.8c0 6.2 8.5 5.2 8.5 7.8 0 .9-.8 1.2-2 1.2-1.7 0-3.9-.7-5.6-1.7v4.4c1.9.8 3.8 1.2 5.6 1.2 3.6 0 6.1-1.8 6.1-5.8-.1-6.7-8.6-5.5-8.6-7.4z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Slack',
    svg: (
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM6.5 15.5a1.5 1.5 0 003 0V9a1.5 1.5 0 00-3 0v6.5z" fill="#E01E5A"/>
        <path d="M8.5 5a1.5 1.5 0 010-3 1.5 1.5 0 010 3zM8.5 6.5a1.5 1.5 0 000 3H15a1.5 1.5 0 000-3H8.5z" fill="#36C5F0"/>
        <path d="M19 9a1.5 1.5 0 013 0 1.5 1.5 0 01-3 0zM17.5 9a1.5 1.5 0 00-3 0v6.5a1.5 1.5 0 003 0V9z" fill="#2EB67D"/>
        <path d="M15.5 19a1.5 1.5 0 010 3 1.5 1.5 0 010-3zM15.5 17.5a1.5 1.5 0 000-3H9a1.5 1.5 0 000 3h6.5z" fill="#ECB22E"/>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    svg: (
      <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6c1.4 0 2.6.6 3.5 1.5.8-.4 1.7-.6 2.7-.6 3.2 0 5.8 2.6 5.8 5.8S19.4 18.5 16.2 18.5c-.4 0-.8 0-1.2-.1-.7.9-1.7 1.4-2.9 1.4-.6 0-1.2-.2-1.7-.5-.6 1.3-1.9 2.2-3.4 2.2-1.7 0-3.2-1.1-3.7-2.7-.3.1-.6.1-.9.1C1.1 18.9 0 17.7 0 16.3s1-2.5 2.3-2.6C2.1 13.2 2 12.7 2 12.2 2 9 4.7 6 8 6c.7 0 1.4.1 2 .4A4.1 4.1 0 0110 6z" fill="#00A1E0"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7l6 8M7 15V7M13 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Mailchimp',
    svg: (
      <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="11" cy="13" rx="7" ry="8" fill="#FFE01B"/>
        <circle cx="8.5" cy="12" r="1" fill="#241C15"/>
        <circle cx="13.5" cy="12" r="1" fill="#241C15"/>
        <path d="M8.5 16c.8.8 4.2.8 5 0" stroke="#241C15" strokeWidth="1" strokeLinecap="round"/>
        <path d="M11 5V2M16 7l2-2M6 7L4 5" stroke="#241C15" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Webflow',
    svg: (
      <svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 4L10 16 8 9 5.5 16 1 4H4.5l2 6.5L8 6l2 4.5L12 4h2.5z" fill="#4353FF"/>
        <path d="M21 4c-3.3 0-5 2.5-5 6s1.7 6 5 6c1.8 0 3.2-.8 4-2.2V16h3V4h-3v2.2C24.2 4.8 22.8 4 21 4zm.8 9.5c-1.8 0-2.8-1.3-2.8-3.5S20 6.5 21.8 6.5s2.7 1.3 2.7 3.5-1 3.5-2.7 3.5z" fill="#4353FF"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="5" height="5" rx="2.5" fill="#F24E1E"/>
        <rect x="12" y="2" width="5" height="5" rx="2.5" fill="#FF7262"/>
        <rect x="7" y="7" width="5" height="5" rx="2.5" fill="#A259FF"/>
        <rect x="7" y="12" width="5" height="5" rx="2.5" fill="#0ACF83"/>
        <circle cx="14.5" cy="14.5" r="2.5" fill="#1ABCFE"/>
      </svg>
    ),
  },
]

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="trusted__label-row">
        <span className="trusted__label">Trusted by 50+ growing businesses</span>
      </div>
      <div className="trusted__track-wrap">
        <div className="trusted__track">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="trusted__logo" aria-label={b.name}>
              {b.svg}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
