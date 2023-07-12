import React from 'react'

const ProductCard = ({producto}) => {
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <h3>Precio: {producto.precio}</h3>
        <p>Descripción: {producto.descripcion}</p>
        <button>Details</button>
    </div>
  )
}

export default ProductCard