import React from 'react';
import './facultymembers.css'; 

const FacultyMember = ({ name, role, education, interests, imgSrc }) => {
  return (
    <div className="faculty-member">
      <img src={imgSrc} alt={name} className="faculty-photo" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{education}</p>
      <div className="research">
        <p>Research Interests</p>
        <ul>
          {interests.map((interest, index) => <li key={index}>{interest}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default FacultyMember;
