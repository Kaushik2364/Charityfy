// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import donationIcon from '../assets/icons/donation.png';
import fundraisingIcon from '../assets/icons/fundraising.png';
import volunteerIcon from '../assets/icons/volunteer.png';
import './Home.css';


const Home = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate');
  };
  

  return (
    <div>
      <header className="hero-section">
        <h1>Together we can make a Difference</h1>
        <p>
          Help today because tomorrow you may be the one who needs helping!
          Forget what you can get and see what you can give.
        </p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/join")} className="join-btn" >Join With Us</button>
          <button className="donate-btn" onClick={handleDonateClick}>Donate Now</button>
        </div>
      </header>

      <section className="services">
        <div className="service-card">
          <img src={donationIcon} alt="Make Donation" />
          <h3><a href = "/MakeDonation" >Make Donation</a></h3>
          <p>Help today because tomorrow you may be the one who needs helping!</p>
        </div>
        <div className="service-card">
          <img src={fundraisingIcon} alt="Fundraising" />
          <h3><a href = "/Fundraising" >Fundraising</a></h3>
          <p>Help today because tomorrow you may be the one who needs helping!</p>
        </div>
        <div className="service-card">
          <img src={volunteerIcon} alt="Become A Volunteer" />
          <h3><a href="/BecomeVolunteer">Become A Volunteer</a></h3>
          <p>Help today because tomorrow you may be the one who needs helping!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
