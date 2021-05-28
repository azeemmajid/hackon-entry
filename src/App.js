import { useState } from 'react';
import Header from './components/Header';
import FeelingSelector from './components/FeelingSelector';
import Journal from './components/Journal';
import './App.css';

function App() {
  const [feeling, setFeeling] = useState('');
  return (
    <div className="App">
      <Header />
      <FeelingSelector feeling={feeling} setFeeling={setFeeling} />
      <Journal />
      {/* Journal - add activiites and write what you did */}
    </div>
  );
}

export default App;
