import React from 'react';
import './App.css';
import CreditCard from './CreditCard.js';

const cc = {
  bankName: "Big Bank, Inc.",
  cardNumber: "1234 5678 8765 4321",
  expiration: "10/22",
  cardHolderName: "Dave Smith"
}

function App() {
  return (
    <div className="App">
      <CreditCard ccDetails={cc} />
    </div>
  );
}

export default App;
