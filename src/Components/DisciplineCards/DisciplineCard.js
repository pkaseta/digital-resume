import React from "react";
import "./DisciplineCard.scss";

const DisciplineCard = ({ discipline, bgImage }) => {
  const cardClickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div
      className="discipline-card"
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={cardClickHandler}
    >
      <div className="bg-opacity"></div>
      <div className="discipline-text">{discipline}</div>
    </div>
  );
};

export default DisciplineCard;
