import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'

const HomePage = () => {
    const {products, currentProducts} = useCustomContext()
  return (
    <div>
        <h1>Lista de productos</h1>
        <div>
          {currentProducts.length > 0 
          ?
          currentProducts.map(producto => (
          <ProductCard producto = {producto} key={producto.id}></ProductCard>))
          :
          <h2>No se encuentra ningún producto con esa descripción</h2>
          }
        </div>
    </div>
  )
}

export default HomePage