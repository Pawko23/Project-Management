import { createPortal } from 'react-dom';
import classes from '../css/TaskModal.module.css'

export default function TaskModal( { children, isOpen} ) {

    if(!isOpen) return null;

    return createPortal(
        <div className={classes['modal-overlay']}>
            <div className={'modal-content'}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}