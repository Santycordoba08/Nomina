import React, { useState } from 'react';
import dayjs from 'dayjs'; // Asegúrate de instalar dayjs con `npm install dayjs`

const Liquidacion = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [salary, setSalary] = useState(0);
    const [salrayextra, setsalrayextra] = useState(0);
    const [hasTransportAllowance, setHasTransportAllowance] = useState(false);
    const [result, setResult] = useState(null);

    const calculate = () => {
        // Convertir fechas a objetos de dayjs
        const start = dayjs(startDate);
        const end = dayjs(endDate);

        // Calcular el número de días trabajados
        const daysWorked = end.diff(start, 'day') + 1;

        // Salario diario
        const dailySalary = salary / 30;

        // Salario proporcional
        const proportionalSalary = dailySalary * daysWorked;

        // Auxilio de transporte mensual (asumamos que es un valor fijo)
        const transportAllowance = hasTransportAllowance ? 106454 : 0; // Valor del auxilio de transporte en Colombia para 2024

        // Auxilio de transporte proporcional
        const proportionalTransportAllowance = (transportAllowance / 30) * daysWorked;

        // Salario total con horas extras
        const totalSalary = proportionalSalary + proportionalTransportAllowance + parseFloat(salrayextra);

        // Guardar el resultado en el estado
        setResult({
            daysWorked,
            proportionalSalary,
            proportionalTransportAllowance,
            totalSalary,
        });
    };

    return (
        <div className='Liquidacion'>
            <h1>Mi Calculadora</h1>
            <p>¡Calcula tus Prestaciones!</p>
            <div>
                1. FECHA DE INICIO DEL PERIODO A LIQUIDAR
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <br />
            <div>
                2. FECHA DEL FINAL DEL PERIODO A LIQUIDAR
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
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
            <br />
            <div>
                6. Resultado
                <div className='resultado'>
                    {result && (
                        <div>
                            <p>Días trabajados: {result.daysWorked}</p>
                            <p>Salario proporcional: ${result.proportionalSalary.toFixed(2)}</p>
                            <p>Auxilio de transporte proporcional: ${result.proportionalTransportAllowance.toFixed(2)}</p>
                            <p>Salario total: ${result.totalSalary.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Liquidacion;
