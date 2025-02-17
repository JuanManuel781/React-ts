import React, { useState } from "react";

const InputEjemplo: React.FC = () => {
  const [valor, setValor] = useState("");

  const manejarCambio = (evento: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Valor cambiado", evento);
    setValor(evento.target.value);
  };

  return (
    <div>
      <input type="text" value={valor} onChange={manejarCambio} />
      <p>Valor: {valor}</p>
    </div>
  );
};

export default InputEjemplo;