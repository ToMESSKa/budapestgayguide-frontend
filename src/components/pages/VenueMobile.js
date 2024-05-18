import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Tiles.css";
import GoogleRating from "../GoogleRating";


function VenueMobile({venueData, venueInfoToggles, setVenueInfoToggles}) {


  const getMoreInfo = (event) => {
    let venue_id = parseInt(event.target.getAttribute("data"));
    console.log(venue_id)
    let toggle_state = findVenueToggle(venue_id).toggle_state;
    modifiyVenueToggle(!toggle_state, venue_id);
  };

  const findVenueToggle = (venue_id) => {
    return venueInfoToggles.find((obj) => obj.venue_id === venue_id);
  };

  const modifiyVenueToggle = (toggle_state, venue_id) => {
    const modifiedToggles = venueInfoToggles.map((obj) => {
      if (obj.venue_id === venue_id) {
        return { ...obj, toggle_state: toggle_state };
      }
      return obj;
    });
    setVenueInfoToggles(modifiedToggles);
  };

  return (venueData.map((venue) => (
    <Container className="flex-container-mobile">
      <Row key={venue.id}>
        <Col className="flex-item-mobile">{venue.name}</Col>
        <Row className="flex-item-mobile-more">
          <Col data={venue.id} onClick={(e) => getMoreInfo(e)}>
            {venueInfoToggles.find((toggle) => toggle.venue_id === venue.id)
              .toggle_state
              ? "Click to see less"
              : "Click to more"}
          </Col>
          <Col>
            <img className="venue-logo-mobile" src={venue.logoURL} alt="Logo" />
          </Col>
        </Row>
        {venueInfoToggles.find((toggle) => toggle.venue_id === venue.id)
          .toggle_state ? (
          <Col className="details-mobile">
            <Row className="detail-mobile">{venue.description}</Row>
            <Row className="detail-mobile">
              website:{" "}
              <a href={venue.website} target="noopener">
                {venue.name}
              </a>
            </Row>
            <Row className="detail-mobile">
              address:{" "}
              <a className="location" href={venue.location} target="noopener">
                {venue.address}
              </a>
            </Row>
            <Row className="detail-mobile">
              <GoogleRating value={venue.googleRating}></GoogleRating>
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
  )));
}

export default VenueMobile;
