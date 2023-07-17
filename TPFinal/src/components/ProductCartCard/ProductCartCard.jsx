import React from 'react'
import "./ProductCartCard.css"

const ProductCartCard = ({producto}) => {
  return (
    <div className='productCard-container'>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt="" />
        <h3>Precio: ${producto.precio}</h3>
        <p>Cantidad: {producto.quantity}</p>
    </div>
  )
}

export default ProductCartCard