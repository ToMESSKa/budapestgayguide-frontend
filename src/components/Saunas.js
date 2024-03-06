import Main from "../layouts/Main.css"
import axios from "axios";
import React, { useState, useEffect } from "react";

function Saunas() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8080/getsaunas").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="Main">
      <header className="Main-header">
        <a className="Main-link">
          <button onClick={getData}>Do {data} shit.</button>
        </a>
      </header>
    </div>
  );
}

export default Saunas;
