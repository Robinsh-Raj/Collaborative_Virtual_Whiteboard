import React, { useState, useEffect } from "react";
import logo from "./whiteboard.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import map from "./map5.jpg";
import VirtualWhiteboard from "../container/VirtualWhiteboard";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../container/Container";
import DrawingBoard from "../container/DrawingBoard";;


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showWhiteBoard,setShowWhiteBoard]=useState(false);
  
  const navigate=useNavigate();

  const handleButtonClick = (buttonId) => {
    if(buttonId===3)
    {
      navigate("/Container");
    }
    else
    {
      setActiveButton(buttonId === activeButton ? null : buttonId);
    }
  };
  // const handleButtonClick = () => {
  //   setIsContentVisible(!isContentVisible);
  // };
  // const handleButton2Click = () => {
  //   setIsContentVisible(!isContentVisible);
  // };
  // const handleLogin = () => {
  //   if (username === "Project" && password === "password") {
  //     setLoggedIn(true);
  //   } else {
  //     alert("Wrong credentials. Please try again.");
  //   }
  // };
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isloggedIn") === "true";
    const savedUsername = localStorage.getItem("username");
    if (isUserLoggedIn && savedUsername) {
      setLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Project" && password === "password") {
      setLoggedIn(true);
      localStorage.setItem('isloggedIn', 'true');
      localStorage.setItem('username', username);
    } else {
      alert("Wrong credentials. Please try again.");
    }
  }
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isloggedIn'); 
    // localStorage.removeItem('username'); 
  };

  return (
    <div className="whiteboard-container">
      {loggedIn ? (
        <>
          <div className="dashboard ">
            {/* <FontAwesomeIcon icon={faxmark} /> */}
            {/* <p>Welcome, {username}!</p> */}
            <div className="logo ">
              <div className="logo-icon">
                <FontAwesomeIcon icon={faChalkboard} />
              </div>
              <div className="logo-title"> WHITEBOARD </div>
            </div>
            <div className=" btn-fmly">
              <button onClick={() => handleButtonClick(1)}>HOME</button>
              <button onClick={() => handleButtonClick(2)}>
                {isContentVisible ? "FEATURES" : "FEATURES"}
              </button>

              <button onClick={() => handleButtonClick(3)}>WHITEBOARD</button>
              <button onClick={() => handleButtonClick(4)}>FAQ</button>

              <button onClick={() => setLoggedIn(false)}>LOGOUT</button>
            </div>
          </div>
          <div className="whiteboard-Incontainer"></div>
          {/* <div>
            <img src={logo} />
          </div> */}
          {/* <button onClick={() => setLoggedIn(false)}>Logout</button> */}

          {activeButton === 1 && (
            <div>
              <div>
              <h2 className="container-header">HOME  </h2>
              </div>
              <div className="container-ques ">
                <h4>Virtual online whiteboard with team collaboration</h4>
              </div>
              <div className="container-ans ">
                <p>
                  Whiteboard is a lightweight whiteboard website which works on
                  any device: laptops, tablets, mobile devices – optimized for
                  the Google Chrome on laptops.
                </p>
                <button onClick={() => handleButtonClick(3)}>START DRAWING NOW</button>
                <p>
                  Our service is designed for successful realtime tutoring. We
                  understand the importance of a clean and easy to use interface
                  to best serve both teachers and students of all ages. By
                  design, this lightweight yet powerful visual platform aims to
                  provide a simple tool for distance education. Using such a
                  platform you have infinite space to work on with your student
                  or class in realtime.
                </p>
              </div>
              <div className="">
                <div className="container-ques ">
                  <h4>Live Teamwork on Online Whiteboard</h4>
                </div>
                <div className="live-container ">
                  <div className="container-ans ">
                    <p>
                      Collaborate in real time, wherever you are around the
                      world, bring your team together on the same whiteboard
                      whatever device you use.
                    </p>{" "}
                    <p>
                      Design any workflow, wireframe or prototype, Ziteboard
                      offers an infinite workplace for seeing the big picture.
                    </p>{" "}
                    <p>
                      Boost any meeting, brainstorm, presentation, tutoring or
                      training session.
                    </p>
                    <p>
                      Ziteboard is a visual collaboration platform improving the
                      work for most remote teams, developers, designers and
                      making meetings, project planning and customer
                      communication better.
                    </p>
                  </div>
                  <div className=" live-img ">{<img src={map} alt="" />}</div>
                </div>
              </div>

              <div className="container-ques ">
                <h4>Shared Whiteboard</h4>
              </div>
              <div className="container-ans ">
                <p>
                  Whiteboard as a visual communication platform is a
                  touch-friendly online whiteboarding software for any browser
                  and is also available for Ipad and Android devices. It’s a
                  zoomable canvas that can be shared in realtime. The intuitive
                  online whiteboard app enables you to easily sketch or
                  collaborate with others on a shared whiteboard. With live
                  audio chat whiteboard sharing, image
                  sharing and document sharing is ideal for online tutoring,
                  design communication or having productive meetings.
                </p>
              </div>
            </div>
          )}

          {activeButton === 2 && (
            <div>
              <div class="master-content">
                <div className=" header-content">
                  <article class="post minmax ">
                    <header>
                      <h2>Whiteboard feature</h2>
                    </header>

                    <div>
                      <p>
                        Whiteboards require your clients or students to register
                        or login to whiteboard.They click the anonymous
                        whiteboard link then need to login and join in the
                        teamwork instantly. No more friction.
                      </p>
                    </div>
                  </article>

                  <article class="post minmax ">
                    <header>
                      <h2>Voice and video chat</h2>
                    </header>

                    <div>
                      <p>
                        You can start the integrated video and audio chat from
                        the bottom left corner of the board.
                      </p>
                    </div>
                  </article>
                  <article class="post minmax  ">
                    <header>
                      <h2>Feature: Sticky Notes</h2>
                    </header>
                    <div>
                      <p>
                        Create outstanding notes with the sticky post-it
                        feature. Change color, text size, move or lock it, and
                        edit later.
                      </p>
                      <figure>
                        <figcaption>Sticky Notes – whiteboard</figcaption>
                      </figure>
                    </div>
                  </article>
                </div>
                <div className=" header-content">
                  <article class="post minmax ">
                    <header>
                      <h2>Looking for an API?</h2>
                    </header>
                    <div>
                      <p>
                        We have simple, JSON-based API for board and user
                        management. Work in process...
                      </p>
                    </div>
                  </article>
                  <article class="post minmax ">
                    <header>
                      <h2>Shapes & Shape tools</h2>
                    </header>
                    <div>
                      <p>
                        Whiteboard automatically recognizes your intentions when
                        you draw and it will automatically convert perfect
                        circles, impressive rectangles and straight lines.
                      </p>

                      <p>
                        Want to draw only circles and rectangles? Use the direct
                        Shape Tool from the Pencil Menu. Click it twice and take
                        your pick. You can turn shape recognition on/off from
                        Menu, Settings.
                      </p>
                    </div>
                  </article>

                  <article class="post minmax ">
                    <header>
                      <h2>Feature: PDF export</h2>
                    </header>
                    <div>
                      <p>
                        Unlimited space is great, but a sense of A4 pages is
                        sometimes useful, especially if you want to save and
                        print your online . Look for the option in the Export
                        menu.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          )}

          {activeButton === 3 && (
            <div>
              <h2>WHITEBOARD</h2>
              <div className="wb">
                
                Container is working...

              </div>
            </div>
           )} 

          {activeButton === 4 && (
            <div>
              <h2>FAQ</h2>
              <div className="container-ques ">
                <h4>What is Whiteboard?</h4>
              </div>
              <div className="container-ans ">
                <p>
                  Whiteboard is a lightweight, web-based whiteboard with
                  real-time collaboration and permanent, shareable board
                  management. It flawlessly runs on any device (laptop, tablet,
                  smartphone). To use whiteboard you don’t have to download or
                  install native apps or plugins. Although the most flexible
                  online whiteboard runs in all modern browsers, we recommend
                  Google Chrome generally.
                </p>
              </div>

              <div className="container-ques">
                <h4>What is Whiteboard for?</h4>
              </div>
              <div className="container-ans ">
                <p>
                  The same as the traditional whiteboard extended with all the
                  benefits that a virtual version can provide: infinite space
                  and zoom levels, shape recognition, unlimited color palette,
                  highlighter, and much more. Using the built-in voice/video
                  chat or Skype, Hangouts gives an incredible opportunity to
                  communicate better. Typical use-cases: Private tutoring,
                  distance learning Classrooms at any level Designing layouts,
                  workflows and prototypes with a team Data- and process
                  visualization Casual, ad-hoc presentation, meeting notes
                  Virtual whiteboard Visual facilitation
                </p>
              </div>

              <div className="container-ques ">
                <h4>Is there a highlighter / marker pen?</h4>
              </div>
              <div className="container-ans ">
                <p>
                  You’ll find the marker / highlighter in the pen menu.Highlight
                  any text or objects with the color of your choice.
                </p>
              </div>

              <div className="container-ques ">
                <h4>How do I change color?</h4>
              </div>
              <div className="container-ans ">
                <p>Click the pen icon twice and the colors are shown.</p>
              </div>

              <div className="container-ques ">
                <h4>How do I copy and paste?</h4>
              </div>
              <div className="container-ans ">
                <p>
                  The usual Ctrl+C keyboard shortcuts work. You can paste images
                  and text from the clipboard by pressing Ctrl+V.
                </p>
              </div>

              <div className="container-ques ">
                <h4>How to share a board?</h4>
              </div>
              <div className="container-ans ">
                <p>
                  You can share a board via the board link. Anyone with the
                  board link can access the board.
                </p>
              </div>

              <div className="container-ques ">
                <h4>
                  What is the difference between public and private boards?
                </h4>
              </div>
              <div className="container-ans ">
                <p>
                  The Public board can be accessed by anyone with the board
                  link, however, you can only access a private board if you are
                  the owner or you are invited/shared by the owner based on your
                  Whiteboard account email. To control access to your board,
                  open the board and click the SHARE button in My Boards.
                </p>
              </div>

              <div className="container-ques ">
                <h4>Do you have a question?</h4>
              </div>
              <div className="container-ans ">
                <p>
                  If you don't find what you’ve been looking for, write us an
                  email to: ......
                </p>
              </div>
            </div>
          )}
          <br></br>
          <div className="footer">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ margin: "10px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ margin: "10px" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{ margin: "10px" }}
            />
            <div className="footer-content .text-danger">
              <div className=".text-danger">
                <p>Whiteboard</p>
              </div>
              <div>
                <p>
                  Online whiteboard with real-time collaboration on any device.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="login-container ">
          <form className="text-dark  p-4">
            <h2>Login</h2>
            <div className="col-5 form-label mb-2">
              <label>Username :</label>
            </div>
            <div className="col-7 px-0 mb-2">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* <br /> */}
            <div className="col-5 form-label mb-2">
              <label>Password :</label>
            </div>
            <div className="col-7 px-0 mb-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <br /> */}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
