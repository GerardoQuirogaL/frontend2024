const persona = {
  nombre : 'Gerardo Luis Quiroga León',
  edad : 24,
  profesión: 'Estudiante',
  pasatiempos: [
    'Jugar beisbool',
    'programar',
    'ver pelicula',
    'jugar videojuegos',
    'escuchar musica',
  ],
  fechadenacimiento: 17/10/1999,
  lugardenacimiento: 'San Juan Bautista Tuxtepec',
  signo: 'Libra'
}

function App() {

  return (
    <div>
      <h1>Información Personal</h1> 
      <hr />
      <ul>
      <li>Nombre: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Profesión: {persona.profesión}</li>
      <li>Fecha de nacimiento: {persona.fechadenacimiento}</li>
      <li>Lugar de nacimiento: {persona.lugadenacimiento}</li>
      <li>signo: {persona.signo}</li>
      <li>Pasatiempos:
        <ul>
          {
            persona.pasatiempos.map((pasatiempo) =>{
              return <li key={pasatiempo}>
                {pasatiempo}
              </li>
            } )
          }
        </ul>
      </li>
      </ul>
    </div>
  )
   
}

export default App
