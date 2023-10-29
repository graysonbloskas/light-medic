import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Snowfall from "react-snowfall";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleHome = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

  const toggleContact = () => {
    scroll.scrollToBottom();
    closeMobileMenu();
  };

  window.addEventListener("scroll", toggleHome);

  return (
    <>
      <nav className="navbar color">
        <Snowfall />
        <div className="navbar-container">
          {/* <Link to='/' className='navbar-logo' onClick={toggleHome}>
            <img src={Logo} alt='' className='logo' />
          </Link> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={toggleHome}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                to="/#services"
                className="nav-links"
                // onClick={toggleHome}
              >
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={toggleContact}>
                Request a Quote
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
