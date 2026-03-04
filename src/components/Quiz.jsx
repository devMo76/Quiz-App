import { useCallback, useState } from "react";
import QUESTIONS from "../question.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndexValue = userAnswers.length;
  const quizIsComplete = activeQuestionIndexValue === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswers((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
  }, []);

  const handleSkipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  return (
    <>
      {!quizIsComplete ? (
        <div id="quiz">
          <Question
            key={activeQuestionIndexValue}
            index={activeQuestionIndexValue}
            onSelectAnswer={handleSelectAnswer}
            onSkip={handleSkipQuestion}
          />
        </div>
      ) : (
        <Summary userAnswers={userAnswers} />
      )}
    </>
  );
}
