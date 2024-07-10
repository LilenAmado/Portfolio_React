export default function Presentacion(){
    return(
        <main className="banner-area" id="flecha">
            <div className="banner-text">
                <div className="titulo container">
                    <h1>Lilén Amado</h1>
                    <span className="desarrollo typed"></span>
                    <h2 style="display: none;">Desarrollo Web Front-End, Maquetación, Operación de Técnica de Radio</h2>
                    <p className="presentacion">
                        Mi nombre es Lilén Anahí Amado, tengo <span id="edad"></span> años y soy de Buenos Aires, Argentina. <br />
                        En el 2020 me introduje en el universo de la programación
                        especializándome en el desarrollo web, iniciando mi formación en la
                        UTN y actualmente estudio la Tecnicatura Universitaria en
                        Programación Web en la Universidad Nacional de Entre Rios (UNER);
                        complementando también con diversos cursos.
                        Por otro lado, soy Operadora Técnica de Radio.
                        Actualmente estoy trabajando como Consultora BI.
                        Me interesa un trabajo que me permita brindar y poner en práctica mis
                        conocimientos adquiriendo experiencia para seguir creciendo
                        profesionalmente.

                        Me encanta todo lo relacionado a lo audiovisual, el mundo IT y trabajar en equipo. 
                        En mi tiempo libre me apasiona tocar música. 
                    </p>

                    <a href="cv.pdf" target="_blank"><input type="button" value="CV" className="boton_CV" id="boton_CV"></input></a>

                    <a href="https://www.linkedin.com/in/lilenamado/" target="_blank">
                        <img src="img/linkedin.png" alt="" className="boton_linkedin" />
                    </a>
                    <a href="https://github.com/LilenAmado" target="_blank">
                        <img src="img/github.png" alt="" className="boton_github"  id="skills" />
                    </a>
                    
                </div>
            </div>
            <br />
        </main>
    )
}