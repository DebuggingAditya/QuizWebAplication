
import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Timer() {
  const { difficulty, currentIndex, setCurrentIndex } = useContext(QuizContext);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let duration = difficulty === "easy" ? 60 : difficulty === "medium" ? 45 : 30;
    setTime(duration);
  }, [difficulty, currentIndex]);

  useEffect(() => {
    if (time === 0) {
      setCurrentIndex(prev => prev + 1);
    }
    const timer = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return <div className="timer">Time Left: {time}s</div>;
}

export default Timer;
