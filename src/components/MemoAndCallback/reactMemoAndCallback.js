import React, { memo } from "react";

const ReactMemoExample = ({ counter, handleChange }) => {
  console.log("React Memo Example");
  return (<div>
      <h1>Counter: {counter} </h1>
      <button onClick={handleChange}>Click</button>
      </div>);
};

const memoizedReactMemoExample = memo(ReactMemoExample);

export default memoizedReactMemoExample;
