import classes from '../css/Task.module.css'
import { useState } from 'react';


export default function Task( {task, onStatusChange, onDelete} ) {
    const { id, title, status } = task;
    const handleChangeStatus = (newStatus) => {
        onStatusChange(id, newStatus);
    }

    const toDo = task.status === 'To-Do'
    const inProgress = task.status === 'In-Progress'
    const done = task.status === 'Done'


    return (
        <div className={classes['task-box']}>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p>{task.priority}</p>
            <div className={classes['buttons-box']}>
                {toDo && (<><button onClick={() => handleChangeStatus('In-Progress')}>In-Progress</button><button onClick={() => handleChangeStatus('Done')}>Done</button></>)}
                {inProgress && (<><button onClick={() => handleChangeStatus('To-Do')}>To-Do</button><button onClick={() => handleChangeStatus('Done')}>Done</button></>)}
                {done && (<><button onClick={() => handleChangeStatus('To-Do')}>To-Do</button><button onClick={() => handleChangeStatus('In-Progress')}>In-Progress</button></>)}
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
}