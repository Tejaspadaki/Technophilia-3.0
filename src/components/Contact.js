import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            let response = await fetch("http://127.0.0.1:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            let result = await response.json();
            setResponseMessage(result.message || result.error);

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
            }
        } catch (error) {
            setResponseMessage("Failed to send message. Please try again.");
        }
    };

    return (
        <section id="contact" className="contact" data-aos="fade-up">
            <h2>Contact Us</h2>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
