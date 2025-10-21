import ImgPlant from "../assets/mini.png";
import ImgDesignersToolkit from "../assets/designerstoolkit1.png";
import ImgNuclearPanic from "../assets/nuclearpanicmenu.png";

export const ProjectBox = ({nr, show, setShow, setSel, projectRef}) => {
    const data = [{
        id: 0,
        img: ImgDesignersToolkit,
        name: "Designer's Toolkit 2",
        skills: ["React", "JavaScript", "Figma"],
        overview: `My master thesis was about redesign a website created in another university project to investigate how to make it more collaborative. 
                     It was built in JavaScript in the React framework. 
                     The MeteorJS platform was used to create the application and host it. `,
    }, {
        id: 1,
        img: ImgPlant,
        name: "Plant Drone",
        skills: ["UX Design", "Figma", /*"Prototype",*/ "Design Process"],
        overview: `A project design for using a drone as an AR-based plant recognizer. 
                            The project was centered around creating the UI design for a mobile application using a design process.`,        
    }, {
        id: 2,
        img: ImgNuclearPanic,
        name: "Nuclear Panic",
        skills: ["Unity", "C#", "Game Design", "Radiation"],
        overview: `A 2D platform game made in C#, Unity. 
                            The game is designed to teach children about radiation.
                            It was a part of the exhibition at Universeum in Gothenburg for a weekend.`,
    } ];

    function skillList(){
        let str = `${data[nr].skills[0]}`;
        for(let i = 1; i < data[nr].skills.length; i++){
            str += `, ${data[nr].skills[i]}`;
        }
        return str;
    }

    function spanMake(){
        let temp = [];
        let count = 0;
        for(let i = 0; i < data[nr].skills.length; i++){
            if (data[nr].skills[i] == "UX Design"){
                  temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-blue-900/40 text-blue-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "JavaScript"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-purple-900/40 text-purple-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "Figma"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-orange-900/40 text-orange-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "Design Process"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-lime-900/40 text-lime-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "React"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-teal-900/40 text-teal-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "Unity"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-neutral-900/40 text-neutral-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "C#"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-red-900/40 text-red-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "Game Design"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-yellow-900/40 text-yellow-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "Prototype"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-emerald-900/40 text-emerald-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
            else if (data[nr].skills[i] == "Radiation"){
                 temp[count++] = <span key={Math.floor(Math.random()*10000)} className="px-3 py-1 bg-indigo-900/40 text-indigo-400 rounded-full text-sm">{data[nr].skills[i]}</span>;
            }
        }
        return <>
            {temp}
        </>;
    }

  return (
        <div onClick={() => {setShow(false), setSel(data[nr].id), setTimeout(function() {projectRef.current?.scrollIntoView({behavior: 'smooth'})}, 50)}} className="project-card cursor-pointer rounded-xl overflow-hidden shadow-xl bg-gray-800 hover:bg-gray-700">
            <div className="relative">
                <img src={data[nr].img} alt={data[nr].name} className="w-full h-48 object-cover" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">{data[nr].name}</h3>
                        <p className="text-gray-300">{skillList()}</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-400">{data[nr].overview}
                </p>
                <div className="mt-4 flex space-x-2">
                    {spanMake()}
                </div>
            </div>
        </div>
  );
}
