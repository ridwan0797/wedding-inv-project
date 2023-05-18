import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './component/DialogBegin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Dialog />

          <div className='text-7xl text-red-700'>
            MAIN PAGE
          </div>
        </header>
      </div>
   </BrowserRouter>
  );
}

export default App;
