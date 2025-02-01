//import "../styles/NavigationBar.css";
import React, { useState, useEffect } from "react";
//import CustomLink from "./CustomLink";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { navigation } from "./styles";

function NavigationBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/saunas">Saunas</Link>
        <Link to="/bars">Bars</Link>
        <Link to="/clubsandparties">Clubs & Parties</Link>
        <Link to="/budapestpride">Budapest Pride</Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
