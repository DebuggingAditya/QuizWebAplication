
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function ResultPage() {
  const { username, score, answers, questions, resetGame } = useContext(QuizContext);
  const navigate = useNavigate();

  const correctCount = answers.filter(a => questions[a.q].answer === a.chosen).length;
  const wrongCount = answers.length - correctCount;

  const handleNewGame = () => {
    resetGame();
    navigate("/");
  };

  return (
    <div className="result">
      <h2>Quiz Result</h2>
      <p>Name: {username}</p>
      <p>Total Score: {score}</p>
      <p>Correct Answers: {correctCount}</p>
      <p>Wrong Answers: {wrongCount}</p>
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}

export default ResultPage;
