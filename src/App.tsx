import React from "react";
import "./App.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { GlobalContext, gloabalContext } from "./context/globalContext";

const App: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  const isWinner = React.useContext<gloabalContext>(GlobalContext);

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (showModal && body) {
      body.style.backgroundColor = "rgb(187, 178, 178)";
    } else if (!showModal && body) {
      body.style.backgroundColor = "#fff";
    }
  }, [showModal]);

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
            <FaHandRock
              color="#f1b769"
              size="8rem"
              onClick={() => {
                setShowModal(true);
                return isWinner.dispatch({ type: "Play", userChoice: "Rock" });
              }}
            />
          </div>
          <div className="button">
            <FaHandPaper
              color="#f1b769"
              size="8rem"
              onClick={() => {
                setShowModal(true);
                return isWinner.dispatch({ type: "Play", userChoice: "Paper" });
              }}
              data-testid="rock"
            />
          </div>
          <div className="button">
            <FaHandScissors
              color="#f1b769"
              size="8rem"
              onClick={() => {
                setShowModal(true);
                return isWinner.dispatch({
                  type: "Play",
                  userChoice: "Scissor",
                });
              }}
            />
          </div>
        </div>
      </div>
      {showModal ? (
        <div className="modal">
          <h1>
            {isWinner.decideWinner.Winner === "User"
              ? "You Win"
              : isWinner.decideWinner.Winner === "Computer"
              ? "Computer Win"
              : "Its a draw"}
          </h1>
          <h2>Computer Choice</h2>
          {isWinner.decideWinner.computerChoice === "Rock" ? (
            <FaHandRock color="#f1b769" size="8rem" />
          ) : isWinner.decideWinner.computerChoice === "Paper" ? (
            <FaHandPaper color="#f1b769" size="8rem" />
          ) : isWinner.decideWinner.computerChoice === "Scissor" ? (
            <FaHandScissors color="#f1b769" size="8rem" />
          ) : null}
          <button
            className="close-modal-btn"
            onClick={() => setShowModal(false)}
            data-testid="ok"
          >
            ok
          </button>
        </div>
      ) : null}
    </>
  );
};

export default App;
