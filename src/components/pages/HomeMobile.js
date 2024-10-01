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
        <Table className="mobileeventable" striped="columns" size="sm">
          <thead>
            <tr>
              <th width="20%"></th>
              <th width="20%">name</th>
              <th width="20%">time</th>
              <th width="20%">organizer</th>
              <th width="20%">Facebook</th>
            </tr>
          </thead>
          <tbody>
            {props.filteredEventData.map((event) => (
              <tr>
                <td>
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
                </td>
                <td>{event.name}</td>
                <td>{new Date(event.time * 1000).toLocaleString()}</td>
                <td>{event.venue.name}</td>
                <td>
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    Facebook event
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default HomeMobile;
