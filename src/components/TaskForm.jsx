import { useState } from "react";
import classes from '../css/TaskForm.module.css'

export default function TaskForm( { addTask, onClose } ) {
    const [task, setTask] = useState({
        name: '',
        description: '',
        priority: 'Low',
        status: 'To-Do'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.description.length <= 200) {
            addTask(task);
            setTask({
                name: '',
                description: '',
                priority: 'Low',
                status: 'To-Do'
            })
            console.log(task)
        } else {
            alert('Description exceeds the maximum length of 200 characters.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes['form-container']}>
            <div>
                <label>Task Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={task.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Task Description: </label>
                <textarea 
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    maxLength={200}
                    required
                />
            </div>
            <div>
                <label>Priority: </label>
                <select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    required
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit">Add Task</button>
            <button onClick={onClose}>Close</button>
        </form>
    );
}