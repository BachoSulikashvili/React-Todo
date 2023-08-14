import { useState } from 'react'
import './App.css'


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className='todo'>
      <h1>Todo</h1>
      <input type="text" className='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li  key={index}>
            <div className='check'>
              <input type="checkbox" className='checkbox' checked={todo.checked} onChange={() => handleToggleTodo(index)}/>
              <span style={{marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none",}}>
                {todo.text}
              </span>
            </div>
            <button id='btn'  onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;



















// const Todo = () => {
// const [todos, setTodos] = useState([])
// const [newTodo, setNewTodo] = useState("")

// const AddTodo = () => {
//   if (newTodo.trim() !== "") {
//     setTodos([...todos, {text: newTodo.trim(), checked: false}])
//     setNewTodo("")
//   }
// }

// const DeleteTodo = (index) => {

// }

// const ToggleTodo = (index) => {
  
// }


// return (
//     <>
//       <div className="todo">
//         <h1>Todo</h1>
//         <input type="text" value={newTodo} onChange={(e) => newTodo(e.target.value)} />
//         <button onClick={AddTodo}>Add</button>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               <input type="checkbox" checked={todo.checked} onChange={() => ToggleTodo(index)} />
//               <span>{todo.text}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default Todo
