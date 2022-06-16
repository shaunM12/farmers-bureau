
import { useState, useEffect} from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import EventService from '../services/EventService'


const Event = props => {
    const { id } = useParams()
    let navigate = useNavigate()

    const initialEventState = {
        id: null,
        name: "",
        time: "",
        date: "",
        description: "",
        sponsoredBy: ""
    }

    const [currentEvent, setCurrentEvent] = useState(initialEventState)
    const [message, setMessage] = useState('')


    const getEvent = id => {
        EventService.get(id)
        .then(response => {
            setCurrentEvent(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if(id) 
            getEvent(id)
    }, [id]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setCurrentEvent({...currentEvent, [name]: value})
    }

    const updateEvent = (e) => {
        EventService.update(currentEvent._id, currentEvent)
        .then(response => {
            setMessage("Event was successfully updated!")
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteEvent = () => {
        EventService.remove(currentEvent._id)
        .then(response => {
            console.log(response.data)
            navigate('/events')
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            {currentEvent ? (
                <div>
                    <h2>Event: </h2>
                    <form>
                        <div>
                            <label htmlFor="eventName">Event Name</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventName"
                            name="eventName"
                            defaultValue={currentEvent.name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventLocation">Event Location:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventLocation"
                            name="eventLocation"
                            defaultValue={currentEvent.location}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventTime">Start Time:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventTime"
                            name="eventTime"
                            defaultValue={currentEvent.startTime}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventTime">End Time:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventTime"
                            name="eventTime"
                            defaultValue={currentEvent.endTime}
                            onChange={handleInputChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="eventDate">Month:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventDate"
                            name="eventDate"
                            defaultValue={currentEvent.dateMonth}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventDate">Day:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventDate"
                            name="eventDate"
                            defaultValue={currentEvent.dateDay}
                            onChange={handleInputChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="eventDescription" >Event Description:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventDescription"
                            name="eventDescription"
                            defaultValue={currentEvent.description}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventSponsoredBy">Event Sponsored By:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="eventSponsoredBy"
                            name="eventSponsoredBy"
                            defaultValue={currentEvent.sponsoredBy}
                            onChange={handleInputChange}
                            />
                        </div>
                <button
                    type="submit"
                    onClick={updateEvent}
                    >Update Event</button>
                <button 
                    type='submit'
                    onClick={deleteEvent}>Delete Event</button>
                    </form>
                    </div>
            ) : (
                <div>
                    <br/>
                    <p>Please choose an event</p>
                </div>
            )} 
        </div>
    )
}


export default Event









