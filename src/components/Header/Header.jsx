import React, { useContext } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { TravelContext } from "../../provider/AuthContext";

const Header = () => {
  const { user } = useContext(TravelContext);

  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto flex justify-between mt-4">
      <div className="flex-none gap-8">
        <div className="h-[56px] w-[120px]">
          <img src={logo}></img>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Your Destination"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link>Bookings</Link>
        <Link>Destination</Link>
        <Link>Contact</Link>

        {user ? (
          <Link to="/login">
            <span className="text-green-800">{user}</span>
            <button className="btn btn-warning ml-2">Logout</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-warning">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
