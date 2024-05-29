import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Principal from '../Home/Principal';
import { collection, getDocs } from 'firebase/firestore';
import { connDatabase } from '../../database/firebaseConfig';


const ListadoUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    let redireccion = useNavigate()
    async function getUsuarios() {
        let resultado = collection(connDatabase, "usuarios");
        let data = await getDocs(resultado);
        /* Si es un arreglo, puedo iterarlo con los métodos de JS
        map */
        console.log(data.docs);
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    useEffect(() => {
        getUsuarios();
    }, []);

    const eliminarUsuario = (id) => {
        console.log('Eliminando el usuario ' + id)
    }

    // const confirmar(){
        
    // }

    return (
        <section className="panel">
            {/* <Principal /> */}
            <main className="panel-contenido">
                {
                    usuarios.map((element) => (
                        <section>

                            <section>

                                <section>
                                    <p>Nombre: {element.name}</p>
                                    <p>User: {element.user}</p>
                                    <p>Password: {element.password}</p>
                                    <p>Correo: {element.mail}</p>
                                </section>
                                <div>
                                    <button onClick={() => eliminarUsuario(element.id)}>Eliminar</button>

                                    {/* <button onClick={()=>editarUsuario()}>Editar</button> */}
                                </div>
                            </section>
                        </section>
                    ))
                }

            </main>
        </section>
    );
};

export default ListadoUsuario