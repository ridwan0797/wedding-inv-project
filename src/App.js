import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './component/DialogBegin';
import SongCard from './component/AudioPlayer';
import { useState } from 'react';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setIsSongPlaying(true);
  };

  const handleSongToggle = () => {
    setIsSongPlaying(!isSongPlaying);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        {isDialogOpen && (
        <Dialog
          backgroundImage="https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg"
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
        />
      )}
      {isDialogOpen ? null : <SongCard isPlaying={isSongPlaying} onToggle={handleSongToggle} />}
    
        </header>
      </div>
   </BrowserRouter>
  );
}

export default App;
