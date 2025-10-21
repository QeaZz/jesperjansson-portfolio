import { Home } from "./Home";
import "./Overview.css";
import { ProjectBox } from "./ProjectBox";
import { About } from "./About";
import { useRef } from "react";
import { Contact } from "./contact";

export const Overview = ({show, setShow, homeRef, workRef, aboutRef, contactRef, setSel, projectRef}) => {
//console.log(`over ${show}`);

  return (
    // <div className={`overview  ${show ? `` : `hidden`}`}>
    //     <h1>Overview</h1>
    //     <button className="button" onClick={() => setShow(false)}>Change Page</button>
    // </div>
    <div className={`overview  ${show ? `` : `hidden`}`}>
        <Home homeRef={homeRef} workRef={workRef} aboutRef={aboutRef} contactRef={contactRef} />
        <section itemID="work" className="py-20 px-6 bg-gray-900/80 backdrop-blur-sm" ref={workRef}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectBox nr={0} show={show} setShow={setShow} setSel={setSel} projectRef={projectRef} />
              <ProjectBox nr={1} show={show} setShow={setShow} setSel={setSel} projectRef={projectRef} />
              <ProjectBox nr={2} show={show} setShow={setShow} setSel={setSel} projectRef={projectRef} />
            </div>
          </div>
        </section>
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef}/>
        
    </div>

  );
}
