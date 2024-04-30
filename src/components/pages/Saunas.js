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
  const [saunaInfoToggles, setSaunaInfoToggles] = useState([]);
  const [moreButton, setMoreButton] = useState("Click to see more");
  const [saunaID, setSaunaID] = useState(false);

  useEffect(() => {
    getSaunaData();
  }, []);

  const getSaunaData = () => {
    axios.get("http://localhost:8080/getsaunas").then((response) => {
      setSaunaData(response.data);
      setLoading(false);
      createSaunaToggle(response.data);
    });
  };

  const getMoreInfo = (event) => {
    const modifiedToggles = saunaInfoToggles.map((obj) => {
      if (obj.sauna_id === parseInt(event.target.getAttribute("data"))) {
        return { ...obj, toggle_state: true };
      }
      return obj;
    });
    setSaunaInfoToggles(modifiedToggles);
  };

  const createSaunaToggle = (saunas) => {
    let toggles = [];
    saunas.map((sauna) =>
      toggles.push({ sauna_id: sauna.sauna_id, toggle_state: false })
    );
    setSaunaInfoToggles(toggles);
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
                    {moreButton}
                  </Col>
                  <Col>
                    <img
                      className="sauna-logo-mobile"
                      src={sauna.logoURL}
                      alt="Logo"
                    />
                  </Col>
                </Row>
                {saunaInfoToggles.find(
                  (toggle) => toggle.sauna_id === sauna.sauna_id
                ).toggle_state ? (
                    <Col className="details-mobile">
                      <Row className="detail-mobile">{sauna.description}</Row>
                      <Row className="detail-mobile">
                        website:{" "}
                        <a href={sauna.website} target="noopener">
                          {sauna.name}
                        </a>
                      </Row>
                      <Row className="detail-mobile">
                        address:{" "}
                        <a
                          className="location"
                          href={sauna.location}
                          target="noopener"
                        >
                          {sauna.address}
                        </a>
                      </Row>
                      <Row className="detail-mobile">
                        <GoogleRating value={sauna.googleRating}></GoogleRating>
                      </Row>
                      <Row className="detail-mobile">
                        <button>Leave a review</button>{" "}
                        <button>See reviews</button>
                      </Row>
                    </Col>
                ) : (
                  ""
                )}
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
