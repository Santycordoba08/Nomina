


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { connDatabase } from "../../database/firebaseConfig";
import { Link } from "react-router-dom";
import "./ListadoUsuarios.css";
import Swal from "sweetalert2";
import Navegador from "../NAV/Navegador";
import DireccionHome from "../DireccionHome/DireccionHome";

const ListadoUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  async function getUsuarios() {
    let resultado = collection(connDatabase, "empleados");
    let data = await getDocs(resultado);
    setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  async function confirmar(id) {
    let deleteUser = doc(connDatabase, "empleados", id);
    await deleteDoc(deleteUser);
    getUsuarios();
  }

  function eliminarUsuario(id) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmar(id);
        Swal.fire({
          title: "Eliminado!",
          text: "Tu registro ha sido eliminado",
          icon: "success",
        });
      }
    });
  }

  function handleLiquidacion(usuario) {
    // Verificar si ya se realizó la liquidación para este empleado
    const liquidationResults = JSON.parse(localStorage.getItem('liquidationResults')) || [];
    const hasLiquidation = liquidationResults.some(result => result.documento === usuario.documento);

    if (hasLiquidation) {
      Swal.fire({
        title: "Error",
        text: "Ya se ha realizado una liquidación para este empleado.",
        icon: "error",
      });
    } else {
      redireccion('/nomina', { state: usuario });
    }
  }

  function handleComprobante() {
    redireccion('/comprobante');
  }

  return (
    <section className="panel">
      <Navegador />
      <DireccionHome />
      <button className="comprobante-button" onClick={handleComprobante}>
        Ver Comprobantes
      </button>
      <main className="panel-contenido">
        {usuarios.map((element) => (
          <section className="user-container" key={element.id}>
            <section className="user-details">
              <b>
                <p>Nombre: {element.name}</p>
              </b>
              <p>Apellidos: {element.apellidos}</p>
              <b>
                <p>ID: {element.documento}</p>
              </b>
              <p>Contrato: {element.contrato}</p>
              <b>
                <p>Función/Cargo: {element.funcion}</p>
              </b>
              <img className="img" src={element.imgServer} alt={element.name} />
            </section>
            <div className="button-container">
              <button
                className="delete-button"
                onClick={() => eliminarUsuario(element.id)}
              >
                Eliminar
              </button>
              <Link to={"/editar/" + element.id} className="edit-button">
                Editar
              </Link>
              <button
                className="liquidacion-button"
                onClick={() => handleLiquidacion(element)}
              >
                Liquidación
              </button>
            </div>
          </section>
        ))}
      </main>
      <button className="comprobante-button" onClick={handleComprobante}>
        Ver Comprobantes
      </button>
    </section>
  );
};

export default ListadoUsuario;
