import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = ({producto}) => {
  return (
    <Link to={"/detail/" + producto.id} style={{textDecoration:"none"}}>
    <div className='productCard-container'>
        <img src={producto.imagen} alt="" />
        <h3>{producto.nombre}</h3>
        <h4>Precio: ${producto.precio}</h4>
    </div>
    </Link>
  )
}

export default ProductCard