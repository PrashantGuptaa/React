import "./App.css";
import React, { createContext, useState } from "react";
import ChildOne from "./components/Context/childOne";

export const MyName = createContext();
export const Institute = createContext();
export const MyCounter = createContext();

function App() {

  const [counter, setCounter] = useState(0);

  const obj = {
    counter,
    handleChange: () => setCounter(counter + 1)
  }

  return (
    <div className="App">
      <h1>App-Counter: {counter}</h1>
      <MyName.Provider value={"Prashant"}>
        <Institute.Provider value={"Prepbytes"}>
          <MyCounter.Provider value={obj}>
          <ChildOne />
          </MyCounter.Provider>
        </Institute.Provider>
      </MyName.Provider>
    </div>
  );
}

export default App;
