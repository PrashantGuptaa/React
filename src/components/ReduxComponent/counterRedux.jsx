import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue } from "../../redux/reducers";

const ReduxCounter = () => {
  const state = useSelector((state) => state.counter);
  const { currentCounter, randomValue } = state;
  console.log(state);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  const handleIncrementByValue = () =>
    dispatch(incrementByValue({ 
      value: Math.round(Math.random() * 10), 
      random: Math.round(Math.random() * 10) 
    }));

  return (
    <div>
      <h1>Current Counter Value: {currentCounter} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementByValue}>Increment By Value</button>
      <h2>Random Value: {randomValue} </h2>
    </div>
  );
};

export default ReduxCounter;
