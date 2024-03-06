import Saunas from "./Saunas";
import Header from "./Header";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);

  return (
    <div className="Main">
      <header className="Main-header">
        <a className="Main-link">
          <Header></Header> 
        </a>
      </header>
    </div>
  );
}

export default Main;
