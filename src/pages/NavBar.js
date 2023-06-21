import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Menu button */}
      {!isMenuOpen && (
        <button className="menu-button" onClick={toggleMenu}>
          <img src="images/menu-icon.png" alt="Menu" />
          <div>MENU</div>
        </button>
      )}

      {/* Navigation menu overlay */}
      {isMenuOpen && (
        <div className="overlay">
          <nav className='navbar'>
            {/* Close button */}
            <button className="close-button" onClick={toggleMenu}>
              <div>Close</div>
              <img src="images/close-icon.png" alt="Close" width = "32" height = "32" />
            </button>

            {/* Menu items */}
            <ul className ="nav-list">
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Work</Link>
              </li>
              <li>
                <Link to="/contact">Insights</Link>
              </li>
              <li>
                <Link to="/contact">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};



export default NavBar;
