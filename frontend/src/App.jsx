import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  // we need to hit backend and call settodos to new set of todos 
  const [todos, setTodos] = useState ([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  })
  // infinite no. of todos request goes to solve this useEffect , hook
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos ={todos}></Todos>
    </div>
  )
}

export default App
