export const Navbar = ({show, setShow, homeRef, workRef, aboutRef, contactRef}) => {
  return (
    <nav className="navbar fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-700/80 backdrop-blur-sm rounded-full px-6 py-3 z-50 shadow-lg">
        <div className="flex items-center justify-center space-x-6">
            <button onClick={() => { setShow(true), setTimeout(function() {homeRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)}} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => { setShow(true), setTimeout(function() {workRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)}} className="hover:text-blue-400 transition-colors">Work</button>
            <button onClick={() => { setShow(true), setTimeout(function() {aboutRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)}} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => { setShow(true), setTimeout(function() {contactRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)}} className="hover:text-blue-400 transition-colors">Contact</button>
        </div>
    </nav>
  )
}
