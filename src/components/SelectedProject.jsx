import { useState } from 'react';

import classes from '../css/SelectedProject.module.css'
import BackButton from './BackButton';

export default function SelectedProject({ project, onBackBtn }) {

    const [tasks, setTasks] = useState([])
    const existingTasks = tasks.length > 0;

    const addTask = () => {
        const newTask = {
            taskName: '',
            priority: '',
            status: ''
        }
    }


    return (
        <>
            <BackButton onClick={onBackBtn} />
            <div className={classes['content-container']}>
                <div className={classes['content-box']}>
                    <div className={classes['header-box']}>
                        <div className={classes.header}><h1>{project.title}</h1></div>
                        <div className={classes.btn}><button>Delete</button></div>
                    </div>
                    <div className={classes['project-details']}>
                        <p>Due: {project.date}</p>
                        <p>{project.description}</p>
                    </div>
                    <hr></hr>
                    <div className={classes['tasks-container']}>
                        <h3>Tasks</h3>
                        <div className={classes['add-box']}>
                            <div className={classes['task-input']}>
                                <div className={classes['input-box']}>
                                    <label htmlFor='task-name'>Task name</label>
                                    <input type="text" id='task-name'></input>
                                </div>
                                <div className={classes['input-box']}>
                                    <label htmlFor='task-priority'>Task priority</label>
                                    <input type="text" id='task-priority'></input>
                                </div>
                                <div className={classes['input-box']}>
                                    <label htmlFor='task-status'>Task status</label>
                                    <input type="text" id='task-status'></input>
                                </div>
                                <button>Add task</button>
                            </div>
                            {!existingTasks && <p>This project does not have any tasks yet.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}