import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Registration from './components/Registration'
import Login from './components/Login'

import {CookiesProvider} from 'react-cookie'
import ArticlesList from './components/ArticlesList'
import EventList from "./components/EventList"
import Event from './components/Event'
import AddEvent from './components/AddEvent'
import AddArticle from './components/AddArticle'
import Home from './components/Home'
import Article from './components/Article'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path='/' element={ <Home /> } />
    <Route path="register" element={<Register />} />
    <Route path="registration" element={<Registration />} />

    <Route path='/login' element={<Login />} />
    <Route path='/articles' element={<ArticlesList />} />
    <Route path="/events" element={< EventList />} />
    <Route path="/events/:id" element={<Event />} />
    <Route path='/addevent' element={< AddEvent />} />
    <Route path='/addarticle' element={< AddArticle />} />
    <Route path="articles/:id" element={< Article />} />
  </Routes>

  </BrowserRouter>
  </CookiesProvider>

);


