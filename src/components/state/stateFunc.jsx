import React, { useState } from "react";

const StateFunc = () => {
  const [mobileCount, setMobileCount] = useState(0);
  const [laptopCount, setLaptopCount] = useState(2);

  const handleIncrement = () => {
    if (mobileCount >= 5) return;
    setMobileCount(mobileCount + 1);
  };

  const handleDecrement = () => {
    if (mobileCount <= 0) return;
    setMobileCount(mobileCount - 1);
  };

  const handleLaptopIncrement = () => {
    setLaptopCount(laptopCount + 1);
  };

  const handleLaptopDecrement = () => {
    setLaptopCount(laptopCount - 1);
  };

  return (
    <div>
      <h2>Mobile: {mobileCount}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h2>Laptop: {laptopCount}</h2>
      <button onClick={handleLaptopIncrement} disabled={laptopCount >= 5}>
        Increase
      </button>
      <button onClick={handleLaptopDecrement} disabled={laptopCount <= 0}>
        Decrease
      </button>
    </div>
  );
};

export default StateFunc;
