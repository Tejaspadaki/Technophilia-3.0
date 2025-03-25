import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar" data-aos="fade-down">
            <img src="/images/technophilia logo.png" alt="Logo" className="logo" />
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
