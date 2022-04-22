import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import ReactMemoExample from "./components/MemoAndCallback/reactMemoAndCallback";

const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const [counter, setCounter] = useState(0);

  const handleChange = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  useEffect(() => {
    console.log("Random Number is Updated");
  }, [randomNumber]);

  useEffect(() => {
    setInterval(() => {
      setRandomNumber(Math.random().toFixed(2)); // 1 -> 3 -?4
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h2>Random Number: {randomNumber} </h2>
      <ReactMemoExample counter={counter} handleChange={handleChange} />
    </div>
  );
};

export default App;
