import React from 'react'
import "./NavBar.css"
import BrandImage from "../../assets/images/Ellipse 1.png"
import {NavLink}  from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <div className='NavBarContainer'>
          <div className='brand'>
            <img src={BrandImage} alt="Imagen de la marca" />
            <h3>Your Brand</h3>
          </div>
          <div className='searchInput'>
            <input type="text" placeholder='Search Goods ...'/>
            <i className="bi bi-search"></i>
          </div>
          <div className='menu'>
            <h4>Contact</h4>
            <NavLink to="/"><i className="bi bi-house-door-fill"></i></NavLink>
            <i className="bi bi-search searchIcon" ></i>
            <NavLink to="/cart"><i className="bi bi-cart-fill"></i></NavLink>
          </div>
      </div>
    </nav>
  )
}

export default NavBar