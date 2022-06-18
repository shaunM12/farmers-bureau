import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState("")
    const navigate = useNavigate()


    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const url = "http://localhost:8081/users"
            const { data: res } = await axios.post(url, data)
            // return fetch('http://localhost:8081/user', {
            //     method: 'POST',
            //     body: JSON.stringify(data),
            //     headers: {
            //         'Content-Type' : 'application/json'
            //     }
            // })
            // .then(res => res.json())
            // .then(data => console.log(data))
            navigate('/login')
            console.log(res.message)
            
        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) 
            {
            setError(error.response.data.message)
        }
    }
}
    return (
        <div>
            <div className="login-redirect">
                <h3>If you already have an account please click here</h3>
                <Link to="/login">
                    <button>Sign In</button>
                </Link>
            </div>
            <h1>Please Register</h1>
            <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" 
            name="firstName"  onChange={handleChange} value={data.firstName}/>
            <input type="text" name="lastName" placeholder="last name" onChange={handleChange} value={data.lastName}/>
            <input type="text" name="email" placeholder="email" onChange={handleChange} value={data.email}/>
            <input type="text" name="password" placeholder="password" onChange={handleChange} value={data.password}/>
            {/* <input type="text" name="repeatPassword" placeholder="repeat password" onChange={handleChange} value={data.repeatPassword}/> */}
            {error && <div>{error}</div>}
            <button type="submit">Register</button>
        </form>
        </div>
        </div>
    )
}
export default Register
    