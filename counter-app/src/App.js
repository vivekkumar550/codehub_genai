import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  // let val = 0;
  // Variable 2: function to update the variable

  let [val, setVal] = useState(0);
  const handleIncrement = () => {
    // val = val + 1;
    setVal(val + 1);
    console.log(val);
  };

  const handleDecrement = () => {
    // val = val - 1;
    setVal(val - 1);
    console.log(val);
  };

  const handleReset = () => {
    setVal(0);
  };
  // 2 arguments
  // Callback functions.
  // Array of dependents {state,props}
  // cases
  // 1.1 2
  useEffect(() => {
    if (val < 0) {
      let timer = setTimeout(() => {
        setVal(0);
      }, 5000);

      // cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [val]);
  return (
    <div className="App">
      <Counter
        a={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      ></Counter>
    </div>
  );
}

export default App;
