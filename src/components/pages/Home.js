import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import EventMobile from "./EventMobile";
import { Table } from "@instructure/ui-table";
import { SimpleSelect, Grid, CheckboxGroup, Checkbox } from "@instructure/ui";
import { setRef } from "@material-ui/core";

const Home = (props) => {
  const selectedDateRef = useRef(null);
  const selectedEventTypesRef = useRef(null);
  const { DateTime, Interval } = require("luxon");
  const [eventData, setEventData] = useState([]);
  const [filteredEventData, setFilteredEventData] = useState([]);
  const [filteredEventDataByType, setFilteredEventDataByType] = useState([]);
  const [filteredEventDataByDate, setFilteredEventDataByDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const eventTypeOptions = [
    { name: "bar event", value: "BAR" },
    { name: "sauna event", value: "SAUNA" },
    { name: "club or party event", value: "CLUBPARTY" },
  ];

  const [selectedEventTypeOptions, setSelectedEventTypeOptions] = useState(
    "BAR",
    "SAUNA",
    "CLUBPARTY"
  );

  const [selectedDateOption, setSelectedDateOption] = useState(
    "BAR",
    "SAUNA",
    "CLUBPARTY"
  );

  const eventDateOptions = [
    { name: "today", value: "TODAY" },
    { name: "tomorrow", value: "TOMORROW" },
    { name: "this weekend", value: "THIS WEEKEND" },
    { name: "this week", value: "THIS WEEK" },
  ];

  const dateFormat = {
    timeZone: "Europe/Budapest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
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
      setFilteredEventDataByType(response.data);
      setFilteredEventDataByDate(response.data);
    });
  };

  const filterEventsbyEventType = (eventTypes) => {
    console.log(eventTypes);
    let newFilteredEvents = [];
    for (let event of eventData) {
      if (eventTypes.includes(event.venue.venueType)) {
        newFilteredEvents.push(event);
      } else if (eventTypes.includes("CLUBPARTY")) {
        if (
          event.venue.venueType === "CLUB" ||
          event.venue.venueType === "PARTY"
        ) {
          newFilteredEvents.push(event);
        }
      }
    }
    setFilteredEventData(newFilteredEvents);
    setSelectedEventTypeOptions(eventTypes);
    setFilteredEventDataByType(newFilteredEvents);
  };

  // const getBudapestDateCategory = (time) => {
  //   const eventDate = new Date(timestamp * 1000);
  //   const options = { timeZone: "Europe/Budapest" };

  //   const now = new Date();
  //   const today = new Intl.DateTimeFormat("en-US", options).format(now);
  //   const eventDay = new Intl.DateTimeFormat("en-US", options).format(eventDate);

  const filterEventsByVenueType = (value) => {
    console.log(filterEvents(eventData, "THIS WEEKEND", ["CLUB"]));
  };

  const filterEvents = (events, date, venueTypes) => {
    return events.filter((event) => {
      const eventDate = DateTime.fromSeconds(event.time).setZone(
        "Europe/Budapest"
      );
      const eventDay = eventDate.toISODate(); 
      const selectedDates = getDatesForCategory(date);
      console.log(selectedDates)

      const dateMatches = selectedDates.some((selectedDate) => {
        const selectedDateObj =
          DateTime.fromSeconds(selectedDate).setZone("Europe/Budapest");
        const selectedDay = selectedDateObj.toISODate(); 
        return eventDay === selectedDay;
      });
      const venueMatches = venueTypes.includes(event.venue.venueType);

      return dateMatches && venueMatches;
    });
  };

  const getDatesForCategory = (category) => {
    const now = DateTime.now().setZone("Europe/Budapest");
    const startOfToday = now.startOf("day");
    const startOfTomorrow = startOfToday.plus({ days: 1 });
    const endOfWeek = now.endOf("week");
    const startOfFriday = endOfWeek.minus({ days: 2 }).startOf("day");
    const endOfSunday = endOfWeek.endOf("day");
    let resultTimestamps = [];

    switch (category) {
      case "TODAY":
        // Convert to Budapest Unix time before pushing
        resultTimestamps.push(startOfToday.toSeconds());
        break;

      case "TOMORROW":
        // Convert to Budapest Unix time before pushing
        resultTimestamps.push(startOfTomorrow.toSeconds());
        break;

      case "THIS WEEK":
        const intervalThisWeek = Interval.fromDateTimes(
          startOfToday,
          endOfWeek
        );
        intervalThisWeek.splitBy({ days: 1 }).forEach((date) => {
          resultTimestamps.push(
            date.start.setZone("Europe/Budapest").toSeconds()
          );
        });
        break;

      case "THIS WEEKEND":
        const intervalThisWeekend = Interval.fromDateTimes(
          startOfFriday,
          endOfSunday
        );
        intervalThisWeekend.splitBy({ days: 1 }).forEach((date) => {
          resultTimestamps.push(
            date.start.setZone("Europe/Budapest").toSeconds()
          );
        });
        break;

      default:
        throw new Error("Invalid category.");
    }

    return resultTimestamps;
  };

  return (
    <div>
      <Grid className="filters">
        <Grid.Row>
          <Grid.Col width={2}>
            <CheckboxGroup
              name="event type"
              defaultValue={["BAR", "SAUNA", "CLUBPARTY"]}
              onChange={filterEventsByVenueType}
              description="Select"
              ref={selectedEventTypesRef}
            >
              {eventTypeOptions.map((option, index) => (
                <Checkbox
                  label={option.name}
                  id={`opt-${index}`}
                  value={option.value}
                />
              ))}
            </CheckboxGroup>
          </Grid.Col>
          <Grid.Col width={2}>
            <SimpleSelect
              renderLabel="event date selector"
              width="200px"
              ref={selectedDateRef}
            >
              {eventDateOptions.map((option, index) => (
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
  );
};

export default Home;
