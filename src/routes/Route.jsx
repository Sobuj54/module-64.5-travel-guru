import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import TravelPlaces from "../components/places/TravelPlaces";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <TravelPlaces></TravelPlaces>,
      },
    ],
  },
]);

export default router;
