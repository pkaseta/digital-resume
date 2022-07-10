import React from "react";
import DisciplineCard from "../../Components/DisciplineCards/DisciplineCard";
import "../DesignDisciplinedataPage/DesignDisciplinedataPage.scss";

//Image imports
import EducationImg from "../../Data/education.jpeg";
import ProjectsImg from "../../Data/projects.jpeg";
import ExperienceImg from "../../Data/experience.jpeg";

const DesignDisciplineDataPage = () => {
  var pageSize = visualViewport.height - 85.38;
  return (
    <div
      className="design-discipline-container"
      style={{ height: `${pageSize}px`, margin: "0" }}
    >
      <DisciplineCard
        discipline={"Experience"}
        bgImage={ExperienceImg}
        clickHandler={() => console.log("Experience")}
      />
      <DisciplineCard
        discipline={"Projects"}
        bgImage={ProjectsImg}
        clickHandler={() => console.log("Projects")}
      />
      <DisciplineCard
        discipline={"Education"}
        bgImage={EducationImg}
        clickHandler={() => console.log("Education")}
      />
    </div>
  );
};

export default DesignDisciplineDataPage;
