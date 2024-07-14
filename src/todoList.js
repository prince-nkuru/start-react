import { useState } from "react";


function TodoList (){
  const [tasks, setTasks] = useState(['eat breakfast', 'take shower', 'study']);
  const [newTask, setNewTask] = useState('')

  function HandleInputChange(event){
       setNewTask(event.target.value)
  }

  function AddTodo(){
     if (newTask.trim() !== ''){
      setTasks(t => [...t, newTask]);
       setNewTask('')
     }
  }

  function RemoveTodo(index){
    const updatedList = tasks.filter((_,i) => i !== index);

    setTasks(updatedList);
  }

  function MoveTaskUp(index){
    if (index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1],updatedTask[index]];
      setTasks(updatedTask)
    }
  }

  function MoveTaskDown(index){
    if (index < tasks.length - 1){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index ]];
      setTasks(updatedTask)
    }
  }

  return (
       <div className="todo-list">
        <h1>todo list</h1>

        <div>
          <input
          type="text"
          placeholder="Enter a text..."
          value={newTask}
          onChange={HandleInputChange}/>

          <button className="add-button" onClick={AddTodo}> add </button>
        </div>

        <ol>
          {tasks.map((task, index) => 
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => RemoveTodo(index)}>delete</button>
            <button className="moveUp" onClick={() => MoveTaskUp(index)}>up</button>
            <button className="moveDown" onClick={() => MoveTaskDown(index)}>down</button>
          </li>
          )}
        </ol>
       </div>
  )
}

export default TodoList