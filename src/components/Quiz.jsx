import { useState, useEffect } from "react";

import { quiz } from "../utils/quiz";

const Quiz = () => {
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  let totalSeconds = 0;
  let intervalSeconds = null;

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
  console.log(questions);

  const { question, choices, correctAnswer } = questions[activeQuestion];

  console.log(question);

  // função para ir para a próxima questão
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      // espalha as props de "result aqui" e conta as repsosta certas ou erradas
      selectedAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSeconds((prev) => (prev = 0));
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      clearInterval(intervalSeconds);
    }
  };

  // na resposta selecionada ativar o estilo css e comparar com a repsosta correta
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    clearInterval(intervalSeconds);
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

  useEffect(() => {
    totalSeconds = (seconds * 60) / 60;

    intervalSeconds = setInterval(() => {
      totalSeconds++;
      const newSeconds = totalSeconds % 60;
      const newProgress = (newSeconds / 15) * 100; // Calcula o progresso

      setSeconds(newSeconds);
      setProgress(newProgress);
    }, 1000);

    if (totalSeconds === 10) {
      clearInterval(intervalSeconds);
      totalSeconds = 0;

      if (!selectedAnswer) {
        onAnswerSelected(question[0], 0);
      }
    }

    return () => {
      clearInterval(intervalSeconds);
    };
  }, [seconds]);

  return (
    <div className="quiz-container">
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
