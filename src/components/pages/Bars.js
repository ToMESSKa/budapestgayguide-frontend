import axios from "axios";
import React, { useState, useEffect } from "react";

import { TailSpin } from "react-loader-spinner";
import VenueMobile from "./VenueMobile";
import VenueDesktop from "./VenueDesktop";

function Bars({ isTabletOrMobile }) {
  useEffect(() => {
    getBarData();
  }, []);

  const [loading, setLoading] = useState(true);
  const [barData, setBarData] = useState([0]);
  const [barInfoToggles, setBarInfoToggles] = useState([]);
  const url ="https://budapestgayguide-backend.onrender.com"
  //const url = "http://localhost:8080";

  const getBarData = () => {
    axios.get(url + "/getbars").then((response) => {
      console.log(response);
      setBarData(response.data);
      setLoading(false);
      createBarToggle(response.data);
    });
  };

  const createBarToggle = (bars) => {
    let toggles = [];
    bars.map((bar) => toggles.push({ venue_id: bar.id, toggle_state: false }));
    setBarInfoToggles(toggles);
  };

  return (
    <div className="bars">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : isTabletOrMobile ? (
        <VenueMobile
          venueData={barData}
          venueInfoToggles={barInfoToggles}
          setVenueInfoToggles={setBarInfoToggles}
        ></VenueMobile>
      ) : (
        <VenueDesktop venueData={barData}></VenueDesktop>
      )}
    </div>
  );
}

export default Bars;
