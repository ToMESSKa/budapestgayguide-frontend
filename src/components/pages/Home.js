import axios from "axios";
import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import EventMobile from "./EventMobile";

const Home = (props)=> {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const url = "https://budapestgayguide-backend.onrender.com";
  const url ="http://localhost:8080"


  const getEventData = () => {
    axios.get(url + "/getevents").then((response) => {
      console.log(response)
      setEventData(response.data)
      setLoading(false);
    });
  };

  return (
      <div className="home">
        <EventMobile eventData={eventData}></EventMobile>
      </div>
  );
}

export default Home;
