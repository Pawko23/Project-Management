import classes from '../css/SelectedProject.module.css'
import BackButton from './BackButton';

export default function SelectedProject({ project, onBackBtn }) {
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
            </div>
        </>
    );
}