import React from "react";

const TravelPlaces = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 flex">
      <div>
        <h2 className="text-7xl uppercase font-semibold ">Cox's bazar</h2>
        <p className="my-6">
          Search your Destination... News Destination Blog Contact Login Cox's
          bazar Booking Cox’s Bazar Sreemangal Sundarbans
        </p>
        <button className="btn btn-warning">Warning</button>
      </div>
      {/* carousel */}
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Pizza"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelPlaces;
