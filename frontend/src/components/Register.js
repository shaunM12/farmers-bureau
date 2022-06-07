import React, {useState, useEffect} from 'react';



// const User = props => {
//     const initialRegisterState = {
        
//         username: "",
//         email: "",
//         password: "",
        
//         status: 

//     }
    
    

// }

export default function RegisterForm() {

    return (
        <div>
            <h1>Please Register</h1>
        <form>
            <input type="text" name="firstName"  placeholder="first name" />
            <input type="text" name="lastName" placeholder="last name" />
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="email" placeholder="email" />
            <input type="text" name="password" placeholder="password" />
            <input type="text" name="repeatPassword" placeholder="repeat password" />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}