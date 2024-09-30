import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import { Table } from "@instructure/ui-table";
import { SimpleSelect, Grid, CheckboxGroup, Checkbox } from "@instructure/ui";
import { setRef } from "@material-ui/core";
import "../../styles/Home.css";

const HomeDesktop = (props) => {
  return (
    <div>
      <div className="desktopfiters">
        <Grid>
          <Grid.Row>
            <Grid.Col width={2}>
              <CheckboxGroup
                name="event type"
                defaultValue={["BAR", "SAUNA", "CLUBPARTY"]}
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
            <Grid.Col width={2}>
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

      <div className="eventtable">
        <Table caption={"event table"}>
          <Table.Head>
            <Table.Row>
              <Table.ColHeader width="2%" id={"6"}></Table.ColHeader>
              <Table.ColHeader width="20%" id={"4"}>
                organizer
              </Table.ColHeader>
              <Table.ColHeader width="20%" id={"1"}>
                name
              </Table.ColHeader>
              <Table.ColHeader width="20%" id={"2"}>
                location
              </Table.ColHeader>
              <Table.ColHeader width="20%" id={"3"}>
                time
              </Table.ColHeader>
              <Table.ColHeader width="20%" id={"5"}>
                link
              </Table.ColHeader>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {props.filteredEventData.map((event) => (
              <Table.Row key={Math.random()}>
                <Table.Cell key={event.id + event.url + event.id}>
                  {event.venue.logoURL ? (
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
                  ) : (
                    <div
                      style={{
                        width: "20px", // Same width as the image
                        height: "auto", // Set a fixed height (adjust as needed)
                        backgroundColor: "#f0f0f0", // Optional: Placeholder background color
                      }}
                    />
                  )}
                </Table.Cell>
                <Table.Cell key={event.id + event.url + event.id}>
                  {event.venue.name}
                </Table.Cell>
                <Table.Cell key={event.id + event.name}>
                  {event.name}
                </Table.Cell>
                <Table.Cell key={event.id + event.location}>
                  {event.location}
                </Table.Cell>
                <Table.Cell key={event.id + event.time}>
                  {new Date(event.time * 1000).toLocaleString()}
                </Table.Cell>
                <Table.Cell key={event.id + event.url + event.id}>
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    Facebook event
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default HomeDesktop;
