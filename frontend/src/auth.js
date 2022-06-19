import { useContext, createContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider=({ children}) => {
    const token = localStorage.getItem("tokenAccess")
    console.log(token)

    return (
        <AuthContext.Provider value={{ token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}