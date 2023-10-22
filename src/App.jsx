import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage/error";
import Home from "./Route/Home";
import CounterComponent from "./Counter/CounterComponent";

const objectRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <CounterComponent />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={objectRouter}></RouterProvider>
    </>
  );
}

export default App;
