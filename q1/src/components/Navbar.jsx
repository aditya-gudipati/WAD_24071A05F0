import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">LearningPlatform</div>
      <ul className="nav-links">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
