 import { Code, Eye, PlayCircle, } from 'react-feather';
 import Jesper  from "../assets/Jesper.jpg";

export const About = ({aboutRef}) => {
  return (
    /* <!-- About Section --> */
    <section itemID="about" className="py-20 px-6" ref={aboutRef}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
                <img src={Jesper} alt="Profile" className="rounded-xl shadow-2xl w-full" />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-300 mb-6">
                    Creative developer and designer that just graduated with a civil engineer degree in computer science with interaction design as my master field. 
                    Passionate about learning and improving as a developer and to create memorable user experiences.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <Code className="text-blue-400 mr-4 mt-1" />
                        <div>
                            <h3 className="font-bold">Front-End Development</h3>
                            <p className="text-gray-400">JavaScript, React, Node.js, C#, and Modern Web Technologies</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Eye className="text-purple-400 mr-4 mt-1" />
                        <div>
                            <h3 className="font-bold">UX Design</h3>
                            <p className="text-gray-400">Figma, Design methods, and Human Centered Design</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <PlayCircle className="text-green-400 mr-4 mt-1" />
                        <div>
                            <h3 className="font-bold">Game Design</h3>
                            <p className="text-gray-400">Unity, Godot, and C#</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
