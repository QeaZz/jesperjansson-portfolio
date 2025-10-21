
export const  Home = ({homeRef, workRef, aboutRef, contactRef}) => {

  return (
    <div ref={homeRef}>
        <section itemID="home" className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    <span className="text-gradient_2">Jesper </span> <span className="text-gradient">Jansson</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-2">
                    UX Designer & Front-End Developer
                </p>
                <p className="text-xl md:text-2xl text-gray-300 mb-12">
                    Civil Engineer
                </p>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => {workRef.current?.scrollIntoView({behavior: 'smooth'})}} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors">
                        View My Work
                    </button>
                    <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'})}} className="px-8 py-3 bg-transparent border border-blue-600 hover:bg-blue-600/20 rounded-full font-medium transition-colors">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}
