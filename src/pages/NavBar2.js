import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';

const NavBar2 = () => {
  return (
    <footer className="footer">
        <div classname = "footer-nav">
            <nav className="navbar2">
                {/* Menu items */}
                <ul className="nav-list2">
                <li>
                    <Link to="/">Services</Link>
                </li>
                <li>
                    <Link to="/">Work</Link>
                </li>
                <li>
                    <Link to="/">Insights</Link>
                </li>
                <li>
                    <Link to="/">Careers</Link>
                </li>
                <li>
                    <Link to="/">Contact Us</Link>
                </li>
                </ul>
            </nav>
        </div>

        <div class ="footer-social">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
        </div>

        <div classname = "footer-rights"> 
            <div classname = "footer-rights_left">
                <div>© Copyright GrowthOps. All rights reserved.</div>
            </div>

            <div className ="footer-rights_right">
                <div>Go to global GrowthOps website</div>   
                <div>Privacy Policy</div>
            </div>
        </div>
            
    </footer>
  );
};

export default NavBar2;
