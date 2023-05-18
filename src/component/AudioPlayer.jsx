import React, { useRef, useState } from 'react';

const SongCard = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (audioElement.paused) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute bottom-5 left-2">
      <div className="player round-button">
        <div  className="text-sm" onClick={togglePlay}>
          {isPlaying ? '🔇' : '🔊'}
        </div>
        <audio ref={audioRef} src="https://dl.dropboxusercontent.com/s/af7c00knl3mwl4v/sempurna.mp3" autoPlay loop />
      </div>
    </div>
  );
};

export default SongCard;
