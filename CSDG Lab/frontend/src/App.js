import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/navbar'; 
import Home from './components/home/home';
import Publication from './components/publication/publication';
import Student from './components/student/student';
import Faculty from './components/faculty/faculty';
import Event from './components/event/event';
import Project from './components/project/project';

import Hackathon from './components/event/hackathon/hackathon';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/student" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/event" element={<Event />} />
          <Route path="/project" element={<Project />} />

          <Route path="/hackathon" element={<Hackathon />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
