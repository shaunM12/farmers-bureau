import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Login = () => {

    const [data, setData] = useState({ email: "", password: ""})
    const [error, setError] = useState("")

    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = 'http://localhost:8081/auth'
            const {data: res} = await axios.post(url, data)
            localStorage.setItem("tokenAccess", res.data)
            window.location="/"
        }
        catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }


    return (
        <div className="container">
            <div className="login-form-container" onSubmit={handleSubmit}>
                <form className="form">
                    <h1>Please Login</h1>
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    />
                    {error && <div>{error}</div>}
                <button type="submit">Sign In</button>
                </form>
            </div>
        </div>

    )
}
   
export default Login




 
