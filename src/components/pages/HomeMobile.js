import React, { useState, useEffect, useRef } from "react";
//import { Table } from "@instructure/ui-table";
import { SimpleSelect, Grid, CheckboxGroup, Checkbox } from "@instructure/ui";
import "../../styles/Home.css";
import { useMediaQuery } from "react-responsive";
import { Table } from "react-bootstrap";

const HomeMobile = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      console.log(window.innerWidth);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="mobilefiters">
        <Grid>
          <Grid.Row>
            <Grid.Col width={5}>
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

      <div className="mobileeventable">
        <Table className="mobileeventable" striped="columns"  size="sm">
          <thead>
            <tr>
              <th width='20%' >name</th>
              <th width='20%' >time</th>
              <th width='20%' >organizer</th>
              <th width='20%' >Facebook</th>
            </tr>
          </thead>
          <tbody >
            {props.filteredEventData.map((event) => (
              <tr>
                <td>{event.name}</td>
                <td>{new Date(event.time * 1000).toLocaleString()}</td>
                <td>{event.event_creator}</td>
                <td>event link</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Table caption={"event table"} width={'480px'}>
          <Table.Head>
            <Table.Row>
              <Table.ColHeader width='10px'id={"1"}>Name</Table.ColHeader>
              <Table.ColHeader width='10px'id={"2"}>Location</Table.ColHeader>
              <Table.ColHeader width='20%'id={"3"}>Time</Table.ColHeader>
              <Table.ColHeader width='20%'id={"4"}>Organizer</Table.ColHeader>
              <Table.ColHeader width='20%'id={"4"}>Facebook event</Table.ColHeader>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {props.filteredEventData.map((event) => (
              <Table.Row key={Math.random()}>
                <Table.Cell width='10px' key={event.id + event.name}>
                  {event.name}
                </Table.Cell>
                <Table.Cell width='10px'key={event.id + event.location}>
                  {event.location}
                </Table.Cell>
                <Table.Cell key={event.id + event.time}>
                  {new Date(event.time * 1000).toLocaleString()}
                </Table.Cell>
                <Table.Cell key={event.id + event.url + event.id}>
                  {event.event_creator}
                </Table.Cell>
                <Table.Cell key={event.id + event.url + event.id}>
                  Event link
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table> */}
      </div>
    </div>
  );
};

export default HomeMobile;
