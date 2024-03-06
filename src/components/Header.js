import Main from "../layouts/Main.css"
import axios from "axios";
import React, { useState, useEffect } from "react";
import MainTitle from "./HeaderTitle";

function Header() {

  return (
    <div className="Header">
      <header className="Header-header">
       <HeaderTitle></HeaderTitle>
       <button>Saunas</button>
       <button>Clubs</button>
       <button>Bars</button>
      </header>
    </div>
  );
}

export default Header;
