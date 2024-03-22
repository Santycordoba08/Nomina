const Login = ({ usuario, contrasena }) => {
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

                    <input class="button-inic" id="boton" typeo="button" value="Iniciar sesión" />
                </form>
            </div>
            <a id="olvidasteContrasena" href="#" data-toggle="modal" data-target="#recuperarContrasenaModal"
                class="recuperarContrasena">¿Olvidaste tu contraseña?</a>
        </div>
    )
}

export default Login