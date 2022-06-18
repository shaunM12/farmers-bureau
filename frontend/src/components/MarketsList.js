import {useState, useEffect} from 'react'
import MarketService from '../services/MarketService'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const MarketsList = () => {
    const [markets, setMarkets] = useState([])
    const [currentMarket, setCurrentMarket] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
        getAllMarkets()
    }, [])

    const getAllMarkets = () => {
        MarketService.getAll()
        .then((response) => {
            setMarkets(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const setActiveMarket = (market, index) => {
        console.log(market)
        setCurrentMarket(market)
        setCurrentIndex(index)
    }

    return (

        <div>
            <h2>Farmer's Markets</h2>
            <div>
            <ul className="list">
                {markets && 
                markets.map((market, index) => (
                    <li 
                    className={"list-item" + (index === currentIndex ? "active" : "")}
                    onClick={() => setActiveMarket(market, index)}
                    key={index}
                    >
                        {market.where}
                        </li>
                ))}
            </ul>
            </div>
        <div>
            
{currentMarket ? (
    <div>
        <h4>Farmer's Market:</h4>
        <div>
            <label>
                <strong>Where</strong>
            </label>{" "}
            {currentMarket.where}
        </div>
        <div>
            <label>
                <strong>Days:</strong>
            </label>{" "}
            {currentMarket.days}
        </div>
        <div>
            <label>
                <strong>Time:</strong>
            </label>{" "}
            {currentMarket.time}
        </div>
        <div>
            <label>
                <strong>Location:</strong>
            </label>{" "}
            {currentMarket.location}
        </div>
       <Link to={'/markets/' + currentMarket._id}>
           <button>Update Farmer's Market</button>
           </Link>
           </div>


) : (

    <div>
        <br />
        <p>Please choose a farmer's market</p>
    </div>
)}
        </div>
        <Outlet />
        </div>
    )
}


export default MarketsList