import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <ScrollProgress />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <main className="flex-grow pt-24">
            <Home />
          </main>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App