import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from '../css/Main.module.css'

export default function Main({ icon }) {
    return(
        <>
            <div className={classes['main-box']}>
                <FontAwesomeIcon icon={icon} className={classes.icon}/>
                <h3>No project selected</h3>
                <button className={classes['create-btn']}>Create new project</button>
            </div>
        </>
    );
}