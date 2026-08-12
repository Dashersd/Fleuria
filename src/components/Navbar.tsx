import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 || !isHome);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-island">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>Fleuria</Link>
        
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navbar-links desktop-links`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/collections" onClick={closeMenu}>Collections</Link></li>
          <li><Link to="/occasions" onClick={closeMenu}>Occasions</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          <li style={{ transitionDelay: '0.1s' }}><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li style={{ transitionDelay: '0.15s' }}><Link to="/collections" onClick={closeMenu}>Collections</Link></li>
          <li style={{ transitionDelay: '0.2s' }}><Link to="/occasions" onClick={closeMenu}>Occasions</Link></li>
          <li style={{ transitionDelay: '0.25s' }}><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li style={{ transitionDelay: '0.3s' }}><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li style={{ transitionDelay: '0.35s' }}><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
