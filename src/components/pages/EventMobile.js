import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EventMobile({ eventData }) {
  return (
    <Container>
      {eventData.map((event) => 
      <Row>{event.name}</Row>
      )}
    </Container>
  );
}

export default EventMobile;
