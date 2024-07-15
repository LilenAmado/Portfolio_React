import { useState, useEffect } from 'react'
import { db_info } from "../data/db_info"
import Contacto_Item from './Contacto_Item'

export default function Contacto() {

    // States:
        const [nombre, setNombre] = useState('')
        const [email, setEmail] = useState('')
        const [asunto, setAsunto] = useState('')
        const [mensaje, setMensaje] = useState('')
        const [error, setError] = useState('')
        const [info, setInfo] = useState([])

    // useEffect:
        //console.log(info)
        useEffect(() => {
            setInfo(db_info)
        }, [])


    function validarForm(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        if (
            nombre === '' || nombre === null ||
            email === '' || email === null || email.indexOf('@', 0) === -1 ||
            asunto === '' || asunto === null ||
            mensaje === '' || mensaje === null
        ) {
            setError('Algún campo se encuentra vacío o es incorrecto');
            return false;
        } else {
            // alert("Todos los campos correctos");
            event.target.submit(); // Envía el formulario
            return true;
        }
    }

    return (
        <>
            <section className="contacto">
                
                <h2>Contactame</h2>

                <article className="grid-contacto">
                    <div className="con-prueba">
                        <div className="iconos-contacto">

                            {
                                info.map((item) => {
                                    return(
                                        <Contacto_Item 
                                            key = {item.id}
                                            item = {item}
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>

                    <form method="POST" name="contact" data-netlify="true" netlify className="container-con" id="formulario" onSubmit={validarForm}>
                        <input 
                            type="text" 
                            name="nombre" 
                            placeholder="Nombre" 
                            id="nombre" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                        /> 
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <br />
                        <input 
                            type="text" 
                            name="asunto" 
                            placeholder="Asunto" 
                            id="asunto" 
                            value={asunto} 
                            onChange={(e) => setAsunto(e.target.value)} 
                        />
                        <br />
                        <textarea 
                            name="mensaje" 
                            placeholder="Mensaje" 
                            id="mensaje" 
                            style={{ fontSize: '1.1rem' }} 
                            value={mensaje} 
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea>
                        <br />
                        <input type="submit" value="Enviar" className="boton-contacto" id="boton_contacto" />
                        <br />
                        <small id="small_but">{error}</small>
                    </form>
                    
                </article>
            </section>
        </>
    )
}



            