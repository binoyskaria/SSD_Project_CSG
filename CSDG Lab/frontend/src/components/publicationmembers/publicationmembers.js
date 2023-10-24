import React from 'react';
import './publicationmembers.css'; 

const PublicationMember = ({ title, members, technology, year }) => {
    return (
      <div className="publication">
        <div className="publication-info">
          <div className="publication-title">{title}</div>
          <div className="publication-members">{members}</div>
          <div className="publication-technology">{technology}</div>
        </div>
        <div className="publication-year">{year}</div>
      </div>
    );
  };
  
  export default PublicationMember;
  