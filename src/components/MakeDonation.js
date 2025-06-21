import React from "react";
import QRR from '../assets/QRR.png';
import "./MakeDonation.css";

const MakeDonation = () => {
  return (
    <div className="donation-container">
      <h1 className="donation-heading">Make a Donation</h1>
      <p className="donation-description">
        Your contribution can bring a big change. Every penny counts. Donate today to support our cause and help those in need.
      </p>

      <div className="qr-section">
        <img
          src={QRR}
          alt="QR Code"
          className="qr-image"
        />
        <div className="payment-details">
          <p><strong>Account Name:</strong> Charity Foundation</p>
          <p><strong>Account Number:</strong> 1234567890</p>
          <p><strong>IFSC Code:</strong> CHRT0001234</p>
          <p><strong>UPI ID:</strong> charity@upi</p>
        </div>
      </div>

      <div className="previous-donations">
        <h2>Previous Donations</h2>
        <ul>
          <li>John Doe - $50 - 10th May 2025</li>
          <li>Jane Smith - $100 - 9th May 2025</li>
          <li>Alex Brown - $30 - 7th May 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default MakeDonation;