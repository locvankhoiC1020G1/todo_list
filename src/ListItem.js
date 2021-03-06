import './list.css'
import {useState} from "react";

function ListItem({checkComplete, deleteItem, update, job}) {
    const [item, setItem] = useState(job.name)
    const [isEdit, setIsEdit] = useState(true)
    const handleEdit = (event) => {
        setItem(event.target.value)
    }
    const handleUpdate = () => {
        update(job.id, item)
        toggleFrom()
    }
    const toggleFrom = () => {
        // đảo ngược giá trị của isEdit
        setIsEdit(!isEdit);
    }
    let result;
    if (isEdit) {
        result = (
            <div id={job.id} key={job.id} onClick={() => checkComplete(job.id)}>
                <span className={job.complete ? "Todo-task completed" : "Todo-task"}>{job.name}</span>
                {/*<span>{job.id}</span>*/}
                <button onClick={() => deleteItem(job.id)}>X</button>
                <button onClick={toggleFrom}>Edit</button>
            </div>
        )
    } else {
        result = (
            <div>
                <input value={item} onChange={handleEdit}/>
                <button onClick={handleUpdate}>Update</button>
            </div>
        )
    }
    return result
}

export default ListItem