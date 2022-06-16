import { useState, useEffect } from "react";
import EventService from "../services/EventService";
import {Link, Outlet, useNavigate} from 'react-router-dom'



const EventList = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchEvent, setSearchEvent] = useState("");

  const navigate = useNavigate()

  const navigateAddEvent = () => {
      navigate('/addevent')
  }

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
    <div>
      {/* <input
        type="text"
        className="search-event-form"
        placeholder="Search by Event Name"
        defaultValue={searchEvent}
        onChange={() => onChangeSearchName}
      />
      <button className="search-button" type="button" onClick={findByEvent} > Search </button>
      <br />
      <br /> */}
      <button className="add-event" type='button'
      onClick={navigateAddEvent}> Add Event </button>
    <div>
      <h2>List Of Upcoming Events </h2>
      <ul className="list">
        {events &&
          events.map((event, index) => (
            <li
              className={"list-item" + (index === currentIndex ? "active" : "")}
              onClick={() => setActiveEvent(event, index)}
              key={index}
            >
              {event.name}
            </li>
          ))}
      </ul>
      </div>
      <div>
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
                          <strong>Time:</strong>
                      </label>{" "}
                      {currentEvent.startTime}
                      {" "}
                      {currentEvent.endTime}
                  </div>
                  <div>
                      <label>
                          <strong>Date:</strong>
                      </label>{" "}
                      {currentEvent.dateMonth}
                      {" "}
                      {currentEvent.dateDay}
                      
                  </div>
                  <div>
                      <label>
                          <strong>Description:</strong>
                      </label>{" "}
                      {currentEvent.description}
                  </div>
                  <div>
                      <label>
                          <strong>Sponsored By:</strong>
                      </label>{" "}
                      {currentEvent.sponsoredBy}
                  </div>
                  <Link 
                  to={'/events/' + currentEvent._id}>
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
