import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);

  const getData = () => {
    let data = { budapestPlace: "test", budapestTime: "test" };
    axios.post("http://localhost:8080/getdata", data).then((response) => {
      setData(response.data.budapestPlace);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          <button onClick={getData}>Do {data} shit.</button>
        </a>
      </header>
    </div>
  );
}

export default Main;
