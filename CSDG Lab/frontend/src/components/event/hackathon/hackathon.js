import React from 'react';
import './hackathon.css';

const Hackathon = () => {
  return (
    <div className="hackathon-container">
      <div className="event-heading">
        <h1>Hardware Accelerator Design Hackathon</h1>
      </div>
      <div className="event-info">
        <p>We cordially invite you to participate in the Accelerator Design Hackathon organized in a workshop mode by IIIT-H at the institute campus from April 30th to May 4th. The following is the tentative schedule of the workshop.</p>
        <div className="event-points">
          <ul>
            <li>Day 1: Accelerator Design Basics, FPGA Basics</li>
            <li>Day 2: More on Accelerator Design, Tools</li>
            <li>Day 3, 4, 5: Define your project and work on it</li>
            <li>Day 5: Poster Presentation</li>
          </ul>
        </div>
        <p>You can bring your favorite problem from areas such as high-performance computing, machine learning, image and video processing, cryptography, build a rapid prototype of it within 5 days. No prerequisite knowledge is necessary. The workshop will be self-contained.</p>
        <p>This hackathon workshop is open to all full-time students at any recognized educational institute in India. Please register yourselves by filling the following form before April 13th 2018.</p>
      </div>
      <a href="https://goo.gl/forms/7Jj9AAW3oxNblnzt2" className="registration-link">Registration Link</a>
    </div>
  );
};

export default Hackathon;
