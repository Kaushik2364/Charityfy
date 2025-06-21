import React from 'react';
import './BecomeVolunteer.css';

const BecomeVolunteer = () => {
  return (
    <div className="volunteer-container">
      <div className="volunteer-header">
        <h1>Become a Volunteer</h1>
        <p>Join our mission to make a difference in the world. Every hand matters.</p>
      </div>

      <div className="volunteer-content">
        

        <div className="volunteer-form">
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="interest">Why do you want to volunteer with us?</label>
            <textarea id="interest" name="interest" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeVolunteer;
