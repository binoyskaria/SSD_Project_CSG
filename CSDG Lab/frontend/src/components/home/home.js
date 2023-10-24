import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container">

      <h1 className="main-heading" >COMPUTER SYSTEM GROUP</h1>
      <img className="group-image" src="/home_image/home.jpg" alt="Group of people from Computer Systems Group" />
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
