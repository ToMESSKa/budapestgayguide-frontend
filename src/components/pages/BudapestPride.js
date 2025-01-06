import axios from "axios";
import React, { useState, useEffect } from "react";

import { TailSpin } from "react-loader-spinner";
import VenueMobile from "./VenueMobile";
import VenueDesktop from "./VenueDesktop";

function BudapestPride({ isTabletOrMobile }) {
  useEffect(() => {
    getBudapestPrideData();
  }, []);

  const [loading, setLoading] = useState(true);
  const [budapestPrideData, setBudapestPrideData] = useState([0]);
  const [barInfoToggles, setBarInfoToggles] = useState([]);
  const url ="https://budapestgayguide-backend.onrender.com"
  //const url = "http://localhost:8080";

  const getBudapestPrideData = () => {
    axios.get(url + "/getbudapestpride").then((response) => {
      console.log(response);
      setBudapestPrideData(response.data);
      setLoading(false);
    });
  };

  const formatTime = (event) => {
    const date = new Date(event.time * 1000);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };


  return (
    <div className="budapest-pride">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : isTabletOrMobile ? (
        <div>NO</div>
      ) : (
        <div>The time of the next Budapest Pride is: {new Date(budapestPrideData[0].time * 1000)
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
          .toLocaleLowerCase()}</div>
      )}
    </div>
  );
}

export default BudapestPride;
