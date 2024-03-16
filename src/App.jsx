import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {

  const location = useLocation

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
