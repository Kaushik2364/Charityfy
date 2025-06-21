import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-list">
        <div className="event-card">
          <h2>Charity Walk 2025</h2>
          <p>Date: July 15, 2025</p>
          <p>Location: Central Park, NY</p>
          <p className="event-desc">Join us for a 5K charity walk to support children’s education. Free registration and goodies for participants.</p>
        </div>

        <div className="event-card">
          <h2>Food Drive</h2>
          <p>Date: August 10, 2025</p>
          <p>Location: Downtown Shelter</p>
          <p className="event-desc">Help us collect and distribute food to families in need. Volunteers welcome.</p>
        </div>

        <div className="event-card">
          <h2>Annual Gala Night</h2>
          <p>Date: September 25, 2025</p>
          <p>Location: Grand Ballroom, LA</p>
          <p className="event-desc">Celebrate our achievements and honor donors. Formal attire required. RSVP by Sept 10.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;