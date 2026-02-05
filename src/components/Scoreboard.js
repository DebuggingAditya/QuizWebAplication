
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Scoreboard() {
  const { score } = useContext(QuizContext);

  return (
    <div className="scoreboard">
      <h4>Score: {score}</h4>
    </div>
  );
}

export default Scoreboard;
