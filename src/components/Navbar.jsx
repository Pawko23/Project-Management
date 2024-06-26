import classes from '../css/Navbar.module.css'

export default function Navbar( { projects } ) {
    return (
        <>
            <nav className={classes.navbar}>
                <h3 className={classes.header}>Your Projects:</h3>
                <ul>
                </ul>
            </nav>
        </>
    );
}