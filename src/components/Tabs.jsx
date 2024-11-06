import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === 'mentor' ? 'active' : ''}
        onClick={() => setActiveTab('mentor')}
      >
        Mentor Sessions
      </button>
      <button
        className={activeTab === 'learning' ? 'active' : ''}
        onClick={() => setActiveTab('learning')}
      >
        Learning Material
      </button>
    </div>
  );
};

export default Tabs;
