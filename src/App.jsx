import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import ReactLogo from "../src/assets/react.png";
import HBImg from "../src/assets/happy_buddy.png";
import HtmlLL from "../src/assets/html_ll.png";
import JsxLogo from "../src/assets/jsxLogo.jpg";
import jsxCEx1 from "../src/assets/jsxCodeEx1.png";
import stCodeEx1 from "../src/assets/statesCodeEx1.png";
import stCodeEx2 from "../src/assets/statesCodeEx2.png";
import compEx1 from "../src/assets/componentE1.png";
import compEx2 from "../src/assets/componentE2.png";
import RHooks from "../src/assets/react-hooks.jpg";
import MindMap from "../src/assets/Mind_map.png";
import StatesIll from "../src/assets/states_ill.png";
import ReadingBook from "../src/assets/reading_book.png";
import DeployG from "../src/assets/deployg.png";


function App() {

  const timer = ms => new Promise(res => setTimeout(res, ms));

  const [currS, setCurrS] = useState(1);

  const highN = 8;

  function retId(idn) {
    return document.getElementById(idn);
  }

  async function butClicked(idname) {
    var cS = currS;
    retId(idname).classList.add("buttAnimC");
    if (idname == "rId") {
      retId("s" + cS).classList.add("chupSlide");
      retId("s" + cS).classList.remove("goRS");
      cS = cS + 1;
      retId("s" + cS).classList.add("goRS");
      setCurrS(cS);

    }
    else {

      retId("s" + cS).classList.remove("goRS");
      retId("s" + cS).classList.remove("goLS");
      cS = cS - 1;
      retId("s" + cS).classList.remove("chupSlide");
      retId("s" + cS).classList.add("goLS");
      setCurrS(cS);
    }
    await timer(500);
    retId(idname).classList.remove("buttAnimC");
    // retId("s1").classList.remove("activeSlide");


  }

  // const [state, setState] = useState(0);
  // setState(1);

  // return(
  //   <>
  //     <h1>Count: {state}</h1>
  //   </>
  // )

  // function GreetMe(props) {
  //   return (
  //     <>
  //       <h1>Hey {props.name}!</h1>
  //       <h1>How are you doing?</h1>
  //     </>

  //   )
  // }

  // function App(){
  //   return(
  //     <GreetMe name="Yash" />
  //   )
  // }

  return (
    <>
      <div className="fullbg">
        <div className="allSlides">

          <div id="s1" className={currS === 1 ? "divf fdirc slide goRS slide1" : "divf fdirc slide slide1"}>
            <div className="divf sNum">1</div>
            <img src={ReactLogo} className="react" />
            <div className="divf mainC">
              <img src={HBImg} />
              <p className="head1">What is <span>React ?</span></p>

            </div>
          </div>

          <div id="s2" className="divf fdirc slide slide2">
            <div className="divf sNum">2</div>
            <div className="divf mainC2">
              <p>React is nothing but</p>
              <img src={HtmlLL} />
              <p>?</p>
            </div>

          </div>
          <div id="s3" className="divf fdirc slide slide3 ">
            <div className="divf sNum">3</div>
            <img src={JsxLogo} className="jsxLogo" />
            <div className="divf mainC3">
              {/* <p>React is nothing but</p> */}
              <div className="aboutJSX">
                <p className="jsxIs">JSX</p>
                <ul>
                  <li>Represents Objects</li>
                  <li>Represents Expressions</li>
                  <li>Wraps up HTML Code inside a function</li>
                  <li>Makes code efficient & smaller</li>
                </ul>
              </div>
              <img src={jsxCEx1} className="jsxEx1" />

              {/* <p>?</p> */}
            </div>
            {/* <h1>Slide 3</h1> */}
          </div>
          <div id="s4" className="divf fdirc slide slide4">
            <div className="divf sNum">4</div>
            <div className="divf fdirc mainC4">
              <p className="head4">States in Reactjs</p>
              <div className="divf">
                <img src={StatesIll} />
              </div>
              <div className="divf fdirc" style={{ height: "100%", gap: "2rem" }}>
                <p className="desc4">In ReactJS, "state" refers to an internal data storage system that allows components to keep track of their own data. It represents the information that a component can maintain and manage during its lifecycle.</p>


                <div className="divf stImgs">
                  <img src={stCodeEx1} className="stateEx1" />
                  <img src={stCodeEx2} className="stateEx1" />
                </div>
              </div>
            </div>
          </div>
          <div id="s5" className="divf fdirc slide slide5">
            <div className="divf sNum">5</div>
            <div className="divf fdirc mainC4 mainC5">
              <p className="head4">Components in Reactjs</p>
              <div className="divf fdirc" style={{ height: "100%", gap: "1rem" }}>
                <p className="desc4">In ReactJS, a "component" is a reusable, modular building block that encapsulates a piece of the user interface and its behavior. Components are the fundamental units of a React application, allowing developers to break down the UI into smaller, manageable, and reusable parts.</p>
                <p className="desc4 desc5">Naming Convention: First letter should be Capital</p>

                <div className="divf stImgs">
                  <img src={compEx1} className="compEx1" />
                  <img src={compEx2} className="compEx1" />
                </div>
              </div>
            </div>
          </div>
          <div id="s6" className="divf fdirc slide slide6">
            <div className="divf sNum">6</div>
            <div className="divf fdirc mainC4 mainC5">
              <p className="head4">Hooks in Reactjs</p>
              <div className="divf">
                <img src={ReadingBook} className="readB1" />
              </div>
              <div className="divf fdirc" style={{ height: "100%", gap: "3rem" }}>
                {/* <img src={RHooks} className="stEx1" /> */}
                <p className="desc4">Hooks provide a way to reuse stateful logic across multiple components without the need for class components. They enable functional components to manage local component state, perform side effects, and tap into React's lifecycle features.</p>


                <div className="divf" style={{ gap: "10rem" }}>
                  <p className="useC1">useEffect</p>
                  <p className="useC1">useContext</p>
                </div>
              </div>
            </div>
          </div>
          <div id="s7" className="divf fdirc slide slide7">
            <div className="divf sNum">7</div>
            <div className="divf fdirc mainC4 mainC7">
              <p className="head4">Routing in Reactjs</p>
              <div className="divf" style={{ height: "100%" }}>
                <div className="divf fdirc" style={{ height: "100%", gap: "3rem" }}>
                  {/* <img src={RHooks} className="stEx1" /> */}
                  <p className="desc4">Routing in ReactJS involves managing the navigation and rendering of different components based on the URL or user actions</p>
                  <p className="desc4 desc5">You can route through different pages without making the web page load everytime. One of the popular one is the: "react-router-dom" library!</p>
                </div>
                <img src={MindMap} style={{ height: "20rem" }} />
              </div>

            </div>
          </div>
          <div id="s8" className="divf fdirc slide slide8">
            <div className="divf sNum">8</div>
            <div className="divf fdirc mainC4 mainC8">
              <p className="head4">Deploy in Github</p>
              <div className="divf" style={{ height: "100%" }}>
                {/* <div className="divf fdirc" style={{ height: "100%", gap: "3rem" }}>
                  <div className="desc4">Routing in ReactJS involves managing the navigation and rendering of different components based on the URL or user actions</div>
                  <p className="desc4 desc5">You can route through different pages without making the web page load everytime. One of the popular one is the: "react-router-dom" library!</p>
                </div> */}
                <img src={DeployG} style={{ height: "18rem", border: "0.13rem solid black" }} />
              </div>

            </div>
          </div>
        </div>
        <div className="divf allButs">
          {currS === 1 ?
            <button id="lId" disabled onClick={(e) => { butClicked("lId") }}><FontAwesomeIcon icon={faArrowLeft} /></button>
            : <button id="lId" onClick={(e) => { butClicked("lId") }}><FontAwesomeIcon icon={faArrowLeft} /></button>
          }
          {currS === highN ?
            <button id="rId" disabled onClick={(e) => { butClicked("rId") }}><FontAwesomeIcon icon={faArrowRight} /></button>
            : <button id="rId" onClick={(e) => { butClicked("rId") }}><FontAwesomeIcon icon={faArrowRight} /></button>
          }
          {/* <button id="rId" onClick={(e) => { butClicked("rId") }}><FontAwesomeIcon icon={faArrowRight} /></button> */}
        </div>
      </div>

      {/* <h1>Hello</h1> */}
    </>
  )
}

export default App
