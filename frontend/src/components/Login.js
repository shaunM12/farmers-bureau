import React from 'react';
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
// import LoginService from '../services/LoginService'
import RegisterInputs from './RegisterInputs';
// import userLogin from '../services/LoginService';
import userService from '../services/UserService'
import Home from './Home'

const Login = () => {
    const navigate = useNavigate()
    const login = (values) => {
        const data = {
            username: values.username,
            email: values.email,
            password: values.password
        }
        console.log(44444,data)
        userService(data)
        return fetch('http://localhost:8081/user', {
            method: 'GET',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

    return (
        <div>
        <h1>Please Login</h1>
        <Formik 
        initialValues={{
            username: '',
            email: '',
            password: '',

        }}
        onSubmit={(values) => {
            login(values)
        }}
        >
        <Form>
        <RegisterInputs 
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
            />
        <RegisterInputs
            label="Email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <RegisterInputs
            label="Password"
            name="password"
            type="text"
            placeholder="Password"
          />
            <button type="submit" onPress={(e) => {
                navigate('/home')
            }}>Submit</button>
        </Form>
        </Formik>
        </div>
    )
}



export default Login