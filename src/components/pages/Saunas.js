import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Tiles.css";
import GoogleRating from "../GoogleRating";
import { TailSpin } from "react-loader-spinner";
import VenueMobile from "./VenueMobile";
import VenueDesktop from "./VenueDesktop";

function Saunas(props) {
  const [saunaData, setSaunaData] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [saunaInfoToggles, setSaunaInfoToggles] = useState([]);
  const url = "https://budapestgayguide-backend.onrender.com";
  // const url ="http://localhost:8080"

  useEffect(() => {
    getSaunaData();
  }, []);

  const getSaunaData = () => {
    axios.get(url + "/getsaunas").then((response) => {
      console.log(response);
      setSaunaData(response.data);
      setLoading(false);
      createSaunaToggle(response.data);
    });
  };

  const createSaunaToggle = (saunas) => {
    let toggles = [];
    saunas.map((sauna) =>
      toggles.push({ venue_id: sauna.id, toggle_state: false })
    );
    setSaunaInfoToggles(toggles);
  };

  return (
    <div className="saunas">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : props.isTabletOrMobile ? (
        <VenueMobile
          venueInfoToggles={saunaInfoToggles}
          setVenueInfoToggles={setSaunaInfoToggles}
          venueData={saunaData}
        ></VenueMobile>
      ) : (
        <VenueDesktop venueData={saunaData}></VenueDesktop>
      )}
    </div>
  );
}

export default Saunas;
