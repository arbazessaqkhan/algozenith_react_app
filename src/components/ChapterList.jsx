import React from 'react';
import './ChapterList.css';

const ChapterList = () => {
  return (
    <div className="chapter-list">
      <div className="chapter active">Chapter 1</div>
      <div className="chapter">Chapter 2</div>
      <div className="chapter">Chapter 3</div>
      <div className="chapter">Chapter 4</div>
      <div className="chapter">Chapter 5</div>
    </div>
  );
};

export default ChapterList;

