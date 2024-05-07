import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import App from "./App";
import Login from './Login'

const router = createBrowserRouter([
  {
    path: "/tasks",
    element: <App/>,
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