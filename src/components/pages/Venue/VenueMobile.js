/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  listGroupForEvents,
} from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "react-bootstrap/Card";
import {
  TimeIcon,
  NameIcon,
  FacebookEventIcon,
  LocationIcon,
  WebsiteIcon,
  FacebookIcon,
  InstagramIcon,
} from "../../icons/Icons";

function VenueMobile({
  venueData,
  venueInfoToggles,
  setVenueInfoToggles,
  title,
}) {
  const { hash } = useLocation();
  const [openAccordion, setOpenAccordion] = useState(0);

  useEffect(() => {
    if (hash) {
      const accordionId = hash.replace("#", "");
      const element = document.getElementById(accordionId);
      if (element) {
        setOpenAccordion(accordionId);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const handleChange = (panel) => {
    setOpenAccordion(String(panel) === openAccordion ? false : String(panel));
  };

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
      <div css={cardTitle}>{title}</div>
      {venueData.map((venue) => (
        <Accordion
          css={accordion}
          id={venue.id}
          expanded={openAccordion === String(venue.id)}
          onChange={() => handleChange(venue.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className="header-info" css={eventImage}>
              <img
                className="venue-logo-mobile"
                src={venue.logoURL}
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
                <span><NameIcon/></span>
                <div css={cardTitle}>{venue.name}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>{venue.description}</div>
              </ListGroup.Item>
            </ListGroup>
          </AccordionSummary>
          <AccordionDetails>
            <Card css={card}>
              <Card.Body css={cardBody}>
                <ListGroup css={listGroup} variant="flush">
                  {venue.website && (
                    <ListGroup.Item>
                      <span><WebsiteIcon/></span>
                      <a href={venue.website}>website</a>
                    </ListGroup.Item>
                  )}
                  {venue.location && (
                    <ListGroup.Item>
                      <span><LocationIcon/></span>
                      <span>{venue.address}</span>
                    </ListGroup.Item>
                  )}
                  {venue.facebook && (
                    <ListGroup.Item>
                      <span><FacebookIcon/></span>
                      <a href={venue.facebook}>facebook</a>
                    </ListGroup.Item>
                  )}
                  {venue.instagram && (
                    <ListGroup.Item>
                      <span><FacebookIcon/></span>
                      <a href={venue.instagram}>instagram</a>
                    </ListGroup.Item>
                  )}
                  {venue.events.length > 0 && (
                    <ListGroup.Item>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          {" "}
                          <span>
                            <FacebookEventIcon/>
                          </span>
                          {venue.events.length > 1
                            ? `${venue.events.length} upcoming events`
                            : "1 upcoming event"}
                        </AccordionSummary>
                        <AccordionDetails>
                          {venue.events.map((event) => (
                            <ListGroup css={listGroupForEvents} variant="flush">
                              <ListGroup.Item css={cardText}>
                                <span><NameIcon/></span>
                                <div>{event.name}</div>
                              </ListGroup.Item>
                              <ListGroup.Item>
                                <span><FacebookEventIcon/></span>
                                <a href={event.url}>facebook event</a>
                              </ListGroup.Item>
                              <ListGroup.Item>
                                <span><TimeIcon/></span>
                                <div>{formatDate(event)}</div>
                              </ListGroup.Item>
                            </ListGroup>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default VenueMobile;
