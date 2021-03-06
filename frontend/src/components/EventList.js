import { useState, useEffect } from "react";
import EventService from "../services/EventService";
import { Link, Outlet, useNavigate } from "react-router-dom";
import '../styles/EventList.style.css'

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchEvent, setSearchEvent] = useState("");

  const navigate = useNavigate();

  const navigateAddEvent = () => {
    navigate("/addevent");
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const onChangeSearchName = (e) => {
    e.preventDefault();
    searchEvent = e.target.value;
    setSearchEvent(searchEvent);
  };

  const findByEvent = () => {
    EventService.findByEvent(searchEvent)
      .then((response) => {
        setEvents(response.data);
        console.log("name", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllEvents = () => {
    EventService.getAll()
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setActiveEvent = (event, index) => {
    console.log(event);
    setCurrentEvent(event);
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <button className="add" type="button" onClick={navigateAddEvent}>
        {" "}
        Add Event{" "}
      </button>
      <div className="eventContainer">
        <h2>Upcoming Events </h2>
        <ul className="list">
          {events &&
            events.map((event, index) => (
              <li
                className={
                  "events" + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEvent(event, index)}
                key={index}
              >
                {event.name}
              </li>
            ))}
        </ul>
      </div>
      <br />
      <div className="currentContainer">
        {currentEvent ? (
          <div>
            <h4>Event</h4>
            <div>
              <label>
                <strong>Event Name:</strong>
              </label>{" "}
              {currentEvent.name}
            </div>
            <div>
              <label>
                <strong>Location:</strong>
              </label>{" "}
              {currentEvent.location}
            </div>
            <div>
              <label>
                <strong>Start:</strong>
              </label>{" "}
              {currentEvent.start}
            </div>
            <div>
              <label>
                <strong>End:</strong>
              </label>{" "}
              {currentEvent.end}
            </div>
            <div>
              <label>
                <strong>Month:</strong>
              </label>{" "}
              {currentEvent.month}
            </div>
            <div>
              <label>
                <strong>Day:</strong>
              </label>{" "}
              {currentEvent.day}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentEvent.description}
            </div>
            <Link to={"/events/" + currentEvent._id}>
              <button>Update Event</button>
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please choose an event</p>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default EventList;
