// import React, { useState, useEffect } from "react";
// import "../auth/Registro.css";
// import { initFirestore, initStorage } from "../../config/firebaseConfig";
// import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";
// import { connDatabase } from "../../database/firebaseConfig";

// const EditarUsuario = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [user, setUser] = useState(""); // Si no usas esta variable, considera eliminarla
//   const [name, setName] = useState("");
//   const [img, setImg] = useState(null); // Cambiado a `null` ya que `null` es un valor inicial adecuado para imágenes
//   const [startDate, setStartDate] = useState("");
//   const [identidad, setIdentidad] = useState("");
//   const [contrato, setContrato] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [cargo, setCargo] = useState("");

//   let { id } = useParams();

//   let redireccion = useNavigate();

//   async function getUsuarioId(id) {
//     let resultado = await getDoc(doc(connDatabase, "empleados", id));
//     console.log(resultado);

//     setImg(resultado.data().imgServer);
//     setName(resultado.data().name);
//     setApellido(resultado.data().apellido);
//     setIdentidad(resultado.data().identidad);
//     setContrato(resultado.data().contrato);
//     setCargo(resultado.data().cargo);

//     setUser(resultado.data().user);
//   }

//   useEffect(() => {
//     getUsuarioId(id);
//   }, []);

//   const subirImg = async (imagen) => {
//     let referenciaImg = ref(initStorage, v4());
//     console.log(referenciaImg);
//     await uploadBytes(referenciaImg, imagen);
//     let urlImagen = await getDownloadURL(referenciaImg);
//     return urlImagen;
//   };

//   async function editarUsuario() {
//     let imgServer = await subirImg(img);
//     let nuevoUsuario = {
//       name,
//       apellido,
//       imgServer,
//       identidad,
//       contrato,
//       cargo,
//     };
//     let enviarUsuario = doc(connDatabase, "empleados", id);
//     await updateDoc(enviarUsuario, nuevoUsuario);
//     redireccion("/usuarios");
//   }

//   return (
//     <div className="login-page">
//       <div className="form">
//         <form className="login-form">
//         <input
//             onChange={(e) => setUser(e.target.value)}
//             type="text"
//             placeholder="Nombre"
//           />

//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Apellidos"
//           />

//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Identificación"
//           />

//           <input
//              FECHA DE INICIO DEL PERIODO CONTRATACION
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//           />

//           <input onChange={(e) => setImg(e.target.files[0])} type="file" />

//           <button onClick={editarUsuario} type="button">
//             Editar
//           </button>
//           <button type="button" className="message">
//             <Link className="cancelar" to="/listado-usuarios">
//               Cancelar
//             </Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditarUsuario;

// import React, { useState, useEffect } from "react";

// import { connDatabase, connStorage } from "../../database/firebaseConfig";
// import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";

// const EditarUsuario = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [user, setUser] = useState(""); // Si no usas esta variable, considera eliminarla
//   const [name, setName] = useState("");
//   const [img, setImg] = useState(null); // Cambiado a `null` ya que `null` es un valor inicial adecuado para imágenes
//   const [startDate, setStartDate] = useState("");
//   const [identidad, setIdentidad] = useState("");
//   const [contrato, setContrato] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [cargo, setCargo] = useState("");

//   let { id } = useParams();

//   let redireccion = useNavigate();

//   async function getUsuarioId(id) {
//     let resultado = await getDoc(doc(connDatabase, "empleados", id));
//     console.log(resultado);

//     setImg(resultado.data().imgServer);
//     setName(resultado.data().name);
//     setApellido(resultado.data().apellido);
//     setIdentidad(resultado.data().identidad);
//     setContrato(resultado.data().contrato);
//     setCargo(resultado.data().cargo);

//     setUser(resultado.data().user);
//   }

//   useEffect(() => {
//     getUsuarioId(id);
//   }, [id]);

//   const subirImg = async (imagen) => {
//     let referenciaImg = ref(connStorageStorage, v4());
//     console.log(referenciaImg);
//     await uploadBytes(referenciaImg, imagen);
//     let urlImagen = await getDownloadURL(referenciaImg);
//     return urlImagen;
//   };

//   async function editarUsuario() {
//     let imgServer = await subirImg(img);
//     let nuevoUsuario = {
//       name,
//       apellido,
//       imgServer,
//       identidad,
//       contrato,
//       cargo,
//     };
//     let enviarUsuario = doc(connDatabase, "empleados", id);
//     await updateDoc(enviarUsuario, nuevoUsuario);
//     redireccion("/usuarios");
//   }

//   return (
//     <div className="login-page">
//       <div className="form">
//         <form className="login-form">
//           <input
//             onChange={(e) => setUser(e.target.value)}
//             type="text"
//             placeholder="Nombre"
//             value={user} // Asegúrate de que el valor del input esté conectado al estado
//           />
//           <input
//             onChange={(e) => setApellido(e.target.value)}
//             type="text"
//             placeholder="Apellidos"
//             value={apellido} // Asegúrate de que el valor del input esté conectado al estado
//           />
//           <input
//             onChange={(e) => setIdentidad(e.target.value)}
//             type="text"
//             placeholder="Identificación"
//             value={identidad} // Asegúrate de que el valor del input esté conectado al estado
//           />
//           <input
//             onChange={(e) => setContrato(e.target.value)}
//             type="text"
//             placeholder="Cargo/función"
//             value={contrato} // Asegúrate de que el valor del input esté conectado al estado
//           />
//           <input
//             onChange={(e) => setCargo(e.target.value)}
//             type="text"
//             placeholder="Tipo de contrato"
//             value={cargo} // Asegúrate de que el valor del input esté conectado al estado
//           />
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//           <input onChange={(e) => setImg(e.target.files[0])} type="file" />
//           <button onClick={editarUsuario} type="button">
//             Editar
//           </button>
//           <button type="button" className="message">
//             <Link className="cancelar" to="/listado-usuarios">
//               Cancelar
//             </Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditarUsuario;

