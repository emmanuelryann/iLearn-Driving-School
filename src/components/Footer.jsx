import '../styles/Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#courses' },
];

const supportLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer reveal">
      <div className="footer__inner container">
        <div className="footer__col footer__col--brand">
          <a href="#home" className="footer__logo">
            <i className="fa-solid fa-steering-wheel footer__logo-icon"></i>
            <span className="footer__logo-text">iLEARN</span>
          </a>
          <p className="footer__desc">
            Your trusted partner in learning to drive. We provide professional
            driving instruction that builds confidence and creates safe drivers.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Support</h4>
          <ul className="footer__links">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact Info</h4>
          <ul className="footer__contact">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>76 Boundary Road East Legon</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+233 (0) 24 298 8559</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>info@ilearndriving.com</span>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p>© 2026 iLearn Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
