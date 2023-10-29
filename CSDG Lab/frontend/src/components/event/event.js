import React from 'react';
import './event.css';

const Event = () => {
  const handleDivClick = () => {
    window.location.href = '/hackathon'; 
  };

  return (
    <div className="content" onClick={handleDivClick} style={{ cursor: 'pointer' }}>
      <div className="hackathon-title">
        Hardware Accelerator Design Hackathon
      </div>
      <p>April 30th to May 4th (Tentatively)</p>
    </div>
  );
};

export default Event;
