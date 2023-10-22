import { Link } from "react-router-dom";
import "./error.css";

const ErrorPage = () => {
  return (
    <div>
      <h2>
        <div className="error-message">Oops....404 Error Page not found 😢</div>
        <h6>
          Click here to return to <Link to="/counter">Counter App</Link>
        </h6>
      </h2>
    </div>
  );
};

export default ErrorPage;
