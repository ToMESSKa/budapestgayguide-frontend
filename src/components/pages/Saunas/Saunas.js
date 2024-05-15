import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../styles/Tiles.css";
import GoogleRating from "../../GoogleRating";
import { TailSpin } from "react-loader-spinner";
import SaunasDesktop from "./SaunasDesktop";
import SaunasMobile from "./SaunasMobile";

function Saunas(props) {
  const [saunaData, setSaunaData] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [saunaInfoToggles, setSaunaInfoToggles] = useState([]);

  useEffect(() => {
    getSaunaData();
  }, []);

  const getSaunaData = () => {
    axios.get("http://localhost:8080/getsaunas").then((response) => {
      console.log(response);
      setSaunaData(response.data);
      setLoading(false);
      createSaunaToggle(response.data);
    });
  };

  const createSaunaToggle = (saunas) => {
    let toggles = [];
    saunas.map((sauna) =>
      toggles.push({ sauna_id: sauna.id, toggle_state: false })
    );
    setSaunaInfoToggles(toggles);
  };

  return (
    <div className="Sauna-div">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : props.isTabletOrMobile ? (
        <SaunasMobile
          saunaInfoToggles={saunaInfoToggles}
          setSaunaInfoToggles={setSaunaInfoToggles}
          saunaData={saunaData}
        ></SaunasMobile>
      ) : (
        <SaunasDesktop saunaData={saunaData}></SaunasDesktop>
      )}
    </div>
  );
}

export default Saunas;
