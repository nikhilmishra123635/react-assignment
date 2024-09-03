import React from 'react';

import { Link } from 'react-router-dom';
import './Pages.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>As a frontend developer with extensive experience, I specialize in creating efficient and user-friendly Enterprise Resource Planning (ERP) systems.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
      <li><Link to="/one">One</Link></li>
      <li><Link to="/two">Two</Link></li>
      <li><Link to="/three">Three</Link></li>
    </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Jhotwara , Jaipur, Rajasthan</p>
          <p>+91 9694150491</p>
          <p><a href="mailto:nikhilmishra850313@gmail.com">nikhilmishra850313@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nikhil Mishra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
