import React from "react";
import rectangle1 from "../../assets/images/Rectangle 1.png";
import rectangle2 from "../../assets/images/Rectangle 26.png";
import rectangle3 from "../../assets/images/Rectangle 27.png";

const TravelPlaces = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 flex gap-5 ">
      <div>
        <h2 className="text-7xl uppercase font-semibold ">Cox's bazar</h2>
        <p className="my-6">
          Search your Destination... News Destination Blog Contact Login Cox's
          bazar Booking Cox’s Bazar Sreemangal Sundarbans
        </p>
        <button className="btn btn-warning">Booking</button>
      </div>
      {/* carousel */}
      <div className="grid grid-cols-3 gap-2">
        <div className="carousel-item">
          <img className="rounded-md" src={rectangle1} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={rectangle2} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={rectangle3} alt="Pizza" />
        </div>
      </div>
    </div>
  );
};

export default TravelPlaces;
