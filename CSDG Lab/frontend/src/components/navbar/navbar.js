import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (

    <div className="navbar-container">
      <div className="logos-container">
        <img src="/logos/csg_logo.png" alt="CSG Logo" className="logo-csg" />

        {/* Animation at center top */}
        <Player
            autoplay
            loop
            src="https://lottie.host/3d4627ff-bad5-4b6f-89e2-f2590a4d41a6/7wcuvnlIoR.json"
            style={{ height: '125px', width: '300px' }}
          >
      </Player>

        <img src="/logos/IIIT.png" alt="IIT Logo" className="logo-iit" />
      </div>
      <div className="navbar">
        <div className="navbar-left">
        <Link to="/">CSG <span>Lab</span></Link>
        </div>
        <div className="navbar-right">
        <Link to="/"><span>Home</span></Link>
        <Link to="/faculty"><span>Faculty</span></Link>
        <Link to="/student"><span>Students</span></Link>
        <Link to="/project"><span>Projects</span></Link>
        <Link to="/event"><span>Events</span></Link>
        <Link to="/publication"><span>Publications</span></Link>
          {/* <input type="search" id="find" placeholder="Search" /> */}
          {/* <div id="searchResults"></div> */}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
