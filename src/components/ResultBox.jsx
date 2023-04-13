import React from "react";

const ResultBox = () => {
  return (
    <>
      {" "}
      {/* Result Box */}
      <div className="result_box">
        <div className="icon">
          <i className="fas fa-crown"></i>
        </div>

        <div className="complete_text">You've completed the Quiz!</div>

        {/*  Aqui eu inseri Score Result do JavaScript */}
        <div className="score_text"></div>

        <div className="buttons">
          <button className="restart">Replay Quiz</button>
          <button className="quit">Quit Quiz</button>
        </div>
      </div>
    </>
  );
};

export default ResultBox;
