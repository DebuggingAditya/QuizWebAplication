
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import Question from "./Question";
import Navigation from "./Navigation";
import Scoreboard from "./Scoreboard";
import RestartButton from "./RestartButton";
import Timer from "./Timer";

function Quiz() {
  const { questions, currentIndex, score, setScore, setAnswers } = useContext(QuizContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correct = questions[currentIndex].answer;
    if (option === correct) {
      setScore(score + 5);
    } else {
      setScore(score - 1);
    }
    setAnswers(prev => [...prev, { q: currentIndex, chosen: option }]);
  };

  const handleSubmit = () => {
    navigate("/result");
  };

  return (
    <div className="quiz">
      <Timer />
      <Scoreboard />
      <Question data={questions[currentIndex]} onAnswer={handleAnswer} selected={selectedOption} />
      <Navigation onSubmit={handleSubmit} />
      <RestartButton />
    </div>
  );
}

export default Quiz;
