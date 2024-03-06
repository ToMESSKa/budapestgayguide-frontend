import "../styles/NavigationBar.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import CustomLink from "./CustomLink";
import {Link} from "react-router-dom"

function NavigationBar() {
  return (
    <nav className="nav">
      <Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/saunas">Saunas</CustomLink>
        <CustomLink to="/bars">Bars</CustomLink>
        <CustomLink to="/parties">Parties</CustomLink>
      </ul>
      </Link>
    </nav>
  );
}

export default NavigationBar;
