import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMoon, FaSun, FaWater, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Health App</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="sleep">
          <FaMoon />
          <span>Sleep Tracker</span>
        </NavLink>
        <NavLink to="hydration">
          <FaWater />
          <span>Hydration</span>
        </NavLink>
        <NavLink to="activity">
          <FaSun />
          <span>Activity</span>
        </NavLink>
        <NavLink to="settings">
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
