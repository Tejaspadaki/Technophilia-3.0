import React from "react";
import { Link } from "react-router-dom";

const eventDetails = [
    { id: 1, name: "Decode Derby", description: "Race to Crack the Code!" },
    { id: 2, name: "WebReVise", description: "Revise, Refine, Reimagine!" },
    { id: 3, name: "BotArena", description: "Build, Compete, Dominate the Chatbot Arena!" },
    { id: 4, name: "ImmersiPlay", description: "Step In. Play Beyond." },
    { id: 5, name: "Valo Arena", description: "PC Gaming Event – Play. Compete. Win!" },
    { id: 6, name: "Mobile Gaming", description: "The pitch is ours! ⚽🥅🏟" },
    { id: 7, name: "IgniteX: The Startup Surge", description: "Step In. Play Beyond." },
    { id: 8, name: "CyberQuest", description: "Test Your Cybersecurity Knowledge!" },
    { id: 9, name: "Treasure Hunt", description: "Unlock the Clues, Claim the Prize!" },
    { id: 10, name: "ReelGraphy", description: "Lights, Camera, Viral!" },
    { id: 12, name: "Colour and Curls", description: "Colors that Speak, Patterns that Mesmerize!" },
    { id: 11, name: "Elegant Heena Strokes", description: "Drape Your Hands in the Beauty of Henna!" }
];

const Events = () => {
    return (
        <section id="events" className="events" data-aos="fade-up">
            <h2>Upcoming Events</h2>
            <div className="event-cards">
                {eventDetails.map((event) => (
                    <div key={event.id} className="event-card" data-aos="flip-left">
                        <img src={`/images/event${event.id}.jpg`} alt={event.name} />
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <Link to={`/events/${event.id}`} className="btn">Read More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
