import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <video
      controls
      autoPlay
      loop
      muted
      style={{ width: '100%', borderRadius: '8px' }}
    >
      <source src="/home_assests/1203.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
