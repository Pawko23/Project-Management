import Task from "./Task";
import classes from '../css/TasksList.module.css'

export default function TasksList( { tasks, status } ) {
    return(
        <ul className={classes['tasks-list']}>
            {tasks
            .filter((task) => task.status === status)
            .map((task) => (
                <li key={task.name}><Task task={task} /></li>
            ))}
        </ul>
    );
}