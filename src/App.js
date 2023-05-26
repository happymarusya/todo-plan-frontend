import './App.css';
import { useEffect, useState } from 'react';
import { MyTodo } from './MyTodo';
import { getAllTodo, addText, editTodo, deleteTodo } from './FetchTodo';
import 'animate.css';

function App() {
  const [myTodo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [todoId, setTodoId] = useState("");
  
  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  const updatingInInput = (_id, name) => {
    setEditing(true)
    setName(name)
    setTodoId(_id)
  }


  return (
    <div className="container animate__animated animate__heartBeat animate__delay-1s">
      <div className='container-2'>
      <h1>To Do List</h1> 
      <h3>Dreams don't work unless you do...</h3>
      <input
        type="text"
        placeholder="add an item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button 
      disabled = {!name}
      onClick=
      {editing ? () => editTodo(todoId, name, setName, setTodo, setEditing) : () => addText(name, setName, setTodo)}>
        {editing ? "Edit" : "Add"}
      </button>
      </div>

      {myTodo.map((todo) => <MyTodo text = {todo.name} key = {todo._id}
      updatingInInput = {() => updatingInInput(todo._id, todo.name)}
      deleteTodo={() => deleteTodo(todo._id, setTodo)}/>
      )}
    </div>
  );
}

export default App;
