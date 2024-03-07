import axios from "axios";
import React, { useState, useEffect } from "react";

function Saunas() {
  const [saunaData, setSaunaData] = useState([0]);

  useEffect(() => {
    getSaunaData();
  },[]);

  const getSaunaData = () => {
    axios.get("http://localhost:8080/getsaunas").then((response) => {
      setSaunaData(response.data);
    });
  };

  return (
    <div className="Sauna">
          {saunaData.map((sauna) => (
            <li key={sauna.sauna_id+345}>{sauna.name}</li>
          ))}
    </div>
  );
}

export default Saunas;
