import React from 'react';
import './studentmembers.css';

const StudentMember = ({ name, degree, imgSrc }) => {
  return (
    <div className="student">
      <img src={imgSrc} alt={name} className="student-photo" />
      <h2>{name}</h2>
      <p>{degree}</p>
    </div>
  );
};

export default StudentMember;
