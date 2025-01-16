import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Header from './components/header/Header'



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>Home</h1 >} />
        <Route path="/products" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>Products</h1 >} />
        <Route path="/about" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>About</h1 >} />
        <Route path="/contact" element={<h1 className='text-2xl font-sans font-bold text-center text-orange-700'>Contact</h1 >} />
      </Routes>
    </div>
  )
}

export default App