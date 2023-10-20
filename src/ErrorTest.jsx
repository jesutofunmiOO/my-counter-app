import { useState } from "react";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Ohh there is an error somewhere");
  }
  return (
    <div className='error'>
      <h4>Feel free to test the Error Boundary below</h4>
      <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
    </div>
  );
}

export default ErrorTest;







/*if (hasError) {
    throw new Error("Oh... wow, there is an error somewhere in the react tree");
  }
  return (
    <div>
      <h2>You can test My Error Boundary below</h2>
      <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
    </div>
  );
}

export default ErrorTest;*/
