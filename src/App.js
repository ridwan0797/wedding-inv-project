import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './component/DialogBegin';
import SongCard from './component/AudioPlayer';
import { useState, useEffect, useRef } from 'react';
import MainContent from './view/MainContent';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.play().catch(error => {
        // Handle play error
        console.error('Failed to play audio:', error);
      });
    }
  }, []);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="App w-full">
        {isDialogOpen && (
          <Dialog
            backgroundImage="https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg"
            onClose={handleDialogClose}
          />
        )}

        {!isDialogOpen && (
          <>
            <SongCard audioRef={audioRef} />
          </>
        )}

        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
