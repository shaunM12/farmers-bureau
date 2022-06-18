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