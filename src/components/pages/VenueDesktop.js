import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Tiles.css";
import GoogleRating from "../GoogleRating";

function VenueDesktop({venueData}) {
  return (
        venueData.map((venue) => (
          <Container className="flex-container">
            <Row key={venue.id + 444} className="flex-container">
              <Col className="flex-item">{venue.name}</Col>
              <Col className="venue-logo-container">
                <img className="venue-logo" src={venue.logoURL} alt="Logo" />
              </Col>
              <Col>
                <Row className="details">{venue.description}</Row>
                <Row className="details">
                  website:{" "}
                  <a href={venue.website} target="noopener">
                    {venue.name}
                  </a>
                </Row>
                <Row className="details">
                  address:{" "}
                  <a
                    className="location"
                    href={venue.location}
                    target="noopener"
                  >
                    {venue.address}
                  </a>
                </Row>
                <Row className="details">
                  <GoogleRating value={venue.googleRating}></GoogleRating>
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

export default VenueDesktop;
