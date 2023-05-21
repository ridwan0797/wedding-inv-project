import React, { useEffect, useState } from 'react';

const SongCard = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const isMobile = () => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };

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

  useEffect(() => {
    const audioElement = audioRef.current;

    switch (isMobile()) {
      case true:
        setIsPlaying(false); // Jika web dibuka di mobile, set isPlaying ke false
        break;
      case false:
        setIsPlaying(true); // Jika web tidak dibuka di mobile, set isPlaying ke true
        break;
      default:
        setIsPlaying(false); // Default: set isPlaying ke false
        break;
    }

    if (audioElement) {
      audioElement.play().catch(error => {
        // Handle play error
        console.error('Failed to play audio:', error);
      });
      setIsPlaying(true);
    }

    return () => {
      if (audioElement) {
        audioElement.pause();
        setIsPlaying(false);
      }
    };
  }, [audioRef]);

  return (
    <div className="player shadow-md round-button" style={{ position: 'fixed', bottom: '2rem', left: '1rem', zIndex: '9999' }} onClick={togglePlay}>
      <div className="text-lg">{isPlaying ? '🔇' : '🔊'}</div>
      <audio ref={audioRef} src="
