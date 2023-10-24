import React from "react";

import FacultyMember from '../facultymembers/facultymembers'; 

import "./faculty.css";

const Faculty = () => {
    return (
      <div className="faculty-container">
        
        <FacultyMember
          name="Suresh Purini"
          role="Assistant Professor"
          education="Ph.D. (University of Maryland, Baltimore County)"
          interests={[
            "Compilers", 
            "Parallel and distributed systems", 
            "Virtualization", 
            "Cloud computing and complexity theory"
        ]}
          imgSrc="/faculty_image/suresh.jpg"
        />

        <FacultyMember
            name="Venkatesh Choppella"
            role="Associate Professor"
            education="Ph.D. (Indiana University, Bloomington)"
            interests={["Programming Languages", "S/W Architectures", "Formal Methods", "CS Education"]}
            imgSrc="/faculty_image/Venkatesh_Choppella.jpg"  
        />

        <FacultyMember
            name="Deepak Gangadharan"
            role="Assistant Professor"
            education="Ph.D. (National University of Singapore, Singapore)"
            interests={[
                "Scalable design and Performance Analysis of Edge-based IoT systems",
                "Analysis and Scheduling of Real-Time Distributed Systems/Cyber-Physical Systems",
                "Hardware/Software Co-Design, Faultytolerant System Design"
            ]}
            imgSrc="/faculty_image/Deepak.jpg"  
        />

        <FacultyMember
            name="Vignesh Sivaraman"
            role="Assistant Professor"
            education="Ph.D. (National University of Singapore, Singapore)"
            interests={[
                "Information-Centric Networks",
                "Internet of Things",
                "Privacy"
            ]}
            imgSrc="/faculty_image/VigneshSivaraman.jpg" 
        />

        <FacultyMember
            name="Tejas Bodas"
            role="Assistant Professor"
            education="Ph.D (IIT Bombay)"
            interests={[
                "Stochastic modeling",
                "Queueing theory, pricing",
                "Game theory, mean field approximation",
                "Markov decision processes",
                "Reinforcement learning and Bayesian Optimization"
            ]}
            imgSrc="/faculty_image/Tejas_b.jpg"  
      />
      </div>
    );
  };

export default Faculty;
