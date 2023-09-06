import React, {useState}  from 'react'

export const PrimerComponente = () => {
  //let nombre = "Alejandra Linares"
  let web = "ale.es"

  const [nombre, setNombre] = useState("Alejandra");

  let cursos = [
    "Programacion",
    "Frontend",
    "Musica",
    "Dibujo"
  ];

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div>
        <h1>Mi Primer Componente</h1>
        <p>Esto es el texto de mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >=4 ?'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e =>cambiarNombre(e.target.value)}/>
        <button onClick={e => {
          console.log("El valor guardado en tu estado es:", nombre);
        }}>Mostrar valor del estado</button>
        <button onClick={e => cambiarNombre("Claret Molina")}>
        Cambiar Nombre
        </button>
          
      

        <h2>Mis Cursos</h2>
        <ul>
          {
            cursos.map((curso, indice) => {
              return(<li key={indice}>
                {curso}
              </li>);
            })
          }
        </ul>
    </div>
  )
}
