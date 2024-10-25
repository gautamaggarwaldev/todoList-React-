import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {

    const [finished, setFinished] = useState(isFinished);
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todoData);
    return (
        <div>
        <input type="checkbox" checked={finished} onChange={(e)=> {
            setFinished(e.target.checked);
            changeFinished(e.target.checked);
            }}/>

        {isEdit ?  <input type='text' value={editText} onChange={e => setEditText(e.target.value)} /> : <span>{todoData}</span>}

        <button onClick={()=> {
            setIsEdit(!isEdit);
            onEdit(editText)
        }}>{!isEdit ? 'Edit' : 'Save'}</button>

        <button onClick={onDelete}>Delete</button>

        </div>
    )
}

export default Todo;