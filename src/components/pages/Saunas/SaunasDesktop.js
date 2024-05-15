import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../styles/Tiles.css";
import GoogleRating from "../../GoogleRating";

function SaunasDesktop({saunaData}) {
  return (
        saunaData.map((sauna) => (
          <Container className="flex-container">
            <Row key={sauna.id + 444} className="flex-container">
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
  );
}

export default SaunasDesktop;
