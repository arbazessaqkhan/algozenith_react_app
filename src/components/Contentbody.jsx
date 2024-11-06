import React from 'react';
import Chapters from './Chapters';
import Material from './Material';
import './Contentbody.css';

function Contentbody() {
  return (
    <div className="content">
      <div className="chapter-list">
        <Chapters />
      </div>
      <div className="learning-material">
        <Material />
      </div>
    </div>
  );
}

export default Contentbody;
