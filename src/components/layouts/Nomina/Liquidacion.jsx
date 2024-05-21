import React, { useState } from 'react';

const Liquidacion = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [salary, setSalary] = useState(0);
    const [hasTransportAllowance, setHasTransportAllowance] = useState(false);
    const [riskClass, setRiskClass] = useState('');

    const calculate = () => {
       let objeto = {
        startDate, endDate, salary, hasTransportAllowance, riskClass
       }
       console.log(objeto)
    };

    return (
        <div className='Liquidacion'>
            <h1>Mi Calculadora</h1>
            <p>¡Calcula tus Prestaciones!</p>
            <div className=''>
                1. FECHA DE INICIO DEL PERIODO A LIQUIDAR
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <br />
            <div className=''>
                2. FECHA DEL FINAL DEL PERIODO A LIQUIDAR
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <br />
            <div className=''>
                3. INGRESE SU SALARIO MENSUAL
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
            </div>
            <br />
            <div className=''>
                4. ¿TIENE DERECHO A UN AUXILIO DE TRANSPORTE?
                <select value={hasTransportAllowance} onChange={(e) => setHasTransportAllowance(e.target.value === 'true')}>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <br />
            <div className=''>
                5. Seleccione la clase de riesgos laborales correspondiente al sector de actividad y al cargo del trabajador.
                <select value={riskClass} onChange={(e) => setRiskClass(e.target.value)}>
                    <option value="">Select an option</option>
                    {/* Agrega tus opciones de selección aquí */}
                </select>
            </div>
            <br />
            <button onClick={calculate}>Calcular</button>
            <br />
            <div className=''>
                6. Resultado
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
            </div>

        </div>
    );
};

export default Liquidacion;