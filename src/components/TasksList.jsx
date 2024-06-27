import Task from "./Task";

export default function TasksList( { tasks, status } ) {
    return(
        <ul>
            {tasks
            .filter((task) => task.status === status)
            .map((task) => (
                <li key={task.name}><Task task={task} /></li>
            ))}
        </ul>
    );
}