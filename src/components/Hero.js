import React from "react";

const Hero = () => {
    return (
        <section className="hero" data-aos="fade-up" id="home">
            <img src="/images/Postert.jpg" alt="Tech Event" data-aos="fade-down" />
            <div className="hero-text">
                <h1>🚀 Welcome to Technophilia 3.0 – Where Innovation Meets Imagination</h1>
                <p>Get ready to code, create, and compete in the ultimate fusion of *technology and creativity! Whether you're a developer, designer, tech enthusiast, or strategist, Technophilia 3.0 brings you an electrifying lineup of technical and non-technical events designed to challenge your skills and ignite your passion.</p>
                <p>Join us as we redefine possibilities, push boundaries, and celebrate innovation. Are you ready to make your mark? Let’s build the future, together! 🔥💡</p>
                <a href="https://forms.gle/kzscE3VnsEHEX2CK8"><button className="btn">Register Now</button></a>
            </div>
        </section>
    );
};

export default Hero;
