import './App.css'
import AddTodo from './Component/AddTodo/AddTodo'
import { useReducer } from 'react'
import TodoList from './Component/TodoList/TodoList'
import TodoContext from './context/TodoContext';
import TodoDispatchContext from './context/TodoDispatchContext';
import todoReducer from './reducer/todoReducer';

function App() {

  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>

        <AddTodo />
        {console.log(list)}
        <TodoList />

      </TodoDispatchContext.Provider>

    </TodoContext.Provider>
  )
  
}

export default App
