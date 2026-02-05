import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import questionsData from "../data/question.json";

function HomePage() {
  const { username, setUsername, language, setLanguage, difficulty, setDifficulty, setQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!language || !difficulty || !username || username.trim() === "") {
      alert("Please enter your name, select a language and difficulty before starting!");
      return;
    }
    const selectedQuestions = questionsData[language][difficulty].slice(0, 10);
    setQuestions(selectedQuestions);
    navigate("/quiz");
  };

  return (
    <div className="home">
      <h1>Welcome to Quiz App</h1>
      <input 
        type="text" 
        placeholder="Enter Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">Select Language</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>

      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button 
        onClick={handleStart} 
        disabled={!language || !difficulty || !username || username.trim() === ""}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default HomePage;
