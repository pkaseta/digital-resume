import React, { useState } from "react";
import "../Home/Home.scss";
import DisciplineCard from "../../Components/DisciplineCards/DisciplineCard";
import techImg from "../../Data/techImg.jpeg";
import designImg from "../../Data/designImg.jpeg";
import DevDisciplineDataPage from "../DevDisciplinedataPage/DevDisciplineDataPage";
import DesignDisciplineDataPage from "../DesignDisciplinedataPage/DesignDisciplineDataPage";

const Home = () => {
  const [disciplineSelected, setDisciplineSelected] = useState("");
  const devDisciplineCardclickHandler = (e) => {
    if (e.target.innerText === "Software Developer") {
      setDisciplineSelected("Developer");
      console.log(disciplineSelected);
    }
  };

  const designDisciplineCardclickHandler = (e) => {
    if (e.target.innerText === "Designer") {
      setDisciplineSelected("Designer");
      console.log(disciplineSelected);
    }
  };

  console.log(disciplineSelected);
  return (
    <div className="home-container">
      <DisciplineCard
        discipline={"Software Developer"}
        bgImage={techImg}
        clickHandler={devDisciplineCardclickHandler}
      />
      <DisciplineCard
        discipline={"Designer"}
        bgImage={designImg}
        clickHandler={designDisciplineCardclickHandler}
      />
      {disciplineSelected === "Developer" ? (
        <DevDisciplineDataPage />
      ) : disciplineSelected === "Designer" ? (
        <DesignDisciplineDataPage />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
