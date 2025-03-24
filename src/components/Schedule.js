import React from "react";

const scheduleData = [
    {
        day: "Day 1 - Technophilia 3.0",
        events: [
            { time: "9:00 AM - 10:00 AM", name: "Rangoli Competition", location: "A Block Atrium" },
            { time: "10:30 AM - 12:00 PM", name: "Inauguration", location: "MBA Auditorium" },
            { time: "12:00 PM - 3:00 PM", name: "Photo and Reel", location: "CR 1" },
            { time: "1:00 PM - 4:30 PM", name: "Mobile Gaming (PUBG)", location: "Incubation B311" },
            { time: "1:00 PM - 5:00 PM", name: "VR Gaming", location: "SDC B312" },
            { time: "1:00 PM - 4:00 PM", name: "Cyber Security", location: "Flexible Room" },
            { time: "2:00 PM - 4:00 PM", name: "Reverse Coding", location: "AI Lab" },
            { time: "2:00 PM - 4:30 PM", name: "Treasure Hunt", location: "A Block Ground" },
        ]
    },
    {
        day: "Day 2 - Technophilia 3.0",
        events: [
            { time: "9:00 AM - 10:00 AM", name: "Mehndi", location: "A Block Atrium" },
            { time: "10:30 AM - 4:30 PM", name: "PC Gaming", location: "AI-R Lab" },
            { time: "10:30 AM - 4:00 PM", name: "Web Redesign", location: "ADB Lab" },
            { time: "10:30 AM - 4:00 PM", name: "AI Chatbot", location: "Flexible Room" },
            { time: "1:00 PM - 4:00 PM", name: "Mobile Gaming (E-Football)", location: "Incubation B311" },
            { time: "1:00 PM - 4:00 PM", name: "Startup Ideas", location: "CR-8" },
            { time: "1:30 PM - 4:00 PM", name: "Treasure Hunt", location: "A Block Ground" },
            { time: "1:00 PM - 4:00 PM", name: "VR Gaming", location: "SDC B312" },
            { time: "4:00 PM - 5:00 PM", name: "Validatory + Prize Distribution + Concert", location: "Flexible Room" }
        ]
    }
];

const Schedule = () => {
    return (
        <section id="schedule" className="schedule" data-aos="zoom-in">
            <h2>Event Schedule</h2>
            {scheduleData.map((day, dayIndex) => (
                <div key={dayIndex}>
                    <h3>{day.day}</h3>
                    <div className="timeline">
                        {day.events.map((event, index) => (
                            <div key={index} className="timeline-item" data-aos="fade-right">
                                <div className="timeline-date">{event.time}</div>
                                <div className="timeline-content">
                                    <h3>{event.name}</h3>
                                    <p>Location: {event.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Schedule;
