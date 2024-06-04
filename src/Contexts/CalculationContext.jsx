import React, { createContext, useState } from 'react';

export const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
    const [calculationResult, setCalculationResult] = useState(null);

    return (
        <CalculationContext.Provider value={{ calculationResult, setCalculationResult }}>
            {children}
        </CalculationContext.Provider>
    );
};
