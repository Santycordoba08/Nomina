import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navegador.css'; // Importa el archivo CSS

const Navegador = () => {
  const navigate = useNavigate(); // Hook de react-router-dom para la navegación

  const redirigir = () => {
    navigate("/registro"); // Redirigir a la ruta /registro
  };

  return (
    <nav className="navegador">
      <button className="boton-registrar" onClick={redirigir}>Registrar Empleado</button>
    </nav>
  );
};

export default Navegador;
