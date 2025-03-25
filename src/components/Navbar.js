import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="/images/technophilia logo.png" alt="Logo" className="logo" />
            </div>
            
            {/* Hamburger Menu Button */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
            </div>

            {/* Navigation Links */}
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
