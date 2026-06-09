import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Fleuria</h2>
          <p className="footer-tagline">Elevating moments with timeless elegance.</p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/occasions">Occasions</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fleuria. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
