import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import RegistrationService from "../services/RegistrationService";
import RegisterInputs from './RegisterInputs'
import { useNavigate } from 'react-router-dom'
import AppBar from './AppBar'

const Registration = () => {
  const navigate = useNavigate()
  // const Registration = () => {



  const registrationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(5, "Must be more than 5 characters")
      .max(30, "Must be less than 30")
      .required("Required"),
    repeatPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must Match"),
  });

  const saveRegistration = (values) => {
    
    console.log(1111,values)
    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      repeatPassword: values.repeatPassword
      
    };
    // const [newRegistration, setNewRegistration] = useState(initialValues)
    // const [submitted, setSubmitted] = useState(false)
    console.log("data", data)
    // RegistrationService.create(data)
    //   console.log('hello')
      // setSubmitted(true)
        // navigate("/login")

        // .then(response => {
        // setNewRegistration({
        //   id: response.data.id,
        //   firstName: response.data.firstName,
        //   lastName: response.data.lastName,
        //   username: response.data.username,
        //   email: response.data.email,
        //   password: response.data.password,
        //   repeatPassword: response.data.repeatPassword
        // })
        //     setSubmitted(true)
        //     console.log(response.data)
        // })
      return fetch('http://localhost:8081/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
    };
    navigate('/login')

  return (
    <div>
      <AppBar />
      <h1>Please Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
         validationSchema={registrationSchema}
        onSubmit={(values) => {

          saveRegistration(values);
        }}
      >
        {/* {({errors, touched }) => ( */}
        <Form>
          <RegisterInputs
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <RegisterInputs
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name"
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
          <RegisterInputs
            label="Repeat Password"
            name="repeatPassword"
            type="text"
            placeholder="Repeat Password"
          />
          {/* <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />
          {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="Username" />
          {errors.username && touched.username ? (<div>{errors.username}</div>) : null}
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="First Name" />
          {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Password" />
          {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
          <label htmlFor="repeatPassword">Repeat Password</label>
          <Field
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat Password"
          />
          {errors.repeatPassword && touched.repeatPassword ? (<div>{errors.repeatPassword}</div>) : null} */}

          <button type="submit">Submit</button>
        </Form>

        {/* )} */}
      </Formik>
    </div>
  );
}

 export default Registration
