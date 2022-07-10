import React from "react";
import "../DevDisciplinedataPage/DevDisciplineDataPage.scss";

const DevDisciplineDataPage = () => {
  var pageSize = visualViewport.height - 85.38;
  return (
    <div
      className="dev-discipline-container"
      style={{ height: `${pageSize}px`, margin: "0" }}
    >
      DevDisciplineDataPage
    </div>
  );
};

export default DevDisciplineDataPage;
