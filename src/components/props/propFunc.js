import React from "react";
import { useState } from "react";

const PropsFunc = (props) => {
  const { label, counter, handleIncrement, index } = props;
    // console.log(props, handleIncrement);

    const handleChildClick = () => {
        handleIncrement(index);
    }
    
  return (
    <div>
      <h4>
        {label} {counter}
      </h4>
      <button onClick={handleChildClick}>Increment</button>
    </div>
  );
};

export default PropsFunc;
