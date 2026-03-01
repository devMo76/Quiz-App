import { useEffect } from "react";

export default function QuizTimer() {
  useEffect(() => {
    setInterval(() => {}, 15000);
  }, []);

  return <progress id="question-time" />;
}
