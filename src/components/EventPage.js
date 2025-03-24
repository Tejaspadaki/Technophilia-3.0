import React from "react";
import { useParams } from "react-router-dom";

const eventDetails = [
    {
        name: "Decode Derby",
        tag: "Competitive Coding Battle",
        entryFee: "INR 150",
        prizes: "Exciting Cash Prizes",
        date: "April 3, 2025",
        venue: "Coding Arena",
        time: "11:00 AM - 3:00 PM",
        levels: "All Levels",
        contact: "Mark Lee - +91 7654321098",
        highlights: ["Live coding rounds", "AI-generated problem statements"]
    },
    {
        name: "WebReVise",
        tag: "Web Development Contest",
        entryFee: "INR 200",
        prizes: "Cash Prizes & Goodies",
        date: "April 2, 2025",
        venue: "Lab 102",
        time: "2:00 PM - 5:00 PM",
        levels: "Intermediate to Advanced",
        contact: "Jane Smith - +91 8765432109",
        highlights: ["Website redesign challenge", "Frontend & Backend tasks"]
    },
    {
        name: "BotArena",
        tag: "AI Chatbot Competition",
        entryFee: "INR 250",
        prizes: "Tech Gadgets & Certificates",
        date: "April 3, 2025",
        venue: "AI Lab",
        time: "9:00 AM - 12:00 PM",
        levels: "Intermediate to Expert",
        contact: "Alice Brown - +91 6543210987",
        highlights: ["Build a chatbot in 3 hours", "AI/ML judging panel"]
    },
    {
        name: "CyberQuest",
        tag: "Cyber Security Challenge",
        entryFee: "Free",
        prizes: "Exciting Prizes & Certificates",
        date: "April 2, 2025",
        venue: "Tech Hall A",
        time: "10:00 AM - 1:00 PM",
        levels: "Beginner to Advanced",
        contact: "John Doe - +91 9876543210",
        highlights: ["Ethical hacking challenges", "Live cybersecurity demos"]
    }
];

const EventPage = () => {
    const { eventId } = useParams();
    const eventIndex = parseInt(eventId, 10) - 1;

    if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= eventDetails.length) {
        return <h2 style={{ textAlign: "center", color: "red" }}>Event Not Found</h2>;
    }

    const event = eventDetails[eventIndex];

    return (
        <section className="event-details">
            <h2>{event.name}</h2>
            <h4>{event.tag}</h4>
            <img src={`/images/event${eventId}.jpg`} alt={event.name} />
            <p><strong>Entry Fee:</strong> {event.entryFee}</p>
            <p><strong>Prizes:</strong> {event.prizes}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Levels:</strong> {event.levels}</p>
            <p><strong>Contact:</strong> {event.contact}</p>
            <p><strong>Highlights:</strong></p>
            <ul>
                {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
            <button className="btn">Register Now</button>
        </section>
    );
};

export default EventPage;
