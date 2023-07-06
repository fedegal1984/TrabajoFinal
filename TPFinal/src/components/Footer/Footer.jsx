import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='adress'>
            <h3>Constructor</h3>
            <span>12 Water St. Vacouver, BC<br /><br />V6B 132 United States</span>
        </div>
        <div className='linksContainer'>
            <div>
                <ul>
                    <li><a href="">Corporate sales</a></li>
                    <li><a href="">Feedback</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Sales Rules</a></li>
                    <li><a href="">For partners</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="">Bonus programs</a></li>
                    <li><a href="">Gift Cards</a></li>
                    <li><a href="">Bill Payment Verification</a></li>
                    <li><a href="">Loans</a></li>
                    <li><a href="">Delivery</a></li>
                    <li><a href="">Service centers</a></li>
                </ul>
            </div>
            <div className='ocultar'>
                <ul>
                    <li><a href="">How to place an order</a></li>
                    <li><a href="">Ways of payment</a></li>
                    <li><a href="">Exchange and return of goods</a></li>
                    <li><a href="">Warranty service</a></li>
                    <li><a href="">Order Status</a></li>
                    <li><a href="">Knowledge base</a></li>
                </ul>
            </div>
        </div>
        <div className='terms'>
            <p>2030 Comapny. All Rights Reserved.</p>
            <p><a href="">Terms & Conditions</a></p>
            <p><a href="">Privacy Policy</a></p>
        </div>
    </footer>
  )
}

export default Footer