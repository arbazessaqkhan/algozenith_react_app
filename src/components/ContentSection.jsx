import React from 'react';
import Part from './Part';
import './ContentSection.css';

const ContentSection = () => {
  const parts = [
    {
      title: 'Part 1: Lorem Ipsum Dolor Sit Amet',
      progress: 45,
      items: [
        { type: 'Video', title: 'Video 1', time: '10:00' },
        { type: 'Article', title: 'Article 1', time: '10:00' },
        { type: 'Quiz', title: 'Quiz 1', time: '10:00' },
        { type: 'Code', title: 'Coding Exercise 1', time: '10:00' },
        { type: 'Resource', title: 'Combined Resource 1', time: '10:00' },
      ],
    },
    {
      title: 'Part 2: Lorem Ipsum Dolor Sit Amet',
      progress: 20,
      items: [],
    },
    {
      title: 'Part 3: Lorem Ipsum Dolor Sit Amet',
      progress: 0,
      items: [],
    },
  ];

  return (
    <div className="content-section">
      {parts.map((part, index) => (
        <Part
          key={index}
          title={part.title}
          progress={part.progress}
          items={part.items}
        />
      ))}
    </div>
  );
};

export default ContentSection;
