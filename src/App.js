import React, { useState } from "react";
import axios from "axios";
import UploadDocument from "./UploadDocument";
import QuestionInput from "./QuestionInput";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");

  const handleAskQuestion = async (question) => {
    try {
      const response = await axios.post("http://localhost:3001/ask", {
        question,
        documentContent: localStorage.getItem("documentContent"), // Store documentContent in localStorage
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Error processing your request.");
    }
  };
  

  return (
    <div className="app-container">
      <header>
        <h1>AI-Powered Document Q&A</h1>
      </header>
      <main>
        <UploadDocument />
        <QuestionInput handleAskQuestion={handleAskQuestion} />
        {answer && (
          <div className="answer-container">
            <h3>Answer:</h3>
            <p>{answer}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
