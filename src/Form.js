import {useState} from "react";
import ListItem from "./ListItem";
import uuid from 'react-uuid'

function Form() {
    const [value, setValue] = useState('');
    const [jobs, setJobs] = useState([]);
    const HandleInputChange = (event) => {
        setValue(event.target.value);
    }
    const HandleSubmit = () => {
        setJobs(prevState => [...prevState, {id: uuid(), name: value}]);
        setValue('');
    }
    const DeleteItem = (id) => {
        setJobs(jobs.filter((value, index) => index !== id));
    }
    const update = (id, content) => {
        const updateItem = jobs.map(job => {
            if (job.id === id) {
                return {...job, name: content};
            }
            return job
        });
        return setJobs(content);
    }

    return (<div>
        <input
            onChange={HandleInputChange} type="text"
            value={value}/>
        <button onClick={HandleSubmit}>Add</button>
        <ListItem lists={jobs} DeleteItem={DeleteItem} HandleInputChange={HandleInputChange} value={value} update={update}></ListItem>
    </div>)
}

export default Form