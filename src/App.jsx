import { useEffect, useRef, useState } from "react";
import "./assets/css/styles.scss";
import Quiz from "./components/Quiz";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={show ? "intro-box" : "hide"}>
        <h1>Quiz JavaScript</h1>
        <p>Você terá 20 segundos para escolher uma das respostas.</p>
        <p>
          Caso o tempo chegue a 20 segundos, umas das respostas será marcada
          aleatoriamente.
        </p>
        <button onClick={() => setShow(false)}>Iniciar Quiz</button>
      </div>

      {!show && <Quiz />}
    </>
  );
};

export default App;
