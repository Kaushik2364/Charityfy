// src/components/QRModal.js
import React from 'react';
import './QRModal.css';

const QRModal = ({ onClose }) => {
  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={e => e.stopPropagation()}>
        <h3>Scan to Donate</h3>
        <img src="/assets/qr.png" alt="QR Code" className="qr-image" />
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default QRModal;
