import { Navigate, Route, Outlet } from 'react-router-dom'
import {useAuth} from '../auth' 
import AddArticle from './AddArticle'
import Login from '../pages/Login'

const ProtectedRoute = () => {
    const auth = useAuth()
    const isAuthenticated = auth.token;
    // console.log("this", isAuthenticated)
    
    if(isAuthenticated) {
        return (
        <AddArticle />
        )
    } else {
    
        return (
        <Navigate to="/login" element={<Login />}/>
    )
    }
}

export default ProtectedRoute