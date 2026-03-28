import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#courses' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', sidebarOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#home" className="navbar__logo" onClick={closeSidebar}>
            <i className="fa-solid fa-steering-wheel navbar__logo-icon"></i>
            <span className="navbar__logo-text">DRIVE</span>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar__cta">Get Started</a>

          <button
            className={`navbar__hamburger${sidebarOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' sidebar-overlay--visible' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={`sidebar${sidebarOpen ? ' sidebar--open' : ''}`}>
        <ul className="sidebar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="sidebar__link" onClick={closeSidebar}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="sidebar__cta" onClick={closeSidebar}>
          Get Started
        </a>
      </aside>
    </>
  );
}
