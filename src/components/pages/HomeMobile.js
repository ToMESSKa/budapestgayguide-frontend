import React, { useState, useEffect, useRef, useContext } from "react";
//import { Table } from "@instructure/ui-table";
import { SimpleSelect, Grid, CheckboxGroup, Checkbox } from "@instructure/ui";
import "../../styles/Home.css";
import { useMediaQuery } from "react-responsive";
import { Table, Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

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

  const formatTime = (event) => {
    const date = new Date(event.time * 1000);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  function ContextAwareToggle({ eventKey, callback }) {
    
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    return <Button onClick={decoratedOnClick} variant="secondary">more</Button>;
  }

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
      <Accordion>
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
                <span >
                  <ContextAwareToggle eventKey={event.event_id}>
                    Click me!
                  </ContextAwareToggle>
                </span>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={event.event_id}>
              <Card.Body>
                <div style={{ display: "flex", width: "100%" }}>
                  <span style={{ width: "10%" }}></span>
                  <span style={{ width: "90%", textAlign: "left" }}>
                    <table>
                      <colgroup>
                        <col style={{ width: "50%" }} />
                        <col style={{ width: "50%" }} />
                      </colgroup>
                      <tr className="time">
                        <td className="description">start time: </td>
                        <td>{formatTime(event)} </td>
                      </tr>
                      <tr className="facebook-event">
                        <td className="description">Facebook event: </td>
                        <td>
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            link
                          </a>{" "}
                        </td>
                      </tr>
                      <tr className="location">
                        <td className="description">location: </td>
                        <td>{event.location} </td>
                      </tr>
                      <tr className="organizer">
                        <td className="description">organizer: </td>
                        <td>{event.venue.name} </td>
                      </tr>
                    </table>
                  </span>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default HomeMobile;
