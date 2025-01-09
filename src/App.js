import React, { useState } from "react";
import axios from "axios";
import UploadDocument from "./UploadDocument";
import QuestionInput from "./QuestionInput";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async (question) => {
    try {
      setAnswer("");
      setLoading(true);
      const response = await axios.post("https://driveserver-lzct.onrender.com/ask", {
        question,
        documentContent: localStorage.getItem("documentContent"),
      });
      setLoading(false);
      if (response.data?.answers && response.data.answers.length > 0) {
        const answers = response.data.answers.map((item) =>
          item.answer?.candidates
            ? item.answer.candidates
                .map((candidate) =>
                  candidate.content?.parts?.map((part) => part.text).join("")
                )
                .join("")
            : "No answer text available"
        );
        setAnswer(answers.join(""));
      }
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Error processing your request.");
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>SmartDoc AI</h1>
      </header>
      <main>
        <div className="card">
          <UploadDocument />
          <QuestionInput handleAskQuestion={handleAskQuestion} />
          {loading && <p className="loading">Processing your request...</p>}
          {answer && (
            <div className="answer-container">
              <h2>Answer</h2>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
