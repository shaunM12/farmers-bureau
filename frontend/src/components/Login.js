import React from 'react';
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
// import LoginService from '../services/LoginService'
import RegisterInputs from './RegisterInputs';
// import userLogin from '../services/LoginService';
import userService from '../services/UserService'
import Home from '../pages/Home'
import { useState } from 'react'
import {useCookies } from 'react-cookie'
import axios from 'axios'

const Login = () => {
    // e.preventDefault()
 
    // const storedJwt = localStorage.getItem('tokenAccess')
    // const [jwt, setJwt] = useState(storedJwt|| null )
    const navigate = useNavigate()
    const login = async (values) => {
        // const config = {headers: {"Content-Type" : "application/json"}}
        const data = {
            email: values.email,
            password: values.password,
        }
        console.log(4444,data)
        // userService.login(data)
        // console.log("set user Service")
        // return axios.get('/user', data)
        // .then((res) => {
        //     document.cookie = "accessToken= " + res./*token location*/
        //     console.log(res.document.cookie)
        // })
        await fetch('http://localhost:8081/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err =>  console.log(err)
        )
        
        
    }

    return (
        <div>
        <h1>Please Login</h1>
       
        <Formik 
        initialValues={{
            email: '',
            password: '',

        }}
        onSubmit={(values) => {
            login(values)
        }}
        >
        <Form>
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
            <button type="submit">Submit</button>
        </Form>
        </Formik>
        </div>
    )
}



export default Login