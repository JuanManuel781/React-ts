import React, { useState } from "react";

const BotonEjemplo: React.FC = () => {

  const manejarCambio = (evento: any) => {
    console.log(evento);
  };

  return (
    <div>
      <button onMouseEnter={manejarCambio} onMouseLeave={manejarCambio}>
        Hover me!
      </button>
    </div>
  );
};

export default BotonEjemplo;