import React from 'react';
import './Donate.css'; // Using same styling as Donate.js
import { FaUser, FaEnvelope, FaPhone, FaCity, FaCommentDots } from 'react-icons/fa';

const JoinNow = () => {
  return (
    <div className="donation-container">
      <div className="donation-form">
        <h1 className="donation-title">Join With Us</h1>

        <form className="form">
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="form-group">
            <FaCity className="icon" />
            <input type="text" placeholder="City" required />
          </div>

          <div className="form-group full-width">
            <FaCommentDots className="icon" />
            <textarea
              placeholder="Why do you want to join us?"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="donate-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
