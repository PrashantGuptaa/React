import React, { useContext } from "react";
import { MyName, Institute, MyCounter } from "./../../App";

const ChildFour = () => {
  const name = useContext(MyName);
  const ins = useContext(Institute);
  const counterData = useContext(MyCounter);
  const { counter, handleChange } = counterData;

  return (
    <div>
      <h1>
        Child four with name: {name} - {ins} - Counter: {counter}
      </h1>
      <button onClick={handleChange}>Click Me</button>
    </div>
  );
};

export default ChildFour;
