import axios from 'axios';

const getAllTodo = (setTodo) => {
    axios.get('https://todo-plan.onrender.com')
    .then(({data}) => {console.log(data)
        setTodo(data);
    })
}

const addText = (name, setName, setTodo) => {
    axios.post(`https://todo-plan.onrender.com/saveTodo`, {name})
    .then((data) => {
        console.log(data);
        setName("");
        getAllTodo(setTodo)
    })
}

const editTodo = (todoId, name, setName, setTodo, setEditing) => {
    axios.put(`https://todo-plan.onrender.com/editTodo`, {_id: todoId, name})
    .then((data) => {
        console.log(data)
        setName("")
        setEditing(false)
        getAllTodo(setTodo)
    })
}

const deleteTodo = (_id, setTodo) => {
    axios.post(`https://todo-plan.onrender.com/deleteTodo`, {_id})
    .then((data) => {
        console.log(data)
        getAllTodo(setTodo)
    })
}


export {getAllTodo, addText, editTodo, deleteTodo};