import "./Project.css";
import ImgDesignersToolkit1 from "../assets/designerstoolkit1.png";
import ImgDesignersToolkit2 from "../assets/DTHomePage.png";
import ImgDesignersToolkit3 from "../assets/DTCreateTeam.png";
import ImgDesignersToolkit4 from "../assets/DTCreateProject.png";
import ImgDesignersToolkit5 from "../assets/DTSprintPlan.png";
import ImgDesignersToolkit6 from "../assets/DTOverview.png";
import ImgDesignersToolkit7 from "../assets/react_result.png";
import ImgDesignersToolkit8 from "../assets/DTLitterature.png";
import ImgDesignersToolkit9 from "../assets/DTTripleDiamond.png";
import ImgDesignersToolkit10 from "../assets/DTDesignProcess.png";
import ImgDesignersToolkit11 from "../assets/DTPersona1.png";
import ImgDesignersToolkit12 from "../assets/DTPersona2.png";
import ImgDesignersToolkit13 from "../assets/DTIdeaCollab.png";
import ImgDesignersToolkit14 from "../assets/DTHmw.png";
import ImgDesignersToolkit15 from "../assets/DTSwot.png";
import ImgDesignersToolkit16 from "../assets/DTAssumption.png";
import ImgDesignersToolkit17 from "../assets/DTSms.png";
import ImgDesignersToolkit18 from "../assets/DTBootNote.png";
import ImgDesignersToolkit19 from "../assets/DTPaperSketch.jpeg";
import ImgDesignersToolkit20 from "../assets/figma_prototype.png";
import ImgDesignersToolkit21 from "../assets/DTFigma2.png";
import ImgDesignersToolkit22 from "../assets/DTFigma3.png";
import ImgDesignersToolkit23 from "../assets/DTFigma4.png";
import ImgDesignersToolkit24 from "../assets/DTQuestionaire.png";
import ImgDesignersToolkit25 from "../assets/DTQuestionaire2.png";
import ImgDesignersToolkit26 from "../assets/DTRes1.png";
import ImgDesignersToolkit27 from "../assets/DTRes2.png";
import ImgDesignersToolkit28 from "../assets/DTRes3.png";

import ImgPlant1 from "../assets/IRL.jpg";
import ImgPlant2 from "../assets/DroneinAir.jpg";
import ImgPlant3 from "../assets/competitoranalysiis.png";
import ImgPlant4 from "../assets/Log_in.png";
import ImgPlant5 from "../assets/Connect.png";
import ImgPlant6 from "../assets/PlantRecognition.png";
import ImgPlant7 from "../assets/PlantRecognition2.png";
import ImgPlant8 from "../assets/Overview.png";
import ImgPlant9 from "../assets/PlantJournal.png";
import ImgPlant10 from "../assets/Others.png";
import ImgPlant11 from "../assets/StoryBoard.png";
import ImgPlant12 from "../assets/mini.png";
import ImgPlant13 from "../assets/med.png";
import ImgPlant14 from "../assets/hot.jpg";
import ImgPlant15 from "../assets/choices.png";
import ImgPlant16 from "../assets/playful.png";
import ImgPlant17 from "../assets/plantdrone.png";
import ImgPlant18 from "../assets/wireflow.png";
import ImgPlant19 from "../assets/DesignSystem.png";
import ImgPlant20 from "../assets/Logo.png";


import ImgNuclearPanic1 from "../assets/nuclearpanicmenu.png";
import ImgNuclearPanic2 from "../assets/NPIntro.png";
import ImgNuclearPanic3 from "../assets/NPInstructions.png";
import ImgNuclearPanic4 from "../assets/NPGlasses.png";
import ImgNuclearPanic5 from "../assets/NPAlphaDamage.png";
import ImgNuclearPanic6 from "../assets/NPJump.png";
import ImgNuclearPanic7 from "../assets/NPGameOver.png";

