import React, { useState, useEffect } from "react";

const Countdown = () => {
    const eventDate = new Date("April 3, 2025 00:00:00").getTime();
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = eventDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="countdown" data-aos="fade-up" >
            <h2>Countdown to Technophilia 3.0</h2>
            <div className="countdown-timer">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="time-box">
                        <span>{value}</span>
                        <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Countdown;
