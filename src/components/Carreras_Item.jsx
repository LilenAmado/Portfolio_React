export default function Carreras_Item({item}){ 
    //console.log(item)
    const {id, institucion, year, titulo, area } = item
    
    return(
        <>
            <div className="education__container">
                        
                <div className="education__content">
                    
                    <div>
                        <h4 className="education__year">{year}</h4>
                        
                        <span className="education__university">{institucion}</span>
                    </div>
                    
                    <div className="education__time">
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>
                    
                    <div>
                        <h4 className="education__race"> {titulo}</h4>
                        <span className="education__specialty"> {area} </span>
                    </div>

                </div>

            </div>    

            <br />    
        </>
    )
}