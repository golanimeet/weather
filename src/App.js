import './App.css';
import Weath from './Weath';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='w-100'>
      <Routes>
        <Route path="/" element={<Weath />} />
      </Routes>
    </div>
  );
}

export default App;
