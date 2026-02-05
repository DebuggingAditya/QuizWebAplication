
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function RestartButton() {
  const { resetGame } = useContext(QuizContext);

  return (
    <button onClick={resetGame}>Restart Quiz</button>
  );
}

export default RestartButton;
