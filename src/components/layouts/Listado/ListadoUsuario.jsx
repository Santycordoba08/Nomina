import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Principal from "../Home/Principal";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { connDatabase } from "../../database/firebaseConfig";
import "./ListadoUsuarios.css";
import Swal from "sweetalert2";
import Navegador from "../NAV/Navegador";

const ListadoUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();
  async function getUsuarios() {
    let resultado = collection(connDatabase, "empleados");
    let data = await getDocs(resultado);
    /* Si es un arreglo, puedo iterarlo con los métodos de JS
        map */
    console.log(data.docs);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const eliminarUsuario = async (id) => {
    console.log("Eliminando el usuario " + id);
    let deleteUser = doc(connDatabase, "empleados", id);
    await deleteDoc(deleteUser);
    getUsuarios();
  };

  function confirmar() {
    Swal.fire({
      title: "Estás seguro?",
      text: "No se puede reversar esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(id);
        Swal.fire({
          title: "Elimnado!",
          text: "EL usuario fue eliminado.",
          icon: "success",
        });
      }
    });
  }

  return (
    <section className="panel">
      <Navegador />
      <main className="panel-contenido">
      {
    usuarios.map((element) => (
        <section className="user-container" key={element.id}>
            <section className="user-details">
                <p>Nombre: {element.name}</p>
                <p>Usuario: {element.user}</p>
                <p>Correo: {element.password}</p>
            </section>
            <div className="button-container">
                <button className="delete-button" onClick={() => eliminarUsuario(element.id)}>Eliminar</button>
                <button className="edit-button" onClick={() => editarUsuario()}>Editar</button>
            </div>
        </section>
    ))
}

      </main>
    </section>
  );
};

export default ListadoUsuario;
