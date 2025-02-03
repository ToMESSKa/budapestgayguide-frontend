/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import {
  mobileHeaderStyles,
  hamburgerMenu,
  navlink,
  mobileNavigationTitle,
} from "./styles";
import HeaderTitle from "./HeaderTitle";

function MobileNavigation() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);
  const closeSideBar = () => setIsOpen(false);

  return (
    <div>
      <div>
        <Menu
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          styles={hamburgerMenu}
        >
          <NavLink id="home" onClick={closeSideBar} to="/">
            Home
          </NavLink>
          <NavLink id="saunas" onClick={closeSideBar} to="/saunas">
            Saunas
          </NavLink>
          <NavLink id="bars" onClick={closeSideBar} to="/bars">
            Bars
          </NavLink>
          <NavLink
            id="clubsandparties"
            onClick={closeSideBar}
            to="/clubsandparties"
          >
            Clubs & Parties
          </NavLink>
          <NavLink
            id="budapestpride"
            onClick={closeSideBar}
            to="/budapestpride"
          >
            Budapest Pride
          </NavLink>
        </Menu>
      </div>
    </div>
  );
}

export default MobileNavigation;
