// src/QuestionInput.js

import React, { useState } from "react";

const QuestionInput = ({ handleAskQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    if (question.trim()) {
      handleAskQuestion(question); // Send question to parent (App.js)
    } else {
      alert("Please enter a question.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ask a question"
        value={question}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Ask</button>
    </div>
  );
};

export default QuestionInput;
