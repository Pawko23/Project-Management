import classes from '../css/BackButton.module.css'

export default function( {onClick} ) {

    return(
        <div className={classes['back-btn-box']}>
            <button onClick={onClick}>Back</button>
        </div>
    );
}