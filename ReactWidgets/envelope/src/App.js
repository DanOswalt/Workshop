import React from 'react';
import Envelope from './Envelope.js'
import './App.css';

const people = [{
  name: "Dave Smith",
  street: "123 Dake St.",
  city: "Brookville, OH 45309"
},
{
  name: "Jack Smith",
  street: "123 Asdd St.",
  city: "Brookville, OH 45309"
}
]

function App() {
  return (
    <div className="App">
      <Envelope people={people} />
    </div>
  );
}

export default App;
