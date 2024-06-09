import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../index.css";

const DireccionHome = () => {
    const navigate = useNavigate(); 

    const redirigir = () => {
      navigate("/"); 
    };
  
    return (
      <nav className="regresar">
        <button className="boton-registrar" onClick={redirigir}>
          HOME
        </button>
      </nav>
    );
}

export default DireccionHome