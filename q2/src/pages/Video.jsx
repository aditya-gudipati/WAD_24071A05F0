import React from 'react';

const Video = () => {
  return (
    <div className="page-container">
      <h1>Course Video</h1>
      <div className="video-placeholder">
        <p>Video Player Placeholder</p>
        <p>(No images or media as requested)</p>
      </div>
      <div className="video-controls">
        <button className="btn">Previous Lesson</button>
        <button className="btn">Next Lesson</button>
      </div>
    </div>
  );
};

export default Video;
