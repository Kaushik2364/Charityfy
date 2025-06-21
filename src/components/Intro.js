// src/components/Intro.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import logo from '../assets/logo.png'; // Make sure this path matches your actual logo path

const Intro = () => {
  const [showTitle, setShowTitle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <div className="intro-container">
      <video autoPlay muted loop className="intro-video">
        <source src="/videos/charity-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showTitle && (
        <div className="intro-overlay">
          <img src={logo} alt="Charity Logo" className="intro-logo" />
          <h1 className="intro-title">Charityfy</h1>
          <button onClick={handleContinue} className="intro-button">
            Enter Site
          </button>
        </div>
      )}
    </div>
  );
};

export default Intro;
