import React from 'react';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-details">
        <h3>Andrea's Empire Contact Details</h3>
        <p>Email: <a href="mailto:business@example.com">business@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        
        <div className="social-media">
          <p>Follow us on social media:</p>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      <div className="contact-form">
        <h3>Inquiry and Booking Form</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
