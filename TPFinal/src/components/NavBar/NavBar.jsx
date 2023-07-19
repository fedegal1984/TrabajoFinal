import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import BrandImage from "../../assets/images/pngegg.png"
import {NavLink}  from "react-router-dom"
import { useCustomContext } from '../../ContextManager/ContextProvider'

const NavBar = () => {
  const {searchProduct, setSearchProduct} = useCustomContext()
  
  return (
    <nav>
      <div className='NavBarContainer'>
          <div className='brand'>
            <img src={BrandImage} alt="Imagen de la marca" />
            <h3>Commerce One</h3>
          </div>
          <div className='searchInput'>
            <input type="text" placeholder='Busca productos ...' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>
            <i className="bi bi-search"></i>
          </div>
          <div className='menu'>
            <NavLink to="/contact" style={{textDecoration:"none", color: '#6B7A99' }}><h4>Contacto</h4></NavLink>
            <NavLink to="/"><i className="bi bi-house-door-fill"></i></NavLink>
            <i className="bi bi-search searchIcon" ></i>
            <NavLink to="/cart"><i className="bi bi-cart-fill"></i></NavLink>
          </div>
      </div>
    </nav>
  )
}

export default NavBar