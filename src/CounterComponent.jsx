import { useCustomCounter } from "./hooks/useCustomCounter";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";


function CounterComponent() {
  const [count, increment, decrement, reset, setValue] = useCustomCounter();
  const [newCount, setNewCount] = useState('');

  
  function handleOnChange(e) {
    setNewCount(e.target.value);
  }

  function handleOnClick() {
    setValue(Number(newCount));
    setNewCount('');
  }

  return (
    <div className="MyApp">
      <h3>Count Here</h3>
      <p>{count}</p>
      <div className='actionbutton'>
      <button onClick={increment}>Increment</button>
      <br/>
      <br/>
      <button onClick={decrement}>Decrement</button>
      <br/>
      <br/>
      <button onClick={reset}>Reset</button>
      </div>
      <br />
      <br />

      <button onClick={handleOnClick}>Enter</button>
      <input type="number" value={newCount} onChange={handleOnChange} />
      <br />

      <Link to="/">
        <p>Back to Hompage</p>
      </Link>
    </div>
  );
}

export default CounterComponent;
