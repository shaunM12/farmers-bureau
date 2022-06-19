const Logout = () => {

    const handleLogout = () => {
        localStorage.removeItem("tokenAccess")
        window.location.reload()
    }
    return (
        <div>
        <h1>Click here to Log Out</h1>
        <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Logout


// import {useNavigate} from 'react-router-dom'
// import {useState} from 'react'
// import {useAuth} from '../auth'


// const [isLoggedIn, setIsLoggedIn] = useState(null)

// const token = localStorage.getItem("tokenAccess")
// const auth = useAuth()
// const isAuthenticated = auth.token
// const login = () => {
//     navigate('/login')
// }

// const logout = () => {
//     localStorage.removeItem("tokenAccess")
//     navigate('/articles')
// }
{/* <div>
            {isLoggedIn ? (
                    <button onClick={login}>Login</button>
                ) : (
                    <button onClick={logout}>Logout</button>
                )}
        </div> */}