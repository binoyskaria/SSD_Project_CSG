import React from 'react';
import './projectdetails.css'; 

const ProjectDetails = ({ title, detail, funding, duration, summary }) => {
    return (
        <div className="project">
            <div className="project-heading">
                <h4>{title}</h4>
            </div>
            <div className="project-detail">
                <p>{detail}</p>
                <p>{funding}</p>
                <p>{duration}</p>
            </div>
            <div className="summary">
                {/* <h3>Summary</h3> */}
                <p>{summary}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;
