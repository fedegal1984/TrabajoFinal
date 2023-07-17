import { useState } from 'react'
import './App.css'
import { Footer, NavBar, ProductCard } from './components'
import { useCustomContext } from './ContextManager/ContextProvider'
import { CartPage, ContactPage, DetailPage, HomePage } from './Screens'
import { Route, Routes } from 'react-router-dom'

const App = () =>{
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "/detail/:id" element={<DetailPage/>}/>
      <Route path= "/cart" element={<CartPage/>}/>
      <Route path= "/contact" element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App
