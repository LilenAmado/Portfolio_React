export default function Header(){
    return(
        <nav>
        
        <input type="checkbox" id="res-menu" />

        <label for="res-menu">
            <i className="fa fa-bars" id="sign-one"></i>
            <i className="fa fa-times" id="sign-two"></i>
        </label>

        <h2>Portfo<span className="portfolio">lio</span></h2>

        <ul>
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
                <a href="#contacto">Contacto</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/lilenamado/" target="_blank">
                    <img src="/img/linkedin.svg" alt="" className="icon-linkedin" />
                </a>
                <a href="https://github.com/LilenAmado" target="_blank">
                    <img src="/img/github.svg" alt="" className="icon-github" />
                </a>
            </li>
        </ul>
    </nav>
    )
}