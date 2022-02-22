// Initial Data

let users = {
  elonmusk: {
    id: 1,
    fullname: "Elon Musk",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    questions: ["tvtzpuph1oo", "5yv0wo4lvv8"],
    answers: { tvtzpuph1oo: "secondOption" },
  },
  billgates: {
    id: 2,
    fullname: "Bill Gates",
    imgUrl:
      "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    questions: ["jbo66c96nxf"],
    answers: { tvtzpuph1oo: "secondOption", "5yv0wo4lvv8": "firstOption" },
  },
  mohamedqasem: {
    id: 3,
    fullname: "Mohamed Qasem",
    imgUrl:
      "https://pbs.twimg.com/profile_images/1460497444899368965/3oI-M_iT_400x400.jpg",
    questions: ["xpcp92uqgs"],
    answers: { tvtzpuph1oo: "firstOption" },
  },
};

let questions = {
  tvtzpuph1oo: {
    id: "tvtzpuph1oo",
    creator: "elonmusk",
    created: 1642222679,
    firstOption: {
      votes: ["mohamedqasem"],
      string: "Get 1,000,000$ right now",
    },
    secondOption: {
      votes: ["billgates", "elonmusk"],
      string: "Get 100,000,000$ after 40 years",
    },
  },
  "5yv0wo4lvv8": {
    id: "5yv0wo4lvv8",
    creator: "elonmusk",
    created: 1642324699,
    firstOption: {
      votes: ["billgates"],
      string: "Stay at home on weekends and relax",
    },
    secondOption: {
      votes: [],
      string: "Go out with your friends on weekends",
    },
  },
  jbo66c96nxf: {
    id: "jbo66c96nxf",
    creator: "billgates",
    created: 1642624453,
    firstOption: {
      votes: [],
      string: "Read a book",
    },
    secondOption: {
      votes: [],
      string: "Take a course",
    },
  },
  xpcp92uqgs: {
    id: "xpcp92uqgs",
    creator: "mohamedqasem",
    created: 1642924434,
    firstOption: {
      votes: [],
      string: "Watch a movie",
    },
    secondOption: {
      votes: [],
      string: "Play a game",
    },
  },
};

// Helpers functions
const uUID = () => {
  return Math.random().toString(36).substring(2, 20);
};

const structureQuestion = ({ creator, answerOne, answerTwo }) => {
  return {
    id: uUID(),
    creator,
    created: Date.now(),
    firstOption: { votes: [], string: answerOne },
    secondOption: { votes: [], string: answerTwo },
  };
};

//API methods

export const getAllUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
};

export const getAllQuestions = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
};

export const addQuestion = (question) => {
  return new Promise((res, rej) => {
    const authedUser = question.creator;
    const structuredQuestion = structureQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [structuredQuestion.id]: structuredQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([
            structuredQuestion.id,
          ]),
        },
      };

      res(structuredQuestion);
    }, 1000);
  });
};

export const addAnswerToQuestion = ({ answer, authedUser, questionId }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [questionId]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [questionId]: {
          ...questions[questionId],
          [answer]: {
            ...questions[questionId][answer],
            votes: questions[questionId][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
};
