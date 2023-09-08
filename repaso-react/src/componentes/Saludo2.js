import React from "react";


function Saludo2(props){
    const { nombre, ChangeName } = props;

    const ChangeNombre = (e) => {
        ChangeName(e.target.value);
    };

    return(
        <div>
            <h1>Saludo</h1>
            <input
             type="text"
             placeholder="Ingresa tu nombre"
             value={nombre}
             onChange={ChangeNombre}
             />
            <p>Hola, {nombre || 'invitado'}</p>
        </div>
    );
}

export default Saludo2;