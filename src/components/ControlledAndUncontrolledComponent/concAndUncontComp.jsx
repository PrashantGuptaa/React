import { useState } from "react";

const ControlledAndUnControlledComponent = () => {
  const [controlledValue, setControlledValue] = useState("");

  const handleChange = (e) => {
    console.log("handleing Change");
    setControlledValue(e.target.value)
  }

  return (
    <div>
        <div>
            <label htmlFor='conc'>Controlled Component</label>
      <input
        value={controlledValue}
        onChange={handleChange}
        id='conc'
      />
      </div>
      <label htmlFor='unconc'>UnControlled Component</label>
      <input id='unconc' />
    </div>
  );
};

export default ControlledAndUnControlledComponent;
