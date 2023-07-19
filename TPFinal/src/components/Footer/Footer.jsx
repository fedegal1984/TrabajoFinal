import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='adress'>
            <h3>Constructor</h3>
            <span className='span-adress'>Av. Medrano 951, Caba<br /><br />Argentina</span>
        </div>
        <div className='linksContainer'>
            <div>
                <ul>
                    <li><NavLink to="">Ventas coorporativas</NavLink></li>
                    <li><NavLink to="">Feedback</NavLink></li>
                    <li><NavLink to="">Trabajos</NavLink></li>
                    <li><NavLink to="">Noticias</NavLink></li>
                    <li><NavLink to="">Reglas</NavLink></li>
                    <li><NavLink to="">Partners</NavLink></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><NavLink to="https://www.instagram.com/"><i className="bi bi-instagram"></i></NavLink></li>
                    <li><NavLink to="https://www.facebook.com/"><i className="bi bi-facebook"></i></NavLink></li>
                    <li><NavLink to="https://www.whatsapp.com/"><i className="bi bi-whatsapp"></i></NavLink></li>
                    <li><NavLink to="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></NavLink></li>
                    <li><NavLink to="https://www.youtube.com/"><i className="bi bi-youtube"></i></NavLink></li>
                </ul>
            </div>
            <div className='ocultar'>
                <ul>
                    <li><NavLink to="">¿Cómo comprar?</NavLink></li>
                    <li><NavLink to="">Medios de pago</NavLink></li>
                    <li><NavLink to="">Entregas y reembolsos</NavLink></li>
                    <li><NavLink to="">Servicios de garantía</NavLink></li>
                    <li><NavLink to="">Seguimiento de envíos</NavLink></li>
                    <li><NavLink to="">Base de datos</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='terms'>
            <h5>2030 Todos los derechos reservados.</h5>
            <p><NavLink to="">Términos y condiciones</NavLink></p>
            <p><NavLink to="">Política de privacidad</NavLink></p>
        </div>
    </footer>
  )
}

export default Footer