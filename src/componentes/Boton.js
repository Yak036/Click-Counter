import React from 'react'
import '../hojas-de-estilo/boton.css'
function Boton({ texto, esBotonDeClic, manejarClic }){
  const newLocal = 'boton-clic';
  return(
    <button
    className={ esBotonDeClic ? newLocal:'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;