import { Code, Eye, PlayCircle, Linkedin, GitHub } from 'react-feather';

export const Contact = ({contactRef}) => {
  return (
    <section className="contact py-20 px-6 bg-gray-800/50 backdrop-blur-sm" itemID="contact" ref={contactRef}>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/2" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Me</h2>
                <p className="text-gray-300 mb-6 text-center">
                    If you think my background sounds interesting. Or if you have any questions. Feel free to reach out to me through any of the platforms under.
                    <br /><br />
                    Looking forward to hearing more from you!
                </p>
                <div className="space-y-4 mb-6">
                    <div className="flex items-start ">
                        <a href="http://github.com/QeaZz">
                            <GitHub className="text-gray-400 hover:text-blue-100 transition-colors mr-4 mt-1 ml-80" />
                        </a>
                        <a href="https://www.linkedin.com/in/jesper-jansson-7822a0257/">
                            <Linkedin  className="text-blue-400 hover:text-blue-100 transition-colors mr-4 mt-1" />
                        </a>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex">
                        <p className="text-gray-300 mb-6 ml-60 text-center font-bold">
                            Or write me at
                            <br />
                            jesperjansson11@hotmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
