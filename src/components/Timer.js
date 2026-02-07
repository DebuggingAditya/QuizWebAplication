import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Timer() {
  const { difficulty, currentIndex, setCurrentIndex } = useContext(QuizContext);
  const [time, setTime] = useState(0);

  // Set timer based on difficulty whenever difficulty or currentIndex changes
  useEffect(() => {
    let duration = difficulty === "easy" ? 25 : difficulty === "medium" ? 30 : 15;
    setTime(duration);
  }, [difficulty, currentIndex]);

  // Countdown timer
  useEffect(() => {
    if (time === 0) {
      setCurrentIndex(prev => prev + 1);
    }
    const timer = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time, setCurrentIndex]); // ✅ Add setCurrentIndex here

  return <div className="timer">Time Left: {time}s</div>;
}

export default Timer;
