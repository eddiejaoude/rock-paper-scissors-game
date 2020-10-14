import React from "react";
import "./App.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const App: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false)

  React.useEffect(() => {
    const body = document.querySelector("body")
    if (showModal && body) {
      body.style.backgroundColor="rgb(187, 178, 178)"
    } else if(!showModal && body) {
      body.style.backgroundColor="#fff"
    }
  }, [showModal])
  
  return (
    <>
      <div className="container">
        <h1>
          Rock Paper Scissor Game{" "}
          <span role="img" aria-label="play">
            {" "}
            🤙
          </span>
        </h1>
        <div className="buttons">
          <div className="button">
            <FaHandRock color="#f1b769" size="8rem" />
          </div>
          <div className="button">
            <FaHandPaper color="#f1b769" size="8rem" />
          </div>
          <div className="button">
            <FaHandScissors color="#f1b769" size="8rem" />
          </div>
        </div>
      </div>
      {showModal?
      <div className="modal">
        <h1>You Win</h1>
        <h2>Computer Choice</h2>
        <FaHandRock color="#f1b769" size="8rem" />
        <button className="close-modal-btn">ok</button>
      </div>: null
      }
    </>
  );
};

export default App;