export const Project = ({show, setShow, sel, setSel, projectRef}) => {
    
  const data = [{
          id: 0,
          img: [ImgDesignersToolkit1, ImgDesignersToolkit2, ImgDesignersToolkit3, ImgDesignersToolkit4, ImgDesignersToolkit5, ImgDesignersToolkit6, ImgDesignersToolkit7, ImgDesignersToolkit8, ImgDesignersToolkit9, ImgDesignersToolkit10, ImgDesignersToolkit11, ImgDesignersToolkit12, ImgDesignersToolkit13, ImgDesignersToolkit14, ImgDesignersToolkit15, ImgDesignersToolkit16, ImgDesignersToolkit17, ImgDesignersToolkit18, ImgDesignersToolkit19, ImgDesignersToolkit20, ImgDesignersToolkit21, ImgDesignersToolkit22, ImgDesignersToolkit23, ImgDesignersToolkit24, ImgDesignersToolkit25, ImgDesignersToolkit26, ImgDesignersToolkit27, ImgDesignersToolkit28],
          order: ["img", "img", "img", "img", "img", "img", "img",
                  "txt", "img", 
                  "txt", "img", "img", 
                  "txt", "img", "img", "img", "img", "img", "img", "img", "img", "img",
                  "txt", "img", "img", "img", "img",
                  "txt", "img", "img",
                  "txt", "img", "img", "img"
                ],
          name: "Designer's Toolkit 2",
          intro: `My master thesis was about redesign a web application created in another university project, to investigate how to make it more collaborative. 
                     It was built in JavaScript in the React framework. 
                     The MeteorJS platform was used to create the application and host it. 
                     This and overview of the process with some of the results. Directly under you will find the final UI results.`,
          text: [`Before starting with the design process, thorough research on the topic was made. 
                     This shows the literature map we created with the most relevant literature we found before starting the design process.`,
                  `During the project we followed the triple diamond design process. 
                     Methods was carefully picked out to facilitate the design process and our goals. 
                     A map of where the design methods chosen took place in the process can be seen two pictures under.`,
                  `During the first haft of the design process, multiple methods were used. 
                     Some with better results than others. 
                     Under you can have an overview of how some of the methods used looked like.`,
                  `After collection feedback from literature, users from different methods, we came up with a design in Figma. 
                     This design was made to improve the concept of collaboration within the application and the focus was not to make it look as good as possible.
                     Under is the final Figma sketches that was created.`,
                  `With the design ready in Figma, we tested it out on users and got feedback through observation and a questionnaire.
                     During the early iterations we redesgined the collaborative parts.
                     But for the final design we tweeked a little in production to make it slightly more userfriendly from the results user testing.`,
                  `To finish of I wanted to show the final result in the form of the graphs we got from our hedonic vs pragmatic evalutaion. 
                     The result also included 8 guidelines. 
                     If you are interested in these, you can find them in the offical thesis report.
                     This is findable on Google Scholar: Designer's Toolkit 2 by Jesper Jansson And Ibrahim Naboulsi.`]
      }, {
          id: 1,
          img: [ImgPlant1, ImgPlant2, ImgPlant3, ImgPlant4, ImgPlant5, ImgPlant6, ImgPlant7, ImgPlant8, ImgPlant9, ImgPlant10, ImgPlant11, ImgPlant12, ImgPlant13, ImgPlant14, ImgPlant15, ImgPlant16, ImgPlant17, ImgPlant18, ImgPlant19, ImgPlant20],
          order: ["txt", "img",
                  "txt", "img",
                  "txt", "img",
                  "txt", "img", "img", "img", "img", "img", "img", "img", "img",
                  "txt", "img", "img", "img",
                  "txt", "img", "img", "img",
                  "txt", "img", "img",
                  "txt", "txt", "img"
                ],
          name: "Plant Drone",
          intro: `A project design for using a drone as an AR-based plant recognizer. 
                     The project was centered around creating the concept and UX/UI-Design for a mobile application using a design process.`,  
          text: [`This project aimed to fulfill the need of information assistance in gardens for medium-large sized private gardens and gardens shops. 
                    It helps the user to understand the needs of their garden and learn from it. 
                    The application is supposed to be the bridge before hiring a gardener.`,
                  `We made 3 interviews with people who had some sort of connection with gardening.
                    With the result of these interviews we could confirm that there is a need for the
                    project and thus justified to continue exploring. The interviews also gave us new ideas in what
                    to do in order to be successful.`,
                  `A competitor analysis was made on 3 other plant recognition applications. 
                    We found out about certain functionalities and could deside on what was most desirable for our own application. 
                    We also confirmed that there was a gap in the market for our application and that our idea was unique and never done before.`,
                  `Here you can see the final prototypes of the project as well as a story board.`,
                  `In the early part of the design process we developed three different ideas that all had the same concept and shared the same goal. 
                    The ​goal was to provide a tool that was supposed to give the user all the necessary information about how to best take care of their plants and flowers. 
                    They would also be provided with additional information about the plant in order to understand and learn about it. 
                    The idea was that it in the end would hopefully allow inexperienced people to feel more comfortable with bringing home a plant and take care of it. 
                    Studies have shown that taking care of a plant have positive mental health effects. 
                    Thus, if we can inspire more people to get their own plants, we can increase the happiness among users.`,
                  `We desided to move on with only two ideas. 
                    The idea we desided to drop was the Minimalistic Plant Recognizer as it was the least advanced and least creative one, out of the three. 
                    We were also more interested in how the other two would turn out after some more work.`,
                  `We came to the decision that even if the Prototype 2 was harder to implement and more time consuming, it would be worth it as is will become a cooler end product.
                    You can now see the wireflow and design system of the final prototype.`,
                  `To start with, have we accomplished what we wanted to? 
                    I would say that we have, we have created an application that fulfills our initial goals of providing a tool that is supposed to give the user all the necessary information about how to best take care of their plants and flowers. 
                    And that they will also be provided with additional information about the plant in order to understand and learn about it. 
                    We have used design methods to find out what users wants as well as to come up with a design that is consistent.`,
                  `Of course there are room for inprovement, especially in the design of the application itself. 
                    The final design of the app was made in a short amount of time and could be improved. 
                    Although, it serves its purpose and is not too complicated to interacted with. `]      
      }, { 
          id: 2,
          img: [ImgNuclearPanic1, ImgNuclearPanic2, ImgNuclearPanic3, ImgNuclearPanic4, ImgNuclearPanic5, ImgNuclearPanic6, ImgNuclearPanic7],
          order: ["img",
                  "txt", "txt",
                  "txt", "img", "img", "img", "img", "img", "img",
          ],
          name: "Nuclear Panic",
          intro: `A 2D platform game made in C#, Unity. 
                     The game is designed to teach children about radiation.
                     It was a part of the exhibition at Universeum in Gothenburg for a weekend.`,
          text: [`Nuclear panic is a 2D endless runner scrolling platformer video game. In Nuclear Panic, 
                    players take control of a worker at a nuclear plant where a nuclear meltdown just occurred,
                    which produced radioactive emissions. 
                    The character flees from this powerful, and lethal, source of radiation (Alpha radiation), 
                    while players have to avoid obstacles and hazardous elements, 
                    such as other kinds of radiation (Beta and Gamma), by jumping, or deciding not to jump, depending on each case`,
                 `Players will encounter 3 types of radiation throughout their escape, Alpha, Beta, and Gamma. 
                    Since radiation is invisible to human senses, the avatar has to put on a special pair of glasses which make radiation visible, 
                    at the cost of reducing their own eyesight of the surrounding environment, thereby showing the invisible. 
                    Moreover, non-hazardous obstacles will be placed around the level that slow down the character and makes them be closer to the source of Alpha radiation which pursues the players at all times.`,
                  `Finally, the goal of the game is to survive as much as possible to all these hazards, avoiding the worker’s radiation personal levels to reach 10 Sv.
                   The longer players survive, the better score they will get. 
                   Parallel to the goal of the game, is the goal of the project, 
                   which aims to teach the children about some elements directly related to nuclear physics and its consequences in human’s health.`
          ]
      } ];

  // Loop throw text, images and videos in selected project
  function contentLoop(){
    let content = [];
    let nextImgOrder = 0;
    let nextTxtOrder = 0;
    let pushIndex = 0;

    // Video for Plant Project
    if(sel == 1){
      content[0] = data[sel].id == 1 ? <iframe className="mb-20 aspect-video " src='https://www.youtube.com/embed/PbUxcpzotgM?mute=0&amp;showinfo=0&amp;controls=0&amp;start=0' key={Math.floor(Math.random() * 100000)} allow='autoplay; encrypted-media' allowFullScreen title='video'></iframe> : <></>
      pushIndex++;
    }
    if(sel == 2){
      content[0] = <p className="text-center max-w-6xl md:text-2xl mb-2" key={Math.floor(Math.random() * 100000)}>The game is available for download on Google Play Store</p>;
      pushIndex++;
      content[1] = <a href="https://play.google.com/store/apps/details?id=com.UniversityofGothenburg.NuclearPanic" className="text-center md:text-4xl mb-16 text-red-400" key={Math.floor(Math.random() * 100000)}>HERE</a>;
      pushIndex++;
    }

    // Text and Images
    for(let i = 0; i < data[sel].order.length; i++){
      if(data[sel].order[i] == "img"){
        content[i+pushIndex] = <img src={data[sel].img[nextImgOrder++]} className="w-full rounded-xl mb-20" key={Math.floor(Math.random() * 100000)}/>;
      } 
      else if(data[sel].order[i] == "txt"){
        content[i+pushIndex] = <p className="text-center max-w-6xl md:text-2xl mb-16" key={Math.floor(Math.random() * 100000)}> {data[sel].text[nextTxtOrder++]} </p>;
      }
    }
    return <>
      {content}
    </>;
  }

  function createPage(){
      return <>
         <section itemID="project" className="mt-20 flex items-center justify-center px-6" ref={projectRef}>
          <div className="flex flex-col justify-between items-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              {data[sel].name}
            </h1>
              <p className="text-center max-w-6xl md:text-2xl mb-16">{data[sel].intro}</p>
              {contentLoop()}
          </div>
         </section>
      </>
    }
  return (
    <div className={`project  ${show ? `hidden` : ``}`}>
              {createPage()}
    </div>
  )
}
