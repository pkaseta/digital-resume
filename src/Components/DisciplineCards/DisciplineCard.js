import React from "react";
import "./DisciplineCard.scss";

const DisciplineCard = ({ discipline, bgImage, clickHandler }) => {
  return (
    <div
      className="discipline-card"
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={clickHandler}
    >
      <div className="bg-opacity"></div>
      <div className="discipline-text">{discipline}</div>
    </div>
  );
};

export default DisciplineCard;
