import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import About from './pages/about/about'
import Log from './pages/log/log'
import Sign from './pages/sign/sign'
import User from './pages/user/user'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Header />
          <Routes>
            <Route exact path="/" element={<Banner />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/log" element={<Log />} />
            <Route exact path="/sign" element={<Sign />} />
            <Route exact path="/user" element={<User />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
