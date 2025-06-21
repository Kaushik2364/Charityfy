import React from "react";
import Environmenta from '../assets/causesicons/Environmenta.png';
import Education from '../assets/causesicons/Education.png';
import Women from '../assets/causesicons/Women.png';
import Healthcare from '../assets/causesicons/Healthcare.png';
import "./Causes.css";

const Causes = () => {
  return (
    <div className="causes-container">
      <h2 className="causes-title">Our Causes</h2>
      <p className="causes-description">
        We focus on several humanitarian areas to bring lasting change. Explore some of the key causes we support to improve lives around the world.
      </p>

      <div className="causes-grid">
        <div className="cause-card">
          <img src={Education} alt="Education" className="cause-image" />
          <h3 className="cause-title">Education for All</h3>
          <p className="cause-text">Providing quality education to underprivileged children to unlock opportunities and break the cycle of poverty.</p>
        </div>

        <div className="cause-card">
          <img src={Healthcare} alt="Healthcare" className="cause-image" />
          <h3 className="cause-title">Healthcare Access</h3>
          <p className="cause-text">Delivering essential healthcare and nutrition to vulnerable communities and saving lives every day.</p>
        </div>

        <div className="cause-card">
          <img src={Environmenta} alt="Environment" />
        
          <h3 className="cause-title">Environmental Protection</h3>
          <p className="cause-text">Promoting green practices and sustainability to preserve our planet for future generations.</p>
        </div>

        <div className="cause-card">
          <img src={Women} alt="Empowering Women" className="cause-image" />
          <h3 className="cause-title">Empowering Women</h3>
          <p className="cause-text">Fostering gender equality and helping women achieve economic independence and dignity.</p>
        </div>
      </div>
    </div>
  );
};

export default Causes;