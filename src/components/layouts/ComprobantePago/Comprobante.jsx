// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Comprobante = () => {
//     const location = useLocation();
//     const { result } = location.state || {};

//     return (
//         <div className="comprobante">
//             <h2>Comprobante de Pago</h2>
//             {result ? (
//                 <div>
//                     <p>Días trabajados: {result.daysWorked}</p>
//                     <p>Salario proporcional: ${result.proportionalSalary.toFixed(2)}</p>
//                     <p>Auxilio de transporte proporcional: ${result.proportionalTransportAllowance.toFixed(2)}</p>
//                     <p>Salario total: ${result.totalSalary.toFixed(2)}</p>
//                     <p>Salario diario: ${result.dailySalary.toFixed(2)}</p>
//                 </div>
//             ) : (
//                 <p>No hay datos para mostrar.</p>
//             )}
//         </div>
//     );
// };

// export default Comprobante;


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

