import { useState, useEffect, Children } from "react";

import { quiz } from "../utils/quiz";

let totalSeconds = 0;
let intervalSeconds = null;

const Quiz = () => {
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  // pergunta ativa
  const [activeQuestion, setActiveQuestion] = useState(0);

  // resposta selecionada
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // índice da resposta selecionada
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // mostrar resultado das respostas finais
  const [showResult, setShowResult] = useState(false);

  // resultados finais
  const [result, setResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  //"objeto "quiz" desestruturado para array"
  const { questions } = quiz;

  const { question, choices, correctAnswer } = questions[activeQuestion];

  // função para ir para a próxima questão
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) => {
      return selectedAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 };
    });

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSeconds(0);
      totalSeconds = 0;
      incrementInterval();
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      totalSeconds = 0;
      clearInterval(intervalSeconds);
      setSeconds(0);
      setProgress(0);
    }
  };

  // na resposta selecionada ativar o estilo css e comparar com a resposta correta
  const onAnswerSelected = (index, answer) => {
    setSelectedAnswerIndex(index);
    clearInterval(intervalSeconds);
    totalSeconds = 0;
    console.log(answer);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  // adicionar zero á esquerda da quantidade de perguntas
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const onReloadPage = () => {
    window.location.reload();
  };

  const aleatoryNumber = (number) => {
    const num = Math.floor(Math.random() * number);
    setSelectedAnswerIndex(num);
    // return num;

    onAnswerSelected(num, choices[num]);
  };

  const incrementInterval = () => {
    setProgress(0);

    totalSeconds = (totalSeconds * 60) / 60;

    intervalSeconds = setInterval(() => {
      totalSeconds++;
      const newSeconds = totalSeconds % 60;
      const newProgress = (newSeconds / 20) * 100; // Calcula o progresso

      setSeconds(newSeconds);
      setProgress(newProgress);

      if (totalSeconds === 20) {
        clearInterval(intervalSeconds);
        totalSeconds = 0;

        // onAnswerSelected(aleatoryNumber(4), choices[selectedAnswerIndex]);
        aleatoryNumber(4);
      }

      if (showResult) {
        totalSeconds = 0;
        clearInterval(intervalSeconds);
        intervalSeconds = null;
        setSeconds(0);
        setProgress(0);
      }
    }, 1000);
  };

  useEffect(() => {
    incrementInterval();

    return () => {
      clearInterval(intervalSeconds);
    };
  }, []);

  return (
    <div className="quiz-container">
      <div className="progress-counter-parent">
        <div
          className="progress-counter-child"
          style={{ width: !showResult ? `${progress}%` : "0" }}
        ></div>
      </div>
      {/* Mostra os resultados */}
      {!showResult ? (
        <div>
          <div className="numbers-show">
            <span className="active-question-no">
              {/* Pergunta atual */}
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              {/* Perguntas totais */}
              {addLeadingZero(questions.length)}
            </span>

            <span>{addLeadingZero(seconds)}</span>
          </div>

          {/* Pergunta */}
          <h2>{question}</h2>
          <ul>
            {/* Escolhas */}
            {choices.map((answer, index) => (
              <li
                onClick={() => {
                  if (totalSeconds > 0) {
                    onAnswerSelected(index, answer);
                  }
                }}
                key={answer}
                className={
                  selectedAnswerIndex === index
                    ? "selected-answer"
                    : (typeof selectedAnswerIndex === "number" &&
                        selectedAnswer >= 0 &&
                        selectedAnswerIndex !== index) ||
                      (totalSeconds === 5 && selectedAnswerIndex !== index)
                    ? "disable-questions"
                    : ""
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
          <h3>Resultado</h3>
          <p>
            Questões totais: <span>{questions.length}</span>
          </p>
          <p>
            Respostas certas:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Resposta erradas:<span> {result.wrongAnswers}</span>
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
