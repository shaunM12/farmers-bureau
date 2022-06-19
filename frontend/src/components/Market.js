import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import MarketService from '../services/MarketService'


const Market = props => {
    const {id} = useParams()
    let navigate = useNavigate()

    const initialMarketState = {
        id: null,
        where: "",
        days: "",
        time: "",
        location: ""
    }

    const [currentMarket, setCurrentMarket] = useState(initialMarketState)
    const [message, setMessage] = useState('')

   
    useEffect(() => {
        if(id) 
        getMarket(id)
    }, [id])

    const handleInputChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setCurrentMarket({...currentMarket, [name]: value})
    }

    const getMarket = id => {
        MarketService.get(id)
        .then(response => {
            setCurrentMarket(response.data)
        })
        .catch(err => {
            console.log(err)
        })
     }
 

    const updateMarket = e => {
        MarketService.update(currentMarket._id, currentMarket)
        .then(response => {
            setMessage("Market has been updated!")
        })
        .catch(err => {
            console.log(err)
        })
        navigate('/markets')
    }

    const deleteMarket = () => {
        MarketService.remove(currentMarket._id)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
        navigate('/markets')
    }

    return (

        <div>
            {currentMarket ? (
                <div>
                    <h3>Farmer's Market</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="where">Where:</label>
                            <input 
                            type="text"
                            className="form-input"
                            id="where"
                            name="where"
                            defaultValue={currentMarket.where}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="days">Days:</label>
                            <input 
                            type="text"
                            className="form-input"
                            id="days"
                            name="days"
                            defaultValue={currentMarket.days}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <input 
                            type="text"
                            className="form-input"
                            id="time"
                            name="time"
                            defaultValue={currentMarket.time}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location:</label>
                            <input 
                            type="text"
                            className="form-input"
                            id="location"
                            name="location"
                            defaultValue={currentMarket.location}
                            onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit"
                        onClick={updateMarket}>Update This Farmer's Market</button>
                         <button type="submit"
                        onClick={deleteMarket}>Delete This Farmer's Market</button>
                    </form>
                    </div>
            ) : (
                <div>
                    <br />
                    <p>Please Choose A Farmer's Market</p>
                    </div>
            )}
        </div>
    )
}


export default Market