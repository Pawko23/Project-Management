import { useState, useEffect } from 'react';
import classes from '../css/SelectedProject.module.css'
import BackButton from './BackButton';
import TaskForm from './TaskForm';
import TaskModal from './TaskModal';
import TasksList from './TasksList';

export default function SelectedProject({ project, onBackBtn }) {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem(`tasks-${project.title}`)
        return savedTasks ? JSON.parse(savedTasks) : []
    })
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        localStorage.setItem(`tasks-${project.title}`, JSON.stringify(tasks));
    }, [tasks, project.title]);

    const addTask = (task) => {
        setTasks([...tasks, task])
        setIsModalOpen(false);
    }

    const statusChange = (taskId, newStatus) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === taskId) {
                return {...task, status: newStatus}
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    const taskDelete = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
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
                        <button onClick={openModal}>Add Task</button>
                        <TaskModal isOpen={isModalOpen}>
                            <TaskForm addTask={addTask} onClose={closeModal} />
                        </TaskModal>
                        <div className={classes['lists-container']}>
                            <div className={classes['todo-list']}>
                                <h3>To-Do</h3>
                                <TasksList tasks={tasks} status='To-Do' statusChange={statusChange} onDelete={taskDelete} />
                            </div>
                            <div className={classes['inprogress-list']}>
                                <h3>In-Progress</h3>
                                <TasksList tasks={tasks} status='In-Progress' statusChange={statusChange} onDelete={taskDelete}/>
                            </div>
                            <div className={classes['done-list']}>
                                <h3>Done</h3>
                                <TasksList tasks={tasks} status='Done' statusChange={statusChange} onDelete={taskDelete}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}