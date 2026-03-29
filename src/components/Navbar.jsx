import { useState, useEffect, useCallback } from 'react';
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
    const onScroll = () => {
      if (!sidebarOpen) {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sidebarOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 56.25em)');
    const handleResize = (e) => {
      if (e.matches) {
        setSidebarOpen(false);
      }
    };
    
    // Initial check
    if (mediaQuery.matches) setSidebarOpen(false);

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // useEffect(() => {
  //   if (!sidebarOpen) return;

  //   document.body.classList.add('no-scroll');
  //   document.documentElement.classList.add('no-scroll');

  //   const preventDefault = (e) => {
  //     if (!e.target.closest('.sidebar')) {
  //       if (e.cancelable) e.preventDefault();
  //     }
  //   };

  //   document.addEventListener('touchmove', preventDefault, { passive: false })

  //   return () => {
  //     document.body.classList.remove('no-scroll');
  //     document.documentElement.classList.remove('no-scroll');
  //     document.removeEventListener('touchmove', preventDefault);
  //   }
  // }, [sidebarOpen]);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (sidebarOpen) {
        e.preventDefault();
      }
    };

    if (sidebarOpen) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [sidebarOpen]);

  const openSidebar = useCallback(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    setSidebarOpen(true);
  }, []);

  // const closeSidebar = () => setSidebarOpen(false);

  const closeSidebar = useCallback(() => {
    const scrollY = document.body.style.top;
    
    // Disable smooth scroll temporarily for instant restoration
    document.documentElement.style.scrollBehavior = 'auto';
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
    // Re-enable smooth scroll after restoration
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 0);
    
    setSidebarOpen(false);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#home" className="navbar__logo">
            <i className="fa-solid fa-steering-wheel navbar__logo-icon"></i>
            <span className="navbar__logo-text">iLEARN</span>
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
            onClick={sidebarOpen ? closeSidebar : openSidebar}
            // onClick={() => setSidebarOpen(prev => !prev)}
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
        <button
          className="sidenav__close"
          onClick={closeSidebar}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
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
