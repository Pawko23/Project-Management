import { useState, useEffect } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectInput from './components/ProjectInput';

function App() {

  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [projects, setProjects] = useState([])

  const addNewProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject])
  }

  useEffect(() => {
    console.log(projects);
}, [projects]);


  return (
    <>
      <main>
        <section className='navbar-container'>
          <Navbar />
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
