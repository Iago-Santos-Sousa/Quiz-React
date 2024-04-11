// objeto com perguntas e respostas
export const quiz = {
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
