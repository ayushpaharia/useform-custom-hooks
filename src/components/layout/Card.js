import React, { useState } from "react";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import "../css/Card.css";

function Card({ title, by, date, image }) {
  const day = date.getDate();
  const monthString = [
    "Januray",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];

  // Get month string
  const month = monthString[date.getMonth()];

  const hours = date.getHours();

  // If 3 minutes it give 03 minutes
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  // AM & PM conversion
  const TwelveHourString =
    hours / 12 ? `${hours % 12}:${minutes}PM` : `${hours % 12}:${minutes}AM`;

  // Hover
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleButton = (e) => {
    console.log("Button Clicked!");
    e.stopPropagation();
  };

  return (
    <div className="card__container" onClick={handleModal}>
      <div className={`card__overlay ${!isModalVisible && "hidden"}`}>
        <button className="button__primary" onClick={handleButton}>
          Book Now
        </button>
        <button className="button__secondary" onClick={handleButton}>
          Learn More
        </button>
      </div>
      <img src={image} alt={title} />
      <div className="card__footer">
        <div className="card__date">
          <span className="card__date__day">{day}</span>
          <span className="card__date__month">{month}</span>
          <span className="card__date__hours">{TwelveHourString}</span>
        </div>
        <div className="card__info">
          <div className="card__title">{title}</div>
          <div className="card__by">
            <PermIdentityIcon
              style={{ fontSize: "1.2rem", color: "var(--active)" }}
            />
            <span>{by}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
