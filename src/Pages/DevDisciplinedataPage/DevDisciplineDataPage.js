import React from "react";
import DisciplineCard from "../../Components/DisciplineCards/DisciplineCard";
import "../DevDisciplinedataPage/DevDisciplineDataPage.scss";

//Image imports
import EducationImg from "../../Data/education.jpeg";
import ProjectsImg from "../../Data/projects.jpeg";
import ExperienceImg from "../../Data/experience.jpeg";

const DevDisciplineDataPage = () => {
  var pageSize = visualViewport.height - 85.38;
  return (
    <div
      className="dev-discipline-container"
      style={{ height: `${pageSize}px`, margin: "0" }}
    >
      <DisciplineCard
        discipline={"Experience"}
        bgImage={ExperienceImg}
        clickHandler={() => console.log("Hi")}
      />
      <DisciplineCard
        discipline={"Projects"}
        bgImage={ProjectsImg}
        clickHandler={() => console.log("Hi")}
      />
      <DisciplineCard
        discipline={"Education"}
        bgImage={EducationImg}
        clickHandler={() => console.log("Hi")}
      />
    </div>
  );
};

export default DevDisciplineDataPage;
