import "../styles/NavigationBar.css";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import NavigationBar from "./NavigationBar";
import Saunas from "./pages/Saunas";
import Bars from "./pages/Bars";
import Parties from "./pages/Parties";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { getUserInfo } from "../api/GetUserInfo";
import { useMediaQuery } from "react-responsive";

import { Row, Col, Container } from "react-bootstrap";
import BurgerMenu from "./MobileHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const initLogin = async () => {
      const name = await getUserInfo();
      setIsLogin(!!name);
    };
    initLogin();
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <div className="Header">
      <header className="Header-header">
        {isTabletOrMobile ? (
          <div>
            <MobileHeader></MobileHeader>
          </div>
        ) : (
          <div>
            <HeaderTitle></HeaderTitle>
            <NavigationBar></NavigationBar>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/saunas" element={<Saunas />}></Route>
          <Route path="/parties" element={<Parties />}></Route>
          <Route path="/bars" element={<Bars />}></Route>
          <Route
            path="/signin"
            element={<SignIn isLogin={isLogin} setIsLogin={setIsLogin} />}
          ></Route>
        </Routes>
      </header>
    </div>
  );
}
export default Header;
