import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./Search";
import Product from "./Product";
import Home from "./Home";
import Cart from "./Cart";
import Specific from "./Specific";
let routesVariable = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Search",
        element: <Search></Search>,
      },
      {
        path: "/Product",
        element: <Product></Product>,
      },
      {
        path: "/Cart",
        element: <Cart></Cart>,
      },
      {
        path: "/Specific/:id",
        element: <Specific></Specific>,
      },
      {
        path: "*",
        element: <h1>Page not Found Please check your Url</h1>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routesVariable}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
