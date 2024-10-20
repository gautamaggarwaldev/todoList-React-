import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
function TodoList() {

    const {list, setList} = useContext(TodoContext);

    return (
        <div>

        {list.length > 0 && list.map(todo => <Todo 
                                                key={todo.id} 
                                                id={todo.id} 
                                                todoData={todo.todoData} 
                                                isFinished={todo.finished} 
                                                changeFinished={(isFinished)=> {
                                                    const updatedList = list.map(t => {
                                                        if(t.id == todo.id) {
                                                            todo.finished = isFinished;
                                                        }
                                                        return t;
                                                    });
                                                    setList(updatedList);
                                                }}
                                            />)}

        </div>
    )
}

export default TodoList;