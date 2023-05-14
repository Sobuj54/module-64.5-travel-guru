import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import rectangle1 from "../../assets/images/Rectangle 1.png";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital@1&display=swap');
</style>;

const Home = () => {
  return (
    <div
      className="bg-no-repeat "
      style={{ backgroundImage: `url(${rectangle1})` }}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
