import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <h1>Nikhil Mishra</h1>
        </Link>
        <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item"><Link to="/one">One</Link></li>
          <li className="nav-item"><Link to="/two">Two</Link></li>
          <li className="nav-item"><Link to="/three">Three</Link></li>
        </ul>
        <button className="menu-icon" onClick={handleToggleMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
