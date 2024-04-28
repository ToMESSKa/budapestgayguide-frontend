import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Tiles.css";
import GoogleRating from "../GoogleRating";
import { TailSpin } from "react-loader-spinner";

function Saunas(props) {
  const [saunaData, setSaunaData] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [saunaID, setSaunaID] = useState(false);

  useEffect(() => {
    getSaunaData();
  }, []);

  const getSaunaData = () => {
    axios.get("http://localhost:8080/getsaunas").then((response) => {
      setSaunaData(response.data);
      setLoading(false);
    });
  };

  const getMoreInfo = (event) => {
    console.log(event.target.getAttribute('data'));
    setShowMore(!showMore)
    setSaunaID(parseInt(event.target.getAttribute('data')))
  };

  return (
    <a className="Sauna-div">
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : props.isTabletOrMobile ? (
        saunaData.map((sauna, i) => (
          <div>
            <Container className="flex-container-mobile">
              <Row key={sauna.sauna_id + 444}>
                <Col className="flex-item-mobile">{sauna.name}</Col>
                <Row className="flex-item-mobile-more">
                  <Col data={sauna.sauna_id} onClick={(e) => getMoreInfo(e)}>
                    Click for more
                  </Col>
                  <Col>
                    <img
                      className="sauna-logo-mobile"
                      src={sauna.logoURL}
                      alt="Logo"
                    />
                  </Col>
                </Row>
                {showMore ? saunaID === sauna.sauna_id ? <Col className="flex-item-mobile-more">MORE</Col> : "" : ""}
              </Row>
            </Container>
          </div>
        ))
      ) : (
        saunaData.map((sauna) => (
          <Container className="flex-container">
            <Row key={sauna.sauna_id + 444} className="flex-container">
              <Col className="flex-item">{sauna.name}</Col>
              <Col className="sauna-logo-container">
                <img className="sauna-logo" src={sauna.logoURL} alt="Logo" />
              </Col>
              <Col>
                <Row className="details">{sauna.description}</Row>
                <Row className="details">
                  website:{" "}
                  <a href={sauna.website} target="noopener">
                    {sauna.name}
                  </a>
                </Row>
                <Row className="details">
                  address:{" "}
                  <a
                    className="location"
                    href={sauna.location}
                    target="noopener"
                  >
                    {sauna.address}
                  </a>
                </Row>
                <Row className="details">
                  <GoogleRating value={sauna.googleRating}></GoogleRating>
                </Row>
                <Row className="details">
                  <button>Leave a review</button> <button>See reviews</button>
                </Row>
              </Col>
            </Row>
          </Container>
        ))
      )}
    </a>
  );
}

export default Saunas;
