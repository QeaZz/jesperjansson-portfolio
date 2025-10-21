import { Linkedin, GitHub } from 'react-feather';

export const Footer = ({show, homeRef, projectRef}) => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <p className="text-gray-400">Jesper Jansson's Portfolio</p>
            </div>
            <button onClick={() => {(show == 1)
                                    ? setTimeout(function() {homeRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)
                                    :setTimeout(function() {projectRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)}} className="bg-gray-800 hover:text-blue-400 rounded-2xl w-20 h-8 transition-colors">Go Up</button>
            <div className="flex space-x-6">
                <a href="http://github.com/QeaZz">
                    <GitHub className="text-gray-400 hover:text-blue-100 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/jesper-jansson-7822a0257/">
                    <Linkedin className="text-blue-400 hover:text-gray-100 transition-colors" />
                </a>
            </div>
        </div>
    </footer>
  )
}
