import classes from '../css/ProjectInput.module.css'

export default function ProjectInput() {
    return(
        <div className={classes['input-container']}>
            <form>
                <div className={classes['input-box']}>
                    <label for='title-input'>Title</label>
                    <input type='text' id='title-input' className={classes['title-input']} required placeholder='Project title'/>
                </div>

                <div className={classes['input-box']}>
                    <label for='project-description'>Description</label>
                    <textarea id='project-description' className={classes['project-description']} required placeholder='Enter description of a project'/>
                </div>

                <div className={classes['input-box']}>
                    <label for="date-input">Date</label>
                    <input type="date" id="date-input" className={classes['date-input']} required/>
                
                    <div className={classes['input-buttons']}>
                        <button type="submit" className={classes['save-btn']}>Save</button>
                        <button type="button" className={classes['cancel-btn']}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}