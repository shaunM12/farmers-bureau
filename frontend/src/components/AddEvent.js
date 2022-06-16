import { useState } from 'react'
import EventService from '../services/EventService'


const AddEvent = () => {
    const initialEventState = {
        id: null,
        name: "",
        location: "",
        startTime: "",
        endTime: "",
        dateMonth: "",
        dateDay: "",
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
            startTime: event.startTime,
            endTime: event.endTime,
            dateMonth: event.dateMonth,
            eventDay: event.dateDay,
            description: event.description,
            sponsoredBy: event.sponsoredBy
        }
        EventService.create(data) 
        .then(response => {
            setEvent({
                id: response.data.id,
                name: response.data.name,
                location: response.data.location,
                startTime: response.data.startTime,
                endTime: response.data.endTime,
                dateMonth: response.data.dateMonth,
                dateDay: response.data.dateDay,
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
                    defaultValue={event.Location}
                    onChange={handleInputChange}
                    name="location"
                    />
                </div>
                <div>
                    <label htmlFor="startTime">Start:</label>
                    <input
                    type="text"
                    id="startTime"
                    required
                    defaultValue={event.startTime}
                    onChange={handleInputChange}
                    name="startTime"
                    />
                </div>
                <div>
                    <label htmlFor="endTime">End:</label>
                    <input
                    type="text"
                    id="endTime"
                    required
                    defaultValue={event.endTime}
                    onChange={handleInputChange}
                    name="endTime"
                    />
                </div>

                <div>
                    <label htmlFor="dateMonth">Month:</label>
                    <input
                    type="text"
                    id="dateMonth"
                    required
                    defaultValue={event.dateMonth}
                    onChange={handleInputChange}
                    name="dateMonth"
                    />
                </div>
                <div>
                    <label htmlFor="dateDay">Day:</label>
                    <input
                    type="text"
                    id="dateDay"
                    required
                    defaultValue={event.eventDay}
                    onChange={handleInputChange}
                    name="dateDay"
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