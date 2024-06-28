import classes from '../css/Task.module.css'

export default function Task( {task} ) {
    return (
        <div className={classes['task-box']}>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p>{task.priority}</p>
            <div className={classes['buttons-box']}>
                {task.status === 'To-Do' && (
                    <>
                        <button>In-Progress</button>
                        <button>Done</button>
                    </>
                    )
                }
            </div>
        </div>
    );
}