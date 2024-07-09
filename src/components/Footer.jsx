export default function Footer(){
    
    // Year:
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <a href="#flecha">
                <img src="img/flecha.png" alt="" className="flecha" />
            </a>
            
            <br /><br />
            
            <span>
                Creado por&nbsp;
                <a href="index.html">Lilén Amado</a> | 
                <span className="fa fa-copyright"></span> 
                Todos los derechos reservados - 
                <span id="year"> {currentYear} </span>.
            </span>

            <br /><br />

        </footer>
    )
}