import React from "react";
import IncrementCounterHoc from "./incrementCounterHoc";

const ClickCounter = (props) => {
    const { name, counter, handleChange } = props;

  return (
    <div>
      <h2>{name} Clicked on Counter: {counter} times</h2>
      <button onClick={handleChange}>Click Counter</button>
    </div>
  );
};

const UpdatedComponent = IncrementCounterHoc(ClickCounter);

export default UpdatedComponent;
