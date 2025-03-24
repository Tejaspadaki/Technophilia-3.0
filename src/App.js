import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import EventPage from "./components/EventPage";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Router>
            <div>
                {loading ? (
                    <div className="loader-container">
                        <img src="/images/technophilia-logo.png" alt="Logo" className="logo-blink" />
                    </div>
                ) : (
                    <div className="landing-page">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Countdown />
                                    <Hero />
                                    <About />
                                    <Schedule />
                                    <Events />
                                    <Contact />
                                </>
                            } />
                            {[...Array(12)].map((_, index) => (
                                <Route key={index} path={`/events/event${index + 1}`} element={<EventPage eventId={index + 1} />} />
                            ))}
                        </Routes>
                        <Footer />
                    </div>
                )}
            </div>
        </Router>
    );
};

export default App;