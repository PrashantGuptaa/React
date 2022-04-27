import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue, selectCounter } from "../../redux/reducers";

const ReduxCounter = () => {
  const countValue = useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  const handleIncrementByValue = () => dispatch(incrementByValue(Math.round(Math.random() * 10)));

  console.log("F-2", countValue);
  return (
    <div>
      <h1>Current Counter Value: {countValue} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementByValue}>Increment By Value</button>
    </div>
  );
};

export default ReduxCounter;
