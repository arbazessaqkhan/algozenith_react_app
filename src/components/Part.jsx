import React from 'react';
import './Part.css';

const Part = ({ title, progress, items }) => {
  return (
    <div className="part">
      <div className="part-header">
        <h3>{title}</h3>
        <div className="details">
          <span>02:00:00</span>
          <span>Medium</span>
          <span>5</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <span>{item.type}</span>
            <span>{item.title}</span>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part;
