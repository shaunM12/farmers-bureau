import {useState} from 'react'
import { useNavigate } from 'react-router'
import MarketService from '../services/MarketService'
import {
    AddMarketContainer,
    AddMarketButton,
    Header,
    AddMarketForm,
    AddButtonContainer,
} from '../styles/AddMarket.style'


const AddMarket = () => {
    const navigate = useNavigate()
    const initialMarketState = {
        id: null,
        where: "",
        days: "",
        time: "",
        location: ""
    }
    const [market, setMarket] = useState(initialMarketState)
    const [submitted, setSubmitted] = useState(false)
    const handleInputChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setMarket({...market, [name]: value})
    }
    const newMarket = () => {
        setMarket(initialMarketState)
        setSubmitted(false)
        navigate('/AddMarket')
    }
    const saveMarket = () => {
        const data = {
            where: market.where,
            days: market.days,
            time: market.time,
            location: market.location
        }
        MarketService.create(data)
        .then(response => {
            setMarket({
                id: response.data.id,
                where: response.data.where,
                days: response.data.days,
                time: response.data.time,
                location: response.data.location
            })
            setSubmitted(true)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <AddMarketContainer>
            <Header>Add A New Farmer's Market</Header>
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h3>THANK YOU FOR SUBMITTING A NEW FARMER'S MARKET</h3>
                    <button onClick={newMarket}>Add Another</button>
                    </div>
            ) : (
                <div className="add-form">
                    <AddMarketForm>
                        <div>
                            <label htmlFor="where">Where:</label>
                            <input
                            input="text"
                            id="where"
                            required
                            defaultValue={market.where}
                            onChange={handleInputChange}
                            name="where" />
                        </div>
                        <div>
                            <label htmlFor="days">Days:</label>
                            <input
                            input="text"
                            id="days"
                            required
                            defaultValue={market.days}
                            onChange={handleInputChange}
                            name="days" />
                        </div>
                        <div>
                            <label htmlFor="time">Time:</label>
                            <input
                            input="text"
                            id="time"
                            required
                            defaultValue={market.time}
                            onChange={handleInputChange}
                            name="time" />
                        </div>
                        <div>
                            <label htmlFor="location">Location:</label>
                            <input
                            input="text"
                            id="location"
                            required
                            defaultValue={market.location}
                            onChange={handleInputChange}
                            name="location" />
                        </div>
                        </AddMarketForm>
                        <AddButtonContainer>
                    <AddMarketButton onClick={saveMarket}>Submit</AddMarketButton>
                    </AddButtonContainer>
                    </div>
            )}
        </div>
        </AddMarketContainer>
    )
}
export default AddMarket