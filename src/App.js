import './App.css';
import React from 'react';
import CounterClassComponent from './components/state/counterClassComponent';
import { useState } from 'react';
import Welcome from './components/welcomeFunctional';

function App() {

  const [showCounterClass, setShowCounterClass] = useState(true);

  setTimeout(() => {
    setShowCounterClass(false)
  }, 5000);

  return (
    <h1 className="App">
      {
        showCounterClass ?
        <CounterClassComponent />
        : <Welcome />
      }
    </h1>
  );
}

export default App;
