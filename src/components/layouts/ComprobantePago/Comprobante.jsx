import React, { useEffect, useState } from 'react';
import './Comprobante.css'; // Asegúrate de que este archivo existe y está bien vinculado

const Comprobante = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const savedResults = JSON.parse(localStorage.getItem('liquidationResults')) || [];
        setResults(savedResults);
    }, []);

    return (
        <div className="Fondo-comprobante">
            <div className="comprobante">
                <h2 >Comprobante de Pago</h2>
                {results.length > 0 ? (
                    results.map((result, index) => (
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
                             {/* <div className="comprobante-item">
                                <span className="comprobante-label">Salario proporcional:</span>
                                <span className="comprobante-value">${result.proportionalSalary.toFixed(2)}</span>
                            </div> */}
                            {/* <div className="comprobante-item">
                                <span className="comprobante-label">Auxilio de transporte proporcional:</span>
                                <span className="comprobante-value">${result.proportionalTransportAllowance.toFixed(2)}</span>
                            </div> */}
                            {/* <div className="comprobante-item">
                                <span className="comprobante-label">Salario total:</span>
                                <span className="comprobante-value">${result.totalSalary.toFixed(2)}</span>
                            </div>  */}
                            <div className="comprobante-item">
                                <span className="comprobante-label">Salario diario:</span>
                                <span className="comprobante-value">${result.dailySalary.toFixed(2)}</span>
                            </div>
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