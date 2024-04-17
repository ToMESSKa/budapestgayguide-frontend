import "../styles/MobileHeader.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";

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

  return (
    <div className="mobile-header">
      
      <Menu className="mobile-header-menu">
        <a id="home" className="menu-item" href="/">
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
        </a>
      </Menu>
      <div className="mobile-header-title"><header>BUDAPEST GAY GUIDE</header></div>
    </div>
  );
}

export default MobileHeader;
