import React from 'react';
import Timer from './Timer.js';
import './App.css';

const seconds = 360;

function App() {
  return (
    <div className="App">
      <Timer initialTotalSeconds={seconds} />
    </div>
  );
}

export default App;
