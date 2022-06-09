import React from 'react';
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import LoginService from '../services/LoginService'
import RegisterInputs from './RegisterInputs';
import userLogin from '../services/LoginService';


const Login = () => {
    const navigate = useNavigate()
    const login = (values) => {
        const data = {
            email: values.email,
            password: values.password
        }
        console.log(44444,data)
        userLogin(data)
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