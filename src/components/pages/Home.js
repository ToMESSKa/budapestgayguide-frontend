import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

const Home = (props) => {
  const { DateTime, Interval } = require("luxon");
  const [eventData, setEventData] = useState([]);
  const [filteredEventData, setFilteredEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const eventTypeOptions = [
    { name: "bar event", value: "BAR" },
    { name: "sauna event", value: "SAUNA" },
    { name: "club or party event", value: "CLUBPARTY" },
  ];

  const [selectedEventTypeOptions, setSelectedEventTypeOptions] = useState([
    "BAR",
    "SAUNA",
    "CLUBPARTY",
  ]);

  const [selectedDateOption, setSelectedDateOption] = useState("ANY TIME");

  const eventDateOptions = [
    { name: "any time", value: "ANY TIME" },
    { name: "today", value: "TODAY" },
    { name: "tomorrow", value: "TOMORROW" },
    { name: "this weekend", value: "THIS WEEKEND" },
    { name: "this week", value: "THIS WEEK" },
  ];

  const url = "https://budapestgayguide-backend.onrender.com";
  //const url = "http://localhost:8080";

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

  const filterEventsByVenueType = (value) => {
    setSelectedEventTypeOptions(value);
    const filteredEvents = filterEvents(eventData, selectedDateOption, value);
    setFilteredEventData(filteredEvents);
  };

  const filterEventsByDate = (e, selectedDate) => {
    setSelectedDateOption(selectedDate.value);
    const filteredEvents = filterEvents(
      eventData,
      selectedDate.value,
      selectedEventTypeOptions
    );
    setFilteredEventData(filteredEvents);
  };

  const filterEvents = (events, date, venueTypes) => {
    return events.filter((event) => {
      const eventDate = DateTime.fromSeconds(event.time).setZone(
        "Europe/Budapest"
      );
      const eventDay = eventDate.toISODate();
      if (date === "ANY TIME") {
        const venueMatches =
          venueTypes.includes(event.venue.venueType) ||
          (venueTypes.includes("CLUBPARTY") &&
            ["CLUB", "PARTY"].includes(event.venue.venueType));
        return venueMatches;
      }
      const selectedDates = getDatesForCategory(date);

      const dateMatches = selectedDates.some((selectedDate) => {
        const selectedDateObj =
          DateTime.fromSeconds(selectedDate).setZone("Europe/Budapest");
        const selectedDay = selectedDateObj.toISODate();
        return eventDay === selectedDay;
      });
      const venueMatches =
        venueTypes.includes(event.venue.venueType) ||
        (venueTypes.includes("CLUBPARTY") &&
          ["CLUB", "PARTY"].includes(event.venue.venueType));
      return dateMatches && venueMatches;
    });
  };

  const getDatesForCategory = (category) => {
    const now = DateTime.now().setZone("Europe/Budapest");
    const startOfToday = now.startOf("day");
    const startOfTomorrow = startOfToday.plus({ days: 1 });
    const endOfWeek = now.endOf("week");
    const startOfWeekend = getStartOfWeekend(now, startOfToday, endOfWeek);
    const endOfWeekend = endOfWeek.endOf("day");
    let resultTimestamps = [];

    switch (category) {
      case "TODAY":
        resultTimestamps.push(startOfToday.toSeconds());
        break;

      case "TOMORROW":
        resultTimestamps.push(startOfTomorrow.toSeconds());
        break;

      case "THIS WEEK":
        const intervalThisWeek = Interval.fromDateTimes(
          startOfToday,
          endOfWeek
        );
        intervalThisWeek.splitBy({ days: 1 }).forEach((date) => {
          resultTimestamps.push(date.start.toSeconds());
        });
        break;

      case "THIS WEEKEND":
        const intervalThisWeekend = Interval.fromDateTimes(
          startOfWeekend,
          endOfWeekend
        );
        intervalThisWeekend.splitBy({ days: 1 }).forEach((date) => {
          resultTimestamps.push(date.start.toSeconds());
        });
        break;

      default:
        return;
    }

    return resultTimestamps;
  };

  const getStartOfWeekend = (now, startOfToday, endOfWeek) => {
    let startOfWeekend;
    if (now.weekday === 6) {
      startOfWeekend = startOfToday;
    } else if (now.weekday === 7) {
      startOfWeekend = startOfToday;
    } else {
      startOfWeekend = endOfWeek.minus({ days: 2 }).startOf("day");
    }
    return startOfWeekend;
  };

  return (
    <div>
      {loading ? (
        <TailSpin wrapperClass="tail-spin" color="red" />
      ) : props.isTabletOrMobile ? (
        <HomeMobile
          filterEventsByDate={filterEventsByDate}
          eventTypeOptions={eventTypeOptions}
          filterEventsByVenueType={filterEventsByVenueType}
          eventDateOptions={eventDateOptions}
          filteredEventData={filteredEventData}
        ></HomeMobile>
      ) : (
        <HomeDesktop
          filterEventsByDate={filterEventsByDate}
          eventTypeOptions={eventTypeOptions}
          filterEventsByVenueType={filterEventsByVenueType}
          eventDateOptions={eventDateOptions}
          filteredEventData={filteredEventData}
        ></HomeDesktop>
      )}
    </div>
  );
};

export default Home;
