import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './component/DialogBegin';
import SongCard from './component/AudioPlayer';
import { useState, useEffect } from 'react';
import MainContent from './view/MainContent';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    if (!isDialogOpen) {
      // Dialog is closed, trigger audio play
      const audioElement = document.getElementById('audioPlayer');
      audioElement.play();
    }
  }, [isDialogOpen]);

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

          <SongCard />

          <MainContent />
      </div>
   </BrowserRouter>
  );
}

export default App;
