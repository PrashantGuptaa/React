import React, { useState } from "react";

const m1 = "Password Length should be greater than 8 chars";
const m2 = "Password Length should be less 10 character";
const m3 = "Password looks good";

const Events = () => {
  const [myValue, setMyValue] = useState("");
  const [conditionalMessage, setConditionalMessage] = useState(m1);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    setMyValue(currentValue);
    msg(currentValue);
  };

  const msg = (currentValue) => {
    if (currentValue.length <= 8) {
      setConditionalMessage(m1);
    } else if (currentValue.length > 10) {
      setConditionalMessage(m2);
    } else {
      setConditionalMessage(m3);
    }
  };

  // ? :

  console.log("My Value", myValue, "length", myValue.length);
  return (
    <div>
      <h1>On Change</h1>
      <h5>{conditionalMessage}</h5>
      {/* {myValue.length <= 8 ? (
        <h5>Password should be greater than 8 chars</h5>
      ) : (
        <h5>Password looks good</h5>
      )} */}
      <input onChange={handleChange} value={myValue} />
    </div>
  );
};

export default Events;
