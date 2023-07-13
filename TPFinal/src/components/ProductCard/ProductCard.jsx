import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <h3>Precio: ${producto.precio}</h3>
        <Link to={"/detail/" + producto.id}>Details</Link>
    </div>
  )
}

export default ProductCard