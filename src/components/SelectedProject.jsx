import { useState } from 'react';

import classes from '../css/SelectedProject.module.css'
import BackButton from './BackButton';
import TaskForm from './TaskForm';
import TaskModal from './TaskModal';

export default function SelectedProject({ project, onBackBtn }) {

    const [tasks, setTasks] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const existingTasks = tasks.length > 0;

    const addTask = (task) => {
        setTasks([...tasks, task])
        setIsModalOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    console.log(tasks)

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
                        <button onClick={openModal}>Add Task</button>
                        <TaskModal isOpen={isModalOpen}>
                            <TaskForm addTask={addTask} onClose={closeModal}/>
                        </TaskModal>
                        {/* <TaskForm addTask={addTask}/> */}
                    </div>
                </div>
            </div>
        </>
    );
}