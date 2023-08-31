import { useState, useEffect } from 'react';
import './BackgroundMusic.css';
import track from '../assets/rym-lofi.mp3';

function BackgroundMusic() {
    const [isMuted, setIsMuted] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);
    
    useEffect(() => {
        const audioElement = document.getElementById('background-music');
        if (hasInteracted)
        {
          audioElement.muted = isMuted;
        }
    },[isMuted, hasInteracted]);

    function toggleMute()
    {
        if(!hasInteracted)
        {
            const audioElement = document.getElementById('background-music');
            audioElement.play();
            setHasInteracted(true);
        }
        setIsMuted(!isMuted);
    }

    return (
        <div className="container">
            <audio id="background-music" autoPlay loop volume={1.0}>
                <source src={track} type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>
            <button className="muteButton" onClick={toggleMute}>
                {isMuted ? 'Unmute' : 'Mute'}
            </button>
        </div>
    );
};

export default BackgroundMusic;