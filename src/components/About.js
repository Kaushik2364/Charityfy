import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        We are a nonprofit organization dedicated to improving lives and making a difference in communities through education, healthcare, and empowerment.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>To empower underprivileged communities with the tools and resources they need to thrive.</p>
        </div>
        <div className="about-card">
          <h2>Our Vision</h2>
          <p>Building a world where everyone has access to basic needs and opportunities for growth.</p>
        </div>
        <div className="about-card">
          <h2>Our Impact</h2>
          <p>We've helped over 100,000 people through our education and healthcare initiatives.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
