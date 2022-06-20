import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'

import Register from './components/Register'
import Login from './components/Login'
import ArticlesList from './components/ArticlesList'
import EventList from "./components/EventList"
import Event from './components/Event'
import AddEvent from './components/AddEvent'
import AddArticle from './components/AddArticle'
import Home from './components/Home'
import Article from './components/Article'
import Market from './components/Market';
import AddMarket from './components/AddMarket';
import MarketList from './components/MarketsList'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './auth';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  
  <BrowserRouter>
    <Navbar />
    <AuthProvider>
  <Routes>
    <Route path="/" element={<App />} />
    {/* <Route path='/' element={ <Home /> } /> */}
    <Route path="register" element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/articles' element={<ArticlesList />} />
    <Route path="/events" element={< EventList />} />
    <Route path="/events/:id" element={<Event />} />
    <Route path='/addevent' element={< AddEvent />} />
    <Route path='/addarticle' element={< ProtectedRoute />} />
    <Route path="articles/:id" element={< Article />} />
    <Route path="/addmarket" element={<AddMarket />} />
    <Route path="/markets" element={<MarketList />} />
    <Route path="/markets/:id" element={<Market />} />
  </Routes>
  </AuthProvider>
  </BrowserRouter>
  <Footer />
  </CookiesProvider>

);


