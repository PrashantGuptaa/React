import "./App.css";
import React from "react";
import ClickCounter from './components/HOC/clickCounter';
import MouseOverCounter from "./components/HOC/mouseOverCounter";
import RightClickCounter from "./components/HOC/rightClickCounter";

const App = () => {


  return (
    <div className="App">
      <ClickCounter/>
      <MouseOverCounter/>
      <RightClickCounter/>
    </div>
  );
};

export default App;
