// Pages.js
import React from 'react';
import './Page.css';

const Pages = () => {
  return (
    <div className="pages-container">
      <div className="pages-header">
        <h1>Explore Our Pages</h1>
        <p>Discover more about our mission, values, and impact.</p>
      </div>

      <div className="pages-grid">
        <div className="page-card">
          <h2>Our Story</h2>
          <p>Learn how we started and the journey we’ve taken to reach where we are today.</p>
        </div>
        <div className="page-card">
          <h2>Our Impact</h2>
          <p>Explore the real-world difference our projects and volunteers make every day.</p>
        </div>
        <div className="page-card">
          <h2>Our Values</h2>
          <p>Understand the principles and ethics that guide our mission and work.</p>
        </div>
        <div className="page-card">
          <h2>Team & Leadership</h2>
          <p>Meet the passionate individuals behind our organization’s success.</p>
        </div>
      </div>
    </div>
  );
};

export default Pages;
