import Task from "./Task";
import classes from '../css/TasksList.module.css'

export default function TasksList( { tasks, status, statusChange, onDelete } ) {
    
    const handleStatusChange = (taskId, newStatus) => {
        statusChange(taskId, newStatus);
    }
    
    return(
        <ul className={classes['tasks-list']}>
            {tasks
            .filter((task) => task.status === status)
            .map((task) => (
                <li key={task.id}><Task task={task} onStatusChange={handleStatusChange} onDelete={onDelete}/></li>
            ))}
        </ul>
    );
}