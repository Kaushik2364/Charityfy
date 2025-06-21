// Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out with any questions or feedback.</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Address</h3>
          <p>123 Charity Lane<br />Hope City, HC 10001<br />Email: contact@charityfy.org<br />Phone: +1 234 567 8900</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
