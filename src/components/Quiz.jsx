import { useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndexValue = userAnswers.length;
  const quizIsComplete = activeQuestionIndexValue === QUESTIONS.length;

  let shuffledAnswers = [];
  if (!quizIsComplete) {
    shuffledAnswers = [...QUESTIONS[activeQuestionIndexValue].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
  }

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
  }

  return (
    <>
      {!quizIsComplete ? (
        <div id="quiz">
          <div id="question">
            <h1>{QUESTIONS[activeQuestionIndexValue].text}</h1>
            <ul id="answers">
              {shuffledAnswers.map((answer) => (
                <li key={answer} className="answer">
                  <button onClick={() => handleSelectAnswer(answer)}>
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div id="summary">
          <img src={quizCompleteImg} alt="Quiz Complete" />
          <h2>Quiz Complete</h2>
        </div>
      )}
    </>
  );
}
