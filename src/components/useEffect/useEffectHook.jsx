import React, { useEffect, useState, useRef } from "react";

const UseEffectHook = (props) => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const timerId = useRef(null);


  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

    useEffect(() => {
      console.log("Use-Effect Trigged with dependency COunter-1 and Counter-2 F-1");
    }, [counter, counter2]);

    useEffect(() => {
      console.log("Use-Effect Trigged Without Dependecny F-1");
    });

  const handleClick = () => console.log("Document has been clicked F-1");

  useEffect(() => {
    console.log("Use-Effect Trigged Without Dependecny Counter-4 F-1");
    document.addEventListener("click", handleClick);
    
    return () => document.removeEventListener('click', handleClick);

    // const timer = setInterval(() => {
    //     console.log("Interval F-1", counter4);
    // }, 700);

    // console.log("Timer - Id F-1", timer);
    // timerId.current = timer;

    // return () => {
    //     console.log("Unmounting Operation F-1")
    //     // clearInterval(timerId.current);
    // }
  }, [counter4]);

useEffect(() => {
    console.log("Component is Mounted");

    return () => console.log("Component is Unmounted");
}, [])

  return (
    <>
      <h1>Counter_1: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment-1</button>
      <h1>Counter_2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement-1</button>
      <h1>Counter_3: {counter3}</h1>
      <button onClick={() => setCounter3(counter3 + 5)}>Increment-2</button>
      <h1>Counter_4: {counter4}</h1>
      <button onClick={() => setCounter4(counter4 - 5)}>Decrement-2</button>
    </>
  );
};

export default UseEffectHook;
