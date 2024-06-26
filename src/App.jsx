import { useState, useEffect } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectInput from './components/ProjectInput';

function App() {

  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [projects, setProjects] = useState([])
  const projectsExist = projects.length > 0;

  const addNewProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject])
  }

//   useEffect(() => {
//     console.log(projects);
//     console.log(projects.length, " ", projectsExist)
// }, [projects]);


  return (
    <>
      <main>
        <section className='navbar-container'>
          <Navbar projects={projects} projectsExist={projectsExist}/>
        </section>
        <section className='home-container'>
          {isCreatingProject ? (
            <ProjectInput addNewProject={addNewProject} onCloseProject={() => setIsCreatingProject(false)}/> 
          ) : (
            <Main icon={faListCheck} onCreateProject={() => setIsCreatingProject(true)}/>
          )}
        </section>
      </main>
    </>
  )
}

export default App
