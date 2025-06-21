import React from "react";
import Foodrelief from '../assets/fundicons/Foodrelief.png';
import Educationfund from '../assets/fundicons/Educationfund.png';
import Healthdrive from '../assets/fundicons/Healthdrive.png';
import "./Fundraising.css";

const Fundraising = () => {
  return (
    <div className="fundraising-container">
      <h1 className="fundraising-title">Fundraising Campaigns</h1>
      <p className="fundraising-intro">
        Together we can make a difference. Join us in raising funds to support vital causes around the world.
      </p>
      <div className="fundraising-cards">
        <div className="fundraising-card">
          <img src={Educationfund} alt="Education Fund" />
          <h3>Education Fund</h3>
          <p>Help us provide quality education to underprivileged children.</p>
          <button><a href = "/Donate">Contribute</a></button>
        </div>
        <div className="fundraising-card">
          <img src={Healthdrive} alt="Health Drive" />
          <h3>Health Drive</h3>
          <p>Support our medical camps and provide basic healthcare to remote areas.</p>
          <button><a href ="/Donate">Contribute</a></button>
        </div>
        <div className="fundraising-card">
          <img src={Foodrelief} alt="Food Relief" />
          <h3>Food Relief</h3>
          <p>Ensure that no family goes to bed hungry. Donate to our food relief programs.</p>
          <button><a href = "/Donate">Contribute</a></button>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;