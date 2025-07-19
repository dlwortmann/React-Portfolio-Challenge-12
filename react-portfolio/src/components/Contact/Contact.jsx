import React, { useState } from "react";

function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFormInput = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'userName') {
            setUserName(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!validateEmail(email) || !userName) {
            setErrorMessage("Please enter a valid username and email.");
            return;
        }
        if (!message) {
            setErrorMessage("Please enter a message.");
            return;
        }

        // Here you could add sending logic (API call, email service, etc.)

        setSuccessMessage("Thank you for your message!");
        setUserName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className='contact-container'>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Your Name:</label>
                <input
                    value={userName}
                    name="userName"
                    onChange={handleFormInput}
                    type="text"
                    id="contact-name"
                    placeholder="Your Name"
                />
                <label>Your Email:</label>
                <input
                    value={email}
                    name="email"
                    onChange={handleFormInput}
                    type="email"
                    id="contact-email"
                    placeholder="Your Email"
                />
                <label>Your Message:</label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleFormInput}
                    id="contact-message"
                    placeholder="Your Message"
                    rows={3}
                />
                <button type="submit">
                    Submit
                </button>
            </form>


            {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
        </div>
    );
}

export default Contact;
