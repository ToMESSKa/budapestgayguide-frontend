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
            <Table.ColHeader id={"1"}>Name</Table.ColHeader>
            <Table.ColHeader id={"2"}>Location</Table.ColHeader>
            <Table.ColHeader id={"3"}>Time</Table.ColHeader>
            <Table.ColHeader id={"4"}>Organizer</Table.ColHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {props.filteredEventData.map((event) => (
            <Table.Row key={Math.random()}>
              <Table.RowHeader key={event.id + event.name}>
                {event.name}
              </Table.RowHeader>
              <Table.Cell key={event.id + event.location}>
                {event.location}
              </Table.Cell>
              <Table.Cell key={event.id + event.time}>
                {new Date(event.time * 1000).toLocaleString()}
              </Table.Cell>
              <Table.Cell key={event.id + event.url + event.id}>
                {event.event_creator}
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
