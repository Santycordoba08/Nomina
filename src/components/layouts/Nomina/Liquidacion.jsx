// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { useNavigate } from 'react-router-dom';

// const Liquidacion = () => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [salary, setSalary] = useState(0);
//     const [salrayextra, setsalrayextra] = useState(0);
//     const [hasTransportAllowance, setHasTransportAllowance] = useState(false);
//     const [result, setResult] = useState(null);
//     const navigate = useNavigate();

//     const calculate = () => {
//         const start = dayjs(startDate);
//         const end = dayjs(endDate);
//         const daysWorked = end.diff(start, 'day') + 1;
//         const dailySalary = salary / 30;
//         const proportionalSalary = dailySalary * daysWorked;
//         const transportAllowance = hasTransportAllowance ? 106454 : 0;
//         const proportionalTransportAllowance = (transportAllowance / 30) * daysWorked;
//         const totalSalary = proportionalSalary + proportionalTransportAllowance + parseFloat(salrayextra);

//         const calculationResult = {
//             daysWorked,
//             proportionalSalary,
//             proportionalTransportAllowance,
//             totalSalary,
//             dailySalary
//         };

//         setResult(calculationResult);
//         navigate('/comprobante', { state: { result: calculationResult } });
//     };

//     return (
//         <div className='Liquidacion'>
//             <h1>Mi Calculadora</h1>
//             <p>¡Calcula tus Prestaciones!</p>
//             <div>
//                 1. FECHA DE INICIO DEL PERIODO A LIQUIDAR
//                 <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//             </div>
//             <br />
//             <div>
//                 2. FECHA DEL FINAL DEL PERIODO A LIQUIDAR
//                 <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//             </div>
//             <br />
//             <div>
//                 3. INGRESE SU SALARIO MENSUAL
//                 <input type="number" value={salary} onChange={(e) => setSalary(parseFloat(e.target.value))} />
//             </div>
//             <br />
//             <div>
//                 4. ¿TIENE DERECHO A UN AUXILIO DE TRANSPORTE?
//                 <select value={hasTransportAllowance} onChange={(e) => setHasTransportAllowance(e.target.value === 'true')}>
//                     <option value="true">Sí</option>
//                     <option value="false">No</option>
//                 </select>
//             </div>
//             <br />
//             <div>
//                 5. ¿Tiene horas extras?
//                 <input type="number" value={salrayextra} onChange={(e) => setsalrayextra(parseFloat(e.target.value))} />
//             </div>
//             <br />
//             <button onClick={calculate}>Calcular</button>
//         </div>
//     );
// };

// export default Liquidacion;



import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import  '../../../index.css';; // Asegúrate de que la ruta sea correcta

const Liquidacion = () => {
    const [fechainicio, setfechainicio] = useState('');
    const [fechafinal, setfechafinal] = useState('');
    const [salary, setSalary] = useState(0);
    const [salrayextra, setsalrayextra] = useState(0);
    const [hasTransportAllowance, setHasTransportAllowance] = useState(false);
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    const calculate = () => {
        const start = dayjs(fechainicio);
        const end = dayjs(fechafinal);
        const daysWorked = end.diff(start, 'day') + 1;
        const dailySalary = salary / 30;
        const proportionalSalary = dailySalary * daysWorked;
        const transportAllowance = hasTransportAllowance ? 106454 : 0;
        const proportionalTransportAllowance = (transportAllowance / 30) * daysWorked;
        const totalSalary = proportionalSalary + proportionalTransportAllowance + parseFloat(salrayextra);

        const calculationResult = {
            daysWorked,
            proportionalSalary,
            proportionalTransportAllowance,
            totalSalary,
            dailySalary
        };

        setResult(calculationResult);
        navigate('/comprobante', { state: { result: calculationResult } });
    };

    return (
        <div className='Liquidacion'>
            <h1>Mi Calculadora</h1>
            <p>¡Calcula tus Prestaciones!</p>
            <div>
                1. FECHA DE INICIO DEL PERIODO A LIQUIDAR
                <input type="date" value={fechainicio} onChange={(e) => setfechainicio(e.target.value)} />
            </div>
            <br />
            <div>
                2. FECHA DEL FINAL DEL PERIODO A LIQUIDAR
                <input type="date" value={fechafinal} onChange={(e) => setfechafinal(e.target.value)} />
            </div>
            <br />
            <div>
                3. INGRESE SU SALARIO MENSUAL
                <input type="number" value={salary} onChange={(e) => setSalary(parseFloat(e.target.value))} />
            </div>
            <br />
            <div>
                4. ¿TIENE DERECHO A UN AUXILIO DE TRANSPORTE?
                <select value={hasTransportAllowance} onChange={(e) => setHasTransportAllowance(e.target.value === 'true')}>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                </select>
            </div>
            <br />
            <div>
                5. ¿Tiene horas extras?
                <input type="number" value={salrayextra} onChange={(e) => setsalrayextra(parseFloat(e.target.value))} />
            </div>
            <br />
            <button onClick={calculate}>Calcular</button>
        </div>
    );
};

export default Liquidacion;
