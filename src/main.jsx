import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {  createBrowserRouter,  Navigate,  RouterProvider} from "react-router-dom";
import App from "./App";
import Login from './Login'
import Test from './components/Test'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={"/login"} />
  },
  {
    path: "/tasks",
    element: <App/>,
  },
  {
    path: "/test/:username",
    element:<Test/>
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);