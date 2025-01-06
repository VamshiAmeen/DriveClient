import React, { useState } from "react";
import axios from "axios";

function QuestionForm() {
  const [documentContent, setDocumentContent] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/ask", {
        question,
        documentContent,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error during request:", error);
      setAnswer("Error processing your request.");
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      
      {/* Input for Document Content */}
      <textarea
        rows="5"
        placeholder="Document Content"
        value={documentContent}
        onChange={(e) => setDocumentContent(e.target.value)}
      />
      
      {/* Input for Question */}
      <input
        type="text"
        placeholder="Ask your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Button to Submit Question */}
      <button onClick={handleQuestionSubmit}>Ask Question</button>

      {/* Display Answer */}
      {answer && (
        <div>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionForm;
