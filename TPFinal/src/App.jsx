import { useState } from 'react'
import './App.css'
import { Footer, NavBar, ProductCard } from './components'
import { useCustomContext } from './ContextManager/ContextProvider'
import { CartPage, DetailPage, HomePage } from './Screens'
import { Route, Routes } from 'react-router-dom'

const App = () =>{
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "/detail/:id" element={<DetailPage/>}/>
      <Route path= "/cart" element={<CartPage/>}/>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
