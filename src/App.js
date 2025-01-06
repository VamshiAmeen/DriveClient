// src/App.js

import React, { useState } from "react";
import axios from "axios";
import UploadDocument from "./UploadDocument";
import QuestionInput from "./QuestionInput";

function App() {
  const [documentContent, setDocumentContent] = useState("");
  const [answer, setAnswer] = useState("");

  // Function to handle the response after asking the question
  const handleAskQuestion = async (question) => {
    try {
      const response = await axios.post("http://localhost:3000/ask", {
        question,
        documentContent,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Error processing your request.");
    }
  };

  return (
    <div className="App">
      <h1>AI-Powered Document Q&A</h1>

      {/* Document Upload Section */}
      <UploadDocument setDocumentContent={setDocumentContent} />

      {/* Question Input Section */}
      <QuestionInput handleAskQuestion={handleAskQuestion} />

      {/* Display Answer */}
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
}

export default App;
