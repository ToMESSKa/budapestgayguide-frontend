import "../styles/NavigationBar.css";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import NavigationBar from "./NavigationBar";
import Saunas from "./pages/Saunas";
import Bars from "./pages/Bars";
import Parties from "./pages/Parties";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <HeaderTitle></HeaderTitle>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/saunas" element={<Saunas />}></Route>
          <Route path="/parties" element={<Parties />}></Route>
          <Route path="/bars" element={<Bars />}></Route>
        </Routes>
      </header>
    </div>
  );
}
export default Header;
