import { useState } from "react";
import AA from "../Assets/corsair-pc-accessories.webp";
import "../Styles/Contact.css";

function Contact() {
  const [state, setState] = useState({ fname: "", email: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };

  return (
    <div className="contact" style={{ backgroundImage: `url(${AA})` }}>
      <div className="contact-overlay">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fname">Full Name</label>
            <input
              id="fname"
              name="fname"
              placeholder="Enter full name..."
              type="text"
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter email..."
              type="email"
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter message..."
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" >Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
