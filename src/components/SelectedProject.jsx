import classes from '../css/SelectedProject.module.css'
import BackButton from './BackButton';

export default function SelectedProject( { project, onBackBtn } ) {
    return (
        <>
            <BackButton onClick={onBackBtn}/>
            <div className={classes['content-container']}>
                <div className={classes.header}>
                    <h1>{project.title} TITLE</h1>
                    <button>Delete</button>
                </div>
                <div className={classes['project-details']}>
                    <p>{project.date} DATE</p>
                    <p>{project.description} DESCR</p>
                </div>
                <hr></hr>
                <div className={classes['tasks-container']}>
                    <div className={classes['add-box']}>
                        <h3>Tasks</h3>
                        <div className={classes['task-input']}>
                            <input type="text"></input>
                            <button>Add Task</button>
                        </div>
                        <p>This project does not have any tasks yet.</p>
                    </div>
                </div>
            </div>
        </>
    );    
}