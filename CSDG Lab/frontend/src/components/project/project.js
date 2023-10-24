import React from 'react';
import ProjectDetails from '../projectdetails/projectdetails';  

const Project = () => {
    return (
        <div className="project-container">

            <ProjectDetails 
                title="Compiling PolyMage Domain-Specific Language for Emerging Parallel Architectures"
                detail="Uday Kumar Reddy Bondhugula (IISc, Bangalore), Suresh Purini (IIIT, Hyderabad)"
                funding="Department of Science and Technology - Rs. 80 lacs only"
                duration="2017 - 2020"
                summary="This proposal seeks to conduct further research and development on PolyMage, a new domain-specific language and its compiler, initiated by the Multicore Computing Lab, at the Indian Institute of Science..."
            />

            <ProjectDetails 
                title="Large Scale Distributed Model Checking"
                detail="Suresh Purini, Venkatesh Choppella"
                funding="Hitachi Research, Bangalore, India - Rs. 40 lacs"
                duration="2014 - 2016"
                summary="The objective of the proposed research work is to consider the implementation of model checking on distributed cloud-based platforms in order to make model checking efficient and scalable."
            />

            <ProjectDetails 
                title="State variable approach to the model-driven development of software for reactive systems"
                detail="Venkatesh Choppella"
                funding="Siemens India, Bangalore, India - Rs. 14 lacs"
                duration="2011 - 2013"
                summary="The objective of the proposed research work is towards the development of software in reactive systems via model-driven development using state variable approach."
            />
            
        </div>
    );
};

export default Project;
