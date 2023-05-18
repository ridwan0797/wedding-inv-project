import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './component/DialogBegin';
import SongCard from './component/AudioPlayer';
import { useState } from 'react';
import MainContent from './view/MainContent';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

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

          {isDialogOpen ? null : <SongCard />}
          
          <MainContent />
      </div>
   </BrowserRouter>
  );
}

export default App;
