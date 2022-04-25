import React from "react";
import IncrementCounterHoc from "./incrementCounterHoc";

const MouseOverCounter = (props) => {
  const { name, counter, handleChange } = props;

  return (
    <div>
      <h2 onMouseOver={handleChange}>
        {name} Mouseovered Counter: {counter} times
      </h2>
    </div>
  );
};

export default IncrementCounterHoc(MouseOverCounter);
