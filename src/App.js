import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

const TechEventLanding = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <img src="technophilia logo final 1.png" alt="Logo" className="logo-blink" />
                </div>
            ) : (
                <div className="landing-page">
                    <nav className="navbar" data-aos="fade-down">
                        <img src="technophilia logo final 1.png" alt="Logo" className="logo" />
                        <div className="navbar-links">
                            <a href="#home">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#events">Events</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </nav>

                    <section className="hero" data-aos="fade-up">
                        <img src="Postert.jpg" alt="Tech Event" />
                        <div className="hero-text">
                            <h1>Welcome to Technophilia 3.0</h1>
                            <p>Join us for an exciting event filled with innovation, coding, and networking!</p>
                            <button className="btn">Register Now</button>
                        </div>
                    </section>

                    <section id="about" className="about" data-aos="fade-left">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>Technophilia 3.0 is a premier technology event that brings together enthusiasts, developers, and innovators. Our goal is to create a platform where ideas meet execution, fostering growth and learning in the tech community.</p>
                        </div>
                        <img src="about-image.jpg" alt="About Us" />
                    </section>

                    <section id="schedule" className="schedule" data-aos="zoom-in">
                        <h2>Event Schedule</h2>
                        <div className="timeline">
                            {[...Array(17)].map((_, index) => (
                                <div key={index} className="timeline-item" data-aos="fade-right">
                                    <div className="timeline-date">Event Time</div>
                                    <div className="timeline-content">
                                        <h3>Event Name</h3>
                                        <p>Location: Event Location</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="events" className="events" data-aos="fade-up">
                        <h2>Upcoming Events</h2>
                        <div className="event-cards">
                            {[...Array(12)].map((_, index) => (
                                <div key={index} className="event-card" data-aos="flip-left">
                                    <img src={`event${index + 1}.jpg`} alt="Event" />
                                    <h3>Event Name</h3>
                                    <p>Event Description</p>
                                    <button className="btn">Read More</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="contact" className="contact" data-aos="fade-up">
                        <h2>Contact Us</h2>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="4" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </section>

                    <footer className="footer" data-aos="fade-up">
                        <p>&copy; 2025 Technophilia 3.0. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default TechEventLanding;