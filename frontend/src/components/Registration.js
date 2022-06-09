import React from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const RegisterInputs = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5, "Must be more than 5 characters")
    .max(30, "Must be less than 30")
    .required("Required"),
  repeatPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must Match"),
});
export default function Registration() {
  return (
    <div>
      <h1>Please Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          });
        }}
      >
          {({errors, touched }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Last Name</label>
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
          {errors.repeatPassword && touched.repeatPassword ? (<div>{errors.repeatPassword}</div>) : null}

          <button type="submit">Submit</button>
        </Form>

          )}
      </Formik>
    </div>
  );
}
