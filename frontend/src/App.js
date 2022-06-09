import React from 'react';
import Navbar from './components/Navbar'
import {Link, Routes, Route, Outlet}  from 'react-router-dom'
import Register from './components/Register'
import ResponsiveAppBar from './components/AppBar'
import Home from './components/Home';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* menu, search, logo in header */}
        {/* <Navbar /> */}
        {/* <RegisterForm /> */}
        {/* <NavList /> */}
        <ResponsiveAppBar />
      </header>
      {/* <body className="App-body">

      </body> */}
      <Outlet />
      <div className="container">

      </div>
    </div>
  );
}

export default App;
