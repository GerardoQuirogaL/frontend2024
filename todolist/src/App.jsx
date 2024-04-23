import List from "./List"
import TaskModal from "./TaskModal"

const taskList = [
  {
  id: 1,
  task: "Estudiar",
  description: "Estudiar para el examen de cáculo",
  limit: "13:00",
  location: "ITTUX",
  isDone: "false",
},
{
  id: 2,
  task: "Practicar",
  description: "Entrenar para el siguiente partido",
  limit: "14:00",
  location: "Campo Deportivo",
  isDone: "false",
},
{
  id: 3,
  task: "Trabajar",
  description: "Hacer las actividades dela escuela",
  limit: "15:00",
  location: "Casa",
  isDone: "false",
}
]

function App() {

  return (
    <div className="container">
      <h1>To Do List</h1>
      <hr />
      <List 
      taskList={taskList}
      />
      <hr />
      <div className="text-end">
        <TaskModal/>
        <button 
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#taskModal"
        ><i className="bi bi-plus-lg"></i>App</button>
      </div>
    </div>
  )
}

export default App
