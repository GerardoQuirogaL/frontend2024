import ListItem from "./Listitem";

const personas =['personas', {
  nombre: 'Gerardo Luis Quiroga León',
  teléfono: 56452154,
  email:'gerardoquiroga718@gmail.com'
},
{nombre: 'Cristyan Quiroga',
  teléfono: 4444444,
  email:'cristyan@gmail.com'
},
{nombre: 'Jose Garcia',
teléfono: 66666666,
email:'garciajose@gmail.com'
}
]

function App() {
  return (
    <div>
      <h1>Agenda</h1>
      
      <ul>
        {
          personas.map((persona)=>(
            <ListItem
            key={persona.email}
            nombre={persona.nombre}
            teléfono={persona.teléfono}
            email={persona.email}
            />))
        }
      </ul>
    </div>
  )
}

export default App
