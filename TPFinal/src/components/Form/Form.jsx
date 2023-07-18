import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
    const [userData, setUserData] = useState ({})
    const [formUserData, setFormUserData] = useState({
        nombre:"",
        email:"", 
        mensaje:""
    })
    const [showPersonalData, setShowPersonalData] = useState(false)
    const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log(evento)
        setShowPersonalData(true)
        setUserData(formUserData)
        setFormUserData({
        nombre:"",
        email:"", 
        mensaje:""})
        
    }
    const handleChangeRegisterUser = (evento) =>{
        console.log(evento.target.name)
        console.log(formUserData)
        setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
    }
  return (
    <div>
        <form onSubmit={handleRegisterUser} className='formularioUsuario'>
            <h3>Contacto</h3>
            <label htmlFor="nombreCompleto">Nombre Completo:*</label>
            <input type="text" placeholder='Ingrese el nombre y apellido' name="nombre" id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre}/>
            <label htmlFor="email">Ingrese su mail:*</label>
            <input type="email" placeholder="xxxx@xxxx.com" name="email" id='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>
            <label htmlFor="mensaje">Mensaje:*</label>
            <input type="text" placeholder='Ingrese su mensaje' name="mensaje" id='mensaje' onChange={handleChangeRegisterUser} value={formUserData.mensaje}/>
            <button type='submit'>Enviar</button>
        </form>
        {  
            showPersonalData &&
            <div className='personalData'>
                <h4>Nombre de usuario: {userData.nombre}</h4>
                <h4>Email: {userData.email}</h4>
                <div><span><b>Mensaje enviado <i className="bi bi-check-all"></i></b></span></div>
            </div>
        }
    </div>
  )
}

export default Form