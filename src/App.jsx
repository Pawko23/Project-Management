import { useState, useEffect } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectInput from './components/ProjectInput';
import SelectedProject from './components/SelectedProject';

function App() {

  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: '',
    description: '',
    date: '',
  });
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [projects, setProjects] = useState([]);
  const projectsExist = projects.length > 0;

  const addNewProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject])
    setIsCreatingProject(false);
  }

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsProjectSelected(true);
  }

  const isProjectSelectedValid = (project) => {
    return Object.values(project).every(value => value.trim() !== '');
  };

  return (
    <>
      <main>
        <section className='navbar-container'>
          <Navbar projects={projects} projectsExist={projectsExist} onProjectSelect={handleProjectSelect} />
        </section>
        <section className='home-container'>
          {isCreatingProject ? (
            <ProjectInput addNewProject={addNewProject} onCloseProject={() => setIsCreatingProject(false)} />
          ) : isProjectSelected && isProjectSelectedValid(selectedProject) ? (
            <SelectedProject project={selectedProject} onBackBtn={() => setIsProjectSelected(false)}/>
          ) : (
            <Main icon={faListCheck} onCreateProject={() => setIsCreatingProject(true)} />
          )}
        </section>
      </main>
    </>
  )
}

export default App
