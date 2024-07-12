import { useState, useEffect } from 'react'
import { db_tecnologia } from "../data/db_tecnologia"
import Skills from './Skills'

export default function Tecnologia(){

    const [skills, setSkills] = useState([])

    // useEffect:
        console.log(skills)
        useEffect(() => {
            setSkills(db_tecnologia)
        }, [])

    

    return(
        
        <>
            <section className="container secc-10">
                <h2>Skills</h2>
                
                <div className="skill secc-10-grid" > 
                    {
                        skills.map((skill) => {
                            return(
                                <Skills 
                                    key = {skill.id}
                                    skill = {skill}
                                /> 
                            )  
                        })
                    }    

                </div>
                

            </section>
        </>
    )
}