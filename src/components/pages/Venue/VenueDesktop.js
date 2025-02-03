import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "@mui/material/Card";
import { Grid, GridRow } from "@instructure/ui";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  TimeIcon,
  NameIcon,
  FacebookEventIcon,
  LocationIcon,
  WebsiteIcon,
  FacebookIcon,
  InstagramIcon,
} from "../../icons/Icons";

import {
  cardDesktop,
  eventImageDesktop,
  listGroupDesktop,
  listGroupItemDesktop,
  cardTitleDesktop,
  iconDesktop,
  linkDesktop,
  listGroupForEventsDesktop,
  eventsAccordion,
} from "./styles";

const VenueDesktop = ({ venueData, title }) => {
  const formatDate = (event) => {
    return new Date(event.time * 1000)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .toLocaleLowerCase();
  };

  return (
    <div>
      <Grid.Col>
        <h1>{title}</h1>
        {venueData.map((venue) => (
          <Card style={cardDesktop}>
            <Grid>
              <GridRow>
                <Grid.Col width={"medium"}>
                  <span className="header-info" style={eventImageDesktop}>
                    <img
                      className="venue-logo-mobile"
                      src={venue.logoURL}
                      alt="Logo"
                      style={{
                        width: "100px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </Grid.Col>
                <Grid.Col>
                  <ListGroup style={listGroupDesktop} variant="flush">
                    <ListGroup.Item style={listGroupItemDesktop}>
                      <span style={iconDesktop}>
                        <NameIcon />
                      </span>
                      <div style={cardTitleDesktop}>{venue.name}</div>
                    </ListGroup.Item>
                    <ListGroup.Item style={listGroupItemDesktop}>
                      <div style={listGroupItemDesktop}>
                        {venue.description}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Grid.Col>
              </GridRow>
              <GridRow>
                <ListGroup variant="flush" style={listGroupDesktop}>
                  {venue.website && (
                    <ListGroup.Item style={listGroupItemDesktop}>
                      <span style={iconDesktop}>
                        <WebsiteIcon />
                      </span>
                      <a href={venue.website} style={linkDesktop}>
                        website
                      </a>
                    </ListGroup.Item>
                  )}
                  {venue.location && (
                    <ListGroup.Item style={listGroupItemDesktop}>
                      <span style={iconDesktop}>
                        <LocationIcon />
                      </span>
                      <span>{venue.address}</span>
                    </ListGroup.Item>
                  )}
                  {venue.facebook && (
                    <ListGroup.Item style={listGroupItemDesktop}>
                      <span style={iconDesktop}>
                        <FacebookIcon />
                      </span>
                      <a href={venue.facebook} style={linkDesktop}>
                        facebook
                      </a>
                    </ListGroup.Item>
                  )}
                  {venue.instagram && (
                    <ListGroup.Item style={listGroupItemDesktop}>
                      <span style={iconDesktop}>
                        <InstagramIcon />
                      </span>
                      <a href={venue.instagram} style={linkDesktop}>
                        instagram
                      </a>
                    </ListGroup.Item>
                  )}
                  {venue.events.length > 0 && (
                    <ListGroup.Item style={listGroupDesktop}>
                      <Accordion style={eventsAccordion}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <ListGroup.Item style={listGroupItemDesktop}>
                            <span style={iconDesktop}>
                              <FacebookEventIcon />
                            </span>
                            {venue.events.length > 1 ? `${venue.events.length} upcoming events` : "1 upcoming event"}
                            </ListGroup.Item>
                        </AccordionSummary>
                        <AccordionDetails>
                          {venue.events.map((event) => (
                            <ListGroup
                              variant="flush"
                              style={listGroupForEventsDesktop}
                            >
                              <ListGroup.Item style={listGroupItemDesktop}>
                                <span style={iconDesktop}>
                                  <NameIcon />
                                </span>
                                <div style={cardTitleDesktop}>{event.name}</div>
                              </ListGroup.Item>
                              <ListGroup.Item style={listGroupItemDesktop}>
                                <span style={iconDesktop}>
                                  <FacebookEventIcon />
                                </span>
                                <a href={event.url} style={linkDesktop}>
                                  facebook event
                                </a>
                              </ListGroup.Item>
                              <ListGroup.Item style={listGroupItemDesktop}>
                                <span style={iconDesktop}>
                                  <TimeIcon />
                                </span>
                                <div>{formatDate(event)}</div>
                              </ListGroup.Item>
                            </ListGroup>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </GridRow>
            </Grid>
          </Card>
        ))}
      </Grid.Col>
    </div>
  );
  // venueData.map((venue) => (
  //   <Container className="flex-container">
  //     <Row key={venue.id + 444} className="flex-container">
  //       <Col className="flex-item">{venue.name}</Col>
  //       <Col className="venue-logo-container">
  //         <img className="venue-logo" src={venue.logoURL} alt="Logo" />
  //       </Col>
  //       <Col>
  //         <Row className="details">{venue.description}</Row>
  //         {venue.website ? <Row className="details">
  //           website: <a href={venue.website} target="noopener">
  //             {venue.name}
  //           </a>
  //         </Row>: null}
  //         {venue.address ? <Row className="details">
  //           address: <a href={venue.address} target="noopener">
  //             {venue.address}
  //           </a>
  //         </Row>: null}
  //         {venue.facebook ? <Row className="details">
  //           facebook: <a href={venue.facebook} target="noopener">
  //             {venue.name}
  //           </a>
  //         </Row>: null}
  //         {venue.instagram ? <Row className="details">
  //           instagram: <a href={venue.instagram} target="noopener">
  //             {venue.name}
  //           </a>
  //         </Row>: null}
  //         <Row className="details">
  //           <GoogleRating value={venue.googleRating}></GoogleRating>
  //         </Row>
  //         <Row className="details">
  //           <button>Leave a review</button> <button>See reviews</button>
  //         </Row>
  //       </Col>
  //     </Row>
  //   </Container>
  // ))}
};

export default VenueDesktop;
