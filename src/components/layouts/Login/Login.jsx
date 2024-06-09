import { connDatabase } from "../../database/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import DireccionHome from "../DireccionHome/DireccionHome";


const Login = () => {
    const [usuarios, setUsuarios] = useState();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    let redireccion = useNavigate()


    async function getUsuario() {
        let collectionUsarios = collection(connDatabase, 'usuarios');
        let data = await getDocs(collectionUsarios);

        console.log(data.docs.map((doc) => ({ ...doc.data() })));
        setUsuarios(data.docs.map((doc) => ({ ...doc.data() })));

    }
    useEffect(() => {
        getUsuario();
    }, []);

    const buscarUsuario = () => {
        let estado = usuarios.some(
            (usuario) => usuario.user === user && usuario.password == password
        );
        return estado;
    };

    const iniciarSesion = () => {
        if (buscarUsuario()) {
          Swal.fire({
            title: "Bienvenido",
            text: "Sera redidereccioando",
            icon: "success"
          });
          redireccion('/usuarios')
    } else {
        Swal.fire({
          title: "Error",
          text: "Credenciales incorrectas",
          icon: "error"
        });
      }
    };



    return (
        <div class="container">
            <DireccionHome />
            <h1 class="text-pattern">Nómina y Gestión Humana</h1>

            <p class="bienvenida">Te damos la bienvenida a nuestra solución, el sistema que integra todos los procesos de nómina y gestión humana en un solo lugar.</p>

            <div class="content">
                <img src="public/imglogin.png" alt="User" width="240" height="230" /><br /> <br />

                <form action="" method="">
                    <h2 class="simulador">Simulador de nómina</h2>

                    <div class="section-inputs">
                        <label for="user">
                            <input
                                onChange={(e) => setUser(e.target.value)}
                                type="text"
                                placeholder="username"
                            />
                        </label>

                        <label for="password">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="password"
                            />
                        </label>
                    </div> <br />

                    <button onClick={iniciarSesion} className="botonlogin" id="botonlogin" type="button">
                        Iniciar Sesion
                    </button>


                </form>

            </div>

            <a id="olvidasteContrasena" href="#" data-toggle="modal" data-target="#recuperarContrasenaModal"
                class="recuperarContrasena">¿Olvidaste tu contraseña?</a>
        </div>
    )



}

export default Login