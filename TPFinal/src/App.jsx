import { useState } from 'react'
import './App.css'
import { Footer, NavBar, ProductCard } from './components'
import { useCustomContext } from './ContextManager/ContextProvider'

const App = () =>{
  const {products} = useCustomContext()
  return (
    <>
      
      <NavBar></NavBar>
      <h1>Lista de productos</h1>
      <div>
        {products.map(producto => (
          <ProductCard producto = {producto} key={producto.id}></ProductCard>
        ))}
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
