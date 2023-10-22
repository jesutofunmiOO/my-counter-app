import { useState } from "react";
import { Link } from "react-router-dom";
import "./counter.css";
import { useCustomCounter } from "../hooks/useCustomCounter";

function CounterComponent() {
  const [count, increment, decrement, reset, setValue] = useCustomCounter();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
  }

  function handleOnClick() {
    setValue(Number(newCount));
    setNewCount("");
  }

  return (
    <div className="MyApp">
      <h3>Count Here</h3>
      <p>{count}</p>
      <div className="actionbutton">
        <div className="button-container">
          <button onClick={increment}>Increment</button>
        </div>

        <div className="button-container">
          <button onClick={decrement}>Decrement</button>
        </div>

        <button onClick={reset}>Reset</button>
      </div>
      <div className="button-container">
        <input type="number" value={newCount} onChange={handleOnChange} />
      </div>

      {/* <div className="button-container"> */}
      <button onClick={handleOnClick}>Enter</button>
      {/* </div> */}

      <br />

      <Link to="/">
        <p>Back to Hompage</p>
      </Link>
    </div>
  );
}

export default CounterComponent;
