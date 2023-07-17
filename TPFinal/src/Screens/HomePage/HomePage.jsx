import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Footer, ProductCard } from '../../components'
import "./HomePage.css"

const HomePage = () => {
    const {products, currentProducts} = useCustomContext()
  return (
    <>
    <div className='homepage-container'>
        <h1>Ofertas</h1>
        <div className='main-container'>
          {currentProducts.length > 0 
          ?
          currentProducts.map(producto => (
          <ProductCard producto = {producto} key={producto.id}></ProductCard>))
          :
          <h2>No se encuentra ningún producto con esa descripción</h2>
          }
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default HomePage