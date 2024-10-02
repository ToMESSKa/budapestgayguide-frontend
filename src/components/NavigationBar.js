import "../styles/NavigationBar.css";
import React, { useState, useEffect } from "react";
import CustomLink from "./CustomLink";
import { useMediaQuery } from "react-responsive";

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
        <CustomLink to="/clubsandparties">Clubs & Parties</CustomLink>
        {/* <CustomLink to="/signin">Sign In</CustomLink> */}
      </ul>
    </nav>
  );
}

export default NavigationBar;
