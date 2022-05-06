import './list.css'
import {useState} from "react";

function ListItem({lists, DeleteItem, HandleInputChange, value}) {
    const [editItem, setEdit] = useState(value)
    const HandleEdit = (event) => {
        setEdit(event.target.value)
    }

    const handleSubmit = (event) => {

    }
    console.log(lists)
    return (
        <div>
            {lists.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.id}</span>
                    {console.log(item.id)}
                    <button onClick={() => DeleteItem(index)} style={{color: "red", margin: "20px"}}>X</button>
                    <div>
                        <input value={editItem} onChange={HandleEdit}/>
                        <button>Update</button>
                    </div>
                </div>))}
        </div>
    )
}

export default ListItem