import React, { useState } from "react"

function validateEmail(email) {
    
  }

function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormInput = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue)
        } else {
            setMessage(inputValue)
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isValidEmail(email) || !userName) {
            setErrorMessage("Invalid username or email input");
            return
        } 
        if (!setMessage(message)) {
            setErrorMessage("Message input required");
            return
        }
        setUserName("");
        setMessage("");
        setEmail("");
    }
    return (
        <div className=''>
            <h3>Contact Me</h3>
            <form className="">
                <label>Your Name:</label>
                <input 
                value={userName}
                name="userName"
                onChange={handleFormInput}
                type="text"
                id="contact-name"
                placeholder="Your Name" />
                <label>Your Email:</label>
                <input
                value={email}
                name="email"
                onChange={handleFormInput}
                type="email"
                id="contact-email"
                placeholder="Your Email" />
                <label>Your Message:</label>
                <input
                value={message}
                name="message"
                onChange={handleFormInput}
                type="message"
                id="contact-message"
                placeholder="Your Message"/>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Contact;