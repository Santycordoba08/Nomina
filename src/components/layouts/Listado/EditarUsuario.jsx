

import React, { useState, useEffect } from "react";
import "./EditarUsuario.css";
import { connDatabase, connStorage } from "../../database/firebaseConfig";

import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const EditarUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [startDate, setStartDate] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [contrato, setContrato] = useState("");
  const [funcion, setFuncion] = useState("");
  const [documento, setDocumento] = useState("");
  let { id } = useParams();
  let redireccion = useNavigate();

  async function getUsuarioId(id) {
    let resultado = await getDoc(doc(connDatabase, "empleados", id));
    console.log(resultado);
    setName(resultado.data().name);
    setApellidos(resultado.data().apellidos);
    setDocumento(resultado.data().documento);
    setContrato(resultado.data().contrato);
    setFuncion(resultado.data().funcion);
    setImg(resultado.data().imgServer);
  }

  useEffect(() => {
    getUsuarioId(id);
  }, []);

  const subirImg = async (imagen) => {
    let referenciaImg = ref(connStorage, v4());
    console.log(referenciaImg);
    await uploadBytes(referenciaImg, imagen);
    let urlImagen = await getDownloadURL(referenciaImg);
    return urlImagen;
  };

  async function editarUsuario() {
    let imgServer = await subirImg(img);
    let nuevoUsuario = {
      name,
      apellidos,
      contrato,
      documento,
      funcion,
      imgServer,
    };
    let enviarUsuario = doc(connDatabase, "empleados", id);
    await updateDoc(enviarUsuario, nuevoUsuario);
    redireccion("/usuarios");
  }

  return (
    <div className="login-page">
      <div className="form">
        <h1 className="Titulo">Aquí podrás editar el empleado</h1><br />
        <form className="login-form">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre"
            value={name}
          />
          <input
            onChange={(e) => setApellidos(e.target.value)}
            type="text"
            placeholder="Apellidos"
            value={apellidos}
          />

          <input
            onChange={(e) => setDocumento(e.target.value)}
            type="text"
            placeholder="Documento"
            value={documento}
          />
          <input
            onChange={(e) => setContrato(e.target.value)}
            type="text"
            placeholder="Contrato"
            value={contrato}
          />
          <input
            onChange={(e) => setFuncion(e.target.value)}
            type="text"
            placeholder="Funcion/cargo"
            value={funcion}
          />
          <input onChange={(e) => setImg(e.target.files[0])} type="file" />

          <button onClick={editarUsuario} type="button">
            Editar
          </button>
          <button type="button" className="message">
            <Link className="cancelar" to="/usuarios">
              Cancelar
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarUsuario;
