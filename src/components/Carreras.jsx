import { useState, useEffect } from 'react'
import { db_carrera } from "../data/db_carrera"
import Carreras_Item from './Carreras_Item'

export default function Carreras(){
    // State
        const [carrera, setCarrera] = useState([])

    // useEffect:
        //console.log(carrera)
        useEffect(() => {
            setCarrera(db_carrera)
        }, [])

    // Grupos
        const cursos = carrera.filter(item => item.id <= 2);
        const universitario = carrera.filter(item => item.id === 3);
        const terciario = carrera.filter(item => item.id > 3);

    return(
        <>
            <section className="section">
                
                <article className="education container">

                    <h3 className="titulos-educ">Cursos</h3>
                        
                        {
                            cursos.map((item) => {
                                return(
                                    <Carreras_Item 
                                        key = {item.id}
                                        item = {item}
                                    />
                                )
                            })
                        }
                        
                    <br /><br />

                    <h3 className="titulos-educ">Formacion universitaria</h3>

                        {
                            universitario.map((item) => {
                                return(
                                    <Carreras_Item 
                                        key = {item.id}
                                        item = {item}
                                    />
                                )
                            })
                        }

                    <br /><br />

                    <h3 className="titulos-educ">Formacion terciaria</h3>
                        {
                            terciario.map((item) => {
                                return(
                                    <Carreras_Item 
                                        key = {item.id}
                                        item = {item}
                                    />
                                )
                            })
                        }

                    <br /><br />

                </article>
                
            </section>
        </>
    )
}