import { useState } from "react"
import List from "./List"
import TaskModal from "./TaskModal"

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  )

  return (
    <div className="container">
      <h1>To Do List</h1>
      <hr />
      <List 
      taskList={taskList}
      />
      <hr />
      <div className="text-end">
        <TaskModal 
        taskList={taskList} 
        setTaskList={setTaskList} />
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
