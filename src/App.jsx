import { useRef, useState } from 'react'
import { Overview } from './components/Overview';
import { Project } from './components/Project';
import { Navbar } from './components/Navbar';
import './App.css'
import { Footer } from './components/Footer';

function App() {
  // Page Handler
  const [show, setShow] = useState(true);
  // Selected project
  const [sel, setSel] = useState(0);
  
  // Smooth scrolling refs
  const homeRef = useRef();
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectRef = useRef();

  return (
      <div className="App">
        <div></div>
        <Navbar show={show} setShow={setShow} homeRef={homeRef} workRef={workRef} aboutRef={aboutRef} contactRef={contactRef} />
        <main>
          <Overview show={show} setShow={setShow} homeRef={homeRef} workRef={workRef} aboutRef={aboutRef} contactRef={contactRef} setSel={setSel} projectRef={projectRef} />
          <Project show={show} setShow={setShow} sel={sel} setSel={setSel} projectRef={projectRef} />
        </main>
        <Footer show={show} homeRef={homeRef} projectRef={projectRef} />
      </div>
    );
}

export default App
