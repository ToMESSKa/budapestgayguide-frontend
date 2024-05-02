import "../styles/MobileHeader.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import CustomLink from "./CustomLink";
import { Link, NavLink } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import { useMediaQuery } from "react-responsive";

function MobileHeader() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const [isOpen, setIsOpen] = useState();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-header">
      <Menu
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        className="mobile-header-menu"
      >
        <NavLink id="home" className="menu-item" onClick={closeSideBar} to="/">
          Home
        </NavLink>
        <NavLink
          id="saunas"
          className="menu-item"
          onClick={closeSideBar}
          to="/saunas"
        >
          Saunas
        </NavLink>
        <NavLink
          id="bars"
          className="menu-item"
          onClick={closeSideBar}
          to="/bars"
        >
          Bars
        </NavLink>
        <NavLink
          id="parties"
          className="menu-item"
          onClick={closeSideBar}
          to="/parties"
        >
          Parties
        </NavLink>
        <NavLink
          id="signin"
          className="menu-item"
          onClick={closeSideBar}
          to="/signin"
        >
          Sign In
        </NavLink>
        {/* <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="saunas" className="menu-item" href="/saunas">
          Saunas
        </a>
        <a id="bars" className="menu-item" href="/bars">
          Bars
        </a>
        <a id="parties" className="menu-item" href="/parties">
          Parties
        </a>
        <a id="signin" className="menu-item" href="/signin">
          Sign In
        </a> */}
      </Menu>
      <div className="mobile-header-title">
        <header>BUDAPEST GAY GUIDE</header>
      </div>
    </div>
  );
}

export default MobileHeader;
