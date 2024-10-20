import { useState } from "react";

function Todo({todoData, isFinished, id, changeFinished, onDelete}) {

    const [finished, setFinished] = useState(isFinished);

    return (
        <div>
        <input type="checkbox" checked={finished} onChange={(e)=> {
            setFinished(e.target.checked);
            changeFinished(e.target.checked);
            }}/>
        {todoData}
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>

        </div>
    )
}

export default Todo;