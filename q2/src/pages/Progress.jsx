import React from 'react';

const Progress = () => {
  return (
    <div className="page-container">
      <h1>Your Progress</h1>
      <div className="progress-section">
        <h3>Introduction to React</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '75%' }}>75%</div>
        </div>
      </div>
      <div className="progress-section">
        <h3>Advanced JavaScript</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '30%' }}>30%</div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
