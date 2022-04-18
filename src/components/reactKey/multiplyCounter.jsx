import React from "react";

const MultiplyCounter = (props) => {
  const { counter, handleClick } = props;
  return (
    <div>
      <h1>Multiply Counter: {counter} </h1>
      <button onClick={handleClick}>Incremeent</button>
    </div>
  );
};

export default MultiplyCounter;
