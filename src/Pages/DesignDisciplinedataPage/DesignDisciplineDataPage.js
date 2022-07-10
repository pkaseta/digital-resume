import React from "react";
import "../DesignDisciplinedataPage/DesignDisciplinedataPage.scss";

const DesignDisciplineDataPage = () => {
  var pageSize = visualViewport.height - 85.38;
  return (
    <div
      className="design-discipline-container"
      style={{ height: `${pageSize}px` }}
    >
      DevDisciplineDataPage
    </div>
  );
};

export default DesignDisciplineDataPage;
