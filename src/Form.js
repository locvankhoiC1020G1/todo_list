import {useState} from "react";

function Form() {
    const [value, setValue] = useState('');
    const [jobs, setJobs] = useState([]);
    const [isEdit,setIsEdit] = useState(false);
    const [idEdit,setIdEdit] = useState(0);
    const HandleInputChange = (event) => {
        setValue(event.target.value);
    }
    const HandleSubmit = () => {
        setJobs(prevState => [...prevState, value]);
        setValue('');
    }
    const DeleteItem = (id) => {
        setJobs(jobs.filter((value, index) => index !== id));
    }
    const EditItem = (index, item) => {
        setValue(item)
        setIsEdit(true)
        setIdEdit(index)
    }
    const handleEdit = () => {
        const newJobs = [...jobs];
        newJobs.splice(idEdit,1,value)
        setJobs(newJobs);
        setIsEdit(false)
    }

    return (<div>
        <input
            onChange={HandleInputChange} type="text"
            value={value}/>
        {isEdit ? <button onClick={handleEdit}>Edit</button> : <button onClick={HandleSubmit}>Add</button>}
        {jobs.map((item, index) => (
            <div key={index}>
            <span>{item}</span>
            <button onClick={() => DeleteItem(index)} style={{color: "red", margin: "20px"}}>X</button>
            <button onClick={() => EditItem(index,item)}>+</button>
        </div>))}
    </div>)
}

export default Form