import React from "react";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import "../Header/HeaderNav.scss";

const HeaderNav = () => {
  const [isOpen, setOpen] = useState(false);
  const iconsDisplay = isOpen ? "flex" : "none";
  return (
    <div className="header-container">
      <div className="name-label">Paul Kaseta</div>
      <div className="hamburger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="hamburger-links" style={{ display: iconsDisplay }}>
        <div className="link">Software Developer</div>
        <div className="link">Designer</div>
      </div>
    </div>
  );
};

export default HeaderNav;
