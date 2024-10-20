import './App.css'
import AddTodo from './Component/AddTodo/AddTodo'
import { useState } from 'react'
import TodoList from './Component/TodoList/TodoList'
import TodoContext from './context/TodoContext';

function App() {

  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: true }
  ]);

  return (
    <TodoContext.Provider value={{list, setList}}>

      <AddTodo updateList={(todo)=> setList([...list,  {id: list.length+1, todoData: todo, finished: false}])} />
      {console.log(list)}
      
      <TodoList  />

    </TodoContext.Provider>
  )
}

export default App
