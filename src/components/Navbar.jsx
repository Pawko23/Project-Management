import classes from '../css/Navbar.module.css'

export default function Navbar( { projects, projectsExist, onProjectSelect } ) {
    return (
        <>
            <nav className={classes.navbar}>
                <h3 className={classes.header}>Your Projects:</h3>
                {projectsExist && (
                    <ul>
                        {projects.map((project) => (
                            <li key={project.title} onClick={() => onProjectSelect(project)}>{project.title}</li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
}