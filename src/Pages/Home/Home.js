import React from "react";
import "../Home/Home.scss";
import DisciplineCard from "../../Components/DisciplineCards/DisciplineCard";
import techImg from "../../Data/techImg.jpeg";
import designImg from "../../Data/designImg.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <DisciplineCard discipline={"Software Developer"} bgImage={techImg} />
      <DisciplineCard discipline={"Designer"} bgImage={designImg} />
    </div>
  );
};

export default Home;
