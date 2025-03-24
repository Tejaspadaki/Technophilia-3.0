import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar" data-aos="fade-down">
            <img src="/images/technophilia logo.png" alt="Logo" className="logo" />
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#events">Events</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
