import React from "react";

const DriverCard = ({ name, rating, img, car }) => {
  const stars = Math.round(rating);
  const emptyStars = 5 - stars;

  const starIcons = [];

  for (let i = 0; i < stars; i++) {
    starIcons.push(<span key={i}>★</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<span key={i + stars}>☆</span>);
  }

  return (
    <div className="driver-card">
      <img src={img} alt="Driver" />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">{starIcons}</div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
