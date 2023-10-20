import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import {ErrorBoundary} from "react-error-boundary"


export default function Root() {
 
  return (
    <>
     <div className='card'>
    <ErrorBoundary fallback= {<h2 className='fallback'>An Error occured in the Component....</h2>}>
      <h1 className='welcome'>Welcome to My Exam Site</h1>
      <p>
         This Page contains My Second Semester ALT School Examination</p>
        <p> Check out my  <Link to= "/counter">Counter App</Link> here
      </p>
      <ErrorTest />
      <p>
        And while you are surveying you can also check out my <Link to= "*"> 404 Page</Link> here which will redirect you to a broken page
      </p>
      </ErrorBoundary>
      </div>
    </>
  );
}


