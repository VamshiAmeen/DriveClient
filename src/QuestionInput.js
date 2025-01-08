import React, { useState } from "react";
import "./QuestionInput.css";

const QuestionInput = ({ handleAskQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    if (question.trim()) {
      handleAskQuestion(question);
    } else {
      alert("Please enter a question.");
    }
  };

  return (
    <div className="question-input-container">
      <input
        type="text"
        placeholder="Ask a question"
        value={question}
        onChange={handleChange}
        className="question-input"
      />
      <button onClick={handleSubmit} className="question-button">
        Ask
      </button>
    </div>
  );
};

export default QuestionInput;
