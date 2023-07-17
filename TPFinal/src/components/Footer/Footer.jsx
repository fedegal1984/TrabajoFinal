import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='adress'>
            <h3>Constructor</h3>
            <span className='span-adress'>12 Water St. Vacouver, BC<br /><br />V6B 132 United States</span>
        </div>
        <div className='linksContainer'>
            <div>
                <ul>
                    <li><NavLink to="">Corporate sales</NavLink></li>
                    <li><NavLink to="">Feedback</NavLink></li>
                    <li><NavLink to="">Jobs</NavLink></li>
                    <li><NavLink to="">News</NavLink></li>
                    <li><NavLink to="">Sales Rules</NavLink></li>
                    <li><NavLink to="">For partners</NavLink></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><NavLink to="">Bonus programs</NavLink></li>
                    <li><NavLink to="">Gift Cards</NavLink></li>
                    <li><NavLink to="">Bill Payment Verification</NavLink></li>
                    <li><NavLink to="">Loans</NavLink></li>
                    <li><NavLink to="">Delivery</NavLink></li>
                    <li><NavLink to="">Service centers</NavLink></li>
                </ul>
            </div>
            <div className='ocultar'>
                <ul>
                    <li><NavLink to="">How to place an order</NavLink></li>
                    <li><NavLink to="">Ways of payment</NavLink></li>
                    <li><NavLink to="">Exchange and return of goods</NavLink></li>
                    <li><NavLink to="">Warranty service</NavLink></li>
                    <li><NavLink to="">Order Status</NavLink></li>
                    <li><NavLink to="">Knowledge base</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='terms'>
            <h5>2030 Comapny. All Rights Reserved.</h5>
            <p><NavLink to="">Terms & Conditions</NavLink></p>
            <p><NavLink to="">Privacy Policy</NavLink></p>
        </div>
    </footer>
  )
}

export default Footer