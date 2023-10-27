import React, { useState } from 'react';
import ProjectDetails from '../projectdetails/projectdetails';
import './project.css'

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [shrinkContainer, setShrinkContainer] = useState(false);

    const projects = [
        {
            title: "Compiling PolyMage Domain-Specific Language for Emerging Parallel Architectures",
            detail: "Uday Kumar Reddy Bondhugula (IISc, Bangalore), Suresh Purini (IIIT, Hyderabad)",
            funding: "Department of Science and Technology - Rs. 80 lacs only",
            duration: "2017 - 2020",
            summary: "This proposal seeks to conduct further research and development on PolyMage, a new domain- specific language and its compiler, initiated by the Multicore Computing Lab, at the Indian Institute of Science. PolyMage was developed as a DSL for the domain of image processing pipelines. The proposed work is focused on developing support for PolyMage to target emerging parallel architectures including customized reconfigurable architectures like FPGAs. On such architectures, besides customizing a hardware design to the application at hand through a dataflow-style architecture (as opposed to instruction-based), it is also possible to customize the precision of operations at hand to desired levels. This leads to high-performing, area-efficient and power-efficient design capable of delivering acceleration and high energy efficiency when compared to conventional general-purpose multicore processors or even GPUs. In addition, we also plan to extend the scope of computation patterns to target through PolyMage. "
        },
        {
            title: "Large Scale Distributed Model Checking",
            detail: "Suresh Purini, Venkatesh Choppella",
            funding: "Hitachi Research, Bangalore, India - Rs. 40 lacs",
            duration: "2014 - 2016",
            summary: "The objective of the proposed research work is to consider the implementation of model checking on distributed cloud-based platforms in order to make model checking efficient and scalable. This will, hopefully, widen the scope of industry-based problems to which model checking can be applied."
        },
        {
            title: "State variable approach to the model-driven development of software for reactive systems",
            detail: "Venkatesh Choppella",
            funding: "Siemens India, Bangalore, India - Rs. 14 lacs",
            duration: "2011 - 2013",
            summary: "The objective of the proposed research work is towards the development of software in reactive systems via model-driven development using state variable approach."
        }
    ];

    const handleProjectClick = (index) => {
        setSelectedProject(projects[index]);
        setShrinkContainer(true); // Shrink the container
    };

    return (
        <div className="project-layout">
            <div className={`project-container ${shrinkContainer ? 'shrink' : ''}`}>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <div className="each-project" key={index} onClick={() => handleProjectClick(index)}>
                            <ProjectDetails
                                title={project.title}
                                detail={project.detail}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={`project-display ${selectedProject ? 'active' : ''}`}>
                {selectedProject && (
                    <div className="selected-project">
                        <h3>{selectedProject.title}</h3>
                        <div className="project-detail">
                            <p>{selectedProject.detail}</p>
                            {selectedProject.funding && <p>{selectedProject.funding}</p>}
                            {selectedProject.duration && <p>{selectedProject.duration}</p>}
                        </div>
                        <div className="summary">
                            <h3>Summary</h3>
                            {selectedProject.summary && <p>{selectedProject.summary}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;