
import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const resetGame = () => {
    setScore(0);
    setAnswers([]);
    setCurrentIndex(0);
  };

  return (
    <QuizContext.Provider
      value={{
        username, setUsername,
        language, setLanguage,
        difficulty, setDifficulty,
        questions, setQuestions,
        currentIndex, setCurrentIndex,
        score, setScore,
        answers, setAnswers,
        resetGame
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