// import React, { useEffect, useState } from "react";
// import "./EditarUsuario.css";

// import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { connDatabase } from "../../database/firebaseConfig";

// const EditarUsuarios = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [user, setUser] = useState("");
//   const [name, setName] = useState("");
//   const [img, setImg] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [apellidos, setApellidos] = useState("");
//   const [contrato, setContrato] = useState("");
//   const [funcion, setFuncion] = useState("");
//   const [documento, setDocumento] = useState("");

//   let redireccion = useNavigate();
//   let { id } = useParams();

//   async function getUsuarioId(id) {
//     let usuarioEditar = await getDoc(doc(connDatabase, "empleados", id));
//     console.log(usuarioEditar);
//     setName(usuarioEditar.data().name);
//     setApellidos(usuarioEditar.data().apellidos);
//     setContrato(usuarioEditar.data().contrato);
//     setFuncion(usuarioEditar.data().funcion);
//     setDocumento(usuarioEditar.data().documento);
//     setImg(resultado.data().imgServer);
//   }
//   useEffect(() => {
//     getUsuarioId(id);
//   }, []);

//   async function editarUsuario() {
//     let imgServer = await subirImg(img);
//     let nuevoUsuario = {
//       name,
//       apellidos,
//       contrato,
//       documento,
//       funcion,
//       imgServer
//     };
//     let enviarUsuario = doc(connDatabase, "empleados", id);
//     await updateDoc(enviarUsuario, nuevoUsuario);
//     redireccion("/listado-usuarios");

//   }

//   return (
//     <div class="login-page">
//       <div class="form">
//         <form class="login-form">
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Nombre"
//             value={name}
//           />

//           <input
//             onChange={(e) => setApellidos(e.target.value)}
//             type="text"
//             placeholder="Apellidos"
//             value={apellidos}
//           />

//           <input
//             onChange={(e) => setDocumento(e.target.value)}
//             type="text"
//             placeholder="Identificación"
//             value={documento}
//           />
//           <input
//             onChange={(e) => setFuncion(e.target.value)}
//             type="text"
//             placeholder="Funcion/Cargo"
//             value={funcion}
//           />
//           <input
//             onChange={(e) => setContrato(e.target.value)}
//             type="text"
//             placeholder="Contrato"
//             value={contrato}
//           />

//           <input onChange={(e) => setImg(e.target.value)} type="file" />

//           <button onClick={editarUsuario} type="button">
//             Editar
//           </button>
//           <button type="button">
//             <Link to="/usuarios">Cancelar</Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditarUsuarios;
// *********************************************************************

// import React, { useEffect, useState } from "react";
// import "./EditarUsuario.css";

// import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { connDatabase } from "../../database/firebaseConfig";

// const EditarUsuarios = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [user, setUser] = useState("");
//   const [name, setName] = useState("");
//   const [img, setImg] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [apellidos, setApellidos] = useState("");
//   const [contrato, setContrato] = useState("");
//   const [funcion, setFuncion] = useState("");
//   const [documento, setDocumento] = useState("");

//   let redireccion = useNavigate();
//   let { id } = useParams();

//   async function getUsuarioId(id) {
//     let usuarioEditar = await getDoc(doc(connDatabase, "empleados", id));
//     console.log(usuarioEditar);
//     setName(usuarioEditar.data().name);
//     setApellidos(usuarioEditar.data().apellidos);
//     setContrato(usuarioEditar.data().contrato);
//     setFuncion(usuarioEditar.data().funcion);
//     setDocumento(usuarioEditar.data().documento);
//     setImg(usuarioEditar.data().imgServer);
//   }

//   useEffect(() => {
//     getUsuarioId(id);
//   }, [id]);

//   async function editarUsuario(event) {
//     event.preventDefault();
//     let imgServer = await subirImg(img);
//     let nuevoUsuario = {
//       name,
//       apellidos,
//       contrato,
//       documento,
//       funcion,
//       imgServer
//     };
//     let enviarUsuario = doc(connDatabase, "empleados", id);
//     await updateDoc(enviarUsuario, nuevoUsuario);
//     redireccion("/listado-usuarios");
//   }

//   return (
//     <div className="login-page">
//       <div className="form">
//         <form className="login-form" onSubmit={editarUsuario}>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Nombre"
//             value={name}
//           />

//           <input
//             onChange={(e) => setApellidos(e.target.value)}
//             type="text"
//             placeholder="Apellidos"
//             value={apellidos}
//           />

//           <input
//             onChange={(e) => setDocumento(e.target.value)}
//             type="text"
//             placeholder="Identificación"
//             value={documento}
//           />
//           <input
//             onChange={(e) => setFuncion(e.target.value)}
//             type="text"
//             placeholder="Funcion/Cargo"
//             value={funcion}
//           />
//           <input
//             onChange={(e) => setContrato(e.target.value)}
//             type="text"
//             placeholder="Contrato"
//             value={contrato}
//           />

//           <input onChange={(e) => setImg(e.target.files[0])} type="file" />

//           <button type="button">
//             Editar
//           </button>
//           <button type="button">
//             <Link to="/usuarios">Cancelar</Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditarUsuarios;

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
