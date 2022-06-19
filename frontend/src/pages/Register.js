import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
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
} from '../styles/Register.style'


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
        <FormSection>
            <FormContainer>
                <FormRow>
                    <FormColumn small>
                        <FormTitle>Register</FormTitle>
                        <FormWrapper onSubmit={handleSubmit}>
                            <FormInput type="text" placeholder="First Name"
                            name="firstName" onChange={handleChange} value={data.firstName} />
                             <FormInput type="text" placeholder="Last Name"
                            name="lastName" onChange={handleChange} value={data.lastName} />
                            <FormInput type="text" name="email" placeholder="email" onChange={handleChange} value={data.email} />
                            <FormInput type="password" name="password" placeholder="password" onChange={handleChange} value={data.password} />
                            <FormButton type="submit">Register</FormButton>
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
export default Register