import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
// import "../../../index.css";
import Swal from "sweetalert2";
import { connDatabase } from "../../database/firebaseConfig";

const Registro = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [startDate, setStartDate] = useState("");

  let redireccion = useNavigate();

  async function getUsuarios() {
    let collectionUsuarios = collection(connDatabase, "empleados");
    let resultado = await getDocs(collectionUsuarios);
    setUsuarios(resultado.docs.map((doc) => ({ ...doc.data() })));
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some((usuario) => usuario.user === user);
    return estado;
  };

  function confirmar() {
    Swal.fire({
      title: "Esta seguro que se quiere registrar?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, registrarme!",
    }).then((result) => {
      if (result.isConfirmed) {
        crearUsuario();
        Swal.fire({
          title: "Registrado!",
          text: "Usuario registrado correctamente.",
          icon: "success",
        });
        redireccion("/usuarios");
      }
    });
  }

  async function crearUsuario() {
    let nuevoUsuario = {
      user,
      password,
      email,
      name,
    };
    let enviarUsuario = collection(connDatabase, "empleados");
    await addDoc(enviarUsuario, nuevoUsuario);
  }

  const registrarUsuario = () => {
    if (!buscarUsuario()) {
      confirmar();

      redireccion("/usuarios");
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario ya existe en la base de datos",
        icon: "error",
      });
    }
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Nombre"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Apellidos"
          />

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Identificación"
          />

          <input
             FECHA DE INICIO DEL PERIODO CONTRATACION
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
          />

          <input onChange={(e) => setImg(e.target.files[0])} type="file" />

          <button onClick={registrarUsuario} type="button">
            Registro
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
