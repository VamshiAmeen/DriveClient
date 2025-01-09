import React, { useState } from "react";
import "./QuestionInput.css";

const QuestionInput = ({ handleAskQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleChange = (e) => setQuestion(e.target.value);

  const handleSubmit = () => {
    if (question.trim()) {
      handleAskQuestion(question);
    } else {
      alert("Please enter a question.");
    }
  };

  return (
    <div className="question-box">
      <input
        type="text"
        placeholder="Enter your question here"
        value={question}
        onChange={handleChange}
        className="question-input"
      />
      <br/>
      <button onClick={handleSubmit} className="question-submit">
        Submit
      </button>
    </div>
  );
};

export default QuestionInput;
