import axios from "axios";
import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import EventMobile from "./EventMobile";
import { Table } from "@instructure/ui-table";
import { SimpleSelect } from "@instructure/ui";

const Home = (props) => {
  const [eventData, setEventData] = useState([]);
  const [filteredEventData, setFilteredEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = [
    { name: "Bar event", value: "BAR" },
    { name: "Sauna event", value: "SAUNA" },
    { name: "Club or party event", value: "CLUBPARTY" },
  ];
  // const url = "https://budapestgayguide-backend.onrender.com";
  const url = "http://localhost:8080";

  useEffect(() => {
    getEventData();
  }, []);

  const getEventData = () => {
    axios.get(url + "/getevents").then((response) => {
      console.log(response);
      setEventData(response.data);
      setFilteredEventData(response.data);
      setLoading(false);
    });
  };

  const filterEvents = (event, eventType) => {
    let newFilteredEvents = [];
    if (eventType.value === "CLUBPARTY") {
      for (let event of eventData) {
        if (event.venue.venueType === "CLUB"|| event.venue.venueType === "PARTY") {
          newFilteredEvents.push(event);
        }
      }
    } else {
      for (let event of eventData) {
        if (eventType.value === event.venue.venueType) {
          newFilteredEvents.push(event);
        }
      }
    }
    setFilteredEventData(newFilteredEvents);
  };

  return (
    <div>
      <div className="filters">
        <SimpleSelect
          renderLabel="event type selector"
          width="200px"
          onChange={filterEvents}
        >
          {options.map((option, index) => (
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
          {filteredEventData.map((event) => (
            <Table.Row key={Math.random()}>
              <Table.RowHeader key={event.id + event.name}>
                {event.name}
              </Table.RowHeader>
              <Table.Cell key={event.id + event.location}>
                {event.location}
              </Table.Cell>
              <Table.Cell key={event.id + event.time}>{event.time}</Table.Cell>
              <Table.Cell key={event.id + event.url + event.id}>
                {event.event_creator}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Home;
