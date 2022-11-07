import Logo from "./missed_people_logo.png"
import Background from "./missing_people_bg.jpg"
import Call from "./phone.png"
import M1 from "./missing1.jpg"
import M2 from "./missing2.jpg"
import M3 from "./missing3.jpg"
import "./landingPage.css"
function LandingPage() {
    return (
        <>
        <body className="bg-dark">
            <div className="container text-center text-white">
                    <img src={Logo} className="image-fluid rounded float-left margin-tb-3" alt="logo" width="200" height="120"/>
                    <h1 className="font-weight-bold">Personas Desaparecidas Bolivia</h1>
            </div>
            <div className="container">
                <img src={Background} alt="background" className="img-fluid"/>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center display-6" id="navbarmenu">
                        <ul className="navbar-nav">
                            <li className="nav-item col-md-4">
                                <a className="nav-link border-end border-start border-warning btn-dark"  id="reportar">Reportar</a>
                            </li>
                            <li className="nav-item col-md-4">
                                <a className="nav-link border-end border-start border-warning" id="contactanos">Contactanos</a>
                            </li>
                            <li className="nav-item col-md-4">
                                <a className="nav-link border-end border-start border-warning" id="informacion">Información</a>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle border-end border-start border-warning"  id="dropdown07XL"
                                   data-bs-toggle="dropdown" aria-expanded="false" id="Mas">Mas</span>
                                <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                                    <li><a className="dropdown-item" >LLamar</a></li>
                                    <li><a className="dropdown-item" >FAQ's</a></li>
                                    <li><a className="dropdown-item" >Redes sociales</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="call" className="text-white mt-5 mb-5" >

                <p id="descripcion">
                    La desaparición de personas, incluida la desaparición forzada,<br/>
                    constituye una violación pluriofensiva de derechos humanos,<br/>
                    toda vez que además de causar daños irreparables a las víctimas,<br/>
                    provoca sufrimiento en sus familiares al ignorar  el destino final que aquéllas correrán<br/>
                    , generándoles por tiempo indefinido el temor y la incertidumbre de conocer el paradero de su ser querido,<br/>
                    además de un deterioro económico y de salud física y mental.<br/>
                    Su práctica implica la privación de la libertad y en muchas ocasiones de la vida.
                </p>
                <p id="personas">
                    Si tienes alguna informacion sobre personas desaparecidas...
                </p>
                <h3 id="llama">LLama a la justicia</h3>
                <h1><a href="tel:1800 333 000" id="phone">1800 333 000</a></h1>
                <img src={Call} className="image-fluid rounded margin-tb-3" alt="call" width="200px" height="200px"/>
            </div>
            <div className="bg-dark" id="cards">
            <div className="card">
                <div className="card-body">
                    <img src={M3} alt=""/>
                        <div className="info">
                            <h1>Paul BYRNE</h1>
                            <p>
                                Paul Byrne was 34-years-old when he went missing and was last seen leaving the Rossarden Club
                                in the Fingal Valley of Northern Tasmania at 2am on 20 September 1996. He has not...</p>
                        </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img src={M2} alt=""/>
                        <div className="info">
                            <h1>Michael HOLMES</h1>
                            <p>
                                Michael Holmes was last seen leaving his flat in Elizabeth Street,
                                North Hobart in July 1988. Michael had been suffering from depression at the time he was reported missing in...</p>
                        </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img src={M1} alt=""/>
                        <div className="info">
                            <h1>Gregory BENNETT</h1>
                            <p>
                                Gregory Christopher Bennett was last seen by a friend on the 4th of November 1988 at a Lemongrove address.
                                He may have frequented the Blue Mountains area. His family hold grave...</p>
                        </div>
                </div>
            </div>
            </div>
        </body>

    </>
    );
}

export default LandingPage;