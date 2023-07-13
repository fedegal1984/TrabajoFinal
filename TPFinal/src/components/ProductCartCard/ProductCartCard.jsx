import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <h3>Precio: ${producto.precio}</h3>
        <p>Descripción: {producto.descripcion}</p>
        <p>Cantidad: {producto.quantity}</p>
    </div>
  )
}

export default ProductCartCard