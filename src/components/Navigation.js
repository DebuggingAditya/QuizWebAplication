
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Navigation({ onSubmit }) {
  const { currentIndex, setCurrentIndex, questions } = useContext(QuizContext);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="navigation">
      <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
      <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next</button>
      {currentIndex === questions.length - 1 && <button onClick={onSubmit}>Submit</button>}
    </div>
  );
}

export default Navigation;
