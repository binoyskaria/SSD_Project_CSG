// import React from "react";
import React, { useEffect } from 'react';

import "./home2.css";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles


const Home = () => {


  useEffect(() => {
    // Add the Bootstrap CSS as a new <link> element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css'; // Use the correct path to your Bootstrap CSS file
    link.id = 'bootstrap-css';
    document.head.appendChild(link);

    // Remove the <link> element when the component unmounts
    return () => {
      const existingLink = document.getElementById('bootstrap-css');
      if (existingLink) {
        existingLink.parentNode.removeChild(existingLink);
      }
    }
  }, []);

  return (
    <div className="home-container">
      <h1 className="main-heading" >COMPUTER SYSTEM GROUP</h1>
      {/* <img className="group-image" src="/home_image/home.jpg" alt="Group of people from Computer Systems Group" /> */}
       <div className='bg-image hover-zoom'>
        <img src='/home_image/home.jpg' alt="Group of people from Computer Systems Group" className='group-image' />
      </div> 
      <section className="sub-section">
        <h3  className="sub-heading" >ABOUT</h3>
        <p>The Computer Systems Group (CSG) was set-up in June 2017...</p>
        <p>The following are the research areas, which the group is either pursuing currently or would like to in the near future:</p>
        <ul>
          <li>Computer Architecture</li>
          <li>Compilers</li>
          <li>Programming Languages</li>
          <li>Computer Networks</li>
          <li>Parallel and Distributed Computing</li>
          <li>Cloud Computing</li>
          <li>Systems Security</li>
          <li>Internet of Things</li>
        </ul>
      </section>

    </div>
  );
};

export default Home;
