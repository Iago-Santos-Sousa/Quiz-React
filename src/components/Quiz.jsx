import React from "react";

import { useEffect, useRef, useState } from "react";

// objeto com perguntas e respostas
const quiz = {
  topic: "JavaScript",
  level: "Iniciante",
  totalQuestions: 10,
  percentualQuestionScore: 5,
  totalTime: 60,
  questions: [
    {
      question: "Para quais finalidades o JavaScript é usado?",
      choices: [
        "Apenas no Front-End",
        "Apenas no Back-End",
        "linguagem de banco de dados",
        "Front e Back-End",
      ],
      type: "MCQS",
      correctAnswer: "Front e Back-End",
    },

    {
      question: "Quais são os tipos de dados que o JavaScript possui?",
      choices: [
        "Apenas primitivos(number, string, boolean, undefined, Null e Symbol)",
        "Apenas Objects(Arrays, Functions, Object, Date )",
        "Primitos e Objects",
        "Nenhuma destas",
      ],
      type: "MCQS",
      correctAnswer: "Primitos e Objects",
    },

    {
      question:
        "Qual a alternativa mais limpa para evitar o uso do if e else no JavaScript?",
      choices: [
        'Operador "ternário"',
        'Operador "in"',
        'Operador de "coalescência nula"',
        "Nenhuma destas",
      ],
      type: "MCQS",
      correctAnswer: 'Operador "ternário"',
    },

    {
      question: 'O que são as "factory functions" no JavaScript?',
      choices: [
        "Funções que criam objetos",
        "Funções que retornam objetos",
        'Funções que verificam propriedades de objetos"',
        "Nenhuma destas",
      ],
      type: "MCQS",
      correctAnswer: "Funções que retornam objetos",
    },

    {
      question: 'O que são as "construct functions" no JavaScript?',
      choices: [
        "Funções que criam objetos",
        "Funções que retornam objetos",
        "Método de objeto",
        "Método de array",
      ],
      type: "MCQS",
      correctAnswer: "Funções que criam objetos",
    },

    {
      question:
        "Como se chama o termo para manipular os elementos da página HTML no JavaScript?",
      choices: [
        "Browser Object Model (BOM)",
        "Document Object Model (DOM)",
        "Web APIs",
        "History API",
      ],
      type: "MCQS",
      correctAnswer: "Document Object Model (DOM)",
    },
  ],
};

const Quiz = () => {
  // pergunta ativa
  const [activeQuestion, setActiveQuestion] = useState(0);

  // resposta selecionada
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // mostrar resultado das respostas finais
  const [showResult, setShowResult] = useState(false);

  // índice da resposta selecionada
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // resultados finais
  const [result, setResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  //"objeto "quiz" desestruturado para array"
  const { questions } = quiz;
  console.log(questions);

  // question = pergunta
  // choices = array com as escolhas
  // correctAnswer = resposta certa
  const { question, choices, correctAnswer } = questions[activeQuestion]; // resposta ativa no index do array "questions"
  console.log(question);
  console.log(choices);
  console.log(correctAnswer);

  // função para ir para a próxima questão
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      // espalha as props de "result aqui"
      selectedAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  // na resposta selecionada ativar o estilo css
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const onReloadPage = () => {
    window.location.reload();
  };

  // adicionar zero á esquerda
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {/* Mostra os resultados */}
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {/* Pergunta atual */}
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              {/* Perguntas totais */}
              {addLeadingZero(questions.length)}
            </span>
          </div>

          {/* Pergunta */}
          <h2>{question}</h2>
          <ul>
            {/* Escolhas */}
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>

          {/* Boão para seguir adiante */}
          <div className="flex-right">
            <button
              onClick={onClickNext}
              // se não clicar em nehuma opção o botão é desativado
              disabled={selectedAnswerIndex === null}
            >
              {/* quando atingir o tamanho limite do array questions, opção para ver os resultados */}
              {activeQuestion === questions.length - 1 ? "Terminou" : "Próxima"}
            </button>
          </div>
        </div>
      ) : (
        // Resultados finais
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>

          <div className="flex-right">
            <button
              onClick={onReloadPage}
              // se não clicar em nehuma opção o botão é desativado
            >
              {/* quando atingir o tamanho limite do array questions, opção para ver os resultados */}
              {"Recomeçar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
