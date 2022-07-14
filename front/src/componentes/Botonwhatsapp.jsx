import React from 'react'
import '../hojas-de-estilo/style-btn-whatsapp.css'

export const Botonwhatsapp = () => {
  return (
        <div className="btn-whatsapp">
            <a target= "blank" href="https://api.whatsapp.com/send?phone=+543572509154&text=%C2%A1Hola,%20en%20que%20podemos%20ayudarte?%20d%C3%A9janos%20tu%20mensaje%20que%20a%20la%20brevedad%20te%20contestaremos!%22">
            <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="Botonwhatsapp" />
            </a>
        </div>    
  )
};
export default Botonwhatsapp;