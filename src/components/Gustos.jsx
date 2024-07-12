import { useState, useEffect } from 'react'
import { db_gustos } from "../data/db_gustos"
import Gustos_Item from './Gustos_Item'

export default function Gustos(){

    // State
        const [gustos, setGustos] = useState([])

    // useEffect:
        //console.log(gustos)
        useEffect(() => {
            setGustos(db_gustos)
        }, [])

    return(
        <>
            <section className="secc-2">
                <div className="container">
                    <h2 className="titulo-secc-2">Me gusta</h2>
                    
                    <div className="contenedor-cards">

                        {
                            gustos.map((item) => {
                                return(
                                    <Gustos_Item 
                                        key = {item.id}
                                        item = {item}
                                    /> 
                                )  
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}