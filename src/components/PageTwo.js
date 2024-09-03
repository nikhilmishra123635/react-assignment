import React from 'react';
import { FaUser, FaBriefcase, FaTools } from 'react-icons/fa'; // Importing icons
import './Pages.css'; // Updated CSS file

const PageTwo = () => {
  return (
    <div className="page-two">
      <div className="card">
        <FaUser className="card-icon" />
        <h2>About Me</h2>
        <p>As a frontend developer with extensive experience, I specialize in creating efficient and user-friendly Enterprise Resource Planning (ERP) systems. My work focuses on delivering high-performance solutions that streamline business processes, utilizing my skills in design and development to meet complex challenges.</p>
      </div>
      <div className="card">
        <FaBriefcase className="card-icon" />
        <h2>My Experience</h2>
        <p>With over 4 years of experience in the industry, I've worked on a variety of projects, from small websites to large-scale web applications. My expertise includes frontend development, user interface design, and user experience optimization.</p>
      </div>
      <div className="card">
        <FaTools className="card-icon" />
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Typescript</li>
          <li>JQuery, Ajax</li>
          <li>Bootstrap, Tailwind Css</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
    </div>
  );
};

export default PageTwo;
