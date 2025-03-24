import React from "react";

const Hero = () => {
    return (
        <section className="hero" data-aos="fade-up">
            <img src="/images/Postert.jpg" alt="Tech Event" />
            <div className="hero-text">
                <h1>Welcome to Technophilia 3.0</h1>
                <p>Join us for an exciting event filled with innovation, coding, and networking!</p>
                <button className="btn">Register Now</button>
            </div>
        </section>
    );
};

export default Hero;
