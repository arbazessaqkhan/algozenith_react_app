import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ChapterList from './components/ChapterList';
import ContentSection from './components/ContentSection';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('learning');

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="learning-section">
          <ChapterList />
          <ContentSection />
        </div>
      </div>
    </div>
  );
}

export default App;

