import React from 'react';
import bgvid from '../assets/bgvid.mp4';
import './BackgroundVideo.css';

function BackgroundVideo()
{
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={bgvid} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
    </div>
  );
};

export default BackgroundVideo;