import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../styles/Tiles.css";
import GoogleRating from "../../GoogleRating";


function SaunasMobile({saunaData, saunaInfoToggles, setSaunaInfoToggles}) {


  const getMoreInfo = (event) => {
    let sauna_id = parseInt(event.target.getAttribute("data"));
    let toggle_state = findSaunaToggle(sauna_id).toggle_state;
    modifiySaunaToggle(!toggle_state, sauna_id);
  };

  const findSaunaToggle = (sauna_id) => {
    return saunaInfoToggles.find((obj) => obj.sauna_id === sauna_id);
  };

  const modifiySaunaToggle = (toggle_state, sauna_id) => {
    const modifiedToggles = saunaInfoToggles.map((obj) => {
      if (obj.sauna_id === sauna_id) {
        return { ...obj, toggle_state: toggle_state };
      }
      return obj;
    });
    setSaunaInfoToggles(modifiedToggles);
  };

  return saunaData.map((sauna) => (
    <Container className="flex-container-mobile">
      <Row key={sauna.id}>
        <Col className="flex-item-mobile">{sauna.name}</Col>
        <Row className="flex-item-mobile-more">
          <Col data={sauna.id} onClick={(e) => getMoreInfo(e)}>
            {saunaInfoToggles.find((toggle) => toggle.sauna_id === sauna.id)
              .toggle_state
              ? "Click to see less"
              : "Click to more"}
          </Col>
          <Col>
            <img className="sauna-logo-mobile" src={sauna.logoURL} alt="Logo" />
          </Col>
        </Row>
        {saunaInfoToggles.find((toggle) => toggle.sauna_id === sauna.id)
          .toggle_state ? (
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
              <a className="location" href={sauna.location} target="noopener">
                {sauna.address}
              </a>
            </Row>
            <Row className="detail-mobile">
              <GoogleRating value={sauna.googleRating}></GoogleRating>
            </Row>
            <Row className="detail-mobile">
              <button>Leave a review</button> <button>See reviews</button>
            </Row>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  ));
}

export default SaunasMobile;
