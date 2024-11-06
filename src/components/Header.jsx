import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <button>How it works</button>
      <div className="profile-icons">
        <span className="notification-icon">🔔</span>
        <span className="profile-icon">⚪</span>
      </div>
    </div>
  );
};

export default Header;

