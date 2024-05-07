import { connDatabase } from "../../database/firebaseConfig"
import {collection, getDocs} from "firebase/firestore"
import { Link } from "react-router-dom";


const Login = ({ usuario, contrasena }) => {
    async function getUsuario(){
        let collectionUsarios = collection(connDatabase, 'usuarios');
        let resultado = await getDocs(collectionUsarios);
        console.log(resultado);
    }
    getUsuario()
    return (
        <div class="container">
            <h1 class= "text-pattern">Nómina y Gestión Humana</h1>
   
            <p class="bienvenida">Te damos la bienvenida a nuestra solución, el sistema que integra todos los procesos de nómina y gestión humana en un solo lugar.</p>

            <div class="content">
                <img src="public/imglogin.png" alt="User" width="240" height="230" /><br /> <br />

                <form action="" method="">
                    <h2 class="simulador">Simulador de nómina</h2>

                    <div class="section-inputs">
                        <label for="usuario">
                            <input value={usuario} type="text" />
                        </label>

                        <label for="contrasena">
                            <input value={contrasena} type="text" />
                        </label>
                    </div> <br />
                    <Link to={'/nomina'}>
                    <button className="botonlogin" id="botonlogin" typeo="button">Iniciar sesion</button>
                    </Link>
                </form>
            </div>
            <a id="olvidasteContrasena" href="#" data-toggle="modal" data-target="#recuperarContrasenaModal"
                class="recuperarContrasena">¿Olvidaste tu contraseña?</a>
        </div>
    )
}

export default Login