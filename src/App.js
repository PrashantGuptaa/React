import "./App.css";
import React from "react";
import UseEffectHook from "./components/useEffect/useEffectHook";

function App() {

  const [show, setShow] = React.useState(true);

  setTimeout(() => setShow(false), 5000);

  return (
    <>
      <div className="App">
        {
          show ? <UseEffectHook /> : null
        }
      </div>
    </>
  );
}

export default App;
