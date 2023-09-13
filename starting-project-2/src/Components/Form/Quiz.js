import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City",
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState(0);

  const buttonOnClickHandler = (e, item) => {
    //console.log(item);
    e.preventDefault();
    //console.log("answer: " + questions[index].answer);
    //console.log("e: " + e.target.value);

    if (questions[index].answer === item)
      setAns((prev) => {
        return prev + 1;
      });

    setIndex((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h1> Quiz app </h1>
      <h2>{index === questions.length && `Score: ${ans}`}</h2>
      <div>
        {index === questions.length && (
          <button
            onClick={() => {
              setIndex(0);
              setAns(0);
            }}
          >
            reset
          </button>
        )}
      </div>
      <h3>
        {index !== questions.length
          ? index + 1 + ` out of ` + questions.length
          : null}
      </h3>
      <h2>
        {questions && index !== questions.length && questions[index].question}
      </h2>
      <div>
        {questions &&
          index !== questions.length &&
          questions[index].options.map((item) => {
            return (
              <button onClick={(e) => buttonOnClickHandler(e, item)}>
                {item}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Quiz;

/*
{questions &&
    questions.map((item) => {
      console.log(item.question);
      return (
        <div>
          <h2>{item.question}</h2>
          {item.options.map((option) => {
            return (
              <span>
                <h3>{<button onClick={questionHandler}>{option}</button>}</h3>
              </span>
            );
          })}
        </div>
      );
    })}
*/
