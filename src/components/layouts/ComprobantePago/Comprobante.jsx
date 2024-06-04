import React from 'react';
import "./Comprobante.css"


const Comprobante = ({ result }) => {
    if (!result) {
        return null;
    }

    return (
        <div className="comprobante">
            <h2>Comprobante de Pago</h2>
            <p>Días trabajados: {result.daysWorked}</p>
            <p>Salario proporcional: ${result.proportionalSalary.toFixed(2)}</p>
            <p>Auxilio de transporte proporcional: ${result.proportionalTransportAllowance.toFixed(2)}</p>
            <p>Salario total: ${result.totalSalary.toFixed(2)}</p>
        </div> 
    );
};

export default Comprobante;
