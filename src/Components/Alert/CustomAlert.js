import React from 'react';
import './CustomAlert.css'; // Optional: for styling

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert-overlay" onClick={onClose}>
      <div className="custom-alert-box" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default CustomAlert;