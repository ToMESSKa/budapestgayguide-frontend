import "../styles/NavigationBar.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./MobileHeader";

function NavigationBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/saunas">Saunas</CustomLink>
        <CustomLink to="/bars">Bars</CustomLink>
        <CustomLink to="/parties">Parties</CustomLink>
        <CustomLink to="/signin">Sign In</CustomLink>
      </ul>
    </nav>
  );
}

export default NavigationBar;
