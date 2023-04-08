import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './modules/Home.js'
import '../src/css/core.css'
import Navbar from './components/Navbar.js'
import Contact from './modules/Contact'
import Services from './modules/Services'

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route exact path='contact/' element={<Contact/>}  />
        <Route exact path='service/' element={<Services/>}  />
      </Routes>
    </Router>
  )
}
