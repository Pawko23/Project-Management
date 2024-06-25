import Navbar from './components/Navbar'
import Main from './components/Main'

import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <main>
        <section className='navbar-container'>
          <Navbar />
        </section>
        <section className='home-container'>
          <Main icon={faListCheck}/>
        </section>
      </main>
    </>
  )
}

export default App
