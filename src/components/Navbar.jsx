import classes from '../css/Navbar.module.css'

export default function Navbar( { projects, projectsExist, onProjectSelect, selectedProject } ) {
    return (
        <>
            <nav className={classes.navbar}>
                <h3 className={classes.header}>Your Projects:</h3>
                {projectsExist && (
                    <ul>
                        {projects.map((project) => (
                            <li key={project.title} onClick={() => onProjectSelect(project)} className={project.title === selectedProject.title ? classes.active : ''}>{project.title}</li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
}