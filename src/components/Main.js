import Saunas from "./pages/Saunas";
import Header from "./Header";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);

  return (
    <div className="Main">
      <Header></Header>
    </div>
  );
}

export default Main;
