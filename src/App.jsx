import { useEffect, useRef, useState } from "react";
import "./assets/css/styles.scss";
import Quiz from "./components/Quiz";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={show ? "intro-box" : "hide"}>
        <button onClick={() => setShow(false)}>Iniciar Quiz</button>
      </div>

      {!show && <Quiz />}
    </>
  );
};

export default App;
