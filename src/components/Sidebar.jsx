import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>AlgoZenith</h2>
      <ul>
        <li>Dashboard</li>
        <li>Learn</li>
        <li>Forums</li>
        <li className="active">Upskill</li>
        <li>Contest</li>
        <li>Leaderboard</li>
      </ul>
    </div>
  );
};

export default Sidebar;

