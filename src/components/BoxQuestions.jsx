import React from "react";
import { useState, useEffect, useRef } from "react";

const BoxQuestions = () => {
  const [timer, setTimer] = useState(15);

  const id = useRef(null);

  useEffect(() => {
    const clear = () => {
      clearInterval(id.current);
    };

    id.current = setInterval(() => {
      // drementa o timer
      setTimer((time) => time - 1);
    }, 1000);

    if (timer === 0) {
      // quando o timer for 0, ele para de decrementar
      clear();
    }

    return () => clear();
  }, [timer]);

  let questions = [
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "extensible Markup Language",
      options: [
        "executable Multiple Language",
        "exTra Multi-Program Language",
        "extensible Markup Language",
        "examine Multiple Language",
      ],
    },
  ];

  return (
    <>
      {/* Quiz Box perguntas */}
      <div className="quiz_box">
        <header>
          <div className="title">Awesome Quiz Application</div>
          <div className="timer">
            <div className="time_left_txt">{timer}</div>
            <div className="timer_sec">15</div>
          </div>
          <div className="time_line"></div>
        </header>

        <section>
          {questions.map((item, i, arr) => (
            <ul>
              <li>{item.answer}</li>
            </ul>
          ))}

          <div className="que_text">
            {/* Aqui eu inseri a pergunta do JavaScript */}
            teste
          </div>

          <div className="option_list">
            {/* Aqui eu inseri opções de JavaScript */}
          </div>
        </section>

        {/* footer of Quiz Box  */}
        <footer>
          <div className="total_que">
            {/* Aqui eu inseri o número de contagem de perguntas do JavaScript */}
          </div>

          <button className="next_btn">Next Quiz</button>
        </footer>
      </div>
    </>
  );
};

export default BoxQuestions;
