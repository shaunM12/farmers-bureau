import { useState } from 'react'
import EventService from '../services/EventService'


const AddEvent = () => {
    const initialEventState = {
        id: null,
        name: "",
        location: "",
        start: "",
        end: "",
        month: "",
        day: "",
        description: "",
        sponsoredBy: ""
    }

    const [event, setEvent] = useState(initialEventState)
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = e => {
        const {name, value} = e.target
        setEvent({...event, [name]: value})
    }

    const newEvent = () => {
        setEvent(initialEventState)
        setSubmitted(false)
    }

    const saveEvent = () => {
        const data = {
            name: event.name,
            location: event.location,
            start: event.start,
            end: event.end,
            month: event.month,
            day: event.day,
            description: event.description,
            sponsoredBy: event.sponsoredBy
        }
        EventService.create(data) 
        .then(response => {
            setEvent({
                id: response.data.id,
                name: response.data.name,
                location: response.data.location,
                start: response.data.start,
                end: response.data.end,
                month: response.data.month,
                day: response.data.day,
                description: response.data.description,
                sponsoredBy: response.data.sponsoredBy
            })
            setSubmitted(true)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
        <h1>Add A New Event</h1>
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h3>You have added a new event</h3>
                    <button 
                    onClick={newEvent}
                    >
                        Add Another</button>
                    </div>
            ) : (
                <div className="add-form">
                    <form>
                <div>
                    <label htmlFor="name">Event Name:</label>
                    <input
                    type="text"
                    id="name"
                    required
                    defaultValue={event.name}
                    onChange={handleInputChange}
                    name="name"
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                    type="text"
                    id="location"
                    required
                    defaultValue={event.location}
                    onChange={handleInputChange}
                    name="location"
                    />
                </div>
                <div>
                    <label htmlFor="start">Start:</label>
                    <input
                    type="text"
                    id="start"
                    required
                    defaultValue={event.start}
                    onChange={handleInputChange}
                    name="start"
                    />
                </div>
                <div>
                    <label htmlFor="end">End:</label>
                    <input
                    type="text"
                    id="end"
                    required
                    defaultValue={event.end}
                    onChange={handleInputChange}
                    name="end"
                    />
                </div>

                <div>
                    <label htmlFor="month">Month:</label>
                    <input
                    type="text"
                    id="month"
                    required
                    defaultValue={event.month}
                    onChange={handleInputChange}
                    name="month"
                    />
                </div>
                <div>
                    <label htmlFor="day">Day:</label>
                    <input
                    type="text"
                    id="day"
                    required
                    defaultValue={event.day}
                    onChange={handleInputChange}
                    name="day"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                    type="text"
                    id="description"
                    required
                    defaultValue={event.description}
                    onChange={handleInputChange}
                    name="description"
                    />
                </div>
                <div>
                    <label htmlFor="sponsoredBy">Sponsored By:</label>
                    <input
                    type="text"
                    id="sponsoredBy"
                    required
                    defaultValue={event.sponsoredBy}
                    onChange={handleInputChange}
                    name="sponsoredBy"
                    />
                </div>
                </form>
                <button onClick={saveEvent}>Submit</button>
            </div>
            )}
        </div>
        </div>
    )
}


export default AddEvent