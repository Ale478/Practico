import React, { useState } from 'react';

function BotonContador() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
}

export default BotonContador;
