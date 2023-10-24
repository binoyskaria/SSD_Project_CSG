import React from 'react';
import { Link } from 'react-router-dom';
import './event.css';

const Event = () => {
  return (
    <div className="content">
      <h1><Link to="/hackathon" className="hackathon-link">Hardware Accelerator Design Hackathon</Link></h1>
      <p>April 30th to May 4th (Tentatively)</p>
    </div>
  );
};

export default Event;
