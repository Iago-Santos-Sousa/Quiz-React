import React from "react";
import BoxQuestions from "./BoxQuestions";
import { useState } from "react";

const InfoBox = ({ show, setShow }) => {
  const [showQuestions, setShowQuestions] = useState(true);

  return (
    <>
      {/* Info Box */}
      <div className={`info_box`}>
        <div className={`info-title ${!showQuestions && "hidden"}`}>
          <span>Rules of this Quiz Game</span>
        </div>

        <div className={`info-list ${!showQuestions && "hidden"}`}>
          <div className="info">
            1. You only have <span>15 seconds</span> per question.
          </div>
          <div className="info">
            2. Once you select your answer, it can't be undone.
          </div>
          <div className="info">
            3. You can't select any option once time goes off.
          </div>
          <div className="info">
            4. You can't exit from the Quiz Game while you're playing.
          </div>
          <div className="info">
            5. You'll get points on the basis of your correct answers.
          </div>
        </div>

        <div className="buttons">
          <button className="quit">Exit Quiz</button>
          <button
            onClick={() => {
              setShowQuestions(false);

              // setShow(true);
              // console.log(show);
              console.log(showQuestions);
            }}
            className="restart"
          >
            Continue
          </button>
        </div>

        {!showQuestions ? <BoxQuestions /> : null}
      </div>
    </>
  );
};

export default InfoBox;
