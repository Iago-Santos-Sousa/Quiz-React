import React from "react";
import { useState, useRef, useEffect } from "react";

const Contdown = () => {
  // sempre que você quiser atualizar o estado com base no estado anterior, passe uma arrow function para o método setState() e, em seguida, o react garantirá que chamará o setState() com o valor mais recente da variável de estado.

  // Para fazê-lo parar em 0, usaremos o gancho useRef, ele armazenará a referência ao setInterval, que podemos limpar quando o timer for 0.

  const [timer, setTimer] = useState(10);

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

    console.log(id);

    return () => clear();
  }, [timer]);

  return <div>{timer}</div>;
};

export default Contdown;
