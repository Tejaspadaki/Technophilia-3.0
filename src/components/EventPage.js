import React from "react";
import { useParams } from "react-router-dom";

const eventDetails = [
    {
        id: 1,
        name: "Decode Derby",
        tag: "Competitive Coding Battle",
        entryFee: "₹50 for each person",
        prizes: "Prizes & Certificates for Winners!",
        date: "April 3, 2025",
        venue: "AI Lab",
        time: "2:00 AM",
        levels: "All Levels",
        contact: "Shreya Kulkarni-8530213898",
        highlights: ["Unravel the Logic:Decode the output to find the logic", "Brain-Teasing Challenges:Challenging problem-solving tasks","Time-Bound Thrill: Race against time to crack the code", "Test Your Debugging Skills:Test debugging and analytical skills", "Competitive Edge: Compete with top coders"]
    },
    {
        id: 2,
        name: "WebReVise",
        tag: "Revise, Refine, Reimagine!",
        entryFee: ": ₹50 for each person",
        prizes: "Prizes & Certificates for Winners!",
        date: "4th April 2025",
        venue: "ADB Lab , B Block – 3rd Floor ",
        time: "10:30 AM",
        levels: "Intermediate to Advanced",
        contact: "Tejas Terse-9049156979",
        highlights: ["Website redesign challenge", "Transform outdated websites into dynamic, modern designs!", "Bring innovation & creativity to revamp old web structures.", "Debug, redesign & elevate user experience with cutting-edge techniques."]
    },
    {
        id: 3,
        name: "BotArena",
        tag: "BotArena 2025 – Build, Compete, Dominate the Chatbot Arena!",
        entryFee: "INR 200 per Team",
        prizes: "Prizes & Certificates for Winners!",
        date: "April 4, 2025",
        venue: "Flexible Room , A block 1st floor",
        time: "10 am - 4 pm",
        levels: "Intermediate to Expert",
        contact: "Soujanya Hosamani-9980767815",
        highlights: ["Hands-On AI Innovation", "Cutting-Edge Tech Experience", "Boost Your Resume & Skills", "Networking & Learning", "Live Demonstrations & Presentations"]
    },
    {
        id: 4,
        name: " ImmersiPlay",
        tag: "Step In. Play Beyond.",
        entryFee: "₹50 for each person",
        prizes: "Prizes & Certificates for Winners!",
        date: "April 3 & , 2025",
        venue: "ADB Lab , B Block – 3rd Floor",
        time: "1:00 PM",
        levels: "Beginner & Intermediate",
        contact: "Padmashree Balikar-9019261154",
        highlights: ["Immersive VR Gaming – Play, compete & explore!", "Tournaments & Prizes – Win exciting rewards!", "Tournaments & Prizes – Win exciting rewards!"]
    },
    {
        id: 5,
        name: "Valo Arena ",
        tag: " PC Gaming Event – Play. Compete. Win!",
        entryFee: "₹500 per Team",
        prizes: "EPrizes & Certificates for Winners!",
        date: "",
        venue: "",
        time: "10:00 AM - 1:00 PM",
        levels: "Beginner to Advanced",
        contact: "Sanmegh Chavan-8055359711",
        highlights: ["Tournaments & Prizes 🏆", "High-End Gaming Setups 💻", "Latest Games & Tech 🎮"]
    },
    {
        id: 6,
        name: "Mobile Gaming",
        tag: "The pitch is ours!⚽🥅🏟",
        entryFee: "₹100",
        prizes: "Prizes & Certificates for Winners!",
        date: "April 3, 2025",
        venue: "Incubation center!...🚨",
        time: "2 PM",
        levels: "Beginner to Advanced",
        contact: "",
        highlights: ["E-Football PES 2025, also known as E-Football v4.0.0, is the Android version of Konami's popular soccer game that lets you experience the magic of football in the world's best stadiums.!"]
    },
    {
        id: 7,
        name: "IgniteX :The Startup Surge",
        tag: "IgniteX :The Startup Surge",
        entryFee: ": 200/- per team of 4 members/100/- for team of 2 members",
        prizes: "Prizes & Certificates for Winners!",
        date: "April 4, 2025",
        venue: "SDC, B Block- 3rd Floor.",
        time: "1:00 PM",
        levels: "Beginner to Advanced",
        contact: "Rashi Ingale-7823058675",
        highlights: ["Pitch your innovative startup idea  ", "Network with like-minded entrepreneurs  "]
    },
    {
        id: 8,
        name: "CyberQuest",
        tag: "🛡️Test Your Cybersecurity Knowledge!",
        entryFee: "₹50 for each person",
        prizes: "Prizes & Certificates for Winners!",
        date: "April 3, 2025",
        venue: "ADB Lab , B Block – 3rd Floor",
        time: "1:00 PM",
        levels: "Beginner & Intermediate",
        contact: "Soyam Maji-7774915959",
        highlights: ["•	Interactive Quizzes & Challenges", "•	Real-World Cybersecurity Scenarios", "•	Learn, Compete & Win Exciting Rewards!"]
    },
    {
        id: 9,
        name: "Treasure Hunt",
        tag: "Unlock the Clues, Claim the Prize!",
        entryFee: " 200rs 4 members in a team",
        prizes: "Exciting Prizes & Certificates",
        date: "April 4, 2025",
        venue: "A Block – Ground Floor.",
        time: "1.30 pm",
        levels: "Beginner to Advanced",
        contact: "Disha shinde-8767240454",
        highlights: ["Solve puzzles & decode clues", "Explore the campus and unlock hidden locations", "Team-based competition with thrilling twists", "Learn, compete, and win exciting rewards!"]
    },
    {
        id: 10,
        name: "ReelGraphy (Photography & Reel Contest)",
        tag: "🎥 Lights, Camera, Viral!📸",
        entryFee: "₹50 for each person",
        prizes: "Exciting Prizes & Certificates",
        date: "April 3, 2025",
        venue: "SDC, B Block 3rd Floor",
        time: "10:30 am",
        levels: "Beginner to Advanced",
        contact: "Mohammad Sayeed Kazi-7387454943 / Arjun Adurkar-7745052030",
        highlights: ["Showcase your photography & reel-making skills", "Connect with fellow creators & enthusiasts"]
    },
    {
        id: 11,
        name: "Colour and curls",
        tag: "Colors that Speak, Patterns that Mesmerize!",
        entryFee: "₹30 ",
        prizes: "Exciting Prizes & Certificates",
        date: "April 3, 2025",
        venue: "Atrium",
        time: "9 AM",
        levels: "Beginner to Advanced",
        contact: "Khushi Magadum-8446055687",
        highlights: ["Dazzle with Your Artistic Touch"]
    },
    {
        id: 12,
        name: "Elegant Heena Strokes",
        tag: "Drape Your Hands in the Beauty of Henna!",
        entryFee: "₹30 ",
        prizes: "Exciting Prizes & Certificates",
        date: "April 3, 2025",
        venue: "Atrium",
        time: "9 AM",
        levels: "Beginner to Advanced",
        contact: "Khushi Magadum-8446055687",
        highlights: ["Intricate Designs, Endless Creativity!"]
    }
];

const EventPage = () => {
    const { eventId } = useParams();
    
    // Convert eventId to a number & find the event
    const event = eventDetails.find((event) => event.id === Number(eventId));

    if (!event) {
        return <h2 style={{ textAlign: "center", color: "red" }}>Event Not Found</h2>;
    }

    return (
        <section className="event-details">
            <h2>{event.name}</h2>
            <h4>{event.tag}</h4>
            <img src={`/images/event${event.id}.jpg`} alt={event.name} />
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
            <a href="https://forms.gle/kzscE3VnsEHEX2CK8"><button className="btn">Register Now</button></a>
        </section>
    );
};

export default EventPage;
