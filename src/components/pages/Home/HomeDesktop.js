/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import { Table } from "@instructure/ui-table";
import { InstUISettingsProvider } from "@instructure/ui";
import Card from "@mui/material/Card";
import {
  SimpleSelect,
  Grid,
  CheckboxGroup,
  Checkbox,
  Heading,
  GridRow,
} from "@instructure/ui";
import { setRef } from "@material-ui/core";
import {
  card,
  listGroup,
  cardText,
  cardTitle,
  eventImage,
  accordion,
  cardBody,
  accordionDesktop,
  heading,
  filters,
  homeContainer,
  filter,
} from "./styles";

import {
  TimeIcon,
  NameIcon,
  FacebookEventIcon,
  TypeIcon,
  LocationIcon,
  OrganizerIcon,
  InfoIcon
} from "../../icons/Icons";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ListGroup from "react-bootstrap/ListGroup";
import {Tooltip, IconButton} from '@mui/material';

const HomeDesktop = (props) => {

  const createJumpLink = (venue) => {
    switch (venue.venueType) {
      case "BAR":
        return "./bars"
      case "CLUB":
        return "./clubsandparties"
      case "PARTY":
        return "./clubsandparties"
      case "SAUNA":
        return "./saunas"
      case "PRIDE":
        return "./budapestpride"
      default:
        return null;
    }
  };
  return (
    <div css={homeContainer} aria-label="home-container">
      <Grid>
        <Grid.Row>
          <div css={filters}>
            <InstUISettingsProvider
              theme={{ typography: { fontFamily: "Ubuntu" } }}
            >
              <h1>FILTERS</h1>
              <div css={filter}>
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
              </div>
              <div css={filter}>
                <SimpleSelect
                  renderLabel="select date for event"
                  width="200px"
                  onChange={props.filterEventsByDate}
                  defaultValue="ANY TIME"
                  themeOverride={{
                    fontFamily: "Fira Sans",
                  }}
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
              </div>
            </InstUISettingsProvider>
          </div>
          <Grid.Col>
            <h1 css={heading}>UPCOMING EVENTS</h1>
            {props.filteredEventData.map((event) => (
              <Card css={accordionDesktop}>
                <Grid>
                  <GridRow>
                    <Grid.Col width={"medium"}>
                      <span className="header-info" css={eventImage}>
                        <img
                          className="venue-logo-mobile"
                          src={event.venue.logoURL}
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
                      <ListGroup css={listGroup} variant="flush">
                        <ListGroup.Item>
                          <span>
                            <NameIcon />
                          </span>
                          <div css={cardText}>{event.name}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <FacebookEventIcon />
                          </span>
                          <span>{props.formatDate(event)}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <TimeIcon />
                          </span>
                          <div>{props.formatTime(event)}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <FacebookEventIcon />
                          </span>
                          <a href={event.url}>Facebook event</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <LocationIcon />
                          </span>
                          <div>{event.location}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <OrganizerIcon />
                          </span>
                          <a href={createJumpLink(event.venue)}>{event.venue.name}</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <TypeIcon />
                          </span>
                          <span>{event.eventTypes} event</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Grid.Col>
                  </GridRow>
                </Grid>
              </Card>
            ))}
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default HomeDesktop;
