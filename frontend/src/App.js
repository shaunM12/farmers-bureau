import React from 'react';
import {Link, Routes, Route, Outlet}  from 'react-router-dom'
import Register from './components/Register'
import ResponsiveAppBar from './components/AppBar'
import Home from './components/Home';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* menu, search, logo in header */}
        <ResponsiveAppBar />
      </header>
      <Outlet />
      <div className="container">

      </div>
    </div>
  );
}

export default App;
