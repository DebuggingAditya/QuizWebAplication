
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import questionsData from "../data/question.json";

function Home() {
  const { setUsername, setLanguage, setDifficulty, setQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!setLanguage || !setDifficulty) return;
    const selectedQuestions = questionsData[setLanguage][setDifficulty].slice(0, 10);
    setQuestions(selectedQuestions);
    navigate("/quiz");
  };

  return (
    <div className="home">
      <h1>Welcome to Quiz App</h1>
      <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
      
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="">Select Language</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>

      <select onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default Home;
