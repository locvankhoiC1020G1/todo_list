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
        // thêm 1 object vào mảng với id ngẫu nhiên
        setJobs(prevState => [...prevState, {id: uuid(), name: value}]);
        //sau khi thêm thành công, đặt lại value ở input = ''
        setValue('');
    }
    const deleteItem = (id) => {
        //trả về một mảng với các phần tử có index # id
        setJobs(jobs.filter(item => item.id !== id));
    }

    const update = (id, content) => {
        const updateItem = jobs.map(job => {
            if (job.id === id) {
                return {...job, name: content};
            }
            return job
        });
        return setJobs(updateItem);
    }
    const listItems = jobs.map(job => (
        <ListItem
            deleteItem={deleteItem}
            update={update}
            job={job}
        />
    ))
    return (<div>
        <input
            onChange={HandleInputChange} type="text"
            value={value}/>
        <button onClick={HandleSubmit}>Add</button>
        <div>{listItems}</div>
    </div>)
}

export default Form