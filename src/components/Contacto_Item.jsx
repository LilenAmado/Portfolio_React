export default function Contacto_Item({item}){ 

    const {id, clase, titulo, info} = item

    return(
        <>
            <div className="grid-contacto2">
                <i className= {clase}></i>

                <div className="info">
                    <div className="titulo-cont">{titulo}</div>
                    <div className="subtitulo-cont">{info}</div>
                </div>
            </div>
        </>
    )
    
}