import React from 'react'
import '../hojas-de-estilo/style-form.css'
import axios from 'axios'

export const Formulario = () => {
    const [input, setInput] = React.useState({nombre: '', dni: '', email: '', telefono: '', comentario: ''})
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(process.env.REACT_APP_SERVER + 'crear', input)
        setInput({nombre: '', dni: '', email: '', telefono: '', comentario: ''})
    }
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }
  return (
<div className="content formulario">

  <h1 className="logo">CONTACTANOS</h1>

  <div className="contact-wrapper animated bounceInUp">
    <div className="contact-form">
        <h3>Contacto</h3>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Nombre</label>
                <input onChange={handleChange} value= {input.nombre} type="text" name="nombre" required />
            </p>
            <p>
                <label>Email</label>
                <input onChange={handleChange} value= {input.email} type="email" name="email" required />
            </p>
            <p>
                <label>Teléfono</label>
                <input onChange={handleChange} value= {input.telefono} type="tel" name="telefono" required />
            </p>
            <p>
                <label>Dni</label>
                <input onChange={handleChange} value= {input.dni} type="number" name="dni" required />
            </p>
            <p className="block">
               <label>Comentario</label> 
                <textarea onChange={handleChange} value={input.comentario} name="comentario" required rows="3"></textarea>
            </p>
            <p className="block">
                <button type="submit">ENVIAR</button>
            </p>
        </form>
    </div>
    <div className="contact-info">
        <h4>Más Información</h4>
        <ul>
            <li><i className="fas fa-map-marker-alt"></i> La Pampa entre RN 13 y Salta - Pilar - Cba</li>
            <li><i className="fas fa-phone"></i> (3572) 509154</li>
            <li><i className="fas fa-envelope-open-text"></i> ezequielmarinograsso@gmail.com</li>
        </ul>
        <p>Para un asesoramiento más personalizado no dudes en comunicarte a través de nuestros canales de atención.</p>
    </div>
  </div>

</div>

  );
};
export default Formulario;
