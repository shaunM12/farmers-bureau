
import { useState, useEffect} from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import EventService from '../services/EventService'



const Event = props => {
    const { id } = useParams()
    let navigate = useNavigate()

    const initialEventState = {
        id: null,
        name: "",
        start: "",
        end: "",
        month: "",
        day: "",
        description: "",
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
        navigate('/events')
    }

    const deleteEvent = () => {
        EventService.remove(currentEvent._id)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
        navigate('/events')
    }


    return (
        <div>
            {currentEvent ? (
                <div>
                    <h2>Event: </h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Event Name</label>
                            <input 
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            defaultValue={currentEvent.name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="location">Event Location:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="location"
                            name="location"
                            defaultValue={currentEvent.location}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="start">Start Time:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="start"
                            name="start"
                            defaultValue={currentEvent.start}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="end">End Time:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="end"
                            name="end"
                            defaultValue={currentEvent.end}
                            onChange={handleInputChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="month">Month:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="month"
                            name="month"
                            defaultValue={currentEvent.month}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="day">Day:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="day"
                            name="day"
                            defaultValue={currentEvent.day}
                            onChange={handleInputChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="description" >Event Description:</label>
                            <input 
                            type="text"
                            className="update-form"
                            id="description"
                            name="description"
                            defaultValue={currentEvent.description}
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









