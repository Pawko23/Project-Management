import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectModal from './ProjectModal';
import classes from '../css/Main.module.css'

export default function Main({ icon, onCreateProject }) {
    return(
        <>
            {/* <ProjectModal /> */}
            <div className={classes['main-box']}>
                <FontAwesomeIcon icon={icon} className={classes.icon}/>
                <h3>No selected project</h3>
                <button className={classes['create-btn']} onClick={onCreateProject}>Create new project</button>
            </div>
        </>
    );
}