import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

function Navbar({ setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // ✅ Logo click → Always scroll to top HOME
  const goHome = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">

        {/* LOGO */}
        <div className="nav-logo" onClick={goHome}>
          Crynix
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li><Link to="Home" smooth={true} duration={500} offset={-70}>Home</Link></li>
          <li><Link to="About" smooth={true} duration={500} offset={-70}>About</Link></li>
          <li><Link to="Services" smooth={true} duration={500} offset={-70}>Services</Link></li>
          <li><Link to="Customers" smooth={true} duration={500} offset={-70}>Customers</Link></li>
          <li><Link to="Contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
        </ul>

        {/* DESKTOP LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>☰</div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>✖</span>

        <ul>
          <li><Link to="Home" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="About" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="Services" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="Customers" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Customers</Link></li>
          <li><Link to="Contact" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* MOBILE LOGOUT */}
        <button className="mobile-logout" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Navbar;
