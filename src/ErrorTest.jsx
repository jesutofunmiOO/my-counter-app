import { useState } from "react";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Ohh there is an error somewhere");
  }
  return (
    <div>
      <h4>Feel free to test the Error Boundary below</h4>
      <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
    </div>
  );
}

export default ErrorTest;