import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import rectangle1 from "../../assets/images/Rectangle 1.png";

const Home = () => {
  return (
    <div
      className="justify-center  bg-no-repeat bg-cover bg-center rounded-lg`"
      style={{ backgroundImage: `url(${rectangle1})` }}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
