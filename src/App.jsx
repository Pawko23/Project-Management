import { useState } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectInput from './components/ProjectInput';

function App() {

  const [isCreatingProject, setIsCreatingProject] = useState(false);

  return (
    <>
      <main>
        <section className='navbar-container'>
          <Navbar />
        </section>
        <section className='home-container'>
          {isCreatingProject ? (
            <ProjectInput /> 
          ) : (
            <Main icon={faListCheck} onCreateProject={() => setIsCreatingProject(true)}/>
          )}
        </section>
      </main>
    </>
  )
}

export default App
