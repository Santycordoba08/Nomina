import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Principal.css";

const Principal = () => {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="menu">
                    <div className="imgmenu">
                        <img src="public/cesde.png" alt="User" />
                    </div>
                    <ul>
                        <li>
                            {/* <Link to={'/login'}>Consulta en linea</Link> */}
                        </li>
                        <li>
                            <a href="#seccion2">Sedes</a>
                        </li>

                        <li>
                            <a href="#seccion1">Contactanos</a>
                        </li>

                    </ul>
                    <div className="search">
                        <input type="text" placeholder="Buscar" />
                        <button type="submit">Buscar</button>
                    </div>
                </nav>
                
                <h1>Un recorrido que nos hace soñar</h1>
                <p>
                    En Cesde nos sentimos orgullosos de celebrar nuestros primeros 50 años de historia y de cosechar<br /> infinidad de logros, aprendizajes y experiencias que nos llenan de alegría y de gratitud. <br />Durante este tiempo, hemos materializado millones de sueños e impactado <br />la vida de miles de jóvenes emprendedores; empresas, colaboradores y familias.
                </p>

                
                <p1>
                    Nuestro Propósito Superior es generar progreso social, productividad empresarial y movilidad social a través de un saber aplicado.
                </p1>

                <div className="imagen">
                    <img src="public/Publicidad.jpg" alt="User" />
                </div>
                


            </header>

            
                <footer >
                <section id="seccion2">
                    <div className="Piepagina">
                        <h2>Nuestras Sedes</h2>
                        <ul>
                            <li>Medellín: Calle 49 41 - 9</li>
                            <li>Bello: Diagonal 50a #38-20 (Tierragro), piso 5</li>
                            <li>Rionegro: Carrera 55A # 35-229 Parque de Comfama</li>
                            <li>La Pintada: Kilómetro 2 vía Puente Iglesias</li>
                            <li>Apartadó: Calle 104 101 - 15</li>
                            <li>Bogotá: AK 14 63-09</li>
                        </ul>

                    </div>
                </section>

                    <section id="seccion1">
                    <div className="Contactanos">
                        Contactanos:{" "}
                        <a href="@gmail.com">
                            comunicaciones@cesde.edu.co
                        </a>
                        <a href="@hotmail.com">
                            cesde@lineatransparencia.com
                        </a>
                    </div>
                    </section>
                </footer>

            

        </div>
    );
}

export default Principal;








