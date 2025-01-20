import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>Products</h1 >} />
        <Route path="/about" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>About</h1 >} />
        <Route path="/contact" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>Contact</h1 >} />
      </Routes>
    </>
  )
}

export default App