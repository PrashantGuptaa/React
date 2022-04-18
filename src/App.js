import "./App.css";
import React, { useState, useRef } from "react";
import IncrementCounter from './components/reactKey/regularCounter';
import MultiplyCounter from "./components/reactKey/multiplyCounter";
import UseRefHook from "./components/useRefHook/useRefHook";

const createRandomValue = () => {
  const random = Math.random()*100;
  return {
    id: Math.round(random),
    val: Math.round(random)
  };
}

const arr = [
  {
    val: 10,
    id: 0
  },
  {
    val: 20,
    id: 1
  },
]

function App() {

  const [myValsArr, setMyValsArr] = useState(arr);
  // const myRef = useRef(1);
  let data = 100;
  

  const handleClick = () => {
    const vals = [...myValsArr];
    vals.push(createRandomValue());
    setMyValsArr(vals);
  }

  // setInterval(() => {
  //   console.log("Interval Created");
  //   data = Math.random()*100;
  // }, 1000)

  console.log("F-1", data)

  return (
    <>
      <div className="App">
    {/* {
      myValsArr.map((val, i) => <IncrementCounter
      key={val.id}
      value={val.val} 
      /> )
    } */}
    <IncrementCounter 
    key={data}
    value='Value of Key in React'
    />
    <UseRefHook/>
        
         {/* <button onClick={handleClick}>Click</button> */}
      
      </div>
    </>
  );
}

export default App;
