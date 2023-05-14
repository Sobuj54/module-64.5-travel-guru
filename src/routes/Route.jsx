import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import TravelPlaces from "../components/places/TravelPlaces";
import Login from "../components/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <TravelPlaces></TravelPlaces>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
