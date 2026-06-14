import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import './Footer.css'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Testimonials', to: '/about#testimonials' },
  { label: 'Case Study', to: '/portfolio' },
]

const whiteLabelServices = [
  { label: 'White Label PPC', to: '/services/ppc' },
  { label: 'White Label SEO', to: '/services/seo' },
  { label: 'PPC Reseller', to: '/services/ppc' },
  { label: 'SEO Reseller', to: '/services/seo' },
  { label: 'White Label Google Ads', to: '/services/ppc' },
  { label: 'White Label FB Ads', to: '/services/smm' },
  { label: 'White Label Web', to: '/services/web-development' },
]

const leadGeneration = [
  { label: 'Real Estate', to: '/services/digital-marketing' },
  { label: 'Education', to: '/services/digital-marketing' },
  { label: 'Tourism', to: '/services/digital-marketing' },
  { label: 'Photographer', to: '/services/digital-marketing' },
]

const additionalServices = [
  { label: 'SEO', to: '/services/seo' },
  { label: 'PPC', to: '/services/ppc' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
]

const forCompanies = [
  { label: 'Blogs', to: '/blog' },
  { label: 'Career', to: '/career' },
  { label: 'Resources', to: '/blog' },
]

const socials = [
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__wave" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="var(--bg-alt)" />
      </svg>

      <div className="footer__main">
        <div className="container footer__grid">

          {/* Col 1 — Quick Links + White Label */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
            <div className="footer__divider" />
            <h4 className="footer__col-title">White Label Services</h4>
            <ul className="footer__links">
              {whiteLabelServices.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Col 2 — Lead Gen + Additional + For Companies */}
          <div className="footer__col">
            <h4 className="footer__col-title">Lead Generation</h4>
            <ul className="footer__links">
              {leadGeneration.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
            <div className="footer__divider" />
            <h4 className="footer__col-title">Additional Services</h4>
            <ul className="footer__links">
              {additionalServices.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
            <div className="footer__divider" />
            <h4 className="footer__col-title">For Companies</h4>
            <ul className="footer__links">
              {forCompanies.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Col 3 — Brand + Map */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <img src="/trendoxlogo.png" alt="Trendox" className="footer__logo-img" height="65" width="auto" />
            </Link>
            <p className="footer__about">
              We are a results-driven digital marketing agency helping brands grow through strategy, design, and performance marketing.
            </p>
            <div className="footer__socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="footer__map-wrap">
              <div className="footer__map-label">GLOBAL REACH</div>
              <img src="/map.png" alt="Global Reach Map" className="footer__world-map" />
            </div>
          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Trendox Marketing Solutions. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
