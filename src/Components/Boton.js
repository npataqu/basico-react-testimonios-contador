import React from "react";
import "../Styles/Boton.css"

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (

    <button
    // aca usamos una clase basada en la codición si el boton hace algo cambia de estilo
    className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
    onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;