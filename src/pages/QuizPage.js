import { useContext, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import Question from "../components/Question";
import Timer from "../components/Timer";

function QuizPage() {
  const { questions, currentIndex, setCurrentIndex, score, setScore, answers, setAnswers, resetGame } = useContext(QuizContext);
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
    setAnswers([...answers, { q: currentIndex, chosen: option }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    navigate("/result");
  };

  return (
    <div className="quiz">
      <Timer />
      <Question data={questions[currentIndex]} onAnswer={handleAnswer} selected={selectedOption} number={currentIndex + 1} total={questions.length} />
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next</button>
        {currentIndex === questions.length - 1 && <button onClick={handleSubmit}>Submit</button>}
      </div>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

export default QuizPage;
