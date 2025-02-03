/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef, useContext } from "react";
import { SimpleSelect, Grid, CheckboxGroup, Checkbox } from "@instructure/ui";
//import { Accordion } from "react-bootstrap";
//import Button from "react-bootstrap/Button";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
//import "../../../styles/custom-bootstrap.scss";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {
  card,
  listGroup,
  cardText,
  cardTitle,
  eventImage,
  accordion,
  accordionSummary,
  cardBody,
  filter,
  mobileNavigationTitle
} from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HeaderTitle from "../../navigation/HeaderTitle";
import MobileNavigation from "../../navigation/MobileNavigation";
import Tooltip from '@mui/material/Tooltip';


const HomeMobile = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    console.log(props.filteredEventData);

    window.addEventListener("resize", handleResize);
    return () => {
      console.log(window.innerWidth);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const createJumpLink = (venue) => {
    switch (venue.venueType) {
      case "BAR":
        return "./bars#" + venue.id;
      case "CLUB":
        return "./clubsandparties#" + venue.id;
      case "PARTY":
        return "./clubsandparties#" + venue.id;
      case "SAUNA":
        return "./saunas#" + venue.id;
      case "PRIDE":
        return "./budapestpride#" + venue.id;
      default:
        return null;
    }
  };

  const timeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
      </svg>
    );
  };

  const websiteIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-globe"
        viewBox="0 0 16 16"
      >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
      </svg>
    );
  };

  const instagramIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
      </svg>
    );
  };

  const facebookEventIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-calendar4-event"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
      </svg>
    );
  };

  const facebookIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-facebook"
        viewBox="0 0 16 16"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
      </svg>
    );
  };

  const locationIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-geo-alt"
        viewBox="0 0 16 16"
      >
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>
    );
  };

  const organizerIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-people"
        viewBox="0 0 16 16"
      >
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
      </svg>
    );
  };

  const typeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bookmarks"
        viewBox="0 0 16 16"
      >
        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
      </svg>
    );
  };

  const nameIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
      </svg>
    );
  };

  return (
    <div>
      <div css={filter}>
        <Grid>
          <Grid.Row>
            <Grid.Col width={5}>
              <CheckboxGroup
                name="event type"
                defaultValue={["BAR", "SAUNA", "CLUBPARTY", "PRIDE"]}
                onChange={props.filterEventsByVenueType}
                description="select event type"
              >
                {props.eventTypeOptions.map((option, index) => (
                  <Checkbox
                    label={option.name}
                    id={`opt-${index}`}
                    value={option.value}
                    key={option.name}
                  />
                ))}
              </CheckboxGroup>
            </Grid.Col>
            <Grid.Col width={1}>
              <SimpleSelect
                renderLabel="select date for event"
                width="200px"
                onChange={props.filterEventsByDate}
                defaultValue="ANY TIME"
              >
                {props.eventDateOptions.map((option, index) => (
                  <SimpleSelect.Option
                    key={index}
                    id={`opt-${index}`}
                    value={option.value}
                  >
                    {option.name}
                  </SimpleSelect.Option>
                ))}
              </SimpleSelect>
            </Grid.Col>
          </Grid.Row>
        </Grid>
        </div>
      {props.filteredEventData.map((event) => (
        <Accordion css={accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className="header-info" css={eventImage}>
              <img
                className="venue-logo-mobile"
                src={event.venue.logoURL}
                alt="Logo"
                style={{
                  width: "40px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </span>
            <ListGroup css={listGroup} variant="flush">
              <ListGroup.Item>
                <span>{nameIcon()}</span>
                <div css={cardText}>{event.name}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>{facebookEventIcon()}</span>
                <span>{props.formatDate(event)}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>{typeIcon()}</span>
                <span>{event.eventTypes} event</span>
              </ListGroup.Item>
            </ListGroup>
          </AccordionSummary>
          <AccordionDetails>
            <Card css={card}>
              <Card.Body css={cardBody}>
                <ListGroup css={listGroup} variant="flush">
                  <ListGroup.Item>
                    <span>{timeIcon()}</span>
                    <div>{props.formatTime(event)}</div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>{facebookEventIcon()}</span>
                    <a href={event.url}>Facebook event</a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span>{locationIcon()}</span>
                    <div>{event.location}</div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>{organizerIcon()}</span>
                    <a href={createJumpLink(event.venue)}>{event.venue.name}</a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* <Accordion>
        <Card eventKey={-1}>
          <div style={{ display: "flex", width: "100%" }}>
            <span
              style={{ width: "15%", textAlign: "left", fontWeight: "bold" }}
            ></span>
            <span
              style={{ width: "32%", textAlign: "left", fontWeight: "bold" }}
            >
              name
            </span>
            <span
              style={{ width: "10%", textAlign: "left", fontWeight: "bold" }}
            >
              date
            </span>
          </div>
        </Card>
      </Accordion>
      <Accordion>
        {props.filteredEventData.map((event) => (
          <Card eventKey={event.event_id}>
            <Card.Header>
              <div style={{ display: "flex", width: "100%" }}>
                <span className="header-info" style={{ width: "15%" }}>
                  <img
                    className="venue-logo-mobile"
                    src={event.venue.logoURL}
                    alt="Logo"
                    style={{
                      width: "40px", // Set a fixed width
                      height: "auto", // Maintain aspect ratio
                      objectFit: "contain", // Ensure the image fits within the box
                    }}
                  />
                </span>
                <span className="header-info" style={{ width: "40%" }}>
                  {event.name}
                </span>
                <span className="header-info-date" style={{ width: "45%" }}>
                  {new Date(event.time * 1000)
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    .toLocaleLowerCase()}
                </span>
                <span>
                  <ContextAwareToggle eventKey={event.event_id}>
                    Click me!
                  </ContextAwareToggle>
                </span>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={event.event_id}>
              <Card.Body>
                <Card css={card}>
                  <Card.Body>
                    <ListGroup css={listGroup} variant="flush">
                      <ListGroup.Item>
                        <span>{timeIcon()}</span>
                        <div>{formatTime(event)}</div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>{facebookEventIcon()}</span>
                        <a href={event.url}>facebook event</a>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <span>{locationIcon()}</span>
                        <div>{event.location}</div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>{organizerIcon()}</span>
                        <a href={createJumpLink(event.venue.venueType)}>{event.venue.name}</a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion> */}
    </div>
  );
};

export default HomeMobile;
