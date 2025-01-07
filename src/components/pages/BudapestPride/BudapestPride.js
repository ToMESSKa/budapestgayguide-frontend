/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { TailSpin } from "react-loader-spinner";
import { card, listGroup} from "./styles";

import ListGroup from "react-bootstrap/ListGroup";

const BudapestPride = ({ isTabletOrMobile }) => {
  useEffect(() => {
    getBudapestPrideData();
  }, []);

  const [loading, setLoading] = useState(true);
  const [budapestPrideData, setBudapestPrideData] = useState([0]);
  const [barInfoToggles, setBarInfoToggles] = useState([]);
  const url = "https://budapestgayguide-backend.onrender.com";
  //const url = "http://localhost:8080";
  const [error, setError] = useState(null);

  const getBudapestPrideData = async () => {
    try {
      setLoading(true); // Ensure loading is true while fetching data
      setError(null); // Reset the error state
      const response = await axios.get(url + "/getbudapestpride");
      if (response.data && response.data.length > 0) {
        setBudapestPrideData(response.data);
        console.log(response.data);
      } else {
        throw new Error("No data available");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const getFormattedTime = (event) => {
    return new Date(event.time * 1000)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .toLocaleLowerCase();
  };

  return (
    <div className="budapest-pride">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : isTabletOrMobile ? (
        <div>NO</div>
      ) : (
     
          <Card css={card}>
            <Card.Body>
              <Card.Title>Budapest Pride</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                The time of the next Budapest Pride is:
              </Card.Subtitle>
              <Card.Text>{getFormattedTime(budapestPrideData[0])}</Card.Text>
                <ListGroup css={listGroup} variant="flush">
                  <ListGroup.Item>{budapestPrideData[0].venue.website}</ListGroup.Item>
                  <ListGroup.Item>{budapestPrideData[0].venue.instagram}</ListGroup.Item>
                  <ListGroup.Item>{budapestPrideData[0].url}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
          </Card>
      )}
    </div>
  );
};

export default BudapestPride;
