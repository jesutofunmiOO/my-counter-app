
import { StrictMode } from 'react';
import {createBrowserRouter, createRoutesFromElements,
  Route, RouterProvider} from "react-router-dom";
import Root from "./Route/root";
import CounterComponent from "./CounterComponent";
import "./index.css";
import { Link } from "react-router-dom";




const objectRouter = createBrowserRouter([
  
    {
    path: '/',
    element: <Root />,
    
  },
  {
    path: "/counter",
    element: <CounterComponent />,
  },
  
  {
    path: "*",
    element: <h2> 
      Oops....404 Error Page not found 😢 
    <br/> 
    <br/>
    <h6>Click here to return to <Link to= "/counter">Counter App</Link></h6>
    </h2>
  }
]);

function App(){
  return(
    <>
    <RouterProvider router={objectRouter}></RouterProvider>
    </>
  )
}


export default App;






