import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navegador.css";

const Navegador = () => {
  const navigate = useNavigate(); // Hook de react-router-dom para la navegación

  const redirigir = () => {
    navigate("/registro"); // Redirigir a la ruta /registro
  };
  
  return (
    <nav>
      <button onClick={redirigir}>Registrar</button>
    </nav>
  );
};

export default Navegador;
