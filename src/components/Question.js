
function Question({ data, onAnswer, selected }) {
  return (
    <div className="question">
      <h3>{data.question}</h3>
      <ul>
        {data.options.map((opt, idx) => (
          <li key={idx}>
            <button
              className={selected === opt ? "selected" : ""}
              onClick={() => onAnswer(opt)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
