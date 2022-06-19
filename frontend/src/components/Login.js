import React from 'react';
// import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import {
    FormSection,
    FormWrapper,
    FormContainer,
    FormRow,
    FormColumn,
    FormTitle, 
    FormInput,
    FormButton,
    FormMessage,
    // LoginRedirect,
    // LoginMessage,
} from '../styles/Login.style'

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
        <FormSection>
            <FormContainer>
                <FormRow>
                    <FormColumn small>
                        <FormTitle>Login</FormTitle>
                        <FormWrapper onSubmit={handleSubmit}>
                            <FormInput type="text" name="email" placeholder="email" onChange={handleChange} value={data.email} />
                            <FormInput type="password" name="password" placeholder="password" onChange={handleChange} value={data.password} />
                            <FormButton type="submit">Login</FormButton>
                        </FormWrapper>
                            {error && <FormMessage>{error}</FormMessage>}
                    </FormColumn>
                    {/* <LoginRedirect>
                        <LoginMessage>If you already have an account, click here.
                            <Link to="/login">
                                <button>Sign In</button>
                            </Link>
                        </LoginMessage>
                    </LoginRedirect> */}
                </FormRow>
            </FormContainer>
        </FormSection>
    )
}

export default Login