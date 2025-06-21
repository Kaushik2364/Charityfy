// src/components/Donate.js
import React from 'react';
import './Donate.css';
import QRR from '../assets/QRR.png';

const Donate = () => {
  const recentDonations = [
    { name: 'Alice', amount: '$50', message: 'Keep it up!' },
    { name: 'John', amount: '$30', message: 'Happy to help!' },
    { name: 'Priya', amount: '$100', message: 'Hope this helps someone!' },
  ];

  return (
    <div className="donate-container">
      <div className="donate-header">
        <h1>Support Our Mission</h1>
        <p>“No one has ever become poor by giving.” – Anne Frank</p>
        <p className="donate-quote">Your small help can change someone’s life forever.</p>
      </div>

      <div className="donate-content">
        <div className="qr-section">
          <img src={QRR} alt="Scan to Donate" />
        </div>

        <div className="payment-instructions">
          <h3>Donation Details</h3>
          <p><strong>UPI:</strong> charity@upi</p>
          <p><strong>Bank:</strong> Charity Foundation</p>
          <p><strong>Account No:</strong> 1234567890</p>
          <p><strong>IFSC:</strong> CHRT0001234</p>
          <p>Please mention your name in the UPI note if you'd like to appear in our donor list.</p>
        </div>

        <div className="recent-donations">
          <h3>Recent Donations</h3>
          <ul>
            {recentDonations.map((donor, index) => (
              <li key={index}>
                <strong>{donor.name}</strong> donated <strong>{donor.amount}</strong> — <em>{donor.message}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donate;
