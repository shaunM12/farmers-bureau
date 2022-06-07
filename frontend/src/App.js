import React from 'react';
import Navbar from './components/Navbar'
import {Link, Routes, Route}  from 'react-router-dom'
import Register from './components/Register'
import ResponsiveAppBar from './components/AppBar'
import Home from './components/Home';

function App() {
  const baseURL = "http://localhost:8080/api";
  console.log(window.location)
  return (
    <div className="App">
      <header className="App-header">
        {/* menu, search, logo in header */}
        {/* <Navbar /> */}
        {/* <Register /> */}
        <ResponsiveAppBar />
      </header>
      {/* <body className="App-body">

      </body> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
