import React from 'react';
import './Material.css';

function Material() {
  return (
    <div className="learning-material-container">
      <div className="learning-material-header">
        <h2>Part 1</h2>
        <p>02:00:00 | Medium | 5</p>
        <span>45% Completed</span>
      </div>
      <div className="resources">
        <div>Video 1 - 10:00</div>
        <div>Article 1 - 10:00</div>
        <div>Quiz 1 - 10:00</div>
        <div>Coding Exercise 1 - 10:00</div>
        <div>Combined Resource 1 - 10:00</div>
      </div>
      {/* Parts 2 and 3 go here similarly */}
    </div>
  );
}

export default Material;
