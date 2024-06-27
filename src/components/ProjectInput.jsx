import { useState, useRef } from 'react';

import classes from '../css/ProjectInput.module.css'
import BackButton from './BackButton';

export default function ProjectInput({ addNewProject, onCloseProject }) {

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);

    const handleAddProject = (e) => {
        e.preventDefault();
        const newProject = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value
        }
        addNewProject(newProject)
        onCloseProject()
    }

    return (
        <>  
            <BackButton onClick={onCloseProject}/>
            <div className={classes['input-container']}>
                <form onSubmit={handleAddProject}>
                    <div className={classes['input-box']}>
                        <label htmlFor='title-input'>Title</label>
                        <input type='text' ref={titleRef} id='title-input' className={classes['title-input']} required placeholder='Project title' />
                    </div>

                    <div className={classes['input-box']}>
                        <label htmlFor='project-description'>Description</label>
                        <textarea ref={descriptionRef} id='project-description' className={classes['project-description']} required placeholder='Enter description of a project' />
                    </div>

                    <div className={classes['input-box']}>
                        <label htmlFor="date-input">Due Date</label>
                        <input type="date" ref={dateRef} id="date-input" className={classes['date-input']} required />

                        <div className={classes['input-buttons']}>
                            <button type="submit" className={classes['save-btn']}>Save</button>
                            <button type="button" className={classes['cancel-btn']} onClick={onCloseProject}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}