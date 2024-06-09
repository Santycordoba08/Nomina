import React from 'react';
import { useLocation } from 'react-router-dom';
import './Comprobante.css'; // Asegúrate de crear y enlazar este archivo CSS

const Comprobante = () => {
    const location = useLocation();
    const { result } = location.state || {};

    return (
        <div className="comprobante">
            <h2>Comprobante de Pago</h2>
            {result ? (
                <div className="comprobante-detalle">
                    <p><span>Nombre:</span> {result.name}</p>
                    <p><span>Apellidos:</span> {result.apellidos}</p>
                    <p><span>Documento:</span> {result.documento}</p>
                    <p><span>Días trabajados:</span> {result.daysWorked}</p>
                    <p><span>Salario proporcional:</span> ${result.proportionalSalary.toFixed(2)}</p>
                    <p><span>Auxilio de transporte proporcional:</span> ${result.proportionalTransportAllowance.toFixed(2)}</p>
                    <p><span>Salario total:</span> ${result.totalSalary.toFixed(2)}</p>
                    <p><span>Salario diario:</span> ${result.dailySalary.toFixed(2)}</p>
                </div>
            ) : (
                <p>No hay datos para mostrar.</p>
            )}
        </div>
    );
};

export default Comprobante;

// ***********************************************************

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Comprobante.css'; // Asegúrate de crear y enlazar este archivo CSS

// const Comprobante = () => {
//     const location = useLocation();
//     const { result } = location.state || {};

//     return (
//         <div className="comprobante-container">
//             <h2 className="comprobante-title">Comprobante de Pago</h2>
//             {result ? (
//                 <div className="comprobante-detalle">
//                     <p><span>Nombre:</span> {result.name}</p>
//                     <p><span>Apellidos:</span> {result.apellidos}</p>
//                     <p><span>Documento:</span> {result.documento}</p>
//                     <p><span>Días trabajados:</span> {result.daysWorked}</p>
//                     <p><span>Salario proporcional:</span> ${result.proportionalSalary.toFixed(2)}</p>
//                     <p><span>Auxilio de transporte proporcional:</span> ${result.proportionalTransportAllowance.toFixed(2)}</p>
//                     <p><span>Salario total:</span> ${result.totalSalary.toFixed(2)}</p>
//                     <p><span>Salario diario:</span> ${result.dailySalary.toFixed(2)}</p>
//                 </div>
//             ) : (
//                 <p className="no-data-message">No hay datos para mostrar.</p>
//             )}
//         </div>
//     );
// };

// export default Comprobante;





// ******************************************************+

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './Comprobante.css'; // Asegúrate de crear y enlazar este archivo CSS

// const Comprobante = () => {
//     const location = useLocation();
//     const { result } = location.state || {};

//     const [results, setResults] = useState([]);

//     useEffect(() => {
//         // Retrieve results from localStorage
//         const savedResults = JSON.parse(localStorage.getItem('liquidationResults')) || [];
//         setResults(savedResults);
//     }, []);

//     const formatNumber = (number) => {
//         return number !== null && number !== undefined ? number.toFixed(2) : '0.00';
//     };

//     return (
//         <div className="comprobante">
//             <h2>Comprobante de Pago</h2>
//             {result ? (
//                 <div className="comprobante-detalle">
//                     <p><span>Nombre:</span> {result.name}</p>
//                     <p><span>Apellidos:</span> {result.apellidos}</p>
//                     <p><span>Documento:</span> {result.documento}</p>
//                     <p><span>Días trabajados:</span> {result.daysWorked}</p>
//                     <p><span>Salario proporcional:</span> ${formatNumber(result.proportionalSalary)}</p>
//                     <p><span>Auxilio de transporte proporcional:</span> ${formatNumber(result.proportionalTransportAllowance)}</p>
//                     <p><span>Salario total:</span> ${formatNumber(result.totalSalary)}</p>
//                     <p><span>Salario diario:</span> ${formatNumber(result.dailySalary)}</p>
//                 </div>
//             ) : (
//                 <p>No hay datos para mostrar.</p>
//             )}
//             <h3>Historial de Liquidaciones</h3>
//             <div className="historial">
//                 {results.map((res, index) => (
//                     <div key={index} className="comprobante-detalle">
//                         <p><span>Nombre:</span> {res.name}</p>
//                         <p><span>Apellidos:</span> {res.apellidos}</p>
//                         <p><span>Documento:</span> {res.documento}</p>
//                         <p><span>Días trabajados:</span> {res.daysWorked}</p>
//                         <p><span>Salario proporcional:</span> ${formatNumber(res.proportionalSalary)}</p>
//                         <p><span>Auxilio de transporte proporcional:</span> ${formatNumber(res.proportionalTransportAllowance)}</p>
//                         <p><span>Salario total:</span> ${formatNumber(res.totalSalary)}</p>
//                         <p><span>Salario diario:</span> ${formatNumber(res.dailySalary)}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Comprobante;
