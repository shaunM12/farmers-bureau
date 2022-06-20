import React from 'react';
import {Link, Routes, Route, Outlet}  from 'react-router-dom'
import Register from './components/Register'

import Home from './components/Home';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* menu, search, logo in header */}
      </header>
      <Outlet />
      <div className="container">

      </div>
      
    </div>
  );
}

export default App;
