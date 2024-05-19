import axios from "axios";
import React, { useState, useEffect } from "react";

import { TailSpin } from "react-loader-spinner";
import VenueMobile from "./VenueMobile";
import VenueDesktop from "./VenueDesktop";

function ClubsAndParties({ isTabletOrMobile }) {
  useEffect(() => {
    getBarData();
  }, []);

  const [loading, setLoading] = useState(true);
  const [clubData, setClubData] = useState([0]);
  const [clubInfoToggles, setClubInfoToggles] = useState([]);
  // const url ="https://budapestgayguide-backend.onrender.com"
  const url ="http://localhost:8080"

  const getBarData = () => {
    axios.get(url + "/getclubsandparties").then((response) => {
      console.log(response);
      setClubData(response.data);
      setLoading(false);
      createClubToggle(response.data);
    });
  };

  const createClubToggle = (bars) => {
    let toggles = [];
    bars.map((bar) => toggles.push({ venue_id: bar.id, toggle_state: false }));
    setClubInfoToggles(toggles);
  };

  return (
    <div className="clubs">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : isTabletOrMobile ? (
        <VenueMobile
          venueData={clubData}
          venueInfoToggles={clubInfoToggles}
          setVenueInfoToggles={setClubInfoToggles}
        ></VenueMobile>
      ) : (
        <VenueDesktop venueData={clubData}></VenueDesktop>
      )}
    </div>
  );
}

export default ClubsAndParties;
