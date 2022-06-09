import React, {useState, useEffect} from 'react';


const Register = (props) => {

    const initialRegisterState = {
        id: null,
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    }
    const [currentUser, setCurrentUser] = useState(initialRegisterState)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    function handleChange(e) {
        const firstName = e.target.firstName
        const lastName = e.target.lastName
        const username = e.target.username
        const email = e.target.email
        const password = e.target.password
        const repeatPassword = e.target.repeatPassword
    }

    return (
        <div>
            <h1>Please Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName"  placeholder="first name" onChange={handleChange}/>
            <input type="text" name="lastName" placeholder="last name" onChange={handleChange}/>
            <input type="text" name="username" placeholder="username" onChange={handleChange}/>
            <input type="text" name="email" placeholder="email" onChange={handleChange}/>
            <input type="text" name="password" placeholder="password" onChange={handleChange}/>
            <input type="text" name="repeatPassword" placeholder="repeat password" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default Register
    