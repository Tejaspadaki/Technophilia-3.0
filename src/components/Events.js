import React from "react";
import { Link } from "react-router-dom";

const eventDetails = [
    { name: "Decode Derby", description: "Race to Crack the Code!" },
    { name: "WebReVise", description: "Revise, Refine, Reimagine!" },
    { name: "BotArena", description: "Build, Compete, Dominate the Chatbot Arena!" },
    { name: "ImmersiPlay", description: "Step In. Play Beyond." },
    { name: "Valo Arena", description: "PC Gaming Event – Play. Compete. Win!" },
    { name: "Mobile Gaming", description: "The pitch is ours!⚽🥅🏟" },
    { name: "IgniteX: The Startup Surge", description: "Step In. Play Beyond." },
    { name: "CyberQuest", description: "Test Your Cybersecurity Knowledge!" },
    { name: "Treasure Hunt", description: "Unlock the Clues, Claim the Prize!" },
    { name: "ReelGraphy", description: "Lights, Camera, Viral!" },
    { name: "Colour and Curls", description: "Colors that Speak, Patterns that Mesmerize!" },
    { name: "Elegant Heena Strokes", description: "Drape Your Hands in the Beauty of Henna!" }
];


const Events = () => {
    return (
        <section id="events" className="events" data-aos="fade-up">
            <h2>Upcoming Events</h2>
            <div className="event-cards">
                {eventDetails.map((event, index) => (
                    <div key={index} className="event-card" data-aos="flip-left">
                        <img src={`/images/event${index + 1}.jpg`} alt={event.name} />
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <Link to={`/events/event${index + 1}`} className="btn">Read More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;