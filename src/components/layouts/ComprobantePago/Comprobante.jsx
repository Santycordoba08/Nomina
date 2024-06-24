// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import "./Comprobante.css"; // Asegúrate de que este archivo existe y está bien vinculado
// import DireccionHome from "../DireccionHome/DireccionHome";

// const Comprobante = () => {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const savedResults =
//       JSON.parse(localStorage.getItem("liquidationResults")) || [];
//     setResults(savedResults);
//   }, []);

//   const handleDelete = (index) => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "No podrás revertir esta acción",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Sí, eliminar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const updatedResults = results.filter((_, i) => i !== index);
//         localStorage.setItem(
//           "liquidationResults",
//           JSON.stringify(updatedResults)
//         );
//         setResults(updatedResults);
//         Swal.fire("Eliminado!", "La liquidación ha sido eliminada.", "success");
//       }
//     });
//   };

//   return (
//     <div className="Fondo-comprobante">
//       <DireccionHome />
//       <div className="comprobante">
//         <h2>Comprobante de Pago</h2>
//         {results.length > 0 ? (
//           results.map((result, index) => (
//             <div key={index} className="comprobante-detalle">
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Nombre:</span>
//                 <span className="comprobante-value">{result.name}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Apellidos:</span>
//                 <span className="comprobante-value">{result.apellidos}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Documento:</span>
//                 <span className="comprobante-value">{result.documento}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Días trabajados:</span>
//                 <span className="comprobante-value">{result.daysWorked}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Salario diario:</span>
//                 <span className="comprobante-value">
//                   ${result.dailySalary.toFixed(2)}
//                 </span>
//               </div>
//               <button
//                 className="delete-button"
//                 onClick={() => handleDelete(index)}
//               >
//                 Eliminar Liquidación
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No hay datos para mostrar.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Comprobante;

// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { useLocation } from "react-router-dom";
// import "./Comprobante.css"; // Asegúrate de que este archivo existe y está bien vinculado
// import DireccionHome from "../DireccionHome/DireccionHome";

// const Comprobante = () => {
//   const location = useLocation();
//   const [results, setResults] = useState([]);
//   const [documento, setDocumento] = useState("");
//   const [filteredResults, setFilteredResults] = useState([]);

//   useEffect(() => {
//     const savedResults =
//       JSON.parse(localStorage.getItem("liquidationResults")) || [];
//     setResults(savedResults);
//     if (location.state?.documento) {
//       setDocumento(location.state.documento);
//       setFilteredResults(
//         savedResults.filter(result => result.documento === location.state.documento)
//       );
//     }
//   }, [location.state]);

//   const handleSearch = () => {
//     setFilteredResults(
//       results.filter(result => result.documento === documento)
//     );
//   };

//   const handleDelete = (index) => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "No podrás revertir esta acción",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Sí, eliminar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const updatedResults = results.filter((_, i) => i !== index);
//         localStorage.setItem(
//           "liquidationResults",
//           JSON.stringify(updatedResults)
//         );
//         setResults(updatedResults);
//         setFilteredResults(updatedResults.filter(result => result.documento === documento));
//         Swal.fire("Eliminado!", "La liquidación ha sido eliminada.", "success");
//       }
//     });
//   };

//   return (
//     <div className="Fondo-comprobante">
//       <DireccionHome />
//       <div className="comprobante">
//         <h2>Comprobante de Pago</h2>
//         <div>
//           <input
//             type="text"
//             placeholder="Ingrese el documento del empleado"
//             value={documento}
//             onChange={(e) => setDocumento(e.target.value)}
//           />
//           <button onClick={handleSearch}>Buscar</button>
//         </div>
//         {filteredResults.length > 0 ? (
//           filteredResults.map((result, index) => (
//             <div key={index} className="comprobante-detalle">
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Nombre:</span>
//                 <span className="comprobante-value">{result.name}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Apellidos:</span>
//                 <span className="comprobante-value">{result.apellidos}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Documento:</span>
//                 <span className="comprobante-value">{result.documento}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Días trabajados:</span>
//                 <span className="comprobante-value">{result.daysWorked}</span>
//               </div>
//               <div className="comprobante-item">
//                 <span className="comprobante-label">Salario diario:</span>
//                 <span className="comprobante-value">
//                   ${result.dailySalary.toFixed(2)}
//                 </span>
//               </div>
//               <button
//                 className="delete-button"
//                 onClick={() => handleDelete(index)}
//               >
//                 Eliminar Liquidación
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No hay datos para mostrar.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Comprobante;

// ***************************************************************

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import "./Comprobante.css"; // Asegúrate de que este archivo existe y está bien vinculado
import DireccionHome from "../DireccionHome/DireccionHome";

const Comprobante = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [documento, setDocumento] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const savedResults =
      JSON.parse(localStorage.getItem("liquidationResults")) || [];
    setResults(savedResults);
    if (location.state?.documento) {
      setDocumento(location.state.documento);
      setFilteredResults(
        savedResults.filter(result => result.documento === location.state.documento)
      );
    }
  }, [location.state]);

  const handleSearch = () => {
    setFilteredResults(
      results.filter(result => result.documento === documento)
    );
  };

  const handleDelete = (index) => {
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
        const updatedResults = results.filter((_, i) => i !== index);
        localStorage.setItem(
          "liquidationResults",
          JSON.stringify(updatedResults)
        );
        setResults(updatedResults);
        setFilteredResults(updatedResults.filter(result => result.documento === documento));
        Swal.fire("Eliminado!", "La liquidación ha sido eliminada.", "success");
      }
    });
  };

  return (
    <div className="Fondo-comprobante">
      <DireccionHome />
      <div className="comprobante">
        <h2>Comprobante de Pago</h2>
        <div>
          <input
            type="text"
            placeholder="Ingrese el documento del empleado"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => (
            <div key={index} className="comprobante-detalle">
              <div className="comprobante-item">
                <span className="comprobante-label">Nombre:</span>
                <span className="comprobante-value">{result.name}</span>
              </div>
              <div className="comprobante-item">
                <span className="comprobante-label">Apellidos:</span>
                <span className="comprobante-value">{result.apellidos}</span>
              </div>
              <div className="comprobante-item">
                <span className="comprobante-label">Documento:</span>
                <span className="comprobante-value">{result.documento}</span>
              </div>
              <div className="comprobante-item">
                <span className="comprobante-label">Días trabajados:</span>
                <span className="comprobante-value">{result.daysWorked}</span>
              </div>
              <div className="comprobante-item">
                <span className="comprobante-label">Salario diario:</span>
                <span className="comprobante-value">
                  ${result.dailySalary.toFixed(2)}
                </span>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Eliminar Liquidación
              </button>
            </div>
          ))
        ) : (
          <p>No hay datos para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default Comprobante;
